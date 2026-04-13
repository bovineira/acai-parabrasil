import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import Linktree from './pages/Linktree'
import LinktreeAlagoinhas from './pages/LinktreeAlagoinhas'
import Qrcode from './pages/Qrcode'
import Reserva from './pages/Reserva'
import Ifood from './pages/Ifood'
import IfoodSimoesfilho from './pages/IfoodSimoesfilho'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cardapio" element={<Cardapio />} />
      <Route path="/linktree" element={<Linktree />} />
      <Route path="/linktreealagoinhas" element={<LinktreeAlagoinhas />} />
      <Route path="/qrcode" element={<Qrcode />} />
      <Route path="/reserva" element={<Reserva />} />
      <Route path="/ifood" element={<Ifood />} />
      <Route path="/ifood-simoesfilho" element={<IfoodSimoesfilho />} />
    </Routes>
  )
}

export default App


