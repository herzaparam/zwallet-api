const transactionModel = require("../models/transactionModel")
const helper = require("../helpers/printHelper")

exports.transfer = (req, res) => {
    const idSender = req.query.idSender
    const idReceiver = req.query.idReceiver
    const stringAmount = req.query.amount
    const amount = parseInt(stringAmount)

        transactionModel
        .balanceSender(idSender, amount, idReceiver)
        .then((result)=>{
            helper.printSuccess(res, 200, `transfer Rp.${amount} from id ${idSender} to ${idReceiver} has been succesfull`, result);
        })
        .catch((err)=>{
            helper.printError(res, 500, err.message);
        })
   
       
}