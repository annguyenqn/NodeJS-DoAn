import { render } from 'ejs'
import db from '../models/index'
import CRUDService from '../services/CRUD_Service'
let getHomePage = async (req, res) => {
    try {
        let data = await db.Users.findAll() // tham chiếu đến model 
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        })
    }
    catch (e) {
        console.log(e)
    }
}
let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body)
    return res.render('crud.ejs')
}
let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser()
    console.log(data)
    return res.render('display-crud', {
        dataTable: data
    })

}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
}