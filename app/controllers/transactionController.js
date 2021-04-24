const transactionModel = require("../models/transactionModel")
const helper = require("../helpers/printHelper")

exports.getHistory = (req, res) => {
    const { page, perPage, orderBy, sort } = req.query;
    const idSender = req.auth.id;

    transactionModel.getHistory(page, perPage, idSender, orderBy, sort)
        .then(([totalData, totalPage, result, page, perPage]) => {
            helper.printPaginate(res, 200, `find history succesfull `, totalData, totalPage, result, page, perPage);
        })
        .catch((err) => {
            helper.printError(res, 500, err.message);
        })
}

exports.transfer = (req, res) => {
    const idSender = req.query.idSender
    const idReceiver = req.query.idReceiver
    const stringAmount = req.query.amount
    const amount = parseInt(stringAmount)

    transactionModel
        .transfer(idSender, amount, idReceiver)
        .then((result) => {
            helper.printSuccess(res, 200, `transfer Rp.${amount} from id ${idSender} to ${idReceiver} has been succesfull`, result);
        })
        .catch((err) => {
            helper.printError(res, 500, err.message);
        })

}
exports.history = (req, res) => {
    const idSender = parseInt(req.query.idSender)
    const idReceiver = parseInt(req.query.idReceiver)
    const amount = parseInt(req.query.amount)



    transactionModel
        .addHistory(idSender, idReceiver, amount)
        .then((result) => {
            helper.printSuccess(res, 200, `transfer Rp.${amount} from id ${idSender} to ${idReceiver} has been succesfull`, result);
        })
        .catch((err) => {
            helper.printError(res, 500, err.message);
        })

}