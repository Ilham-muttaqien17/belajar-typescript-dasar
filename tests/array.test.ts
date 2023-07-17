describe('Array', () => { 
    it('should must same with javascript', () => {
        const names: string[] = ["hallo", "test"];
        const numbers: number[] = [1, 2, 3];

        console.log(names);
        console.log(numbers);
    })

    it('should support readonly array', () => {
        const hobbies: ReadonlyArray<string> = ["fishing", "reading"];

        console.log(hobbies);
        console.log(hobbies[0]);
        console.log(hobbies[1]);

        // hobbies[0] = "test"; // error
    })

    it('should support tupple', () => {
        const person: readonly[string, string, number] = ['Hello', 'World', 10];

        console.log(person)

        // person[0] = "Hayy"; // error
    })
})