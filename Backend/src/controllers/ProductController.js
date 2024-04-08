const ProductService = require("../services/ProductService");

const createProduct = async (req, res) => {
  try {
    console.log('req: ', req.body);
    const { name, image, type, price, countInStock, rating, description } = req.body;
    if (!name || !image || !type || !price || !countInStock || !rating) {
        return res.status(200).json({
            status: 'ERR',
            message: "The input is required"
        })
    }
    const response = await ProductService.createProduct(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      const data = req.body;
      if (!productId) {
        return res.status(200).json({
          status: "ERR",
          message: "The productId is require",
        });
      }
      const response = await ProductService.updateProduct(productId, data);
      return res.status(200).json(response);
    } catch (e) {
      return res.status(404).json({
        message: e,
      });
    }
  };


  const getDetailsProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      if (!productId) {
        return res.status(200).json({
          status: "ERR",
          message: "The productId is require",
        });
      }
      const response = await ProductService.getDetailsProduct(productId);
      return res.status(200).json(response);
    } catch (e) {
      return res.status(404).json({
        message: e,
      });
    }
  };

  const deleteProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      console.log('heheh: ', productId);
      if (!productId) {
        return res.status(200).json({
          status: "ERR",
          message: "The productId is require",
        });
      }
      const response = await ProductService.deleteProduct(productId);
      return res.status(200).json(response);
    } catch (e) {
      return res.status(404).json({
        message: e,
      });
    }
  };

  const getAllproduct = async (req, res) => {
    try {
      const { limit, page, sort, filter } = req.query;
      console.log('hhhhh: ', limit, page, sort, filter);
      const response = await ProductService.getAllProduct(Number(limit) || 8, Number(page) || 0, sort, filter);
      console.log('hhhh: ');
      return res.status(200).json(response);
    } catch (e) {
      console.log('huhuu');
      return res.status(404).json({
        message: e,
      });
    }
  };

module.exports = {
    createProduct,
    updateProduct,
    getDetailsProduct,
    deleteProduct,
    getAllproduct
};
