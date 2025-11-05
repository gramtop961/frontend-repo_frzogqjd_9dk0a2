import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'

export default function SocialCTA() {
  return (
    <section className="bg-[#03150a] py-20 md:py-28 border-t border-emerald-800/40">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="grid sm:grid-cols-3 gap-6">
          {[{ label: 'Projects Launched', value: '120+' }, { label: 'Community', value: '18k' }, { label: 'Avg. Uplift', value: '3.2x' }].map((c, i) => (
            <motion.div
              key={c.label}
              className="bg-[#0b2314] border border-emerald-800/50 rounded-2xl p-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-3xl font-extrabold text-emerald-300">{c.value}</div>
              <div className="text-emerald-100/80 text-sm mt-1">{c.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-[#03150a] font-semibold px-6 py-3 rounded-xl shadow-lg"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Rocket className="w-5 h-5" />
          Launch with PPP Network
        </motion.div>

        <p className="mt-3 text-emerald-100/70 text-sm">Let’s bring your next story to life.</p>
      </div>
    </section>
  )
}
