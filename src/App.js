import DetFaarDu from './pages/DetFaarDu'
import Kunder from './pages/Kunder'
import Priser from './pages/Priser'
import Teametbag from './pages/Teametbag'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { LayoutArticle } from './components/LayoutArticle'
import SingleArticle from './components/SingleArticle'

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

            <Route path='/' element={<LayoutArticle />}>
              <Route index element={<Kunder />} />
              <Route path='kunder/:productId' element={<SingleArticle />} />
            </Route>
          </Route>
          <Route path='*' element={<Kunder />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
