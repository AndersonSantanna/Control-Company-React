import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {Table} from 'reactstrap'
import {remove, getList} from '../../actions/companyAction'

class List extends Component{
    componentWillMount(){
        this.props.getList()
    }

    renderRow(){
        const list = this.props.list || []
        console.log(list);
        
        return list.map(company =>(
            <tr key={company._id}>
                <td>{company.name}</td>
                <td>{company.cnpj}</td>
                <td>{company.social_name}</td>
                <td>{company.type}</td>
                <td>
                    <a href="#edit" onClick={()=>{localStorage.setItem('company', JSON.stringify(company) )}}><i className='fa fa-edit opacity'></i></a>
                </td>
                <td>
                    <a href="#list"  onClick={()=>this.props.remove(company)} className='text-red'><i className='fa fa-trash'></i></a>
                </td>
            </tr>
        ))
    }
    render(){
        return(
            <div className='text-center list'>
                <h1>List</h1>
                <Table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>CNPJ</td>
                            <td>Social Name</td>
                            <td>Type</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRow()}
                    </tbody>
                </Table>
                <a href="#register" className='btn btn-primary'>Cadastrar</a>
            </div>
        )
    }
}

const mapStateToProps = state=>({list: state.list.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(List)