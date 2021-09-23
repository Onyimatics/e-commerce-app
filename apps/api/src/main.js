import * as express from 'express';
const app = express();
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
const cors = require("cors");

const userRoute = require('./app/routes/user');
const authRoute = require('./app/routes/auth');
const productRoute = require('./app/routes/product');
const cartRoute = require('./app/routes/cart');
const orderRoute = require('./app/routes/order');
const stripeRoute = require('./app/routes/stripe');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err)
  })

app.use(cors());
app.use(express.json());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/product', productRoute);
app.use('/api/v1/carts', cartRoute);
app.use('/api/v1/orders', orderRoute);
app.use('/api/v1/checkout', stripeRoute);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
