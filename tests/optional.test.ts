describe('first', () => { 
    it('should support null or undefined', () => {
        function sayHello(name?: string | null) {
            if(name) {
                console.log(`Helllo ${name}`);
            } else {
                console.log('Hello')
            }
        }

        sayHello('Test');
        const name: string | undefined = undefined;
        sayHello(name);
        sayHello(null);
    })
})