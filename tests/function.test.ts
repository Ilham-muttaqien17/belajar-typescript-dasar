describe('Function Parameter', () => { 
    it('should support function parameter', () => {
        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`;
        }

        expect(sayHello()).toBe('Hello Guest');
        expect(sayHello("Test")).toBe('Hello Test');
    })

    it('should support rest parameter', () => {
        function sum(...values: number[]): number {
            let total = 0;
            for(const value of values) {
                total += value;
            }

            return total;
        }

        expect(sum(1, 2, 3, 4)).toBe(10);
    })

    it('should support optional parameter', () => {
        function sayHello(firstName: string, lastName?: string): string {
            return `Hello ${firstName}${lastName ? ' ' + lastName : ''}`;
        }

        expect(sayHello('Tester')).toBe('Hello Tester');
        expect(sayHello('Tester', 'asd')).toBe('Hello Tester asd');
    })

    it('should support function overloading', () => {
        function callMe(val: number): number;
        function callMe(val: string): string;

        function callMe(val: any) {
            if(typeof val === "string") {
                return val.toUpperCase();
            } else if(typeof val === "number") {
                return val * 2;
            }
        }

        expect(callMe(100)).toBe(200);
        expect(callMe("Test")).toBe("TEST");
    })

    it('should support function as parameter', () => {
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`;
        }

        function toUpper(str: string): string {
            return str.toUpperCase();
        }

        expect(sayHello('Test', toUpper)).toBe('Hello TEST');
        expect(sayHello('Test', (name: string): string => name.toUpperCase())).toBe('Hello TEST');
    })
})