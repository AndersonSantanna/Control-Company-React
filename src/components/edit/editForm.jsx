import React, {Component} from 'react'
import {Col, Row, Button, FormGroup, Label} from 'reactstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Field, reduxForm} from 'redux-form'

import {update} from '../../actions/companyAction'
import Input from '../template/form/labelAndInput'

class EditForm extends Component{
    
    render(){
        const {handleSubmit, value} = this.props   
        return(
            <div className='edit'>
                <h1 className='text-center'>Edit</h1>
                <Row>
                    <Col sm={{size: 10, offset: 1}} md={{ size: 10, offset: 1 }} >
                        <form onSubmit={handleSubmit}>
                            <Row form>
                                <Col md={6}>
                                <FormGroup>
                                        <Field type='text' name='name' component={Input} 
                                        cols='12 12' 
                                        placeholder='Type it your Name'
                                        label='Name' valor={value.name} />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Field type='number' name='cnpj' component={Input} 
                                        cols='12 12' 
                                        placeholder='Type it your cnpj'
                                        label='cnpj' valor={value.cnpj} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Field type='text' name='social_name' component={Input} 
                                        cols='12 12' 
                                        placeholder='Type it your Social Name'
                                        label='Social Name' valor={value.social_name} />
                            </FormGroup>
                            <FormGroup>
                                <Field type='text' name='type' component={Input} 
                                        cols='12 12' 
                                        placeholder='Type it your type'
                                        label='Type' valor={value.type} />
                            </FormGroup>
                            <Col sm={{size: 10, offset: 1}}>
                                <button type='submit' className='btn btn-primary'><i className='fa fa-pen'></i> Register</button>
                                <a className='btn btn-dark ml-1' href="/#list"><i className='fa fa-list'></i> List</a>
                            </Col>
                        </form>
                    </Col>
                </Row>
            </div>
        )
    }
}
EditForm  = reduxForm({form: 'editForm'})(EditForm)
const mapDispatchToProps = dispatch => bindActionCreators({update},dispatch)
export default connect(null, mapDispatchToProps)(EditForm)