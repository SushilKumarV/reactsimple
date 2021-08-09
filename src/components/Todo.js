import React, {Component} from 'react'
class Todo extends Component{
    constructor(){
        super();
        this.state={
            todolists:[],
            input:""
        }
        this.inputHandler=this.inputHandler.bind(this)
        this.addTodolist=this.addTodolist.bind(this)
    }
    inputHandler(e){
        this.setState({
            input:e.target.value
        })
    }
    addTodolist(){
        var newList={
            id:Date.now(),
            task:this.state.input,
            completed:false
        }
        this.setState({
            todolists:this.state.todolists.concat(newList),
            input:""
        })
    }
    toggleComplete(taskId){
        var UpdatedList=this.state.todolists
        var findIndex=UpdatedList.findIndex((obj)=>obj.id=== taskId);
        UpdatedList[findIndex].completed=!UpdatedList[findIndex].completed;
        this.setState({
            todolists:UpdatedList
        })
    }
    render(){
        return(
            <>
            <div>
                <input onChange={(e)=>this.inputHandler(e)}value={this.state.input}/>
                <button onClick={this.addTodolist}>Add</button>
            </div>
        {
            this.state.todolists&&(
                <div>
                    {
                        this.state.todolists.map((tasks,ind)=>{
                            return(<div key={ind}>
                                <p className={tasks.completed?'strike':null}onclick={()=>this.toggleComplete(tasks.Id)}>{tasks.task}</p>
                                </div>)

                        })
                    }
                </div>
            )
        }
        </>
        )
    }
}
export default Todo