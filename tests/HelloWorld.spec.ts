import ReactTestUtils from 'react-dom/test-utils';
import * as React from "react";
import HelloWorld from '../HelloWorld';
import * as chai from "chai";  // TypeScriptなので、こんな感じ。ES6だといらない。 
import * as sinon from "sinon";
import {Promise} from "es6-promise";

const expect = chai.expect;

describe("HelloWorld React component", () => {
    const component = new HelloWorld({});

    it("HelloWorld.onClick", () => {
        new Promise((resolve) => {
            const node = component.refs.greetButton;
            ReactTestUtils.Simulate.click(node);
        })
        .then(() => {
            expect(component.state.greet).to.equal("Hello world");
        });
    });
});