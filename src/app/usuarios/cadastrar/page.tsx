'use client';

import { useState } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Cadastrar = () => {
    const router = useRouter();
    const [error, setError] = useState('');

    const [values, setValues] = useState({
      username: '',
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
      confirmemail:''
    });
  
    const onSubmit = async (event:any) => {
      event.preventDefault();

       // Validação básica
       if (!values.fullname || !values.username || !values.email || !values.confirmemail || !values.password || !values.confirmPassword) {
        setError('Todos os campos devem ser preenchidos.');
        return;
    }

    if (values.password !== values.confirmPassword) {
        setError('As senhas não são iguais.');
        return;
    }
    setError('');
  
      // Adicione a lógica de validação aqui, por exemplo, para garantir que as senhas coincidam
  
      // Envie os dados do formulário para a API
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname: values.fullname,
          username: values.username,
          email: values.email,
          password: values.password,
        }),
      });
  
      if (response.ok) {
        router.push('/usuarios/login');
    } else {
        // Manipule erros de resposta da API
        const data = await response.json();
        console.error('Erro ao registrar usuário:', data);
        setError('Erro ao criar conta. Por favor, tente novamente.');
    }
    };

    const handleChange = (event:any) => {
        const { id, value } = event.target;
        setValues((prevValues) => ({
          ...prevValues,
          [id]: value,
        }));
      };

  return (
    <div className="flex items-center justify-center min-h-screen">

        <form className="flex max-w-md flex-col gap-4 mt-4 " onSubmit={onSubmit}>
        <div className="block max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow">
            <div id="col1" className="flex flex-col gap-2">
            <div>
                <div className="mb-2 block">
                <Label htmlFor="name" value="Nome" />
                </div>
                <TextInput id="fullname" required type="text" onChange={handleChange} value={values.fullname}/>
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="username" value="Usuário" />
                </div>
                <TextInput id="username" required type="text" onChange={handleChange} value={values.username}/>
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="email" value="E-mail" />
                </div>
                <TextInput id="email" required type="email" onChange={handleChange} value={values.email} />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="confirmemail" value="Confirmar E-mail" />
                </div>
                <TextInput id="confirmemail" required type="email"  onChange={handleChange} value={values.confirmemail}/>
            </div>
            {/* <div>
                <div className="mb-2 block">
                <Label htmlFor="cpf" value="CPF" />
                </div>
                <TextInput id="cpf" required type="number" />
            </div> */}
            </div>

            <div id="col2" className="flex flex-col gap-2">
            <div>
                <div className="mb-2 block">
                <Label htmlFor="password" value="Senha" />
                </div>
                <TextInput id="password" required type="password" onChange={handleChange} value={values.password}/>
            </div>

            <div>
                <div className="mb-2 block">
                <Label htmlFor="confirmPassword" value="Confirmar Senha" />
                </div>
                <TextInput id="confirmPassword" required type="password" onChange={handleChange} value={values.confirmPassword}/>
            </div>

            <div className="flex items-center gap-2">
                <Checkbox id="terms" required/>
                <Label htmlFor="terms">
                Li e aceito os termos de condição de uso.
                </Label>
            </div>

            <div className="flex items-center gap-2">
                <Checkbox id="newsletter" />
                <Label htmlFor="newsletter">
                Desejo receber emails promocionais
                </Label>
            </div>
            </div>
            <div className='my-2'>
                <span className="flex flex-col col-span-2 gap-2">
                <Button type="submit" color='purple'>
                    Criar conta
                </Button>
                <p className="text-sm w-fit">
                    Já possui conta? <Link href={"/"}>Entrar</Link>
                </p>
                </span>
            </div>
        </div>
        </form> 
    </div>
  )
}

export default Cadastrar;

