import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const DivForms = styled.div`
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
    }
    input[name="NrDDD"] {
  width: 80px;
  }
  input[name="NrTelefone"] {

  width: 300px;
  }
  }


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


export default function Cadastro() {
  let{id}=useParams()

    const[nUsuario,setNUsuario]=useState({
        idUsuario:id,
        nome:"",
        email:"",
        senha:"",
        cpf:"",
        dtNasc:"",
        NrDDD:"",
        telefone:""
    })

    let metodo = "post"

    if(id){
        metodo="put"
    }
   
    
  
    const handleChangeUsuario = e =>{
        setNUsuario({...nUsuario, [e.target.name]:e.target.value})
        
    }

    const handleSubmit = e =>{
        e.preventDefault()
        fetch(`http://localhost:8000/DroneIn/rest/usuario/${id? id : ""}`,{method: metodo,headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(nUsuario)}).then(()=>{
        // window.location = "/login"
        console.log(nUsuario)
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


  return (
    
      <DivForms>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
          <div className="column">
            <p>Nome*</p>
            <input type="text" name="nome" value={nUsuario.nome} onChange={handleChangeUsuario} maxLength="80"/>
            <p>CPF*</p>
            <input type="text" name="cpf" value={nUsuario.cpf} onChange={handleChangeUsuario} maxlength="11"/>
            <p>Telefone*</p>
            <div className="row">
             <input value=  {nUsuario.NrDDD}  onChange={handleChangeUsuario}type="tel" name="NrDDD" maxLength="2"/>
              <input value= {nUsuario.telefone}  onChange={handleChangeUsuario}type="tel" name="telefone" maxLength="9"/></div>
            </div><div className="column">
            <p>Data de nascimento*</p>
            <input 
            type="date" name="dataNascimento" min="1900-01-01" max="2022-10-11" />
            <p>Email*</p>
            <input type="email" name="email" value={nUsuario.email} onChange={handleChangeUsuario} maxLength="80"/>
            <p>Senha*</p>
            <input type="password" name="senha" value={nUsuario.senha} onChange={handleChangeUsuario} maxLength="80"/>
          </div>
          </div>
          <button id="cadastrar">Cadastrar</button>
        </form>
          <Link to="/login">Já tem uma conta? Clique aqui.</Link> 
          <Link to="/">
             <i className="fa-solid fa-arrow-left-long"></i>Voltar para a página
            inicial.
          </Link>
          <Link to="/users">Usuarios.</Link> 
      </DivForms>

  );
  }
