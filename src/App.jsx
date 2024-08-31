import { Routes,Route } from "react-router-dom"
import Home from "./Components/Home"
import Playvideo from "./Components/Playvideo"
import Search from "./Components/Search"
function App() {
   
  return (
    <>
    <Routes>
      <Route path="/" exact element= {<Home/>} />
      <Route path="/video/:id" element= {<Playvideo/>} />
      <Route path="/search/:searchQuery" element= {<Search/>} />
    </Routes>
      
    </>
  )
}

export default App
