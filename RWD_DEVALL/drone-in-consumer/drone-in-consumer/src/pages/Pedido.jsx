import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Menu from "../components/MenuUsuario";
import QR from "../img/qrcode.png";

const DivPedido = styled.main`
  background-color: #fff;
  min-height: 90vh;
  padding: 0 15%;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
  }

  .divform {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5vh 0;
  }

  section {
    padding: 2vh;
    width: 35%;
  }

  .meio {
    border-left: 1px solid #7209b7;
    border-right: 1px solid #7209b7;
  }

  a,
  p {
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
  input[type="number"],
  select {
    width: 100%;
    height: 45px;
    border: 1px solid #3a0ca3;
    padding-left: 10px;
    margin: 10px 0px;
    border-radius: 10px;
    font-size: 1.2em;
    color: #3a0ca3;
  }

  input::placeholder {
    color: #3a0ca3;
  }

  input[type="submit"] {
    width: 30%;
    height: 45px;
    cursor: pointer;
    background: #3a0ca3;
    color: #fff;
    border: 0;
    margin: 0 35%;
    border-radius: 10px;
    transition: 0.5s;
    font-size: 1.5em;
  }

  input[type="submit"]:hover {
    background-color: #7209b7;
  }

  .row {
    display: flex;
    gap: 20px;

    input[name="num"],
    select {
      width: 100px;
    }
  }

  .pagamento {
    text-align: center;
    margin: 10px;
    color: #3a0ca3;

    h1 {
      font-size: 2em;
    }

    h3 {
      font-size: 1.5em;
      color: #220664;
    }
  }
`;
export default function Pedido() {
  let { id } = useParams();


  const [nPacote, setNPacote] = useState({
    idPacote: id,
    vlPesoPacote: "",
    vlAltura: "",
    vlLargura: "",
    vlComprimento: "",
    dsConteudo: "",
    tpConteudo: "",
  });

  const [nEndereco1, setNEndereco1] = useState({
      idEndereco:id,
      idEstado:"",
      cep:"",
      numero:"",
      idCidade:"",
      logradouro:"",
      complemento:"",
      referencia:"",
      cidade:"",
      estado:""

  });

  const [nEndereco2, setNEndereco2] = useState({
    idEndereco:id,
    idEstado:"",
    cep:"",
    numero:"",
    idCidade:"",
    logradouro:"",
    complemento:"",
    referencia:"",
    cidade:"",
    estado:""

});

  const[nResponsavelr,setNResponsavelr]=useState({
        nmResponsavel: "",
        tpEndereco: "R",
        idEntregaEnd:id,
        idEntrega: "",
        nrTelefoneResponsavel: "",
        idEndereco:id
  })

  const[nResponsaveld,setNResponsaveld]=useState({
    nmResponsavel: "",
    tpEndereco: "D",
    idEntregaEnd:id,
    idEntrega: "",
    nrTelefoneResponsavel: "",
    idEndereco:id
})

var data = new Date();


const[nEntrega,setNEntrega]=useState({
    vlPreco: "",
    vlDistancia:"",
    dsConfirmacao: "",
    dtConclusao: null,
    dtPedido: {data}
})

  let metodo = "post";

  if (id) {
    metodo = "put";
  }

  const handleChangeEntrega = (e) => {
    setNEntrega({ ...nEntrega, [e.target.name]: e.target.value});
 
  };
  const handleChangPacote = (e) => {
    setNPacote({ ...nPacote, [e.target.name]: e.target.value});
 
  };
  const handleChangeEndereco1 = (e) => {
    setNEndereco1({...nEndereco1,[e.target.name]:e.target.value});
  };
  const handleChangeEndereco2 = (e) => {
    setNEndereco2({...nEndereco2,[e.target.name]:e.target.value});
  };
  const handleChangeResponR = (e) => {

    setNResponsavelr({...nResponsavelr,[e.target.name]:e.target.value});
  };
  const handleChangeResponD = (e) => {
    setNResponsaveld({...nResponsaveld,[e.target.name]:e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/DroneIn/rest/pacote/${id ? id : ""}`, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nPacote),
    }).then(() => {
      console.log(nPacote)
    }); 
    e.preventDefault();
    fetch(`http://localhost:8000/DroneIn/rest/entrega/${id ? id : ""}`, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nEntrega),
    }).then(() => {
      console.log(nEntrega)
    }); 
    e.preventDefault();
    fetch(`http://localhost:8000/DroneIn/rest/endereco/${id ? id : ""}`, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nEndereco1),
    }).then(() => {
      console.log(nEndereco1)
    });
    e.preventDefault();
    fetch(`http://localhost:8000/DroneIn/rest/entregaendereco/${id ? id : ""}`, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nResponsavelr),
    }).then(() => {
    });
    e.preventDefault();
    fetch(`http://localhost:8000/DroneIn/rest/endereco/${id ? id : ""}`, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nEndereco2),
    }).then(() => {
      console.log(nEndereco2)
    });

    e.preventDefault();
    fetch(`http://localhost:8000/DroneIn/rest/entregaendereco/${id ? id : ""}`, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nResponsaveld),
    }).then(() => {
      console.log(nResponsaveld)
    });
  };

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/DroneIn/rest/pacote/${id}`)
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          setNPacote(data);
        });
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/DroneIn/rest/entrega/${id}`)
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          setNEntrega(data);
        });
    }
  }, [id]);

  useEffect(()=>{
    if(id){
        fetch(`http://localhost:8000/DroneIn/rest/endereco/${id}`)
        .then((resp)=>{
            return(resp.json())
        }).then(data=>{
            setNEndereco1(data)
        });
      }    
},[id])

