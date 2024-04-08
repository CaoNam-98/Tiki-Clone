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
  
  // Add thêm limit để get số lượng item pagination và page là số trang
  // Skip(2) => bỏ qua 2 cái object để lấy cái tiếp theo
  const getAllProduct = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
      try {
          const totalProduct = await Product.find().count()
          let allProduct = []
          if (filter) {
              const label = filter[0];
              const allObjectFilter = await Product.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
              resolve({
                  status: 'OK',
                  message: 'Success',
                  data: allObjectFilter,
                  total: totalProduct,
                  pageCurrent: Number(page + 1),
                  totalPage: Math.ceil(totalProduct / limit)
              })
          }
          if (sort) {
              const objectSort = {}
              objectSort[sort[1]] = sort[0]
              const allProductSort = await Product.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
              resolve({
                  status: 'OK',
                  message: 'Success',
                  data: allProductSort,
                  total: totalProduct,
                  pageCurrent: Number(page + 1),
                  totalPage: Math.ceil(totalProduct / limit)
              })
          }
          if(!limit) {
              allProduct = await Product.find().sort({createdAt: -1, updatedAt: -1})
          }else {
              allProduct = await Product.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
          }
          resolve({
              status: 'OK',
              message: 'Success',
              data: allProduct,
              total: totalProduct,
              pageCurrent: Number(page + 1),
              totalPage: Math.ceil(totalProduct / limit)
          })
      } catch (e) {
          reject(e)
      }
  })
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
