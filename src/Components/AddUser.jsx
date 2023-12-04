export default function AddUser({addUserForm,onFormChange,addUser})
{
    return(
        <div>
            <InputComponent
             type='text' 
             value={addUserForm.name}
             name="name"
             title="Account Holder Name"
             placeholder="Enter Account Holder Name"
             onChange={(e)=>onFormChange(e)}                                                      
            />
            <InputComponent
             type='number' 
             value={addUserForm.number}
             name="number"
             title="Account Holder Number"
             placeholder="Enter Account Holder Number"
             onChange={(e)=>onFormChange(e)}                                                      
            />
            <InputComponent
             type='number' 
             value={addUserForm.startingBalance}
             name="startingBalance"
             title="Starting balance"
             placeholder="Enter Starting Balance"
             onChange={(e)=>onFormChange(e)}                                                      
            />
            
            <button onClick={()=>addUser()}>Add User</button>
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