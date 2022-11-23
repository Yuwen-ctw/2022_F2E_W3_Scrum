import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import { HomePage, IntroducePage, SpringPage, EndPage } from './pages'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="spring" element={<Layout />}>
            <Route index element={<IntroducePage />} />
            <Route path="1" element={<SpringPage />} />
          </Route>
          <Route path="/end" element={<EndPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
