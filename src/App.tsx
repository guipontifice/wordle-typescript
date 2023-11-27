import { useEffect } from 'react'
import './App.css'
import GameTable from './components/GameTable'

function App() {
  // const [guess, setGuess] = useState([])
  useEffect(() => {
    window.addEventListener('keydown', ({ key }) => {
      console.log(key)
    })
  }, [])
  return (
    <>
      <div className='border-2 h-full w-full'>
        <div className='flex justify-center border-2 border-white h-32'>
          <h1 className='flex text-3xl font-bold text-white'>
            Wordle
          </h1>
        </div>

        <main className='grid grid-rows-6 gap-4 text-white m-36 justify-center'>
          <GameTable letters='hello' />
          <GameTable letters='solar' />
          <GameTable letters='penny' />
          <GameTable letters='penny' />
          <GameTable letters='penny' />
          <GameTable letters='penny' />
        </main>
      </div>
    </>
  )
}

export default App
