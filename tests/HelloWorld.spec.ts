import HelloWorld from '../HelloWorld';
import * as chai from "chai";  // TypeScriptなので、こんな感じ。ES6だといらない。 

const expect = chai.expect;

describe("HelloWorld React component", () => {
    it("test", () => {
        expect(1).to.a('number');
    });
});