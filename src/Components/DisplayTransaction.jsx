import React,{useState} from 'react';
import {transactionStates} from '../Controller/controller'
//import {Update} from './MainComponent'
// const[chandrus,setChandrus]=useState('');

export default function DisplayTransaction({transactionLedger})
{
    const[transactions,setTransactions]=useState(transactionLedger.transactions)
    const handleApproveTransaction=(id)=>{
    const updatedTransactions=transactions.map((transaction)=>{
     if(id===transaction.id)
     {
        transaction.updateTransaction(transactionStates.successful)
     }
     return transaction;
    }
    ) 
    setTransactions(updatedTransactions)
    }
    const handleCancellTransaction=(id)=>{
        const updatedTransactions=transactions.map((transaction)=>{
         if(id===transaction.id)
         {
            transaction.updateTransaction(transactionStates.cancelled)
         }
         return transaction;
        }
        ) 
        setTransactions(updatedTransactions)
        }
    console.log(transactionLedger);
    return(
       <div>
        {transactionLedger.transactions.map((transaction)=>{
            return(
                <div>
                    <div key={transaction.id}>
                    <div>ID:{transaction.id}</div>
                    <div>Amount:{transaction.amount}</div>
                    <div>Sender:{transaction.sender}</div>
                    <div>Receiver:{transaction.receiver}</div>
                    <div>Transaction status:{transaction.status}</div>
                    <button disabled={transaction.status===transactionStates.successful} onClick={()=>handleApproveTransaction(transaction.id)}>Approve Transaction</button> 
                    <button disabled={transaction.status===transactionStates.cancelled} onClick={()=>handleCancellTransaction(transaction.id)}>Cancell Transaction</button>
                    </div>
                    <hr/>
                </div> 
            )
        })}
       </div>
    )
}
//transaction.updateTransaction(transactionStates.successful)
//onClick={()=>Update(transactionStates.successful)}