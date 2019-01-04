import React from 'react'

import Button from '../template/buttons/button'

export default props =>(
    <div className='test'>
        <Button button='cadastrar' link='#register' color='primary' icon='pen' label='register'/>
        <Button button='buscar' link='#list' color='danger' icon='list' label='List' />
    </div>
)