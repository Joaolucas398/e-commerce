"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import "./styles/formLogin.css";
interface IFormData {
  email: string;
  password: string;
}

export const UserLoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormData>({
    mode: "all",
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    // Enviar dados do formulário ...
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <div>
        <label>E-mail:</label>
        <input
          type="email"
          placeholder="Email@register.com"
          {...register("email", {
            required: "Email é obrigatório",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "E-mail inválido (deve conter @ e .)",
            },
          })}
        />
        <p id="error">{errors.email?.message}</p>
      </div>

      <div>
        <label>Senha:</label>
        <input
          type="password"
          {...register("password", {
            required: "Senha é obrigatória",
            pattern: {
              value:
                /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&\[\]{}()\\/^$|<>#%^+=_,;:'"\\-]*$/,
              message:
                "Senha deve conter pelo menos 1 maiúsculo, 1 número, 1 caractere especial e ter no mínimo 8 caracteres",
            },
          })}
        />

        <p id="error">{errors.password?.message}</p>
      </div>
      <div>
        <button id="submit-button" type="submit">
          Entrar
        </button>
      </div>
      <div id="link">
        <p>Se ainda não é cadastrado?</p>
        <a href="/register">clique aqui.</a>
      </div>
    </form>
  );
};
