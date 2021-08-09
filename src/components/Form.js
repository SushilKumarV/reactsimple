import { render } from '@testing-library/react'
import react ,{Component} from 'react'
class Form extends Component{
    constructor(){
        super();
        this.state={
            sname:'',
            age:'',
            dept:'',
            cour:'',
            add:'',
            phone:'',
        }
    }
   
        
    
    fname=(e)=> {
        this.setState({
        [e.target.name]: e.target.value
    })
    }


render(){
    return(<div>
        <form>
            <center>Student Login</center>
            <label>Name</label><input onChange={(e)=>this.fname(e)} name='sname' value={this.state.sname}/>
            <label>DOB</label><input onChange={(e)=>this.fname(e)} name='age' value={this.state.age}/>
            <label>Department</label><input onChange={(e)=>this.fname(e)} name='dept' value={this.state.dept}/>
            <label>Course</label><input onChange={(e)=>this.fname(e)} name='cour' value={this.state.cour}/>
            <label>Address</label><input onChange={(e)=>this.fname(e)} name='add' value={this.state.add}/>
            <label>Mobile</label><input onChange={(e)=>this.fname(e)} name='phone' value={this.state.phone}/>
            <button>Submit</button>

        </form>
    </div>)
}
}
export default Form 
