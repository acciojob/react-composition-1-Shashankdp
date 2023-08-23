import React, { useState } from "react";


const Tabs = ({props}) => {
    // console.log(props);
    const [displayTab, setDisplayTab] = useState("");

    return (
        <div>
            <ul>
                {
                    props.map((obj) => (
                        <li onClick={() => setDisplayTab(obj.title)}>{obj.title}</li>
                    ))
                }
            </ul>
            {
                displayTab && <p>This is the content for {displayTab}</p>
            }
        </div>
    )
}

export default Tabs;