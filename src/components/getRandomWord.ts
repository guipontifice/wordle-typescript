import wordBank from '../word-bank.json'

const word = getRandomWord();
console.log(word)
export function getRandomWord(): string {
    const randomIndex = Math.floor(Math.random() * wordBank.length)
    return wordBank[randomIndex]
}

export enum LetterState {
    Miss,
    Present,
    Match,
}
export function computeGuess(
    guess: string,
    answerString: string = word
): LetterState[] {
    const result: LetterState[] = [];

    if (guess.length !== answerString.length) {
        return result
    }

    const answer = answerString.split('')
    const guessArray = guess.split('');
    const answerArray = answerString.split('');
    const answerLetterCount: Record<string, number> = {};

    guessArray.forEach((letter, index) => {
        const currentAnswerLetter = answer[index];

        answerLetterCount[currentAnswerLetter] = answerLetterCount[
            currentAnswerLetter
        ]
            ? answerLetterCount[currentAnswerLetter] + 1
            : 1;

        if (currentAnswerLetter === letter) {
            result.push(LetterState.Match);
        } else if (answerArray.includes(letter)) {
            result.push(LetterState.Present);
        } else {
            result.push(LetterState.Miss)
        }
    });
    result.forEach((currentResult, resultIndex) => {
        if (currentResult !== LetterState.Present) {
            return;
        }
        const guessLetter = guessArray[resultIndex];

        answer.forEach((currentAnswerLetter, answerIndex) => {
            if (currentAnswerLetter !== guessLetter) {
                return;
            }
            if (result[answerIndex] <= 0) {
                result[resultIndex] = LetterState.Miss;
            }
        });

        answerLetterCount[guessLetter]--;
    });
    return result
}