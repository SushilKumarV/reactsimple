import React, { useState } from 'react'

function Todofunction(){
    //using state
    const  [todo,todoupdatevalue]=useState({todos:[]})
    const  [input,updateinput]=useState({inputs:''})

    //event listener
    function inputvalue(e){
        updateinput({inputs:e.target.value})
        console.log(e.target.value)
       // console.log(input)
}
//creaing variable and insert the varible value in task
function inputHandler(){
    var name={
               id:Date.now(),
               task:input.inputs,
               completed:false
             }
             
             todoupdatevalue({todos:todo.todos.concat(name),

            })
            updateinput({inputs:''
            
            })

             
}
function strikeout(tasid){
   var  updatetodo=todo.todos;
   var findIndex=updatetodo.findIndex((obj)=>obj.id===tasid);
   updatetodo[findIndex].completed=!updatetodo[findIndex].completed
   todoupdatevalue({todos:updatetodo})
      

}


return(
<>
    <div>
<input onChange={(e)=>inputvalue(e)}
value={input.inputs}/>
<button  onClick={inputHandler}>ADDME</button>
</div>
<div>
         {todo.todos && <div>{todo.todos.map(
             (tas,ind)=>{return(<div key={ind}><p className={tas.completed?'strike':null} 
             onClick={()=>strikeout(tas.id)}>{tas.task}</p></div>)})}</div>}
</div>
</>
)
}
export default  Todofunction;