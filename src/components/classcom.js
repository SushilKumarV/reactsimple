import React,{Component} from 'react'
class Classcom extends Component{ 
    constructor(){
        super();
        this.state={
            loading:true,
            data:[]
        }
}
componentDidMount(){
    console.log("from component did mount");

    

}
changepara=()=>{
    setTimeout(()=>{
        this.setState({
            loading:true,
            data:[{name:'sam'},{name:'ram'},{name:'som'}]
        })
    },1000)
}
render(){
    console.log("from render")
    return(
        <div>
            {/* {this.state.loading && <p> Loading.....</p>} */}
            {
                this.state.data && this.state.data.map((obj)=>{
                    return <h1>{obj.name}</h1>
                }
                )
            }
            <button onClick={this.changepara}> Click me</button>
        </div>
    )
}
}
export default Classcom