import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/counter" element={<h1>Counter app</h1>}></Route>
        <Route path="/stopwatch" element={<h1>Stopwatch app</h1>}></Route>
        <Route path="*" element={<h1>no page available</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App