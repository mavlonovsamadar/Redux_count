import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { valueres, decroment, incrument, reset  } from "./reducer/CountSlice";
import "./App.css"

function App() {

  const [message, setMessage] = useState('');

  const count = useSelector((state) => state.reducer.count)
  const dispatch = useDispatch()
  console.log(dispatch);


 
  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={5}>
            <h1 className="count">count :<p className="value">{count}</p> </h1>
            <input className="input" onChange={(e) =>setMessage(e.target.value) } placeholder="son" />
          <div className="both">
            <button className="count_btn" onClick={() => dispatch(decroment())}>decrement</button>
            <button className="count_btn" onClick={() => dispatch(incrument())}>increment</button>
          </div>
            <button className="count_1" onClick={() => dispatch(reset())}>reset</button>
            <button className="count_1" onClick={() => dispatch(valueres( Number(+message)))}>Amount</button>
          </Col>
        </Row>
      </Container>

    </>
  );
}
export default App;