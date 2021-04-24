const connection = require("../configs/dbConfig");

exports.getHistory = (queryPage, queryPerPage, idSender, orderBy, sort) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT COUNT(*) AS totalData FROM history WHERE id_sender = ? ", idSender,
            (err, result) => {
                let totalData, page, perPage, totalPage;
                if (err) {
                    reject(new Error("Internal server error"));
                } else {
                    totalData = result[0].totalData;
                    page = queryPage ? parseInt(queryPage) : 1;
                    perPage = queryPerPage ? parseInt(queryPerPage) : 5;
                    totalPage = Math.ceil(totalData / perPage);
                }
                const firstData = perPage * page - perPage;

                connection.query(`SELECT history.historyID, history.id_sender, history.id_receiver, history.username_receiver, history.image_receiver, history.transfer, history.created_at, user.username, user.image FROM history INNER JOIN user ON history.id_sender = user.id WHERE history.id_sender = ? OR history.id_receiver = ? ORDER BY ${orderBy} ${sort} LIMIT ?,?`, [idSender, idSender, firstData, perPage],
                    (err, result) => {
                        if (!err) {
                            resolve([totalData, totalPage, result, page, perPage])
                        } else {
                            reject(new Error("internal server error"))
                        }
                    })
            }
        );

    })
}



exports.transfer = (idSender, amount, idReceiver) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT balance FROM user WHERE id = ?`, idSender,
            (err, resultBalance) => {
                if (!err) {
                    if (resultBalance[0].balance >= amount + 50000) {
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
exports.addHistory = (idSender, idReceiver, amount) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM user WHERE id = ?`, idReceiver,
            (err, resultReceiver) => {
                if (!err) {
                    connection.query(`INSERT INTO history (id_sender,id_receiver,username_receiver,image_receiver,transfer) VALUES (?,?,?,?,?)`, [idSender, idReceiver, resultReceiver[0].username, resultReceiver[0].image, amount],
                        (err, result) => {
                            if (!err) {
                                resolve(result)
                            } else {
                                reject(new Error("internal server"))
                            }
                        })
                } else {
                    reject(new Error("internal server error, cand find userreceiver"))
                }
            })

    })
}