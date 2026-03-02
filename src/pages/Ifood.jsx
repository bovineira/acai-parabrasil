import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'

// Link oficial ParáBrasil no iFood. No celular, o sistema pode abrir direto no app (Universal Links / App Links).
const IFOOD_URL = 'https://www.ifood.com.br/delivery/salvador-ba/shizu-restaurante-rio-vermelho/58767f4d-9946-438a-85b8-172a48be9704?utm_medium=share'

function Ifood() {
  const [shake, setShake] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'ParáBrasil - iFood',
        content_category: 'Delivery',
        value: 0,
        currency: 'BRL'
      })
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-deep-black">
      <div
        className="absolute inset-0 z-0 bg-mobile-cover"
        style={{
          backgroundImage: `url('/images/background-lp-cardapio.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

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

      <div className="relative z-10 flex min-h-0 flex-col items-center justify-start gap-3 px-4 pt-6 pb-4 sm:min-h-screen sm:gap-6 sm:pt-20 sm:pb-12">
        
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center font-anton text-5xl font-black uppercase leading-none tracking-wider text-neon-purple sm:text-6xl md:text-7xl"
          style={{
            textShadow: '0 0 15px rgba(188, 19, 254, 0.4), 0 2px 10px rgba(0, 0, 0, 0.8)',
            filter: 'drop-shadow(0 0 5px rgba(188, 19, 254, 0.3))'
          }}
        >
          ParáBrasil
          <br />
          Açaí! no iFood
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center font-bebas text-xl leading-tight tracking-wide text-white sm:text-2xl md:text-3xl max-w-2xl"
          style={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
          }}
        >
          Peça pelo iFood e receba em casa. Clique abaixo para pedir agora!
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 w-full max-w-md px-4"
        >
          <a
            href={IFOOD_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (window.fbq) {
                window.fbq('track', 'Subscribe', {
                  content_name: 'ParáBrasil - Pedir no iFood',
                  value: 0,
                  currency: 'BRL'
                })
              }
            }}
            className={`sheen-effect group relative flex w-full items-center justify-center gap-3 rounded-full bg-gold px-8 py-5 font-bebas text-2xl font-bold uppercase tracking-wide text-brand-purple shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-gold/50 sm:py-6 sm:text-3xl md:text-4xl ${
              shake ? 'animate-shake' : ''
            }`}
            style={{
              boxShadow: '0 8px 30px rgba(255, 215, 0, 0.35), 0 0 15px rgba(188, 19, 254, 0.2)'
            }}
          >
            <ShoppingBag className="h-7 w-7 transition-transform group-hover:scale-110 sm:h-9 sm:w-9" />
            PEDIR AGORA
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-2 text-center text-xs text-gray-400 sm:text-sm"
        >
          Delivery em Salvador – pedido mínimo R$ 40,00
        </motion.p>
      </div>
    </div>
  )
}

export default Ifood
