const mathOperators =  require('./calculator')

describe('Testin math operations', () => {
    test("add numbers", () => {
        expect(mathOperators.sum(1,2)).toBe(3)
    })
    test("subtract numbers", () => {
        expect(mathOperators.subtract(1,2)).toBe(-1)
    })
    test("multiply numbers", () => {
        expect(mathOperators.multiply(1,2)).toBe(2)
    })
})


describe("Truthy or falsy", () => {
    test("null", () => {
        const n = null
        expect(n).toBeNull()
        expect(n).toBeDefined()
        expect(n).not.toBeUndefined()
        expect(n).not.toBeTruthy()
        expect(n).toBeFalsy()
    })
    test("zero", () => {
        const n = 0
        expect(n).not.toBeNull()
        expect(n).toBeDefined()
        expect(n).not.toBeUndefined()
        expect(n).not.toBeTruthy()
        expect(n).toBeFalsy()
    })
})