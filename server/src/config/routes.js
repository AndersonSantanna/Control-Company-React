const express = require('express')

module.exports = function (server) {
    //API ROUTER
    const router = express.Router()
    server.use('/api', router)

    //company routes
    const companyService = require('../api/company/companyService')
    companyService.register(router,'/companys')
}