const LETTER_LENGTH = 5
interface WordRowProps {
    letters: string;
}

function GameTable({ letters: lettersProp = '' }: WordRowProps) {
    const lettersRemaining = LETTER_LENGTH - lettersProp.length
    const letters = lettersProp.split('').concat(Array(lettersRemaining).fill(''));
    return (
        <div className="grid grid-cols-5 gap-5">
            {letters.map((char) => (
                <CharacterBox key={char} value={char} />
            ))}
        </div>
    )
}
interface CharacterBoxProps {
    value: string;
}
function CharacterBox({ value }: CharacterBoxProps) {
    return (
        <div className="w-20 border border-gray p-4 inline-block mx-1 text-2xl uppercase font-bold text-center">
            {value}
        </div>
    )
}

export default GameTable
