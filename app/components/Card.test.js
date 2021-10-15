const Card = require("./Card")

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "Edmond", "George"], ["Jean-Philippe", "Michael", "George"], ["Anas", "Pierre Edouard", "Edmond"]]
        inst = new Card.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getCardDimensions", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Michael", "Anas"], ["Anas", "Michael", "Anas"], ["Pierre Edouard", "Michael", "Jean-Philippe"]]
        inst = new Card.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.getCardDimensions(30, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.getCardDimensions(-1, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.getCardDimensions(400, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.getCardDimensions(50, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.getCardDimensions(-10, 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.getCardDimensions(Infinity, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
