import express from 'express';
const productRoutes = express.Router();

productRoutes.route('/').get((req, res) => {
  res.json([
    {
      id: 1,
      name: 'Product 1'
    },
    {
      id: 2,
      name: 'Product 2'
    }
  ]);
});


export default productRoutes;
