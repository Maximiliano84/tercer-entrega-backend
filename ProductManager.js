const fs = require("fs").promises;

class ProductManager {
    constructor(filename) {
        this.filename = filename;
    }

    async readProducts() {
        try {
            const data = await fs.readFile(this.filename, "utf8");
            return JSON.parse(data);
        } catch (error) {
            console.error(
                `Error`
            );
            return [];
        }
    }

    async writeProducts(products) {
        try {
            const data = JSON.stringify(products, null, 2);
            await fs.writeFile(this.filename, data, "utf8");
        } catch (error) {
            console.error(`Error`);
        }
    }
}

module.exports = ProductManager;