import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
      <h1>I am Progress Bar</h1>
      <Outlet />
      <h2>I am controll footer</h2>
    </>
  )
}
export default Layout
