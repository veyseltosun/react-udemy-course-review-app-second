import React from "react";


const HemisphereDisplay = ( props ) => {
    console.log(props.latitude)
    return(
        <div>
            Hey you are in the Northern hemisphere !
        </div>
    )
}

export default HemisphereDisplay;