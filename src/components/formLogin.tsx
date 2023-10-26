"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import "./styles/formLogin";
import { Div, ErrorText, Form, Input, Label, Link, LinkA, LinkP, SubmitButton } from "./styles/formLogin";
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <Div>
        <Label>E-mail:</Label>
        <Input
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
        <ErrorText>{errors.email?.message}</ErrorText>
      </Div>

      <Div>
        <Label>Senha:</Label>
        <Input
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

        <ErrorText>{errors.password?.message}</ErrorText>
      </Div>
      <Div>
        <SubmitButton type="submit">Entrar</SubmitButton>
      </Div>
      <Link>
        <LinkP>Se ainda não é cadastrado?</LinkP>
        <LinkA href="/register">clique aqui.</LinkA>
      </Link>
    </Form>
  );
};