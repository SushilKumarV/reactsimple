import React,{useState} from "react"
function FunCom(){
    var [value,setvalue] = useState('hello')
    var changepara = () =>{
        setvalue("thankyou")
    }
    return(
        <div>
            <p>{value}</p>
            <button onClick={changepara}>Click here</button>
        </div>
    )
}
export default FunCom