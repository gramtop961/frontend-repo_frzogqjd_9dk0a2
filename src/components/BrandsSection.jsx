import { motion } from 'framer-motion'

// Simple brands grid. If you have existing brand arrays, map them here.
const defaultBrands = [
  { name: 'Canopy Co.', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Nvidia-Logo-700x394.png' },
  { name: 'Vine Labs', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Spotify-Logo-700x394.png' },
  { name: 'Echo Studio', logo: 'https://logos-world.net/wp-content/uploads/2020/05/Adobe-Logo-700x394.png' },
  { name: 'Wildtype', logo: 'https://logos-world.net/wp-content/uploads/2020/05/Behance-Logo-700x394.png' },
  { name: 'Horizon', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Intel-Logo-700x394.png' },
  { name: 'Glade', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo-700x394.png' },
]

export default function BrandsSection({ brands = defaultBrands }) {
  return (
    <section className="bg-[#03150a] py-16 md:py-24 border-t border-emerald-800/40">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-emerald-200 text-xl md:text-2xl font-semibold">Trusted by forward-thinking teams</h3>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-90">
          {brands.map((b) => (
            <motion.div
              key={b.name}
              className="bg-[#0b2314] rounded-lg border border-emerald-800/50 p-4 flex items-center justify-center h-20"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <img src={b.logo} alt={b.name} className="max-h-10 w-auto opacity-90" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
