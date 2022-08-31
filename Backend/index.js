const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./Database");
const { PaymentRouter} = require("./Routes/PaymentRoute");
require('dotenv').config();
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(PaymentRouter)

connectToDatabase()
.then(() => {
    try {
        app.listen(PORT, () => {
            console.log(`Connected to Server on Port ${PORT}`);
        })
    } catch (error) {
        console.log("error in connecting to server")
    }
})

