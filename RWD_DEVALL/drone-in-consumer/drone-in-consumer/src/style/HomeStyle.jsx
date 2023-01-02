import styled from "styled-components";

const MainHome = styled.main`
  #principal {
    height: 90vh;

    div {
      position: absolute;
      margin: 25vh 15%;
      display: flex;
      width: 320px;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5em;
      font-size: 1.5em;
      color: #FFF;

      h1 {
        font-size: 2em;
      }
      p {
        font-family: "Montserrat", sans-serif;
      }
      a {
        padding: 0.3em 0.8em;
        border: 1px solid #fff;
        border-radius: 0.5em;
        transition: all 0.3s;
        color: #FFF;
      }
      a:hover {
        background-color: #fff;
        border-radius: 0.5em;
        color: #3a0ca3;
      }
    }

    img {
      margin: 5vh 0 0;
      float: right;
      height: 100vh;
      filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.25));
    }
  }

  #tutorial {
    background-color: #fff;
    padding: 16vh 15%;
    text-align: center;

    h1 {
      color: #3a0ca3;
      font-size: 3em;
    }

    div {
      padding: 10vh 0;
      display: flex;
      justify-content: space-between;

      img {
        height: 18vh;
      }

      p {
        color: #3a0ca3;
        font-size: 1.8em;
        padding-top: 3vh;
      }
    }

    p {
      color: #3a0ca3;
      font-size: 1.2em;
    }
  }

  #vantagens {
    padding: 8vh 15%;
    text-align: center;
    background-color: #00000050;
    color: #FFF;

    h1 {
      font-size: 3em;
    }

    div {
      padding: 4vh 0;
      display: flex;
      justify-content: center;
      gap: 3vh;

      article {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1vh;
        padding: 2vh;
        border: 2px solid #fff;
        border-radius: 20px;
        max-width: 42vh;
        font-size: 1.5em;
      }

      img {
        height: 18vh;
      }

      h2 {
        font-size: 1.5em;
      }
    }
  }
`;

export default MainHome;
