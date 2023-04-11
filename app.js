const express = require('express');
const ProductManager = require('./ProductManager');

const app = express();
const port = 3000;

const productManager = new ProductManager('products.json');

app.get('/products', async(req, res) => {
    try {
        const products = await productManager.readProducts();
        const limit = req.query.limit ? parseInt(req.query.limit) : products.length;
        const result = limit < products.length ? products.slice(0, limit) : products;
        res.send(result);
    } catch (error) {
        console.error(`Not found`);

    }
});

app.get('/products/:pid', async(req, res) => {
    try {
        const products = await productManager.readProducts();
        const product = products.find(p => p.id === parseInt(req.params.pid));
        if (product) {
            res.send(product);
        } else {
            res.status(404).send({ error: 'Product not found' });
        }
    } catch (error) {
        console.error(`Not Found`);

    }
});

app.listen(8080, () => {
    console.log(`Server corriendo en el puerto 8080`);
});