import React from "react";

class ChildData extends React.Component {
    constructor(props) {
        super(props);
        console.log("Child Constructor Called");
    }
    componentDidMount(){
        console.log("Child Component Did Mount Called");
    }
    render(){
        const {childname, childemail} = this.props;
        console.log("Child Render Called");
        return(
            <div>
                <p>{childname}</p>
                <p>{childemail}</p>
            </div>
        )
    }

}

export default ChildData;