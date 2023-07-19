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
})