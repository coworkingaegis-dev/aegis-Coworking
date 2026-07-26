// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { useEditor, EditorContent } from '@tiptap/react'
// import StarterKit from '@tiptap/starter-kit'
// import Underline from '@tiptap/extension-underline'
// import Link from '@tiptap/extension-link'
// import { supabase } from '../supabaseClient'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// function CreateBlog() {
//   const [formData, setFormData] = useState({
//     title: '',
//     summary: '',
//     author: '',
//     category: '',
//   })
//   const [imageFile, setImageFile] = useState(null)
//   const [imagePreview, setImagePreview] = useState(null)
//   const [errors, setErrors] = useState({})
//   const [status, setStatus] = useState(null)

//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       Underline,
//       Link.configure({ openOnClick: false }),
//     ],
//     editorProps: {
//       attributes: { class: 'ProseMirror' },
//     },
//     content: '',
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleImageChange = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       setImageFile(file)
//       setImagePreview(URL.createObjectURL(file))
//     }
//   }

//   const validate = () => {
//     const newErrors = {}
//     if (!formData.title.trim()) newErrors.title = 'Headline is required'
//     if (!formData.author.trim()) newErrors.author = 'Author name is required'
//     if (!editor || editor.isEmpty) newErrors.content = 'Content is required'
//     return newErrors
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const newErrors = validate()
//     setErrors(newErrors)
//     if (Object.keys(newErrors).length > 0) return

//     setStatus('loading')

//     let imageUrl = null

//     if (imageFile) {
//       const fileExt = imageFile.name.split('.').pop()
//       const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`

//       const { error: uploadError } = await supabase.storage
//         .from('blog-images')
//         .upload(fileName, imageFile)

//       if (uploadError) {
//         console.error(uploadError)
//         setStatus('error')
//         return
//       }

//       const { data: publicUrlData } = supabase.storage
//         .from('blog-images')
//         .getPublicUrl(fileName)

//       imageUrl = publicUrlData.publicUrl
//     }

//     const { error } = await supabase.from('blogs').insert([
//       {
//         title: formData.title,
//         summary: formData.summary || null,
//         author: formData.author,
//         category: formData.category || null,
//         content: editor.getHTML(),
//         image_url: imageUrl,
//       },
//     ])

//     if (error) {
//       console.error(error)
//       setStatus('error')
//     } else {
//       setStatus('success')
//       setFormData({ title: '', summary: '', author: '', category: '' })
//       setImageFile(null)
//       setImagePreview(null)
//       editor.commands.clearContent()
//     }
//   }

//   const setHeading = (e) => {
//     const val = e.target.value
//     if (val === 'p') editor.chain().focus().setParagraph().run()
//     else editor.chain().focus().toggleHeading({ level: Number(val) }).run()
//   }

//   if (!editor) return null

//   return (
//     <div className="App">
//       <Navbar />

//       <section className="contact-section">
//         <h1>Create a Blog Post</h1>
//         <p className="contact-subtitle">Share updates, tips, or news with the community.</p>

//         <motion.form
//           className="contact-form-v2"
//           onSubmit={handleSubmit}
//           noValidate
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >

//             <div className="form-row">
//             <div className="field-wrap">
//               <label>Author*</label>
//               <input
//                 type="text"
//                 name="author"
//                 placeholder="Your name"
//                 value={formData.author}
//                 onChange={handleChange}
//                 className={errors.author ? 'has-error' : ''}
//               />
//               {errors.author && <p className="field-error">{errors.author}</p>}
//             </div>
//             <div className="field-wrap">
//               <label>Category</label>
//               <input
//                 type="text"
//                 name="category"
//                 placeholder="e.g. Community, Tips"
//                 value={formData.category}
//                 onChange={handleChange}
//               />
//             </div>
//            </div>
//           <div className="editor-wrap">
//             <textarea
//               name="title"
//               placeholder="Headline"
//               value={formData.title}
//               onChange={handleChange}
//               rows={1}
//               className="editor-headline"
//               onInput={(e) => {
//                 e.target.style.height = 'auto'
//                 e.target.style.height = e.target.scrollHeight + 'px'
//               }}
//             />
//             {errors.title && <p className="field-error">{errors.title}</p>}

//             <textarea
//               name="summary"
//               placeholder="Add a short summary for your readers..."
//               value={formData.summary}
//               onChange={handleChange}
//               rows={1}
//               className="editor-summary"
//               onInput={(e) => {
//                 e.target.style.height = 'auto'
//                 e.target.style.height = e.target.scrollHeight + 'px'
//               }}
//             />
//           </div>

          

//           <div className="field-wrap">
//             <label>Cover Image</label>
//             <div
//               className="image-upload-box"
//               onClick={() => document.getElementById('blog-image-input').click()}
//             >
//               {imagePreview ? (
//                 <img src={imagePreview} alt="Preview" className="image-upload-preview" />
//               ) : (
//                 <div className="image-upload-placeholder">
//                   <span className="image-upload-icon">📷</span>
//                   <span>Click to upload a cover image</span>
//                 </div>
//               )}
//             </div>
//             <input
//               id="blog-image-input"
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               style={{ display: 'none' }}
//             />
//           </div>

