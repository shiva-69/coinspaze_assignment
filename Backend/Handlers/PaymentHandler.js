const {Payments} = require("../Database/Payment");


const makePayment = async(req, res, next) => {
    let {body} = req;

    await Payments.create(body);
    return res.status(200).send({
        message : "User registered"
    })
}
const fetchAll = async(req, res, next) => {
    let payments = await Payments.find();

    return res.status(200).send(payments);
}
module.exports = {
    makePayment,
    fetchAll
}