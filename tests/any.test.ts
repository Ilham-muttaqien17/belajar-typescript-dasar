describe('Any', () => { 
    it('should support in typescript', () => {
        const data: any = {
            id: 1,
            name: "Test",
            age: 40
        }

        data.age = 30;
        data.name = "Hello";

        console.log(data)
    })
})