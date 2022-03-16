import React, { Component } from "react";
import img from "./IMG/naruto1.png";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  color:green;
}
`;

const Body = styled.body`
  background-image: url(${img});
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

const Division = styled.button`
  font-size: 1.8em;
  border: none;
  padding: 6px;
  margin: 0.2em;
  border-radius: 10px;
  margin-top: 30px;
  background-color: rgb(223, 202, 176);
`;
const Main = styled.div`
  height: 80vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: yellow solid 2px;
  border-radius: 30px;
  box-shadow: 3px 3px 2px rgba(83, 5, 5, 0.8);
  margin-left: 20%;
`;
const TituloUm = styled.h1`
  color: rgba(83, 5, 5, 0.8);
  margin-bottom: 15px;
`;

const TituloDois = styled.h2`
  color: rgb(231, 231, 182);
  margin-bottom: 15px;
`;
const Input = styled.input`
  font-size: 3vw;
  border-radius: 10px;
`;
const BoxInput = styled.section`
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

class Calculadora extends Component {
  state = {
    n1: "",
    n2: "",
    res: ""
  };

  handleChange1 = (e) => {
    this.setState({
      n1: Number(e.target.value)
    });
  };

  handleChange2 = (e) => {
    this.setState({
      n2: Number(e.target.value)
    });
  };

  div = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 / n2
      });
    } else {
      this.setState({
        res: "no value."
      });
    }
  };

  mult = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 * n2
      });
    } else {
      this.setState({
        res: "no value."
      });
    }
  };

  sub = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 - n2
      });
    } else {
      this.setState({
        res: "no value."
      });
    }
  };

  som = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 + n2
      });
    } else {
      this.setState({
        res: "no value."
      });
    }
  };

  clear = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: null,
        n1: 0,
        n2: 0
      });
    } else {
      this.setState({
        res: "no value."
      });
    }
  };

  render() {
    return (
      <Body>
        <GlobalStyle />
        <Main>
          <TituloUm>React App Calc</TituloUm>
          <TituloDois>{this.state.res}</TituloDois>
          <BoxInput>
            <Input
              value={this.state.n1}
              type="number"
              onChange={this.handleChange1}
            />
            <Input value={this.state.n2} onChange={this.handleChange2} />
          </BoxInput>
          <div>
            <Division onClick={this.div}>/</Division>
            <Division onClick={this.mult}>*</Division>
            <Division onClick={this.sub}>-</Division>
            <Division onClick={this.som}>+</Division>
            <Division onClick={this.clear}>ERASE</Division>
          </div>
        </Main>
      </Body>
    );
  }
}

export default Calculadora;
