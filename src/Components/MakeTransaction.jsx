export default function MakeTransaction({makeTransaction,onFormChange,addTransaction})
{
    return(
        <div>
            <InputComponent
             type='text' 
             value={makeTransaction.id}
             name="id"
             title="Transaction ID"
             placeholder="Enter Transaction ID"
             onChange={(e)=>onFormChange(e)}                                                      
            />
            <InputComponent
             type='number' 
             value={makeTransaction.amount}
             name="amount"
             title="Enter Amount"
             placeholder="Enter Transaction Amount"
             onChange={(e)=>onFormChange(e)}                                                      
            />
            <InputComponent
             type='string' 
             value={makeTransaction.sender}
             name="sender"
             title="Transaction Sender"
             placeholder="Enter Sender"
             onChange={(e)=>onFormChange(e)}                                                      
            />
             <InputComponent
             type='string' 
             value={makeTransaction.receiver}
             name="receiver"
             title="Transaction Receiver"
             placeholder="Enter Receiver"
             onChange={(e)=>onFormChange(e)}                                                      
            />
            
            <button onClick={()=>addTransaction()}>Add Transaction</button>
        </div>
    )
}
function InputComponent({type,name,value,onChange,title,placeholder})
{  
    return(
    <div>
      <h3>{title}</h3>
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}/>
    </div>);
}