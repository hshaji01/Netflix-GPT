import React from 'react'
import ChildData from './ChildData';

class User extends React.Component {
    constructor(){
        super();
        this.state = {name: "", email:""}
        console.log("Parent Contructor Called")
    }
    componentDidMount(){
        console.log("Parent Component Did Mount Called")
    }
    render() {
        const {name, email} = this.state;
        console.log("Parent Render Called")
        return(
            <div>
                <button onClick={()=>{
                    this.setState({name:"Harsha Shaji", email:"hshaji01@gmail.com"});
                }}>Click me</button>
                <ChildData childname ={name} childemail={email}/>
            </div>
            
        )

    }
}


export default User;