import { Link } from "react-router-dom";
import DivForm from "../style/FormStyle";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";


const schema = yup.object({
  email: yup.string()
    .email("Digite um e-mail válido!")
    .required("O e-mail é obrigatório!"),
  senha: yup.string().min(8, "A senha deve ter pelo menos 8 dígitos.")
    .required("A senha é obrigatória!"),
}).required();


export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <form onSubmit={handleSubmit(Login)}>
      <DivForm>
        <h1>Login</h1>
        <input id="email" type="email" name="email" placeholder="Email" {...register('email')} />
        <span>{errors.email?.message}</span>
        <input id="password" type="password" name="senha" placeholder="Senha" {...register('senha')} />
        <span>{errors.senha?.message}</span>
        <Link to="/login">Esqueci minha senha</Link>
        <input type="submit" name="acao" value="Entrar" />
        <Link to="/cadastro">
          É novo aqui? <strong>Crie sua conta.</strong>
        </Link>
        <Link to="/">
          <i className="fa-solid fa-arrow-left-long"></i> Voltar para a página inicial
        </Link>
        <Link to="/solicitar">///</Link>
      </DivForm>
    </form>

  );
}
