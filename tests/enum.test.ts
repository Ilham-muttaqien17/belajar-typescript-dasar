import { Customer, CustomerType } from "../src/enum"

describe('Enum', () => { 
    it('should support in typescript', () => {
        const customer: Customer = {
            id: 1,
            name: "Test",
            type: CustomerType.GOLD
        };

        console.log(customer);
    })
})