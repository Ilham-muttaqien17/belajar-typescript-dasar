import { sayHello } from "../src/say_hello"

describe('sayHello', () => { 
    it('should return Hello Test', () => {
        expect(sayHello('Test')).toBe('Hello Test');
    })
 })