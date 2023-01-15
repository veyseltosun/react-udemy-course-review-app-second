import React from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay";


class App extends React.Component{
    constructor() {
        super()
        this.state = { latitude: null, errorMessage: '' }
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({latitude: position.coords.latitude})
            },
            (error) => {
                this.setState({errorMessage:error.message})
            }         
        );

    }
    render(){
    if(this.state.errorMessage && !this.state.latitude) {
        return <div>{this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.latitude){
        return <HemisphereDisplay latitude={this.state.latitude} />
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