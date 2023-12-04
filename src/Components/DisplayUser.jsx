export default function DisplayUser({userLedger})
{
    return(
       <div>
        {userLedger.users.map(user=>{
            return(
                <div>
                    <div>Account Holder Name:{user.name}</div>
                    <div>Account Number:{user.number}</div>
                    <div>Starting Balance:{user.startingBalance}</div>
                    <div>Current Balance:{user.currentBalance}</div>
                    <hr/>
                </div>
                
            )
        })}
       </div>
    )
}