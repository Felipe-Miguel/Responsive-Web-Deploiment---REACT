import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import styled from "styled-components"
import Cadastro from "./Cadastro"

const DivLista = styled.div`
    width: 70%;
    margin: auto;
    font-family: Arial, Helvetica, sans-serif;
    a{text-decoration:none;padding:10px 15px; margin-bottom:20px;background-color:yellowgreen;color:white;display:inline-block;}
    table{width:100%;margin:auto;}
    thead tr{background-color:darkblue;color:white;}
    thead tr th{padding:10px;}

    tbody tr:nth-child(2n+2){background-color:gray;}
    tbody tr td a{background-color:none; margin-bottom:5px;color:blue}
    tbody tr td button{color: red;background-color:none;border:none;}

    tfoot tr td{text-align:center;background-color:#333;color:white}
`
export default function ListaUsuarios(){

    const[usuarios,setUsuarios]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8000/DroneIn/rest/usuario").then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            setUsuarios(resp)
        }).catch((error)=>{
            console.log(error)
        })
    },[])

    const handleDelete = (id)=>{
        fetch(`http://localhost:8000/DroneIn/rest/usuario/${id}`,{
            method:"delete"
        }).then(()=>{
            window.location ="/"
        }).catch((error)=>{
            console.log(error)
        })
    }

    return(
        <DivLista> 
            <h1>Lista Usuarios</h1>

            <Link to="/cadastro">Inserir Usuario</Link>
            <table border={1}>
                <thead>
                    <tr>
                        <th>nome</th><th>email</th><th>senha</th><th>cpf</th><th>dtNasc</th><th></th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario)=>(
                        <tr key={usuario.idUsuario}>
                            <td>{usuario.nome}</td><td>{usuario.email}</td><td>{usuario.senha}</td><td>{usuario.cpf}</td><td>{usuario.dtNasc}</td><td>
                            <Link to={`/editar/${usuario.idUsuario}`}>editar</Link>
                            <button onClick={handleDelete.bind(this,usuario.idUsuario)}>deletar</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
                <tfoot><tr><td colSpan='7'>Usuarios do Servidor</td></tr></tfoot>
            </table>
        </DivLista>
    )
}