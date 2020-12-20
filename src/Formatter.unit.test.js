const stringFormatter = require('./Formatter').stringFormatter

describe('Test string formatter', () => {
    it('swap the beginnings of the words, up to and including the first vowel', () => {
        const result = stringFormatter('fooma barbu');
        expect(result).toEqual('bama foorbu');
    });

    it('given odd word at the end of the string, leave that as is', () => {
        const resultOne = stringFormatter('hello');
        expect(resultOne).toEqual('hello');

        const resultTwo = stringFormatter('foo bar baz');
        expect(resultTwo).toEqual('ba foor baz');
    });

    it('preserve exact spacing if words are separated by spaces', () => {
        const result = stringFormatter('amama   bomomo foo');
        expect(result).toEqual('bomama   amomo foo');
    });

    it('treat punctuation as part of words', () => {
        const result = stringFormatter("I\'d rather die here.");
        expect(result).toEqual("ra\'d Ither he diere.");
    });

    it('Vowels include (at least) those in the Finnish alphabet (a, e, i, o, u, y, å, ä, ö)', () => {
        const result = stringFormatter('vuoirkage mäölnö');
        expect(result).toEqual('mäörkage vuoilnö');
    });

    it('treat any character that is not space or a vowel as a consonant ', () => {
        const result = stringFormatter('.. dummy data &!#%');
        expect(result).toEqual('du.. mmy ta da&!#%');
    });

    it('Donald Trump -> Trunald Domp', () => {
        const result = stringFormatter('Donald Trump');
        expect(result).toEqual('Trunald Domp');
    });

    it('Supercalifragilisticexpialidocious -> Supercalifragilisticexpialidocious', () => {
        const result = stringFormatter('Supercalifragilisticexpialidocious');
        expect(result).toEqual('Supercalifragilisticexpialidocious');
    });

    it('death, famine, and pestilence -> fath, deamine, pend astilence', () => {
        const result = stringFormatter('death, famine, and pestilence');
        expect(result).toEqual('fath, deamine, pend astilence');
    });

    it('Empty sentence', () => {
        const resultOne = stringFormatter(null);
        expect(resultOne).toEqual(null);

        const resultTwo = stringFormatter('');
        expect(resultTwo).toEqual('');

        const resultThree = stringFormatter(undefined);
        expect(resultThree).toEqual(undefined);
    });
});
