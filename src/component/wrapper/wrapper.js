import React from 'react';
import {TransDetail} from './transDetail/transdetail'
import './wrapper.style.css'

export const Wrapper = (props)=>{
return(
    <div className='wrap'>
{props.transactions.map(transaction=>(
    <TransDetail key={transaction.transaction_id} transaction={transaction}/>
))
}
</div>
);
}
