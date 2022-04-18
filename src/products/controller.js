const debug = require('debug')('app:products-contoller');
const { ProductsService } = require('./services');

const { Response } = require('../common/response');
const createError = require('http-errors');

module.exports.ProductsController = {
    getProducts: async (req, res) => {
        try {
            let products = await ProductsService.getAll();
            Response.success(res, 200, "Listado de Productos", products);
            // res.json(products);
        } catch (error) {
            debug(error);
            Response.error(res);
            // res.status(500).json({ message: "Internal Server Error" });
        }
    },
    getProduct: async (req, res) => {

        try {

            const { params: { id } } = req;
            let product = await ProductsService.getById(id);
            if (!product) return Response.error(res, new createError.NotFound());
            Response.success(res, 200, `Producto ${id}`, product);
            // res.json(product);

        } catch (error) {

            debug(error);
            Response.error(res);
            // res.status(500).json({ message: "Internal Server Error" });

        }

    },
    createProduct: async (req, res) => {

        try {
            const { body } = req;

            if (!body || Object.keys(body).length === 0) return Response.error(res, new createError.BadRequest());

            const insertedId = await ProductsService.create(body);
            Response.success(res, 201, `Producto agregado ${insertedId}`, insertedId);
            // res.json(insertedId);
        } catch (error) {
            debug(error);
            Response.error(res);
            // res.status(500).json({ message: "Internal Server Error" });
        }
    },
}