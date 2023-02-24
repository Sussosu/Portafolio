import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Header} from '.src/Components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App
