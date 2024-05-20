// components/RegisterForm.js
'use client'
import { useState } from 'react';
import Container from './Container';
import '../styles/style.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    console.log('Resposta da API:', data);
  };

  return (
    <>
        <Container>
            <h2 className='form-titulo'> Formulário de Cadastro: </h2>
            <section className="formulario">
            <form onSubmit={handleSubmit} className='form'>
                <div className='area-form'>
                    <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    placeholder='Nome'
                    />
                </div>

                <div className='area-form'>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder='E-mail'
                    />
                </div>

                <div className='area-form'>
                    <input
                    type="password"
                    id="senha"
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                    required
                    placeholder='Senha'
                    />
                </div>
                
                <button type="submit" className='btn-form'> Cadastrar </button>
            </form>
            </section>
        </Container>
    </>
  );
};

export default RegisterForm;