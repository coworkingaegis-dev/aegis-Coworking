// import { motion } from 'framer-motion'

// function Reveal({ children, delay = 0, y = 30 }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.6, delay: delay + 0.1, ease: 'easeOut' }}
//     >
//       {children}
//     </motion.div>
//   )
// }

// export default Reveal





import { useEffect, useRef, useState } from 'react'

function Reveal({ children, delay = 0, y = 30 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.6s ease-out ${delay + 0.1}s, transform 0.6s ease-out ${delay + 0.1}s`,
      }}
    >
      {children}
    </div>
  )
}

export default Reveal
