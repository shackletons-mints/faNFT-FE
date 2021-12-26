import './App.css'
import Title from './Title'
import NFTdisplay from './NFTdisplay'
import MintButton from './MintButton'
import NavBar from './NavBar'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Title />
      <NFTdisplay />
      <MintButton />
    </div>
  )
}

export default App
