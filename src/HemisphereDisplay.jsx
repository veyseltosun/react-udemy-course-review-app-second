import React from "react";
import northernPic from "./images/NorthernHemisphere.jpg";
import southernPic from "./images/SouthernHemisphere.jpg";

const hemisphereConfig = {
    Northern : {
        text: "it is northern hemisphere",
        picture: northernPic,
    },
    Southern: {
        text: "it is southern hemisphere",
        picture: southernPic,
    }
}

const HemisphereDisplay = ({ latitude }) => {
    const hemisphere = latitude > 0 ? "Northern" : "Southern";
    const {text, picture} = hemisphereConfig[hemisphere];
    


    return (
        <div>
            <div>

                {text}

            </div>
            <div>
                
                <img src={picture} alt="globe" />

            </div>

        </div>
    )
}

export default HemisphereDisplay;