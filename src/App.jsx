import HeroParallax from './components/HeroParallax'
import ParallaxSlice from './components/ParallaxSlice'
import BrandsSection from './components/BrandsSection'
import TeamServices from './components/TeamServices'
import SocialCTA from './components/SocialCTA'

function App() {
  return (
    <div className="min-h-screen bg-[#03150a]">
      {/* Jungle Parallax Hero */}
      <HeroParallax />

      {/* Parallax slice: A Creative Canopy… */}
      <ParallaxSlice
        title="A Creative Canopy"
        copy="Our layered process captures depth, motion, and meaning—so your brand feels alive from roots to canopy."
        backgroundUrl="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1920&auto=format&fit=crop"
      />

      {/* Brands */}
      <BrandsSection />

      {/* Parallax slice: New Life Taking Root… */}
      <ParallaxSlice
        title="New Life Taking Root"
        copy="From first sketch to final launch, we nurture bold ideas into lush experiences."
        backgroundUrl="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1920&auto=format&fit=crop"
      />

      {/* Services and Team */}
      <TeamServices />

      {/* Social + CTA */}
      <SocialCTA />

      {/* Footer */}
      <footer className="bg-[#03150a] border-t border-emerald-900/50 py-8 text-center text-emerald-700 text-sm">
        © {new Date().getFullYear()} PPP Network — Panda Pixel Production
      </footer>
    </div>
  )
}

export default App
