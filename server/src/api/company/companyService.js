const company =require('./company')

company.methods(['get', 'post', 'put', 'delete'])
company.updateOptions({new: true, runValidators: true})
module.exports = company