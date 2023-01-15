import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component{
    constructor(props) {
        super(props)
        this.state= { latitute: "", errorMessage:''}
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({latitute: position.coords.latitude})
            },
            (error) => {
                this.setState({errorMessage:error.message})
            }         
        );
    }
    render(){
    if(this.state.errorMessage && !this.state.latitute) {
        return <div>{this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.latitute){
        return <div>{this.state.latitute}</div>
    }
    else {
        return <div>Loading...</div>
    }
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)