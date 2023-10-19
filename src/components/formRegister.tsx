"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./styles/formRegister.css"

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
<form onSubmit={handleSubmit(onSubmit)} className="form-grid">
  <div className="form-group">
    <label>Nome completo:</label>
    <input
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
    <p id="error">{errors.name?.message}</p>
  </div>

  <div className="form-group">
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

  <div className="form-group">
    <label>Telefone:</label>
    <input
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
    <p id="error">{errors.phone?.message}</p>
  </div>

  <div className="form-group">
    <label>CEP:</label>
    <input
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
    <p id="error">{errors.cep?.message}</p>
  </div>

  <div className="form-group">
    <label>Estado:</label>
    <input
      type="text"
      {...register("estado", {
        required: "Estado é obrigatório",
      })}
    />
    <p id="error">{errors.estado?.message}</p>
  </div>

  <div className="form-group">
    <label>Cidade:</label>
    <input
      type="text"
      {...register("cidade", {
        required: "Cidade é obrigatória",
      })}
    />
    <p id="error">{errors.cidade?.message}</p>
  </div>

  <div className="form-group">
    <label>Logradouro:</label>
    <input
      type="text"
      {...register("logradouro", {
        required: "Logradouro é obrigatório",
      })}
    />
    <p id="error">{errors.logradouro?.message}</p>
  </div>

  <div className="form-group">
    <label>Rua:</label>
    <input
      type="text"
      {...register("rua", {
        required: "Rua é obrigatório",
      })}
    />
    <p id="error">{errors.rua?.message}</p>
  </div>

  <div className="form-group">
    <label>Número:</label>
    <input
      type="number"
      {...register("numero", {
        required: "Número é obrigatório",
        pattern: {
          value: /^\d+$/i,
          message: "Apenas números (ex: 12345)",
        },
      })}
    />
    <p id="error">{errors.numero?.message}</p>
  </div>

  <div className="form-group">
    <label>Complemento:</label>
    <input type="text" {...register("complemento")} />
    <p id="error">{errors.complemento?.message}</p>
  </div>

  <div className="form-group">
    <label>Bairro:</label>
    <input
      type="text"
      {...register("bairro", {
        required: "Bairro é obrigatório",
      })}
    />
    <p id="error">{errors.bairro?.message}</p>
  </div>

  <div className="form-group">
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
      onChange={(e) => setPassword(e.target.value)}
    />
    <p id="error">{errors.password?.message}</p>
  </div>

  <div className="form-group">
    <label>Confirmação de Senha:</label>
    <input
      type="password"
      {...register("confirmPassword", {
        required: "Confirmação de senha é obrigatória",
        validate: (value) =>
          value === password || "As senhas não coincidem",
      })}
    />
    <p id="error">{errors.confirmPassword?.message}</p>
  </div>

  <div className="form-group">
    <button id="submit-button" type="submit">
      Cadastrar
    </button>
  </div>
</form>

  );
};
