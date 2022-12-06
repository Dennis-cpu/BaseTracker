
class ApiDataHandler {
    _client = require('../services/connection')
    User = require('../model/user')


    constructor() {
        this._client.connect()
    }



    getAllUsers(users){
        this._client.query(`SELECT * FROM users`, (err, result)=>{
            if(err){
                users(err.message)
            }else{
                users(result.rows)
            }

        });

    }


    getAllTrackers(trackers){
        this._client.query(`SELECT * FROM trackers`, (err, result)=>{
            if(err){
                trackers(err.message)
            }else{
                trackers(result.rows)
            }

        });

    }


    getAllTransactions(transactions){
        this._client.query(`SELECT * FROM transactions`, (err, result)=>{
            if(err){
                transactions(err.message)
            }else{
                transactions(result.rows)
            }

        });

    }



    getUserById(id, foundUser){
        let getUser = `SELECT * FROM users WHERE id=${id}`
        this._client.query(getUser, (err, result)=>{
            if(err){
                foundUser(err.message)
            }else{
                foundUser(result.rows[0])
            }

        });
    }



    getUsersWithTrackers(user_trackers){
        let select_users = `SELECT * FROM users INNER JOIN trackers ON users.id=trackers.user_id`
        this._client.query(select_users, (err, result)=>{
            if(err){
                user_trackers(err.message)
            }else{
                user_trackers(result.rows)
            }

        });

    }

    getTrackersByStatus(status, trackers){
        let select_users = `SELECT * FROM users u JOIN trackers t ON t.user_id=u.id WHERE t.status=${status}`
        this._client.query(select_users, (err, result)=>{
            if(err){
                trackers(err.message)
            }else{
                trackers(result.rows)
            }

        });
    }


    getTrackersByUserId(id, trackers){
        let select_users = `SELECT * FROM users u JOIN trackers t ON t.user_id=u.id WHERE u.id=${id}`
        this._client.query(select_users, (err, result)=>{
            if(err){
                trackers(err.message)
            }else{
                trackers(result.rows)
            }

        });

    }




    createUser(newUser, userCreated) {
        let insertUser = `INSERT INTO users(name, surname, email, contacts, address, is_active,
                            reg_date, passwords) 
                       Values('${newUser.name}', '${newUser.surname}', '${newUser.email}',
                       '${newUser.contacts}', '${newUser.address}', '${newUser.isActive}', '${newUser.regDate}',
                       '${newUser.passwords}')`

        //console.log(insertUser)

        this._client.query(insertUser, (err, results) =>{
            if(err){
                userCreated(err.message)
            }else{
                userCreated('Successfully created the account')
                userCreated(results.message)
            }
        })
        //this._client.end()
    }





    addTracker(new_tracker, trackerCall) {
        let insert_tracker = `INSERT INTO trackers(name, imei, network, passwords, ip_address, num_phone,
                            service_provider, packages, buy_price, sell_price, reg_date, reg_time, is_sold, is_active, user_id, status) 
                       Values('${new_tracker.name}', '${new_tracker.imei}', '${new_tracker.network}',
                       '${new_tracker.passwords}', '${new_tracker.ip_address}', '${new_tracker.num_phone}', '${new_tracker.service_provider}',
                       '${new_tracker.packages}', '${new_tracker.buy_price}', '${new_tracker.sell_price}', '${new_tracker.reg_date}',
                       '${new_tracker.reg_time}', '${new_tracker.is_sold}', '${new_tracker.is_active}', '${new_tracker.user_id}', '${new_tracker.status}')`


        this._client.query(insert_tracker, (err, results) =>{
            if(err){
                trackerCall(err.message)
            }else{
                //trackerCall('Successfully created the account')
                trackerCall(results.message)
            }
        })
    }


    addTransaction(new_trans, transactionCall) {
        let insert_trans = `INSERT INTO transactions(tracker_id, user_id, date, time, amount)
                       Values('${new_trans.tracker_id}', '${new_trans.user_id}', '${new_trans.date}',
                       '${new_trans.time}')`


        this._client.query(insert_trans, (err, results) =>{
            if(err){
                transactionCall(err.message)
            }else{
                //trackerCall('Successfully created the account')
                transactionCall(results.message)
            }
        })
    }





}

module.exports = ApiDataHandler;