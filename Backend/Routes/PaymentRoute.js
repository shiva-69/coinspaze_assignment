const express = require("express");
const {makePayment, fetchAll} = require("../Handlers/PaymentHandler");

const PaymentRouter = express.Router();


PaymentRouter.get("/", fetchAll);
PaymentRouter.post("/", makePayment);


module.exports = {
    PaymentRouter
}