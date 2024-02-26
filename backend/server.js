const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const auth = require('./auth');

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const PORT = 8000;
const DB_URL = 'mongodb+srv://Kamindu_99:123@mernapp.ffeez.mongodb.net/product_db?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('DataBase Connected Successful');
    })
    .catch((err) => console.log('DataBase Connection Error', err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});

const productRoute = require('./routes/ProductRoutes');
app.use("/product", productRoute);

const userRoute = require('./routes/UserRoutes');
app.use("/api/user-management", userRoute);

const inquiryRoute = require('./routes/InquiryRoutes');
app.use("/api/inquiry", auth, inquiryRoute);