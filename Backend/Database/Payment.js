const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    to : String,
    from : String,
    amount : Number,
    description : String,
    id : [mongoose.Types.ObjectId]
})

const Payments = mongoose.model("Payment", paymentSchema);
module.exports = {
    Payments
} 