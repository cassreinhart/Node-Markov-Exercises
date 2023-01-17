const markov = require('./markov');

describe("makeChains", () => {
    beforeEach(() => {
        let origStr = "the cat in the hat";
        let mm = new MarkovMachine(origStr);
        let uniqueWordsCount = new Set(origStr.split(' ')).size;
    })
    test("generates an object", () => {
        expect(mm.makeChains()).toBe("Object");
    })
    test("has the same number of keys as unique words in the text", () => {
        expect(mm.makeChains().keys()).toEqual(uniqueWordsCount)
    })
})

describe("makeText", () => {
    beforeEach(() => {
        let origStr = "the cat in the hat";
        let mm = new MarkovMachine(origStr);
        let uniqueWordsCount = new Set(origStr.split(' ')).size;
    })
    test("generates a string", () => {
        expect(mm.makeText(numWords = 10)).toBe("String")
    })
    test("result is a specified length", () => {
        expect((mm.makeText(numWords = 7).split(' ').length)).toEqual(7)
    })
})