export function generateBoard(letterFreq) {
    const letters = [];
    // Create weighted array of letters
    Object.entries(letterFreq).forEach(([letter, freq]) => {
        for (let i = 0; i < freq; i++) {
            letters.push(letter);
        }
    });
    // Generate 4x4 board
    const board = [];
    for (let i = 0; i < 4; i++) {
        const row = [];
        for (let j = 0; j < 4; j++) {
            const randomIndex = Math.floor(Math.random() * letters.length);
            row.push(letters[randomIndex]);
        }
        board.push(row);
    }
    return board;
}
