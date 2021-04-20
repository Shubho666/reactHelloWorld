import React ,{useState,useEffect}from 'react';

// export default function Greet() {
//   return (
//     <div>
//     <h1>Hello Shubho</h1>
//     </div>
//   );
// }

const Greet = (props) => {
    const [count, setCount] = useState(0);
    const [timer,setTimer] = useState(Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTimer(Date());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    //changetime();
    ///setInterval(setTimer(Date()), 1000);
    return (
      <div>
        <h1>Hello today is {timer} {props.name}</h1>
        <button onClick={() => {setCount(count + 1);}}>Increase Count</button>
        <p>{count}</p>
      </div>
    );
}

// function changetime()
// {
//     setTimer(Date());
//     setInterval(changetime,1000);
// }

export default Greet
