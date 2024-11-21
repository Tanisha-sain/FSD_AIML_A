import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import TransformImage from "./components/TransformImage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/counter" element={<Counter/>}></Route>
        <Route path = "/transformimage" element={<TransformImage/>}></Route>
        <Route path = "/" element={<h1>Home page</h1>}></Route>
        <Route path = "/login" element={<h1>Login page</h1>}></Route>
        <Route path = "/logout" element={<h1>Logout page</h1>}></Route>
        <Route path = "*" element={<h1>No Page Available</h1>}></Route>
      </Routes>
    </div>
  )
}

export {App};