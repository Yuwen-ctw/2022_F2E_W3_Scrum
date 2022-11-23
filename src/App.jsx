import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, SpringPage, EndPage } from './pages'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="spring" element={<SpringPage />}></Route>
          <Route path="/end" element={<EndPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
