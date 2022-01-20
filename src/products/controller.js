const debug = require('debug')('app:products-contoller');
const { ProductsService } = require('./services');

module.exports.ProductsController = {
    getProducts: async (req, res) => {
        try {
            let products = await ProductsService.getAll();
            res.json(products);
        } catch (error) {
            debug(error);
            res.status(500).json({message: "Internal Server Error"});
        }
    },
    getProduct: (req, res) => {},
    createProduct: (req, res) => {},
}