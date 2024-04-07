const Product = require("../models/ProductModel");

const createProduct = (newProduct) => {
    return new Promise(async (resolve, reject) => {
        const { name, image, type, countInStock, price, rating, description,discount } = newProduct
        try {
            const checkProduct = await Product.findOne({
                name: name
            })
            if (checkProduct !== null) {
                resolve({
                    status: 'ERR',
                    message: 'The name of product is already'
                })
            }
            const newProduct = await Product.create({
                name, 
                image, 
                type, 
                countInStock, 
                price, 
                rating, 
                description
            })
            if (newProduct) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newProduct
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}


const updateProduct = (id, data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const checkProduct = await Product.findOne({ _id: id });
        console.log("checkProduct: ", checkProduct);
        if (checkProduct === null) {
          resolve({
            status: "OK",
            message: "The product is not defined",
          });
        }
        //   mặc dù đã BD update nhưng khi console.log() vẫn ra data lúc chưa update => thêm { new: true } để get data mới nhất
        const updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true });
        console.log("updateProduct: ", updatedProduct);
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: updatedProduct,
        });
      } catch (e) {
        reject(e);
      }
    });
  };

  const deleteProduct = (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const checkProduct = await Product.findOne({ _id: id });
        console.log("checkProduct: ", checkProduct);
        if (checkProduct === null) {
          resolve({
            status: "OK",
            message: "The product is not defined",
          });
        }
  
        await Product.findByIdAndDelete(id);
        resolve({
          status: "OK",
          message: "Delete product success",
        });
      } catch (e) {
        reject(e);
      }
    });
  };
  
  const getAllProduct = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const allProduct = await Product.find();
        resolve({
          status: "OK",
          message: "Success",
          data: allProduct
        })
      } catch (e) {
        reject(e);
      }
    });
  }
  
  const getDetailsProduct = (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const product = await Product.findOne({_id: id});
        console.log('nam cao: ', product);
  
        if (product === null) {
          resolve({
            status: 'OK',
            message: "The product is not defined"
          })
        }
        resolve({
          status: "OK",
          message: "Success",
          data: product
        })
      } catch (e) {
        reject(e);
      }
    });
  }  

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProduct,
  getDetailsProduct
};
