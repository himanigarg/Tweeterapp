import { getInitialData } from '../utils/api'
import {receiveUsers} from './users'
import {receiveTweets} from './tweets'
import {setAuthedUser} from './authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'

export function handleInitialData(){

    const Authed_Id = 'tylermcginnis'
    
        return(dispatch)=>{
            dispatch(showLoading())
            return getInitialData()
            .then(({users,tweets})=>{
                dispatch(receiveUsers(users))
                dispatch(receiveTweets(tweets))
                dispatch(setAuthedUser(Authed_Id))
                dispatch(hideLoading())

            })
        }
    
}
