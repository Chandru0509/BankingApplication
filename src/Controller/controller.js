// App => Banking application transfer money between users, account statement, amount added to account
// User => User details , AccountDetails, Transaction Details
// Transaction Details => 2 User details , AccountDetails, Transaction Details

// User => name, account Number , starting Balance, current balance,transaction id
//transaction => transaction id, amount,sender,receiver,data,time
// userData =[user1,user2,user3,user4,user5,user6]
// transactionData=[transaction1, transaction2 , transaction3 ,transaction4]
 
// var user1={
//     name:'Entri-B11',
//     accountNumber:123456789,
//     startingBalance:10000,
//     currentBalance:10000,
//     transactions:[]
// }

// var transaction={
//     id:1,
//     amount:1000,
//     sender:"Entri-B11",
//     receiver:"Entri-B10",
//     date:new Date()
// }



export function User(name,accountNumber,startingBalance,currentBalance){
     this.name=name;
     this.accountNumber=accountNumber;
     this.startingBalance=startingBalance;
     this.currentBalance=currentBalance;
}

export function UserLedger()
{
this.users=[];
}

User.prototype.creditBalance=function(amount){
    if(amount>0) {this.currentBalance+=amount;}
    else {
        throw Error({message:"Invalid amount"})
    }
    return "Amount Credited Succesfully, Your Current balance"+this.currentBalance;
}
UserLedger.prototype.addUser=function(user)
{
    if(user instanceof User)
    {
        this.users.push(user);
    }
    else{
        throw Error({message:"User not valid"});
    }
    return "User successfully added";
}
 

 export const transactionStates={
    pending:"PENDING",
    successful:"SUCCESSFUL",
    failure:"FAILURE",
    cancelled:"CANCELLED"
}
function changeTransactionType(type){
    var objectData=Object.keys(transactionStates);
    var fil=objectData.filter(data=>
        transactionStates[data]===type);
    return fil.length>0;
}
 Transaction.prototype.updateTransaction=function(type)
{
    if(changeTransactionType(type))
    {
        this.status=type;
        console.log("this.status");  
    }
    else{
        throw new Error("Transaction Type Not matching");
    }
}

export  function Transaction(id,amount,sender,receiver)
{
    this.id=id;
    this.amount=amount;
    this.sender=sender;
    this.receiver=receiver;
    this.status=transactionStates.pending;
    this.date=new Date().toISOString();
    // if(changeTransactionType(type))
    // {
    //     this.status=type;
    //     console.log("hi")  
    // }
    // else{
    //     throw new Error("Transaction Type Not matching");
    // }
}

export function TransactionLedger(){
               this.transactions=[];
}

TransactionLedger.prototype.addTransaction=function(transaction)
{
    if(transaction instanceof Transaction)
    {
      this.transactions.push(transaction);
    }
    else{
        throw new Error({message:"Transaction type must be Transaction"})
    }
    return "Transactions added successfully";
}
TransactionLedger.prototype.getSuccessfulTransactions=function()
{
    var fil=this.transactions.filter(transaction=>{
        return 'SUCCESSFUL'===transaction.status;
    })
    return fil;
}
Transaction.prototype.addToLedger=function(ledger)
{
    if(ledger instanceof TransactionLedger)
    {
        ledger.addTransaction(this)
        
    }
}












































































































