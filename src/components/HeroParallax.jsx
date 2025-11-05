import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// Jungle parallax hero with layered canopy, mid, and fog images
export default function HeroParallax() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Different parallax strengths
  const canopyY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])
  const midY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])
  const fogY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])

  // Image sources (jungle canopy, mid, foggy layer)
  // Using Unsplash source queries to ensure reliable loading in sandbox
  const canopyUrl = 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1920&auto=format&fit=crop'
  const midUrl = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop'
  const fogUrl = 'https://images.unsplash.com/photo-1452570053594-1b985d6ea1dc?q=80&w=1920&auto=format&fit=crop'

  return (
    <section ref={ref} className="relative h-[100vh] min-h-[720px] overflow-hidden bg-[#03150a]">
      {/* Background gradient wash for emerald tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#03150a] via-transparent to-[#03150a] pointer-events-none" />

      {/* Canopy layer */}
      <motion.div
        aria-hidden
        style={{ y: canopyY, backgroundImage: `url(${canopyUrl})` }}
        className="absolute inset-0 bg-cover bg-center"
      />

      {/* Mid layer */}
      <motion.div
        aria-hidden
        style={{ y: midY, backgroundImage: `url(${midUrl})` }}
        className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-multiply"
      />

      {/* Fog layer */}
      <motion.div
        aria-hidden
        style={{ y: fogY, backgroundImage: `url(${fogUrl})` }}
        className="absolute inset-0 bg-cover bg-center opacity-70"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-emerald-200 drop-shadow-[0_6px_20px_rgba(16,185,129,0.25)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Panda Pixel Production
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-emerald-100/90 text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Where imagination swings through the canopy. Crafting motion, brand, and interactive stories for the wild at heart.
        </motion.p>

        {/* Floating profile cards */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
          {[
            { name: 'Nova', role: 'Creative Lead', img: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&q=80&auto=format&fit=crop' },
            { name: 'Kai', role: 'Motion Artist', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop' },
            { name: 'Aria', role: 'Brand Strategist', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&q=80&auto=format&fit=crop' },
            { name: 'Rio', role: 'Interactive Dev', img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&q=80&auto=format&fit=crop' },
          ].map((p, i) => (
            <motion.div
              key={p.name}
              className="backdrop-blur-sm bg-[#0b2314]/70 border border-emerald-700/40 rounded-xl p-3 flex items-center gap-3 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, -10, 0], opacity: 1 }}
              transition={{ duration: 3 + i * 0.2, delay: 0.3 + i * 0.1, repeat: Infinity, repeatType: 'mirror' }}
            >
              <img src={p.img} alt={p.name} className="w-10 h-10 rounded-full object-cover border border-emerald-600/50" />
              <div>
                <div className="text-emerald-100 text-sm font-semibold">{p.name}</div>
                <div className="text-emerald-300/80 text-xs">{p.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gradient for readability */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#03150a] to-transparent" />
    </section>
  )
}
