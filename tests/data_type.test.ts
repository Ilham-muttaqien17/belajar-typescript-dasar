describe('Data Type', () => { 
    it('should must declare', () => {
        let name: string = "Test";
        let balance: number = 10000;
        let isGood: boolean = true;

        console.log(name);
        console.log(balance);
        console.log(isGood);

        // name = 1000; // error
        // balance = "Test"; // error
        // isGood = 11; // error
    })
 })