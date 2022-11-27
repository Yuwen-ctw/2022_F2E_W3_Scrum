import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, SpringPage, EndPage } from './pages'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/2022_F2E_W3_Scrum" element={<HomePage />} />
          <Route
            path="/2022_F2E_W3_Scrum/spring"
            element={<SpringPage />}
          ></Route>
          <Route path="/2022_F2E_W3_Scrum/end" element={<EndPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
