import React from 'react';
import preloader from "../../../assest/Preloader.svg";

let Preloader = (props) => {
    return <div  style={ { margin: "0 auto"} }>
        <img src={preloader} />
    </div>
}

export default Preloader;