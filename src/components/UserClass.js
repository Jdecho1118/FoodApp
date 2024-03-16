import React from "react";

class userClass extends React.Component {
    constructor(){
        super();
        this.state={
            userData :{
                name:"dummyName",
                login : "dummy ID",
                public_repos: 0
            }
        }
        // console.log("Child constructor called" +this.props.name)
    }

    async componentDidMount(){
        // console.log("Child componentDidMount called" +this.props.name);
        // API call//
        const data =await fetch(" https://api.github.com/users/jdecho1118");
        const json = await data.json();
        console.log("userData" , json);
        this.setState({
            userData : json
        })

    }

    render(){
        // console.log("child render called"+this.props.name);
        const{name, public_repos, login} =this.state.userData;
        return(
            <div className="p-4 border border-secondary">
                <h2 className="text-danger">Class based component</h2>
        <div>Name : {name}</div>
        <div>Id : {login}</div>
        <div>Count  : {public_repos}</div>
        </div>
        )
    }
}

export default userClass;