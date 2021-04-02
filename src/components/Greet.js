import React ,{useState}from 'react';

// export default function Greet() {
//   return (
//     <div>
//     <h1>Hello Shubho</h1>
//     </div>
//   );
// }

const Greet = (props) => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <h1>Hello {props.name}</h1>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        <p>{count}</p>
      </div>
    );
}

export default Greet
