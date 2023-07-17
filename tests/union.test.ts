describe('Union Type', () => { 
    it('should support in typescript', () => {
        let sample: number | string | boolean = "Hallo";

        sample = 10;
        console.log(sample);

        sample = true;
        console.log(sample);

        // sample = []; // error
    });

    it('should support typeof operator', () => {
        function process(value: number | string | boolean) {
            if(typeof value === 'string') {
                return value.toUpperCase()
            } else if(typeof value === 'number') {
                return value + 2;
            } else {
                return !value
            }
        }

        expect(process('hallo')).toBe('HALLO');
        expect(process(2)).toBe(4);
        expect(process(true)).toBe(false);
    })
})