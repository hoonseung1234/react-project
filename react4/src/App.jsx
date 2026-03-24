import Register from "./components/Register"
import FocusInput from "./components/FocusInput"
import CrudExample from "./components/CrudExample"
import NumberGame from "./components/NumberGame"
import GuessNumberGame from "./components/GuessNumber"
import Timer from "./components/Timer"
import { useState } from "react"
import HookCanvas from "./components/HookCanvas"
import DrawingCanvas from "./components/DrawingCanvas"


function App() {
  const [show, setShow] = useState(true);
 
  return (
    <>
     <DrawingCanvas />
     {/* <Register />
     <hr />
     <FocusInput />
     <CrudExample />
     <NumberGame />
     <GuessNumberGame />
     <Timer />
         <button onClick={() => setShow(false)}>타이머 제거</button>
    {show && <Timer />}
    <HookCanvas /> */}
    </>
  )
}
 
export default App;