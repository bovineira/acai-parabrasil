import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, ShoppingBag, Cake } from 'lucide-react'

const CARDAPIO_URL = 'https://acaiparabrasil.saipos.com/home'
const IFOOD_ALAGOINHAS_URL =
  'https://www.ifood.com.br/delivery/alagoinhas-ba/acai-parabrasil---alagoinhas-centro/6ba9856b-48ad-4268-b905-7206ae812440?UTM_Medium=share&utm_source=ig&utm_medium=social&utm_content=link_in_bio'
const WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=557598511923&text=Ol%25C3%25A1%252C%2520gostaria%2520de%2520realizar%2520um%2520pedido%2521&utm_source=ig&utm_medium=social&utm_content=link_in_bio'
const WHATSAPP_ANIVERSARIO_URL = 'https://wa.me/5571991968763'

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

function shouldUseTopLevelIfoodNavigation() {
  const ua = navigator.userAgent
  const narrow = window.innerWidth < 768
  const mobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
  const inApp = /Instagram|FBAN|FBAV|FB_IAB|Line\//i.test(ua)
  return mobile || narrow || inApp
}

function LinktreeAlagoinhas() {
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'Linktree Alagoinhas - ParáBrasil',
        content_category: 'Link in bio',
        currency: 'BRL'
      })
    }
  }, [])

  const handleIfoodClick = (e) => {
    if (window.fbq) {
      window.fbq('track', 'Subscribe', {
        content_name: 'iFood Alagoinhas - ParáBrasil',
        currency: 'BRL'
      })
    }
    if (shouldUseTopLevelIfoodNavigation()) {
      e.preventDefault()
      window.location.href = IFOOD_ALAGOINHAS_URL
    }
  }

  const linkCardClass =
    'group relative flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur-md transition-all duration-300 hover:border-neon-purple/40 hover:bg-white/[0.1] hover:shadow-[0_0_24px_rgba(188,19,254,0.15)] sm:px-6 sm:py-5'

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a2e] via-[#12081f] to-deep-black" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(188,19,254,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(76,29,149,0.25),transparent)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-md flex-col px-5 pb-12 pt-10 sm:pt-14">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10 flex flex-col items-center"
        >
          <img
            src="/linktree/logo-para-brasil.png"
            alt="ParáBrasil"
            className="mx-auto h-12 w-auto max-w-[200px] object-contain sm:h-14 sm:max-w-[220px]"
          />
          <p className="mt-3 text-center text-xs font-medium tracking-[0.2em] text-white/50">
            ParáBrasil · Alagoinhas
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          <motion.a
            href={CARDAPIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className={linkCardClass}
            onClick={() => {
              if (window.fbq) {
                window.fbq('track', 'Subscribe', {
                  content_name: 'Cardápio Saipos - Alagoinhas',
                  currency: 'BRL'
                })
              }
            }}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neon-purple/20 text-neon-purple">
              <Menu className="h-5 w-5" strokeWidth={2.25} />
            </div>
            <span className="flex-1 text-left text-base font-medium tracking-wide text-white/95 sm:text-lg">
              Acessar cardápio
            </span>
          </motion.a>

          <motion.a
            href={IFOOD_ALAGOINHAS_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className={linkCardClass}
            onClick={handleIfoodClick}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EA1D2C]/20 text-[#EA1D2C]">
              <ShoppingBag className="h-5 w-5" strokeWidth={2.25} />
            </div>
            <span className="flex-1 text-left text-base font-medium tracking-wide text-white/95 sm:text-lg">
              Pedir no iFood
            </span>
          </motion.a>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.19 }}
            className={linkCardClass}
            onClick={() => {
              if (window.fbq) {
                window.fbq('track', 'Subscribe', {
                  content_name: 'WhatsApp Alagoinhas - ParáBrasil',
                  currency: 'BRL'
                })
              }
            }}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/20 text-[#25D366]">
              <WhatsAppIcon className="h-5 w-5" />
            </div>
            <span className="flex-1 text-left text-base font-medium tracking-wide text-white/95 sm:text-lg">
              Falar no WhatsApp
            </span>
          </motion.a>

          <motion.a
            href={WHATSAPP_ANIVERSARIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.26 }}
            className={linkCardClass}
            onClick={() => {
              if (window.fbq) {
                window.fbq('track', 'Subscribe', {
                  content_name: 'WhatsApp Aniversário ParáBrasil - Alagoinhas',
                  currency: 'BRL'
                })
              }
            }}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/25 text-gold">
              <Cake className="h-5 w-5" strokeWidth={2.25} />
            </div>
            <span className="flex-1 text-left text-base font-medium tracking-wide text-white/95 sm:text-lg">
              ANIVERSÁRIO NO PARÁBRASIL
            </span>
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default LinktreeAlagoinhas
