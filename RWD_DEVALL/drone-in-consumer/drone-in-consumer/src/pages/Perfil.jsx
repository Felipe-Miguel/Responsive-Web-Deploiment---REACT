import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Menu from "../components/MenuUsuario";

export default function Perfil() {
  const DivPerfil = styled.main`
    background-color: #fff;
    padding: 15vh 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 90vh;
    font-size: 1.8em;

    h1 {
      font-size: 0.8em;
      color: #7209b7;
    }
    .row {
      display: flex;
      justify-content: space-between;
    }

    input[type="password"] {
      width: 70%;
      height: 45px;
      border: 1px solid #3a0ca3;
      border-radius: 10px;
      color: #3a0ca3;
    }
    
    input[type="submit"] {
    width: 20%;
    cursor: pointer;
    background: inherit;
    color: #3a0ca3;
    border: 0;
    transition: 0.5s;
    font-size: 0.8em;
    font-weight: bold;
  }

  input[type="submit"]:hover {
    color: #7209B7;
  }
  `;
  let{id}=useParams()

  const[nUsuario,setNUsuario]=useState({
      idUsuario:id,
      nome:"",
      email:"",
      senha:"",
      cpf:"",
      dtNasc:""
  })

  let metodo = "post"

  if(id){
      metodo="put"
  }
 
  

  const handleChange = e =>{
      setNUsuario({...nUsuario, [e.target.name]:e.target.value})
  }

  const handleSubmit = e =>{
      e.preventDefault()
      fetch(`http://localhost:8000/DroneIn/rest/usuario/${id? id : ""}`,{method: metodo,headers:{
          "Content-Type":"application/json"
      },
      body: JSON.stringify(nUsuario)}).then(()=>{
       window.location = "/perfil"

  });
}

  useEffect(()=>{
      if(id){
          fetch(`http://localhost:8000/DroneIn/rest/usuario/${id}`)
          .then((resp)=>{
              return(resp.json())
          }).then(data=>{
              setNUsuario(data)
          });
        }
      
  },[id])


  return(
    <>
      <Menu />
      <DivPerfil>
        <div>
          <h1>Nome</h1>
          <p>Pedro Paulo Alcantra</p>
          <h1>CPF</h1>
          <p>12345678910</p>
          <h1>Data de nascimento</h1>
          <p>20/01/2001</p>
          <h1>Telefone</h1>
          <p>11999999999</p>
          <h1>Email</h1>
          <p>pedrinhobolinha04@gmail.com</p>
          <h1>Alterar Senha</h1>
          <form className="row">
            <input value={nUsuario.senha} onChange={handleChange} type="password" name="senha" />
            <input onSubmit={handleSubmit} type="submit" name="acao" value="Alterar" />
          </form>
        </div>
      </DivPerfil>
    </>
  );
}
