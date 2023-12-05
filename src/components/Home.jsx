import React from 'react'
import { useState, useEffect} from 'react';
import Button from './Button';
import Title from './Title';

export default function Home() {
    const [count, setCount] = useState(0);
    const [numberColor, setNumberColor] = useState();

    useEffect(() => {
        if (count < 0) {
            setNumberColor("red");
        } 
        if (count > 0) {
            setNumberColor("yellow");
        }
        if (count === 0) {
            setNumberColor("white");
        }
    }, [count]);
  return (
    <>
      <section className="counter-sec --flex-center">
        <div className="container counter --card --center-all">
          {/* <h1 className="--text-light">React Counter App</h1> */}
          < Title text="React Counter App" color="white"/>
          <p className='count --my2 --text-md --fw-bold' style={{color:numberColor}} >{count}</p>
          <div className="buttons">
            < Button 
                classes={"danger"}
                text={"- Subtract"}
                onClick={() => setCount(count - 1)}
            />
             < Button 
                text={"Reset"}
                onClick={() => setCount(0)}
            />
             < Button 
                classes={"success"}
                text={"+ Add"}
                onClick={() => setCount(count + 1)}
            />
          </div>
        </div>
      </section>
    </>
  )
}
