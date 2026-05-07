import dictionary from "../../data/boggleWords.json";
import freq from "../../data/letterFrequency.json";
import { generateBoard } from "../../games/boggle/generateBoard";
import { existsOnBoard } from "../../games/boggle/existsOnBoard";
import { scoreWord } from "../../games/boggle/scoreWord";
export class BoggleEngine {
    constructor() {
        Object.defineProperty(this, "board", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dictionary", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.dictionary = new Set(Object.keys(dictionary).map((w) => w.toLowerCase()));
        this.board = generateBoard(freq);
    }
    resetBoard() {
        this.board = generateBoard(freq);
    }
    validate(word) {
        const clean = word.toUpperCase();
        return (clean.length >= 3 &&
            this.dictionary.has(clean.toLowerCase()) &&
            existsOnBoard(this.board, clean));
    }
    score(word) {
        return scoreWord(word);
    }
}
