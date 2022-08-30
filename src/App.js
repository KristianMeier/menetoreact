import DetFaarDu from './pages/DetFaarDu'
import Kunder from './pages/Kunder'
import Priser from './pages/Priser'
import Teametbag from './pages/Teametbag'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Kunder />} />
            <Route path='detfaardu' element={<DetFaarDu />} />
            <Route path='priser' element={<Priser />} />
            <Route path='teametbag' element={<Teametbag />} />
            <Route path='*' element={<Kunder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
