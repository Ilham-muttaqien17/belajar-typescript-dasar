describe('Object Type', () => { 
    it('should support in typescript', () => {
        const person: { id: string, name: string } = {
            id: "1",
            name: "Test"
        };

        console.log(person);

        person.id = "2";

        console.log(person);
    })
})