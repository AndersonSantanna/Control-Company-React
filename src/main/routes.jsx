import React from 'react'
import{Router, Route, Redirect, hashHistory} from 'react-router'

import index from '../components/index/index'
import list from '../components/list/list'
import edit from '../components/edit/edit'
import register from '../components/register/register'

export default props =>(
    <Router history={hashHistory}>
        <Route path='/' component={index} />
        
        <Route path='/list' component={list} />
        <Route path='/register' component={register} />
        <Route path='/edit' component={edit} />
        <Redirect from='*' to='/' />
    </Router>
)