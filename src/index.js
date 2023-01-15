import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component{
    constructor(props) {
        super(props)
        this.state= { latitute: 25}
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({latitute: position.coords.latitude})
            },
            (error) => console.log(error),           
        );
    }
    render(){
     
      return(
        <div>
            {this.state.latitute}
        </div>
      )  
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)