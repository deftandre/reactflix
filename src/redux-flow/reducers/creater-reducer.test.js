"use strict";

import { expect } from "chai";
import deepFreeze from "deep-freeze";
import createReducer from "./create-reducer";

const initialState = 0;
const reducer = createReducer(initialState, {
    INCREMENT: (state, action) => state + 1,
    DECREMENT: (state, action) => state - 1,
});

test("should be a function", () => {
    expect(createReducer).to.be.a("function");
});

test("createReducer(initialState,{}) should return a function", () => {
    expect(createReducer([], {})).to.be.a("function");
});

test("should create a reducer", () => {
    const before = 0;
    const action = deepFreeze({ type: "INCREMENT" });
    const after = 1;

    expect(reducer(before, action)).to.be.deep.equal(after);
});

test("reducer should return latest state if action is unknown", () => {
    const before = 3;
    const action = deepFreeze({ type: "UNKNOWN" });
    const after = 3;

    expect(reducer(before, action)).to.be.deep.equal(after);
});

test("reducer should return initialState when latest state is undefined", () => {
    const before = undefined;
    const action = deepFreeze({});
    const after = initialState;

    expect(reducer(before, action)).to.be.deep.equal(after);
});

test("initialState should not be undefined", () => {
    try {
        createReducer();
    } catch (e) {
        expect(e.message).to.be.equal("initialState should not be undefined");
    }
});

test("handleActions should not be different from object", () => {
    try {
        createReducer([]);
    } catch (e) {
        expect(e.message).to.be.equal(
            "createReducer expects the second argument as an object representing reducer"
        );
    }
});