//           <div className="field-wrap">
//             <label>Content*</label>

//             <div className="editor-toolbar">
//               <select onChange={setHeading} defaultValue="p">
//                 <option value="p">Normal</option>
//                 <option value="1">Heading 1</option>
//                 <option value="2">Heading 2</option>
//                 <option value="3">Heading 3</option>
//               </select>

//               <div className="editor-toolbar-divider" />

//               <button type="button" className={`editor-toolbar-btn ${editor.isActive('bold') ? 'is-active' : ''}`} onClick={() => editor.chain().focus().toggleBold().run()}><b>B</b></button>
//               <button type="button" className={`editor-toolbar-btn ${editor.isActive('italic') ? 'is-active' : ''}`} onClick={() => editor.chain().focus().toggleItalic().run()}><i>I</i></button>
//               <button type="button" className={`editor-toolbar-btn ${editor.isActive('underline') ? 'is-active' : ''}`} onClick={() => editor.chain().focus().toggleUnderline().run()}><u>U</u></button>
//               <button type="button" className={`editor-toolbar-btn ${editor.isActive('strike') ? 'is-active' : ''}`} onClick={() => editor.chain().focus().toggleStrike().run()}><s>S</s></button>

//               <div className="editor-toolbar-divider" />

//               <button type="button" className={`editor-toolbar-btn ${editor.isActive('orderedList') ? 'is-active' : ''}`} onClick={() => editor.chain().focus().toggleOrderedList().run()}>1.</button>
//               <button type="button" className={`editor-toolbar-btn ${editor.isActive('bulletList') ? 'is-active' : ''}`} onClick={() => editor.chain().focus().toggleBulletList().run()}>•</button>

//               <div className="editor-toolbar-divider" />

//               <button
//                 type="button"
//                 className={`editor-toolbar-btn ${editor.isActive('link') ? 'is-active' : ''}`}
//                 onClick={() => {
//                   const url = window.prompt('Enter URL')
//                   if (url) editor.chain().focus().setLink({ href: url }).run()
//                 }}
//               >
//                 🔗
//               </button>
//               <button type="button" className={`editor-toolbar-btn ${editor.isActive('blockquote') ? 'is-active' : ''}`} onClick={() => editor.chain().focus().toggleBlockquote().run()}>"</button>
//               <button type="button" className={`editor-toolbar-btn ${editor.isActive('codeBlock') ? 'is-active' : ''}`} onClick={() => editor.chain().focus().toggleCodeBlock().run()}>{'</>'}</button>

//               <div className="editor-toolbar-divider" />

//               <button type="button" className="editor-toolbar-btn" onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}>Tx</button>
//             </div>

//             <div className={`editor-body ${errors.content ? 'has-error' : ''}`}>
//               <EditorContent editor={editor} />
//             </div>
//             {errors.content && <p className="field-error">{errors.content}</p>}
//           </div>

//           <button type="submit" className="btn-send-v2" disabled={status === 'loading'}>
//             {status === 'loading' ? 'Publishing...' : 'Publish Post'}
//           </button>

//           {status === 'success' && (
//             <p className="form-status success">Your post has been published!</p>
//           )}
//           {status === 'error' && (
//             <p className="form-status error">Something went wrong. Please try again.</p>
//           )}
//         </motion.form>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// export default CreateBlog





