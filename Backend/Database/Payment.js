const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    email : String,
    from : String,
    amount : Number,
    description : String,
    id : [mongoose.Types.ObjectId]
})

const Payments = mongoose.model("Payment", paymentSchema);
module.exports = {
    Payments
} 