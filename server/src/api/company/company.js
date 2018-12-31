const restful = require('node-restful')
const mongoose = restful.mongoose

const companySchema = new mongoose.Schema({
    name: {type: String, required: true},
    cnpj: {type: String, min: 14, max:19, required: true},
    social_name: {type: String, required: true},
    type: {type: String, required: true}
})

module.exports = restful.model('company-control', companySchema)