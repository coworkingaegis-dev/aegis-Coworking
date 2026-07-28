export const config = {
  matcher: '/((?!api|_next|static|.*\\..*).*)',
}

const BOT_USER_AGENTS = [
  'googlebot',
  'bingbot',
  'gptbot',
  'chatgpt-user',
  'claudebot',
  'claude-web',
  'anthropic-ai',
  'perplexitybot',
  'ccbot',
  'google-extended',
  'facebookexternalhit',
  'twitterbot',
  'linkedinbot',
  'slackbot',
]

export default async function middleware(request) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || ''
  const isBot = BOT_USER_AGENTS.some((bot) => userAgent.includes(bot))

  if (!isBot) {
    return
  }

  const url = request.url
  const prerenderUrl = `https://service.prerender.io/${url}`

  const prerenderedResponse = await fetch(prerenderUrl, {
    headers: {
      'X-Prerender-Token': process.env.PRERENDER_TOKEN,
    },
  })

  const body = await prerenderedResponse.text()

  return new Response(body, {
    status: prerenderedResponse.status,
    headers: {
      'Content-Type': 'text/html',
    },
  })
}
