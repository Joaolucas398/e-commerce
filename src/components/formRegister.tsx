"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./styles/formRegister"
import { ErrorText, Form, FormGroup, Input, Label, SubmitButton } from "./styles/formRegister";

interface IFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  cep: string;
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  rua: string;
}

export const UserRegistrationForm = () => {
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

  const [password, setPassword] = useState("");

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="form-grid">
      <FormGroup>
        <Label>Nome completo:</Label>
        <Input
          type="text"
          placeholder="Nome"
          {...register("name", {
            required: "Nome é obrigatório",
            pattern: {
              value: /^[A-Za-zÀ-ú ]+$/i,
              message: "Nome inválido",
            },
            minLength: 3,
          })}
        />
        <ErrorText>{errors.name?.message}</ErrorText>
      </FormGroup>

      <FormGroup>
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
      </FormGroup>

      <FormGroup>
        <Label>Telefone:</Label>
        <Input
          type="tel"
          id="telefone"
          placeholder="(00) 00000-0000"
          {...register("phone", {
            required: "Telefone é obrigatório",
            pattern: {
              value: /^\d{11}$/i,
              message: "Telefone inválido (ex: 1234567890)",
            },
          })}
        />
        <ErrorText>{errors.phone?.message}</ErrorText>
      </FormGroup>

      <FormGroup>
        <Label>CEP:</Label>
        <Input
          type="text"
          placeholder="00000000"
          {...register("cep", {
            required: "CEP é obrigatório",
            pattern: {
              value: /^\d{8}$/i,
              message: "CEP inválido (ex: 12345678)",
            },
          })}
        />
        <ErrorText>{errors.cep?.message}</ErrorText>
      </FormGroup>

      <FormGroup>
        <Label>Estado:</Label>
        <Input
          type="text"
          {...register("estado", {
            required: "Estado é obrigatório",
          })}
        />
        <ErrorText>{errors.estado?.message}</ErrorText>
      </FormGroup>

      <FormGroup>
        <Label>Cidade:</Label>
        <Input
          type="text"
          {...register("cidade", {
            required: "Cidade é obrigatória",
          })}
        />
        <ErrorText>{errors.cidade?.message}</ErrorText>
      </FormGroup>

      <FormGroup>
        <Label>Logradouro:</Label>
        <Input
          type="text"
          {...register("logradouro", {
            required: "Logradouro é obrigatório",
          })}
        />
        <ErrorText>{errors.logradouro?.message}</ErrorText>
      </FormGroup>

      <FormGroup>
        <Label>Rua:</Label>
        <Input
          type="text"
          {...register("rua", {
            required: "Rua é obrigatório",
          })}
        />
        <ErrorText>{errors.rua?.message}</ErrorText>
      </FormGroup>

      <FormGroup>
        <Label>Número:</Label>
        <Input
          type="number"
          {...register("numero", {
            required: "Número é obrigatório",
            pattern: {
              value: /^\d+$/i,
              message: "Apenas números (ex: 12345)",
            },
          })}
        />
        <ErrorText>{errors.numero?.message}</ErrorText>
      </FormGroup>

      <FormGroup>
        <Label>Complemento:</Label>
        <Input type="text" {...register("complemento")} />
        <ErrorText>{errors.complemento?.message}</ErrorText>
      </FormGroup>

      <FormGroup>
        <Label>Bairro:</Label>
        <Input
          type="text"
          {...register("bairro", {
            required: "Bairro é obrigatório",
          })}
        />
        <ErrorText>{errors.bairro?.message}</ErrorText>
      </FormGroup>

      <FormGroup>
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <ErrorText>{errors.password?.message}</ErrorText>
      </FormGroup>

      <FormGroup>
        <Label>Confirmação de Senha:</Label>
        <Input
          type="password"
          {...register("confirmPassword", {
            required: "Confirmação de senha é obrigatória",
            validate: (value) =>
              value === password || "As senhas não coincidem",
          })}
        />
        <ErrorText>{errors.confirmPassword?.message}</ErrorText>
      </FormGroup>

      <FormGroup>
        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </FormGroup>
    </Form>
  );
};
