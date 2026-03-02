import { motion } from 'framer-motion'

// Ícone WhatsApp customizado
const WhatsAppIcon = ({ className }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" 
      fill="currentColor"
    />
  </svg>
)

function Linktree() {
  const whatsappNumber = '5571983922495' // +55 71 98392-2495 sem formatação
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-deep-black">
      {/* Background com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-deep-black to-black/80"></div>
      
      {/* Decorative Blur Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute left-0 top-0 z-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 right-0 z-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      />

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-start px-4 py-12 pt-16">
        
        {/* Logo Redonda */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <img 
            src="/linktree/logo shizu.jpg" 
            alt="ParáBrasil Logo" 
            className="h-32 w-32 rounded-full object-cover ring-2 ring-gold/30 sm:h-40 sm:w-40"
          />
        </motion.div>

        {/* Título ParáBrasil */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mb-3 text-center text-3xl font-light tracking-wide text-white sm:text-4xl md:text-5xl"
        >
          ParáBrasil
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 text-center text-sm font-light leading-relaxed text-gray-300 sm:text-base"
        >
          Açaí! A melhor experiência aqui em Salvador
        </motion.p>

        {/* Container dos Links */}
        <div className="flex w-full max-w-md flex-col gap-4">
          
          {/* Botão WhatsApp */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative flex items-center gap-4 rounded-2xl border-2 border-gold/50 bg-white/5 px-6 py-5 backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] sm:px-8 sm:py-6"
            style={{
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Ícone WhatsApp */}
            <div className="flex-shrink-0">
              <WhatsAppIcon 
                className="h-8 w-8 text-gold transition-transform group-hover:scale-110 sm:h-10 sm:w-10" 
              />
            </div>
            
            {/* Texto */}
            <span className="flex-1 text-left text-lg font-normal text-white sm:text-xl">
              Fale Conosco!
            </span>
            
            {/* Efeito de brilho no hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-gold/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
          </motion.a>

        </div>
      </div>
    </div>
  )
}

export default Linktree
