import {transactionStates} from '../Controller/controller'

export default function DisplayTransaction({transactionLedger})
{
    return(
       <div>
        {transactionLedger.transactions.map(transaction=>{
            return(
                <div>
                    <div>ID:{transaction.id}</div>
                    <div>Amount:{transaction.amount}</div>
                    <div>Sender:{transaction.sender}</div>
                    <div>Receiver:{transaction.receiver}</div>
                    <div>Transaction status:{transaction.status}</div>
                    <button disabled={transaction.status===transactionStates.successful} onClick={()=>transaction.updateTransaction(transactionStates.successful)}>Approve Transaction</button>
                    <button disabled={transaction.status===transactionStates.cancelled} onClick={()=>transaction.updateTransaction(transactionStates.cancelled)}>Cancell Transaction</button>

                    <hr/>
                </div> 
            )
        })}
       </div>
    )
}