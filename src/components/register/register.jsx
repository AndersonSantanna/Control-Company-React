import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Form from './registerForm' 
import {create} from '../../actions/companyAction'

class Register extends Component{
    render(){
        return(
            <div>
                <Form onSubmit={this.props.create} />
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({create},dispatch)
export default connect(null, mapDispatchToProps)(Register)