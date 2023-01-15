import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component{
    constructor(props) {
        super(props)
        this.state= { latitute: 25, errorMessage:''}
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
     
      return(
        <div>
            {this.state.latitute}
            {this.state.errorMessage}
        </div>
      )  
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)