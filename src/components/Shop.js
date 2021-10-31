import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'
import { useSelector } from 'react-redux'
const Shop = () => {
    const amount = useSelector(state => state.amount)
    const dispatch=useDispatch()
    const {depositMoney,withdrawMoney}=bindActionCreators(actionCreators,dispatch)
    return (
        <div>
            <h2> deposit /withdraw money</h2>
            <button className="btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
             updated balance {amount}
            <button className="btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
        </div>
    )
}

export default Shop
