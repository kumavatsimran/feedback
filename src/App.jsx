import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

function App() {
  let [star, setStar] = useState(0);
  let [Feedback, setFeedbak] = useState({});
  let [list, setList] = useState([]);
  let handle = (star) => {
    setStar(star);
    console.log(star)
    let feed = { ...Feedback, ['star']: star };
    setFeedbak(feed);
    console.log(feed)
  }
  let handleChnage = (e) => {
    let { name, value } = e.target;
    let feed = { ...Feedback, [name]: value };
    setFeedbak(feed)
    console.log(feed)
  }
  let handlesubmit = (e) => {

    e.preventDefault();
    let Listfeed = [...list, Feedback];
    setList(Listfeed)
    setStar(0);
    setFeedbak({});

  }
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Feedback</h1>
        <form action="" method='post'>
          <table border={1} cellPadding={5} align='center'>
            <tr><td>rating:</td>
              <td> {[1, 2, 3, 4, 5].map((v, i) => (
                <FaStar key={i} color={star >= v ? "yellow" : "gray"} onMouseOver={() => handle(v)} />

              ))}</td>
            </tr>
            <tr><td>message:</td>
              <td>
                <textarea name='feedback' onChange={handleChnage} value={Feedback.feedback || ""}></textarea>
              </td></tr>
            <tr>
              
              <td></td>
              <td><button type='submit' onClick={handlesubmit}>submit</button></td></tr>
          </table>




        </form>
        <div className='outerbox'>
          {list.map((val, i) => (
            <div className="box" key={i}>
              <h2>star</h2>
              <div>
                {[1, 2, 3, 4, 5].map((v, i) => (
                  <FaStar color={val.star >= v ? "yellow" : "gray"} />
                ))}
              </div>
              <h2>discribtion</h2>
              <p>{val.feedback}</p>
            </div>
          ))}

        </div>
     
      </div>

    </>
  )
}

export default App
