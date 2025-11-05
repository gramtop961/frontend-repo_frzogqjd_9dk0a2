import { motion } from 'framer-motion'
import { Rocket, Star, Users, Sparkles } from 'lucide-react'

const services = [
  { title: 'Brand Systems', desc: 'Identity, voice, and visual systems that scale.', icon: Sparkles },
  { title: 'Motion Design', desc: 'Cinematic storytelling for products and campaigns.', icon: Rocket },
  { title: 'Interactive', desc: 'Web experiences with delightful micro-interactions.', icon: Star },
  { title: 'Community', desc: 'Workshops and creative partnerships.', icon: Users },
]

const team = [
  { name: 'Nova', role: 'Creative Lead', img: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&q=80&auto=format&fit=crop' },
  { name: 'Kai', role: 'Motion Artist', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop' },
  { name: 'Aria', role: 'Brand Strategist', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&q=80&auto=format&fit=crop' },
  { name: 'Rio', role: 'Interactive Dev', img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&q=80&auto=format&fit=crop' },
]

export default function TeamServices() {
  return (
    <section className="bg-[#03150a] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Services */}
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="bg-[#0b2314]/80 rounded-2xl border border-emerald-800/50 p-6 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <s.icon className="w-6 h-6 text-emerald-400" />
              <h4 className="mt-3 text-emerald-200 font-semibold">{s.title}</h4>
              <p className="mt-2 text-emerald-100/80 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Team */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-emerald-200">The Team</h3>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                className="relative overflow-hidden rounded-2xl border border-emerald-800/50 bg-[#0b2314]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <img src={m.img} alt={m.name} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <div className="text-emerald-100 font-semibold">{m.name}</div>
                  <div className="text-emerald-300/80 text-sm">{m.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
