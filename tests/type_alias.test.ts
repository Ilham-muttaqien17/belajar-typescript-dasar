import { Category, Product } from "../src/type_alias"

describe('Type Alias', () => { 
    it('should support in typescript', () => {
        const category: Category = {
            id: 1,
            name: "Smartphone"
        };

        const product: Product = {
            id: "1",
            name: "Poco X3",
            price: 2000000,
            category: category,
        };

        console.log(category);
        console.log(product);

        // product.desc = "test"; // error
    })
 })