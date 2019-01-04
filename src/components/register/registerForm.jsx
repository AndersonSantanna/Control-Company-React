import React, {Component} from 'react'
import {Col, Row, Button, FormGroup} from 'reactstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Field, reduxForm} from 'redux-form'

import {create} from '../../actions/companyAction'
import Input from '../template/form/labelAndInput'
class RegisterForm extends Component{
    render(){
        const {handleSubmit} = this.props
        return(
            <div className='edit'>
                <h1 className='text-center'>Register</h1>
                <Row>
                    <Col sm={{size: 10, offset: 1}} md={{ size: 10, offset: 1 }} >
                        <form onSubmit={handleSubmit}>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Field type='text' name='name' component={Input} 
                                        cols='12 12' 
                                        placeholder='Type it your Name'
                                        label='Name' />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Field type='number' name='cnpj' component={Input} 
                                        cols='12 12' 
                                        placeholder='Type it your cnpj'
                                        label='cnpj' />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Field type='text' name='social_name' component={Input} 
                                        cols='12 12' 
                                        placeholder='Type it your Social Name'
                                        label='Social Name' />
                            </FormGroup>
                            <FormGroup>
                                <Field type='text' name='type' component={Input} 
                                        cols='12 12' 
                                        placeholder='Type it your type'
                                        label='Type' />
                            </FormGroup>
                            <Col sm={{size: 10, offset: 1}}>
                                <Button color='primary' ><i className='fa fa-pen'></i> Register</Button>
                                <a className='btn btn-dark ml-1' href="/#list"><i className='fa fa-list'></i> List</a>
                            </Col>
                        </form>
                    </Col>
                </Row>
            </div>
        )
    }
}
RegisterForm     = reduxForm({form: 'RegisterForm'})(RegisterForm)
const mapDispatchToProps = dispatch => bindActionCreators({create},dispatch)
export default connect(null, mapDispatchToProps)(RegisterForm)