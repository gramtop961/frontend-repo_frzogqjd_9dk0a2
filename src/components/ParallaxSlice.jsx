import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxSlice({ title, copy, backgroundUrl }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section
      ref={ref}
      className="parallax-section relative py-24 md:py-32 text-center text-emerald-100"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="absolute inset-0 bg-[#03150a]/70" />
      <motion.div style={{ y }} className="relative max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-200">{title}</h2>
        <p className="mt-4 text-emerald-100/90 text-base md:text-lg">{copy}</p>
      </motion.div>
    </section>
  )
}
