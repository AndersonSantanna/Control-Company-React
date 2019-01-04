import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Form from './editForm' 
import {update} from '../../actions/companyAction'

class Edit extends Component{
    render(){
        return(
            <div>
                <Form onSubmit={this.props.update} value={JSON.parse(localStorage.getItem('company'))} />
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({update},dispatch)
export default connect(null, mapDispatchToProps)(Edit)