useEffect(()=>{
  if(id){
      fetch(`http://localhost:8000/DroneIn/rest/endereco/${id}`)
      .then((resp)=>{
          return(resp.json())
      }).then(data=>{
          setNEndereco2(data)
      });
    }    
},[id])

useEffect(()=>{
  if(id){
      fetch(`http://localhost:8000/DroneIn/rest/entregaendereco/${id}`)
      .then((resp)=>{
          return(resp.json())
      }).then(data=>{
          setNResponsavelr(data)
      });
    }    

},[id])
useEffect(()=>{
  if(id){
      fetch(`http://localhost:8000/DroneIn/rest/entregaendereco/${id}`)
      .then((resp)=>{
          return(resp.json())
      }).then(data=>{
          setNResponsaveld(data)
      });
    }    
},[id])
  return (
    <>
      <Menu />
      <DivPedido>
        <form onSubmit={handleSubmit}>
          <div className="divform">
            <section>
              <p>O que será enviado?*</p>
              <input
                value={nPacote.dsConteudo}
                onChange={handleChangPacote}
                type="text"
                name="dsConteudo"
                placeholder="Ex.: Documento casa"
              />
              <p>Em qual categoria se encaixa?*</p>
              <select
                name="tpConteudo"
                value={nPacote.tpConteudo}
                onChange={handleChangPacote}
              >
                <option value="A">Alimentos</option>
                <option value="D">Documentos</option>
                <option value="F">Frágeis</option>
                <option value="O">Objetos</option>
                <option value="R">Remédios</option>
                <option value="V">Vestuários</option>
                <option value="X">Outros</option>
              </select>
              <p>Qual a altura do pacote?*</p>
              <input
                value={nPacote.vlAltura}
                onChange={handleChangPacote}
                type="number"
                name="vlAltura"
                placeholder="cm"
              />
              <p>Largura*</p>
              <input
                value={nPacote.vlLargura}
                onChange={handleChangPacote}
                type="number"
                name="vlLargura"
                placeholder="cm"
              />
              <p>Comprimento*</p>
              <input
                value={nPacote.vlComprimento}
                onChange={handleChangPacote}
                type="number"
                name="vlComprimento"
                placeholder="cm"
              />
              <p>Qual o peso da entrega?*(kg)</p>
              <input
                value={nPacote.vlPesoPacote}
                onChange={handleChangPacote}
                type="number"
                name="vlPesoPacote"
                placeholder="Até 2,5kg"
              />
            </section>
            <section className="meio">
              <p>Onde o drone pegará a entrega?*</p>
              <div className="row">
                <input
                value={nEndereco1.cep}
                onChange={handleChangeEndereco1} type="text" name="cep" placeholder="CEP" />
                <input value={nEndereco1.numero}
                onChange={handleChangeEndereco1}type="number" name="numero" placeholder="nº" />
              </div>
              <p>Logradouro*</p>
              <input 
              value={nEndereco1.logradouro}
              onChange={handleChangeEndereco1} type="text" name="logradouro" placeholder="Ex.: R. Juá" />
              <p>Cidade*</p>
              <div className="row">
                <input value={nEndereco1.cidade}
                onChange={handleChangeEndereco1}
                  type="text"
                  name="cidade"
                  placeholder="Ex.: São Carlos"
                />
                <select name="idEstado" value={nEndereco1.idEstado}
                onChange={handleChangeEndereco1}>
                  <option value="1">AC</option>
                  <option value="2">AL</option>
                  <option value="3">AP</option>
                  <option value="4">AM</option>
                  <option value="5">BA</option>
                  <option value="6">CE</option>
                  <option value="7">DF</option>
                  <option value="8">ES</option>
                  <option value="9">GO</option>
                  <option value="10">MA</option>
                  <option value="11">MT</option>
                  <option value="12">MS</option>
                  <option value="13">MG</option>
                  <option value="14">PA</option>
                  <option value="15">PB</option>
                  <option value="16">PR</option>
                  <option value="17">PE</option>
                  <option value="18">PI</option>
                  <option value="19">RJ</option>
                  <option value="20">RN</option>
                  <option value="21">RS</option>
                  <option value="22">RR</option>
                  <option value="23">RO</option>
                  <option value="24">SC</option>
                  <option value="25">SP</option>
                  <option value="26">SE</option>
                  <option value="27">TO</option>
                </select>
              </div>
              <p>Complemento</p>
              <input value={nEndereco1.complemento}
                onChange={handleChangeEndereco1} type="text" name="complemento" placeholder="Ex.: Apto 12" />
              <p>Referência</p>
              <input value={nEndereco1.referencia}
                onChange={handleChangeEndereco1}
                type="text"
                name="referencia"
                placeholder="Ex.: Perto da praça municipal"
              />{" "}
              <div className="row">
                <div>
                  <p>Responsável</p>
                  <input value={nResponsavelr.nmResponsavel}
                onChange={handleChangeResponR}
                    type="text"
                    name="nmResponsavel"
                    placeholder="Ex.: Carlos"
                  />
                </div>
                <div>
                  <p>Telefone</p>
                  <input value={nResponsavelr.nrTelefoneResponsavel}
                onChange={handleChangeResponR} 
                  type="tel" name="nrTelefoneResponsavel" placeholder="11999999999" />
                </div>
              </div>
            </section>
            <section>
              <p>Onde o drone entregará o pacote?*</p>
              <div className="row">
                <input value={nEndereco2.cep}
                onChange={handleChangeEndereco2} 
                type="text" name="cep" placeholder="CEP" />
                <input value={nEndereco2.numero}
                onChange={handleChangeEndereco2}type="number" name="numero" placeholder="nº" />
              </div>
              <p>Logradouro*</p>
              <input value={nEndereco2.logradouro}
                onChange={handleChangeEndereco2} type="text" name="logradouro" placeholder="Ex.: R. Jau" />
              <p>Cidade*</p>
              <div className="row">
                <input value={nEndereco2.cidade}
                onChange={handleChangeEndereco2} type="text" name="cidade" placeholder="Ex.: São Pedro" />
                <select name="idEstado" value={nEndereco2.idEstado}
                onChange={handleChangeEndereco2}>
                  <option value="1">AC</option>
                  <option value="2">AL</option>
                  <option value="3">AP</option>
                  <option value="4">AM</option>
                  <option value="5">BA</option>
                  <option value="6">CE</option>
                  <option value="7">DF</option>
                  <option value="8">ES</option>
                  <option value="9">GO</option>
                  <option value="10">MA</option>
                  <option value="11">MT</option>
                  <option value="12">MS</option>
                  <option value="13">MG</option>
                  <option value="14">PA</option>
                  <option value="15">PB</option>
                  <option value="16">PR</option>
                  <option value="17">PE</option>
                  <option value="18">PI</option>
                  <option value="19">RJ</option>
                  <option value="20">RN</option>
                  <option value="21">RS</option>
                  <option value="22">RR</option>
                  <option value="23">RO</option>
                  <option value="24">SC</option>
                  <option value="25">SP</option>
                  <option value="26">SE</option>
                  <option value="27">TO</option>
                </select>
              </div>
              <p>Complemento</p>
              <input value={nEndereco2.complemento}
                onChange={handleChangeEndereco2} type="text" name="complemento" placeholder="Ex.: Apto 3" />
              <p>Referência</p>
              <input value={nEndereco2.referencia}
                onChange={handleChangeEndereco2}
                type="text"
                name="referencia"
                placeholder="Ex.: Perto da praça municipal"
              />{" "}
              <div className="row">
                <div>
                  <p>Responsável</p>
                  <input value={nResponsaveld.nmResponsavel}
                onChange={handleChangeResponD}
                    type="text"
                    name="nmResponsavel"
                    placeholder="Ex.: Vitor"
                  />
                </div>
                <div>
                  <p>Telefone</p>
                  <input value={nResponsaveld.nrTelefoneResponsavel}
                onChange={handleChangeResponD} type="tel" name="nrTelefoneResponsavel" placeholder="11999999999" />
                </div>
              </div>
            </section>
          </div>
          <input type="submit" name="acao" value="Calcular distância ↓" />
        </form>

        <section className="pagamento">
          <h1>Pagamento</h1>
          <h3 value={nEntrega.vlDistancia}>Distância do pedido: {nEndereco1.idEstado+nEndereco2.idEstado} km</h3>
          <h3 value={nEntrega.vlPreco}>Seu Pedido ficou: <br /> R${((nPacote.vlAltura/3+nPacote.vlComprimento/3+nPacote.vlLargura/3)*nPacote.vlPesoPacote)}</h3>
          <h3>Realize seu pagamento pelo PIX</h3>
          <img src={QR} alt="QRCode" />
          <a href="/rastreio">
            <input type="submit" name="acao" value="Finalizar" />
            {nEntrega.dsConfirmacao="V"}
          </a>
        </section>
      </DivPedido>
    </>
  );
}
