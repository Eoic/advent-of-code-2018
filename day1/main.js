const { readFile } = require("../utilities/reader");

readFile("day1/input.txt", (data) => {
    // First half.
    const frequencies = data.split("\n");
    findFrequency(frequencies);
    findDuplicateFrequency(frequencies);
});

// First half.
const findFrequency = (frequencies) => {
    let total = 0;

    frequencies.forEach((freq) => {
        total += Number(freq);
    });

    console.log(`[P1] Answer: ${total}`);
}

// Second half.
const findDuplicateFrequency = (frequencies) => {
    let duplicateFound = false;
    let freqMap = new Map();
    let currentFreq = 0;

    while (!duplicateFound) {
        for (let i = 0; i < frequencies.length; i++) {
            if (freqMap.has(currentFreq)) {
                duplicateFound = true;
                break;
            } else
                freqMap.set(currentFreq, true);

            currentFreq += Number(frequencies[i]);
        };
    }

    console.log("[P2] Answer: " + currentFreq);
}