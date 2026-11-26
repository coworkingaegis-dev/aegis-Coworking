// Google Ads lead form webhook for aegiscoworking.ae
// Saves each Google Ads lead into the same Supabase "inquiries" table
// that the website Contact Us form uses, so leads show up in /admin.
//
// Location in repo:  Frontend/api/google-lead.js
// Webhook URL:       https://aegiscoworking.ae/api/google-lead
//
// Vercel environment variables:
//   GOOGLE_LEAD_KEY            (required) any long random text; the same value goes in Google Ads as the "Key"
//   VITE_SUPABASE_URL          (already set for the website)
//   VITE_SUPABASE_ANON_KEY     (already set for the website)
//   SUPABASE_SERVICE_ROLE_KEY  (optional) used instead of the anon key if present

import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  let lead = req.body || {}
  if (typeof lead === 'string') {
    try { lead = JSON.parse(lead) } catch { lead = {} }
  }

  // Only accept requests that carry the shared key set in Google Ads
  if (!process.env.GOOGLE_LEAD_KEY || lead.google_key !== process.env.GOOGLE_LEAD_KEY) {
    return res.status(401).json({ error: 'Invalid key' })
  }

  // Google sends answers as: [{ column_id: 'FULL_NAME', string_value: '...' }, ...]
  const f = {}
  for (const col of lead.user_column_data || []) {
    f[col.column_id] = col.string_value
  }

  const name =
    f.FULL_NAME ||
    [f.FIRST_NAME, f.LAST_NAME].filter(Boolean).join(' ') ||
    'Google Ads lead'

  const details = [
    'Source: Google Ads lead form',
    lead.is_test ? 'TEST LEAD (sent from Google Ads "Send test data")' : null,
    lead.campaign_id ? `Campaign ID: ${lead.campaign_id}` : null,
    lead.lead_id ? `Lead ID: ${lead.lead_id}` : null,
    lead.gcl_id ? `GCLID: ${lead.gcl_id}` : null,
  ].filter(Boolean).join('\n')

  const row = {
    name,
    email: f.EMAIL || null,
    contact_number: f.PHONE_NUMBER || null,
    company_name: f.COMPANY_NAME || null,
    interested_in: 'Google Ads Lead',
    message: details,
    agreed_to_terms: true, // user accepted the privacy policy on the Google lead form
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase environment variables are missing')
    return res.status(500).json({ error: 'Server not configured' })
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
  })

  const { error } = await supabase.from('inquiries').insert([row])

  if (error) {
    console.error('Supabase insert failed:', error)
    // A non-200 response makes Google retry the delivery later
    return res.status(500).json({ error: 'Save failed' })
  }

  // Google expects HTTP 200 with an empty JSON body
  return res.status(200).json({})
}
