import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'
//const INITIAL_VALUES = {credits:[{}], debts:[{}]}

export function create(values) {
    return submit(values, 'post')
}

export function update(values){
    const aux = {...JSON.parse(localStorage.getItem('company')), ...values};
    console.log(aux);
    return submit(aux, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method){
    return dispatch =>{
        axios[method](`${BASE_URL}/companys/${values._id ? values._id : ''}`, values)
        .then(resp => {
            //toastr.success('Sucesso', 'Operação realizada com sucesso')
            dispatch(init())
        })
        if(method == 'put'){
            window.location.href = 'http://localhost:3000/#/list'
        }else if(method == 'post'){
            window.location.reload()
        }
    }
}

export function getList() {
    const request = axios.get(`${BASE_URL}/companys`)
    return{
        type: 'LISTED',
        payload: request
    }
}
function init(){
    return getList()
}