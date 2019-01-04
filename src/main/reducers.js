import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import listReducers from '../reducers/listReducers'

const rootReducer = combineReducers({
    list: listReducers,
    form: formReducer
})

export default rootReducer