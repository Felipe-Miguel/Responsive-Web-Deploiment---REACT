import styled from "styled-components";

const DivForm = styled.div`
  background-color: white;
  padding: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  border-radius: 20px;

  h1 {
    color: #3a0ca3;
    font-size: 2em;
    padding-bottom: 10px;
  }

  a, p {
    color: #3a0ca3;
  }

  a:active {
    text-shadow: 0px 0px 1px #3a0ca3;
  }

  input[type="email"],
  input[type="password"],
  input[type="text"],
  input[type="tel"],
  input[type="date"],
  input[type="number"] {
    width: 100%;
    height: 45px;
    border: 1px solid #3a0ca3;
    padding-left: 10px;
    margin: 10px 0px;
    border-radius: 10px;
    font-size: 1.2em;
    color: #3a0ca3;
  }

  input[type="submit"] {
    width: 100%;
    height: 45px;
    cursor: pointer;
    background: #3a0ca3;
    color: #FFF;
    border: 0;
    margin-top: 10px;
    border-radius: 10px;
    transition: 0.5s;
    font-size: 1.5em;
  }

  input[type="submit"]:hover {
    background-color: #7209B7;
  }

    input::placeholder {
        color: #3a0ca3;
    }

    input:focus {
      border: 1px solid #FFF
    }

  button {
    padding: 0.6rem 1.2rem;
    background-color: #888;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    opacity: 0.9;
    font-size: 1rem;
    transition: 0.35s;
    width: 70%;
    padding: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  button:hover {
    opacity: 1;
  }

  .row {
    display: flex;
    gap: 20px
  }

  .column {
    input[type="email"],
    input[type="password"],
    input[type="text"],
    input[type="tel"],
    input[type="date"] {
        width: 400px;
    }}


    #cadastrar {
    width: 100%;
    height: 45px;
    cursor: pointer;
    background: #3a0ca3;
    color: #FFF;
    border: 0;
    margin-top: 10px;
    border-radius: 10px;
    transition: 0.5s;
    font-size: 1.5em;
    font-family: 'Barlow', sans-serif;
  }
    #cadastrar:placeholder {
        color: #3a0ca3;
    }
    #cadastrar:hover {
    background-color: #7209B7;
  }

`;

export default DivForm;
