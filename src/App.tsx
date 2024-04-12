import { Outlet } from "react-router-dom"
import { Header } from "./components/header/header"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

window.global ||= window;

function App() {
  return (
    <>
      <Header />
      <div className="bg-[url('./assets/images/bgMain.png')] bg-cover font-console text-light-brown">
        <Outlet />
      </div>
      <ToastContainer theme="colored"/>
    </>
  )
}

export default App