import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import { supabase } from '../supabaseClient'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function CreateBlog() {
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    author: '',
    category: '',
  })
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
    ],
    editorProps: {
      attributes: { class: 'ProseMirror' },
    },
    content: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImageFile(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.title.trim()) newErrors.title = 'Headline is required'
    if (!formData.author.trim()) newErrors.author = 'Author name is required'
    if (!editor || editor.isEmpty) newErrors.content = 'Content is required'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setStatus('loading')

    let imageUrl = null

    if (imageFile) {
      const fileExt = imageFile.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(fileName, imageFile)

      if (uploadError) {
        console.error(uploadError)
        setStatus('error')
        return
      }

      const { data: publicUrlData } = supabase.storage
        .from('blog-images')
        .getPublicUrl(fileName)

      imageUrl = publicUrlData.publicUrl
    }

    const { error } = await supabase.from('blogs').insert([
      {
        title: formData.title,
        summary: formData.summary || null,
        author: formData.author,
        category: formData.category || null,
        content: editor.getHTML(),
        image_url: imageUrl,
      },
    ])

    if (error) {
      console.error(error)
      setStatus('error')
    } else {
      setStatus('success')
      setFormData({ title: '', summary: '', author: '', category: '' })
      setImageFile(null)
      setImagePreview(null)
      editor.commands.clearContent()
    }
  }

  const setHeading = (e) => {
    const val = e.target.value
    if (val === 'p') editor.chain().focus().setParagraph().run()
    else editor.chain().focus().toggleHeading({ level: Number(val) }).run()
  }

  if (!editor) return null

  return (
    <div className="App">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Create a Blog Post | Aegis Coworking Admin</title>
      </Helmet>

      <Navbar />

      <section className="contact-section">
        <h1>Create a Blog Post</h1>
        <p className="contact-subtitle">Share updates, tips, or news with the community.</p>

        <motion.form
          className="contact-form-v2"
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

            <div className="form-row">
            <div className="field-wrap">
              <label>Author*</label>
              <input
                type="text"
                name="author"
                placeholder="Your name"
                value={formData.author}
                onChange={handleChange}
                className={errors.author ? 'has-error' : ''}
              />
              {errors.author && <p className="field-error">{errors.author}</p>}
            </div>
            <div className="field-wrap">
              <label>Category</label>
              <input
                type="text"
                name="category"
                placeholder="e.g. Community, Tips"
                value={formData.category}
                onChange={handleChange}
              />
            </div>
           </div>
          <div className="editor-wrap">
            <textarea
              name="title"
              placeholder="Headline"
              value={formData.title}
              onChange={handleChange}
              rows={1}
              className="editor-headline"
              onInput={(e) => {
                e.target.style.height = 'auto'
                e.target.style.height = e.target.scrollHeight + 'px'
              }}
            />
            {errors.title && <p className="field-error">{errors.title}</p>}

            <textarea
              name="summary"
              placeholder="Add a short summary for your readers..."
              value={formData.summary}
              onChange={handleChange}
              rows={1}
              className="editor-summary"
              onInput={(e) => {
                e.target.style.height = 'auto'
                e.target.style.height = e.target.scrollHeight + 'px'
              }}
            />
          </div>

          <div className="field-wrap">
            <label>Cover Image</label>
            <div
              className="image-upload-box"
              onClick={() => document.getElementById('blog-image-input').click()}
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="image-upload-preview" />
              ) : (
                <div className="image-upload-placeholder">
                  <span className="image-upload-icon">📷</span>
                  <span>Click to upload a cover image</span>
                </div>
              )}
            </div>
            <input
              id="blog-image-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </div>

          <div className="field-wrap">
            <label>Content*</label>

            <div className="editor-toolbar">
              <select onChange={setHeading} defaultValue="p">
                <option value="p">Normal</option>
                <option value="1">Heading 1</option>
                <option value="2">Heading 2</option>
                <option value="3">Heading 3</option>
              </select>

              <div className="editor-toolbar-divider" />

              <button type="button" className={`editor-toolbar-btn ${editor.isActive('bold') ? 'is-active' : ''}`} onClick={() => editor.chain().focus().toggleBold().run()}><b>B</b></button>
              <button type="button" className={`editor-toolbar-btn ${editor.isActive('italic') ? 'is-active' : ''}`} onClick={() => editor.chain().focus().toggleItalic().run()}><i>I</i></button>
              <button type="button" className={`editor-toolbar-btn ${editor.isActive('underline') ? 'is-active' : ''}`} onClick={() => editor.chain().focus().toggleUnderline().run()}><u>U</u></button>
              <button type="button" className={`editor-toolbar-btn ${editor.isActive('strike') ? 'is-active' : ''}`} onClick={() => editor.chain().focus().toggleStrike().run()}><s>S</s></button>

              <div className="editor-toolbar-divider" />

              <button type="button" className={`editor-toolbar-btn ${editor.isActive('orderedList') ? 'is-active' : ''}`} onClick={() => editor.chain().focus().toggleOrderedList().run()}>1.</button>
              <button type="button" className={`editor-toolbar-btn ${editor.isActive('bulletList') ? 'is-active' : ''}`} onClick={() => editor.chain().focus().toggleBulletList().run()}>•</button>

              <div className="editor-toolbar-divider" />

              <button
                type="button"
                className={`editor-toolbar-btn ${editor.isActive('link') ? 'is-active' : ''}`}
                onClick={() => {
                  const url = window.prompt('Enter URL')
                  if (url) editor.chain().focus().setLink({ href: url }).run()
                }}
              >
                🔗
              </button>
              <button type="button" className={`editor-toolbar-btn ${editor.isActive('blockquote') ? 'is-active' : ''}`} onClick={() => editor.chain().focus().toggleBlockquote().run()}>"</button>
              <button type="button" className={`editor-toolbar-btn ${editor.isActive('codeBlock') ? 'is-active' : ''}`} onClick={() => editor.chain().focus().toggleCodeBlock().run()}>{'</>'}</button>

              <div className="editor-toolbar-divider" />

              <button type="button" className="editor-toolbar-btn" onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}>Tx</button>
            </div>

            <div className={`editor-body ${errors.content ? 'has-error' : ''}`}>
              <EditorContent editor={editor} />
            </div>
            {errors.content && <p className="field-error">{errors.content}</p>}
          </div>

          <button type="submit" className="btn-send-v2" disabled={status === 'loading'}>
            {status === 'loading' ? 'Publishing...' : 'Publish Post'}
          </button>

          {status === 'success' && (
            <p className="form-status success">Your post has been published!</p>
          )}
          {status === 'error' && (
            <p className="form-status error">Something went wrong. Please try again.</p>
          )}
        </motion.form>
      </section>

      <Footer />
    </div>
  )
}

export default CreateBlog