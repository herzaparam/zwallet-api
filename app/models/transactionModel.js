const connection = require("../configs/dbConfig");

exports.balanceSender = (idSender, amount, idReceiver) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT balance FROM user WHERE id = ?`, idSender,
            (err, resultBalance) => {
                if (!err) {
                    if (resultBalance[0].balance >= amount+50000) {
                        finalBalance = resultBalance[0].balance - amount
                        connection.query(`UPDATE user SET balance = ${finalBalance} WHERE id = ? `, idSender,
                            (err, resultBalanceSender) => {
                                if (!err) {
                                    connection.query(`SELECT balance FROM user WHERE id = ?`, idReceiver,
                                        (err, resultBalanceReceiver) => {
                                            if (!err) {
                                                finalBalanceReceiver = resultBalanceReceiver[0].balance + amount
                                                connection.query(`UPDATE user SET balance = ${finalBalanceReceiver} WHERE id = ? `, idReceiver,
                                                    (err, resultTransfer) => {
                                                        if (!err) {
                                                            console.log(resultTransfer);
                                                            resolve(resultTransfer)
                                                        } else {
                                                            reject(new Error("can't update balance receiver"))
                                                        }
                                                    })
                                            } else {
                                                reject(new Error("can't update balance receiver"))
                                            }
                                        })
                                } else {
                                    reject(new Error("Internal server error, unable to update balance"))
                                }
                            })
                    } else {
                        reject(new Error("you need atleast have 50000 balance"))
                    }
                } else {
                    reject(new Error("Internal server error, unable to find sender"))
                };
            });
    });
};