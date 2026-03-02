import { useEffect } from 'react'

function Qrcode() {
  useEffect(() => {
    window.location.replace('/qrcode.pdf')
  }, [])

  return null
}

export default Qrcode
