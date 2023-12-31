// import {useState,useEffect} from 'react';
import React from 'react';
import AddUser from './AddUser';
import DisplayUser from './DisplayUser' ;
import {User,UserLedger,transactionStates,Transaction,TransactionLedger} from '../Controller/controller';
import MakeTransaction from './MakeTransaction';
import DisplayTransaction from './DisplayTransaction';
import {useState} from 'react';
import {useEffect} from 'react';

const components={
    addUser:"ADD USER",
    displayUser:"DISPLAY USER",
    makeTransaction:"MAKE TRANSACTION",
    displayTransaction:"DISPLAY TRANSACTION"
}

function MainComponent()
 {
  const[addUserForm,setAddUserForm]=useState({
    name:"",
    number:0,
    startingBalance:0,
    currentBalance:0,
  })  
  const[activeComponent,setActiveComponent]=useState(components.addUser);
  const [userLedger,setUserLedger]=useState(new UserLedger())
  const[makeTransaction,setMakeTransaction]=useState({
    id:"",
    amount:0,
    sender:"",
    receiver:"",
    status:transactionStates.pending,
    date : new Date().toISOString(),
   
  })
  const[transactionLedger,setTransactionLedger]=useState(new TransactionLedger())
  function formChange(e)
  {
    var tempObj={...addUserForm,[e.target.name]:e.target.value};
    setAddUserForm(tempObj);
    console.log("exe");
  }

  function transactionFormChange(e){
    var tempObj={...makeTransaction,[e.target.name]:e.target.value};
    setMakeTransaction(tempObj);
    console.log("exe")
  }

  function changeActiveComponent(cmp)
  {
    setActiveComponent(cmp);
  }
  function addUser()
  {
    const user=new User(addUserForm.name,addUserForm.number,addUserForm.startingBalance,addUserForm.startingBalance);
    userLedger.addUser(user);
    setUserLedger(userLedger);
    console.log(userLedger)
  }
  function addTransaction()
  {
    const transaction=new Transaction(makeTransaction.id,makeTransaction.amount,makeTransaction.sender,makeTransaction.receiver);
    transaction.addToLedger(transactionLedger);
    // transactionLedger.addTransaction(transaction);
    setTransactionLedger(transactionLedger);
    console.log("tyyyy")
  }
  useEffect(()=>{
   
  },[userLedger])
  useEffect(()=>{
   console.log("main")
  },[transactionLedger])

  // const[,updateState]=useState();
  // const forceUpdate=React.useCallback(()=>updateState(),console.log("force"),[]);
  // function update(type){
  //  updateTransaction(type);
  //  //setTransactionLedger(makeTransaction)
  // }

  // useEffect(()=>{
  //   // setTransactionLedger(transactionLedger)
  //   setMakeTransaction(makeTransaction);
  // },[transactionLedger])
  // useEffect(()=>{
   
  // },[makeTransaction])
  // useEffect(()=>{
   
  // },[setMakeTransaction])
  // setTransactionLedger(Transaction);
  // useEffect(()=>{
  //  setMakeTransaction(Transaction());
  // },[transactionLedger])
  
//  setTransactionLedger(makeTransaction);


    return(
        <div style={{margin:"5% 10%"}}>
            <h1 style={{textAlign:"center"}}>Entri Bank -B11 Branch</h1>
            <div style={{display:"flex", width:"100%", justifyContent:"center", alignItems:"center"}}>
                <button style={{margin:"2% 3%"}} 
                onClick={()=>changeActiveComponent(components.addUser)}>Add User</button>
                <button style={{margin:"2% 3%"}}
                onClick={()=>changeActiveComponent(components.displayUser)}>Display User</button>
                <button style={{margin:"2% 3%"}}
                onClick={()=>changeActiveComponent(components.makeTransaction)}>Make Transaction</button>
                <button style={{margin:"2% 3%"}}
                onClick={()=>changeActiveComponent(components.displayTransaction)}>Display Transaction</button>
            </div>
            <div style={{border:"1px solid black", minHeight:"500px",width:"100%"}}>
             {activeComponent===components.addUser && <AddUser onFormChange={formChange} addUserForm={addUserForm} addUser={()=>addUser()}/>}
             {activeComponent===components.displayUser && <DisplayUser userLedger={userLedger}/>}
             {activeComponent===components.makeTransaction && <MakeTransaction makeTransaction={makeTransaction} onFormChange={transactionFormChange}
                addTransaction={()=>addTransaction()}/>}
             {activeComponent===components.displayTransaction && <DisplayTransaction transactionLedger={transactionLedger}/>}
            </div>
        </div>
    )
 }
 export default MainComponent;