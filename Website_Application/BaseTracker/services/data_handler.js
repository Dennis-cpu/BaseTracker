
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




    createUser(newUser, userCreated) {
        let insertUser = `INSERT INTO users(name, surname, email, contacts, address, is_active,
                            reg_date, passwords) 
                       Values('${newUser.name}', '${newUser.surname}', '${newUser.email}',
                       '${newUser.contacts}', '${newUser.address}', '${newUser.isActive}', '${newUser.regDate}',
                       '${newUser.passwords}')`

        console.log(insertUser)

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



}

module.exports = ApiDataHandler;