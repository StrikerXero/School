//TODO----I did it with objects and at line 69 closer to the example. I thought the example would be to many arguments and thought objects would be better.

import React from "react";
import ReactDOM from "react-dom";

const idaho = {
  state: "Idaho",
  population: "1.901 million",
  capital: "Boise",
};

const tennessee = {
  state: "Tennessee",
  population: "6.651 million",
  capital: "Nashville",
};

const maine = {
  state: "Maine",
  population: "1.331 million",
  capital: "Agusta",
};

const wisconsin = {
  state: "Wisconsin",
  population: "5.779 million",
  capital: "Madison",
};

const stateInfo = () => {
  return (
    <table>
      <caption>State Information</caption>
      <tr>
        <th>State</th>
        <th>Population</th>
        <th>Capital</th>
      </tr>
      <tr>
        <td>{idaho.state}</td>
        <td>{idaho.population}</td>
        <td>{idaho.capital}</td>
      </tr>
      <tr>
        <td>{tennessee.state}</td>
        <td>{tennessee.population}</td>
        <td>{tennessee.capital}</td>
      </tr>
      <tr>
        <td>{maine.state}</td>
        <td>{maine.population}</td>
        <td>{maine.capital}</td>
      </tr>
      <tr>
        <td>{wisconsin.state}</td>
        <td>{wisconsin.population}</td>
        <td>{wisconsin.capital}</td>
      </tr>
    </table>
  );
};

ReactDOM.render(stateInfo(), document.getElementById("root"));

// const stateInfo = (state1, pop1, cap1, state2, pop2, cap2, state3, pop3 , cap3, state4, pop4, cap4) => {
//     return (
//         <table>
//             <caption>State Information</caption>
//             <tr>
//                 <th>State</th>
//                 <th>Population</th>
//                 <th>Capital</th>
//             </tr>
//             <tr>
//                 <td>{state1}</td>
//                 <td>{pop1}</td>
//                 <td>{cap1}</td>
//             </tr>
//             <tr>
//                 <td>{state2}</td>
//                 <td>{pop2}</td>
//                 <td>{cap2}</td>
//             </tr>
//             <tr>
//                 <td>{state3}</td>
//                 <td>{pop3}</td>
//                 <td>{cap3}</td>
//             </tr>
//             <tr>
//                 <td>{state4}</td>
//                 <td>{pop4}</td>
//                 <td>{cap4}</td>
//             </tr>
//         </table>
//     )
// }

// ReactDOM.render(stateInfo('Idaho', '1.901 million', 'Boise', 'Tennessee', '6.651 million', 'Nashville', 'Maine', '1.331 million', 'Agusta', 'Wisconsin', '5.779 million', 'Madison'),
//     document.getElementById('root')
// );
