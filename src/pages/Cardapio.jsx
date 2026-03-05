import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

function Cardapio() {
  // Página de cardápio - aquisição normal
  const [shake, setShake] = useState(false)

  // Shake button every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Facebook Pixel - ViewContent quando a página carrega
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'Cardápio - ParáBrasil',
        content_category: 'Cardápio',
        currency: 'BRL'
      });
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-deep-black">
      {/* Faixa Fixa no Topo - Horário de funcionamento */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gold py-3 px-4">
        <p className="text-center font-bebas text-base font-bold uppercase tracking-wider text-black sm:text-xl md:text-2xl">
          🕚 Seg a sáb: 11h às 23h | Domingo 12h às 23h
        </p>
      </div>

      {/* Background Image with Light Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-mobile-cover"
        style={{
          backgroundImage: `url('/images/background-lp-cardapio.webp')`,
        }}
      >
        {/* Overlay escuro leve (20%) para contraste */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Decorative Blur Elements (Background) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute left-10 top-20 z-0 h-32 w-32 rounded-full bg-neon-purple/20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-10 z-0 h-40 w-40 rounded-full bg-gold/20 blur-3xl"
      />

      {/* Content Container - no mobile compacto no topo; desktop centralizado */}
      <div className="relative z-10 flex min-h-0 flex-col items-center justify-start gap-3 px-4 pt-20 pb-4 sm:min-h-screen sm:justify-center sm:gap-8 sm:py-12 sm:pt-24">
        
        {/* 1. HEADLINE - A Melhor da Região */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center font-anton text-6xl font-black uppercase leading-none tracking-wider text-neon-purple sm:text-7xl md:text-8xl"
          style={{
            textShadow: '0 0 15px rgba(188, 19, 254, 0.4), 0 2px 10px rgba(0, 0, 0, 0.8)',
            filter: 'drop-shadow(0 0 5px rgba(188, 19, 254, 0.3))'
          }}
        >
          A MELHOR
          <br />
          DA REGIÃO
        </motion.h1>

        {/* 2. SUB-HEADLINE */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center font-bebas text-2xl tracking-[0.3em] text-white sm:text-3xl md:text-4xl"
          style={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
          }}
        >
          ACESSE NOSSO CARDÁPIO
        </motion.h2>

        {/* 3. BOTÃO CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 w-full max-w-md px-4"
        >
          <a
            href="https://acaiparabrasil.saipos.com/home"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              // Facebook Pixel - Rastreio de clique no botão
              if (window.fbq) {
                window.fbq('track', 'Subscribe', {
                  content_name: 'Cardápio - ParáBrasil',
                  currency: 'BRL'
                });
              }
            }}
            className={`sheen-effect group relative flex w-full items-center justify-center gap-3 rounded-full bg-gold px-8 py-5 font-bebas text-2xl font-bold uppercase tracking-wide text-brand-purple shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-gold/50 sm:py-6 sm:text-3xl md:text-4xl ${
              shake ? 'animate-shake' : ''
            }`}
            style={{
              boxShadow: '0 8px 30px rgba(255, 215, 0, 0.35), 0 0 15px rgba(188, 19, 254, 0.2)'
            }}
          >
            <Menu className="h-7 w-7 transition-transform group-hover:scale-110 sm:h-9 sm:w-9" />
            ACESSAR CARDÁPIO
          </a>
        </motion.div>

        {/* 4. FOOTER */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-2 text-center text-xs text-gray-400 sm:text-sm"
        >
          Oferta válida enquanto durarem os estoques.
        </motion.p>
      </div>
    </div>
  )
}

export default Cardapio

