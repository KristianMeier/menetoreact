import DetFaarDu from './pages/DetFaarDu'
import Kunder from './pages/Kunder'
import Priser from './pages/Priser'
import Teametbag from './pages/Teametbag'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import LayoutArticle from './components/layouts/LayoutArticle'
import Kundehistorie from './pages/Kundehistorie'

const App = () => {
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
              <Route path='kunder/:articleId' element={<Kundehistorie />} />
            </Route>
          </Route>
          <Route path='*' element={<Kunder />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
