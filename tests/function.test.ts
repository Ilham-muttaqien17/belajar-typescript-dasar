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
})