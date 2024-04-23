// import { SetLocalStorage } from "./SetLocalStorage";
import { useEffect, useState } from "react"

export const Edit= () => {

  function Edit_button(){
  const [edit,useEdit]=useState([])

  edit =document.querySelector("list-group-item")
  
  const editnewitem=useEffect()
if(edit)
{
  editnewitem = prompt("Edit task:",edit.textContent);
  if(editnewitem!==null){
edit.textContent=useEffect;

  }

} 
 else {
  alert("Please select a task to edit.");
}

}
  return (
    <>
    
<button className="btnadditem2" id="Edit_button" onClick={Edit_button}>Edit</button> 


{/* <SetLocalStorage/> */}

    </>
  )
}
