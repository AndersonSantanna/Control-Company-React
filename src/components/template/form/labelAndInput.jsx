import React, {Component} from 'react'
import Grid from '../../layout/grid'
export default class label extends Component {
    constructor(props){
        super(props)
        this.state = {value: props.valor}
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        this.setState({value: event.target.value})
    }
    
    
    render(){
        return(
            <Grid cols={this.props.cols}>
                <div className='form-group'>
                    <label htmlFor={this.props.name}>{this.props.label}</label>
                    <input {...this.props.input} className='form-control' 
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    value={this.state.value}
                    onChange={this.handleChange} />
                    
                </div>
            </Grid>
        )
    }
}
