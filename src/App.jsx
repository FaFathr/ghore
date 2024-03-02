import { BrowserRouter, Route, Routes } from "react-router-dom"
import GhoreKeshi from "./components/GhoreKeshi"
import Layout from "./layout/Layout"
import Login from "../pages/Login"

function App() {


  return (
    <>
  <Layout>
 <GhoreKeshi/>
</Layout>

  
    </>
  )
}

export default App
