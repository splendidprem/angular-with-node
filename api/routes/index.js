import express from 'express';
import productRoute from './product.route';
const app = express();

app.use('/products', productRoute);

export default app;
