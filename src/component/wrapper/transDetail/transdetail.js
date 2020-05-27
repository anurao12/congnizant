import React from 'react';
import './transdetail.style.css'

export const TransDetail =(props)=>{
return(
<div className='detail'>
<p>{props.transaction.amount}</p>
<p>{props.transaction.fromAccount}</p>
<p>{props.transaction.time}</p>
<p>{props.transaction.toAccount}</p>
</div>
)
}
