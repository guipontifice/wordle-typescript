import { useEffect, useState } from 'react'
import './App.css'
import GameTable from './components/GameTable'
import { useStore } from './store'


const GUESS_LENGTH = 6;
function App() {
  const state = useStore()
  const [guess, setGuess] = useState('')
  useEffect(() => {
    window.addEventListener('keydown', ({ key }) => {
      console.log(key)
    })
  }, [])

  const numberOfGuessesRemaining = GUESS_LENGTH - state.guesses.length;
  const rows = [...state.guesses, ...Array(numberOfGuessesRemaining)]
  if (rows.length < GUESS_LENGTH) {
    rows.push(guess)  
  }
  return (
    <>
      <div className='h-full w-full'>
        <div className='flex justify-center border-2 border-white h-32'>
          <h1 className='flex text-3xl font-bold text-white'>
            Wordle
          </h1>
        </div>
        <div>
          <input type="text"
            className='p-2 border-2'
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
        </div>

        <main className='grid grid-rows-6 gap-4 text-white mt-10 justify-center'>
          <GameTable letters='troup' />
          <GameTable letters='solar' />
          <GameTable letters='penny' />
          <GameTable letters='skyre' />
          <GameTable letters='riots' />
          <GameTable letters='death' />
        </main>
      </div>
    </>
  )
}

export default App
