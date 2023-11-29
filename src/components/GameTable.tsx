import { LetterState, computeGuess } from "./getRandomWord";

const LETTER_LENGTH = 5
interface WordRowProps {
    letters: string;
}

function GameTable({ letters: lettersProp = '' }: WordRowProps) {
    const lettersRemaining = LETTER_LENGTH - lettersProp.length
    const letters = 
    lettersProp
    .toLowerCase()
    .split('')
    .concat(Array(lettersRemaining).fill(''));

    const guessStates = computeGuess(lettersProp)
    return (
        <div className="grid grid-cols-5 gap-4">
            {letters.map((char, index) => (
                <CharacterBox key={index} value={char} state={guessStates[index]} />
            ))}
        </div>
    )
}
interface CharacterBoxProps {
    value?: string;
    state?: LetterState;
}
function CharacterBox({ value, state }: CharacterBoxProps) {
    const stateStyles =
        state == null ?
            '' : characterStateStyles[state];
    return (
        <div className={`w-16 border-2 border-gray p-4 inline-block mx-1 text-2xl uppercase font-bold text-center ${stateStyles}`}>
            {value}
        </div>
    )
}
const characterStateStyles = {
    [LetterState.Miss]: 'border-gray bg-gray',
    [LetterState.Present]: 'border-yellow bg-yellow',
    [LetterState.Match]: 'border-green bg-green'
}

export default GameTable
