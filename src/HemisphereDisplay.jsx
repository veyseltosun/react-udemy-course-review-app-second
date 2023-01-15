import React from "react";
import northernPic from "./images/NorthernHemisphere.jpg";
import southernPic from "./images/SouthernHemisphere.jpg";
import "./Hemisphere.css";

const hemisphereConfig = {
    Northern: {
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
    const { text, picture } = hemisphereConfig[hemisphere];



    return (
        <div className={hemisphere}>
            <div className="ui raised text container segment">
                <div className="image">

                    <img src={picture} alt="globe" />

                </div>
                <div className="ui teal bottom attached label" >
                    <h1>{text}</h1>
                </div>

             

            </div>

        </div>
    )
}

export default HemisphereDisplay;