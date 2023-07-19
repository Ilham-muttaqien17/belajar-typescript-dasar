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

    it('should support indexable interface', () => {
        interface StringArray {
            [index: number]: string;
        };

        const names: StringArray = ["Test", "Hello", "Hi"];

        console.log(names);
    })

    it('should support indexable interface for non number index', () => {
        interface StringDictionary {
            [key: string]: string
        };

        const dictionary: StringDictionary = {
            name: "Test",
            address: "123 st"
        };

        expect(dictionary["name"]).toBe("Test");
        expect(dictionary["address"]).toBe("123 st");
    })
})