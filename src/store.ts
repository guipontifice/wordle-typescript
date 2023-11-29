import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { getRandomWord } from './components/getRandomWord'

interface StoreState {
    answer: string;
    guesses: string[],
    addGuess: (guess: string) => void;
}

export const useStore = create<StoreState>(
  persist(
    (set) => ({
        answer: getRandomWord(),
        guesses: ['troup', 'solar', 'penny', 'skyre', 'riots', 'death'],
        addGuess: (guess: string) => {
            set((state) => ({
                guesses: [...state.guesses, guess],
            }))
        },
    }),
    {
      name: 'wordle', // name of the item in the storage (must be unique)
    },
  )
);

// useStore.persist.clearStorage();