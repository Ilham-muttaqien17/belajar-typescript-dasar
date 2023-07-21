import { Employee, Manager } from "../src/employee";
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

    it('should support extends interface', () => {
        const employee: Employee = {
            id: "1",
            name: "Test",
            division: "IT"
        };

        console.log(employee);

        const manager: Manager = {
            id: "2",
            name: "Test2",
            division: "Product",
            numberOfEmployees: 20
        };

        console.log(manager);
    })

    it('should support function in interface', () => {
        interface Person {
            name: string;
            sayHello(name: string): string;
        }

        const person: Person = {
            name: "Test",
            sayHello: function (name: string): string {
                return `Hello ${name}, i am ${this.name};`
            }
        }

        console.log(person.sayHello('Test2'));
    })

    it('should support intersection types', () => {
        interface HasName {
            name: string;
        }

        interface HasId {
            id: String;
        }

        type Domain = HasId & HasName;

        const domain: Domain = {
            id: "1",
            name: "Tester"
        }

        console.log(domain)
    })
})