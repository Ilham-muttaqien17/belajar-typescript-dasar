import { Seller } from "../src/seller"

describe('Interface', () => { 
    it('should support in typescript', () => {
        const seller: Seller = {
            id: 1,
            name: "Test",
            nib: "123123",
            npwp: "234234"
        };

        // seller.nib = "12111122"; // error

        console.log(seller);
    })

    it('should support function interface', () => {
        interface AddFunction {
            (val1: number, val2: number): number
        };

        const add: AddFunction = (val1: number, val2: number): number => {
            return val1 + val2;
        };

        expect(add(1, 2)).toBe(3);
    })
})