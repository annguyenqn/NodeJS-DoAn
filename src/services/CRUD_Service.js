import bcrypt from 'bcryptjs'
import db from '../models/index'
const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFrombcrypt = await hashUserPassword(data.password)
            await db.user.create({
                email: data.email,
                password: hashPasswordFrombcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
                phoneNumber: data.phoneNumber,
            })
            resolve('Add New User Success')
        }
        catch (e) {
            reject(e)
        }
    })
}
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        }
        catch (e) {
            reject(e)
        }
    })
}
let getAllUser = () => {
    return new Promise((resolve, reject) => {
        try {
            let users = db.user.findAll({
                raw: true
            })
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })

}
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
}