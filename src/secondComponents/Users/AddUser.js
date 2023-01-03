import React from "react";

const AddUser = props => {
 const AddUserHandler =(event)=>{
event.preventDefault();
 }

return(
    <form onSubmit={AddUserHandler}>
        <lable htmlFor="username">Username</lable>
        <input type="text" id="username" />
        <lable htmlFor="username">Age(Years)</lable>
        <input type="number" id="Age" />
        <button type="submit"> AddUser</button>
    </form>
)
}

export default AddUser;