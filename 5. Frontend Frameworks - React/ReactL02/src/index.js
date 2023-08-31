import React from "react";
import ReactDOM from "react-dom";

const groceryList = (item1, item1Price, item2, item2Price, item3, item3Price) => {
    return (
        <ul>
            <li>{item1}</li>
            <ul>
                <li>{item1Price}</li>
            </ul>
            <li>{item2}</li>
            <ul>
                <li>{item2Price}</li>
            </ul>
            <li>{item3}</li>
            <ul>
                <li>{item3Price}</li>
            </ul>
        </ul>
    )
}

ReactDOM.render(groceryList("Apples", "$1.00/lb", "Oranges", "$.70/lb", "Mangos", "$2.00/lb")
    
    ,document.getElementById("root")
);
