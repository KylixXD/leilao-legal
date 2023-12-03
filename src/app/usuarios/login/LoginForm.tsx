'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginForm = () => {
        const router = useRouter();

        const [values, setValues] = useState({
            email: '',
            password: '',
        });

    const onSubmit = async (event:any) => {
        event.preventDefault();

        const signInData = await signIn('credentials', {
            email: values.email,
            password:values.password,
            redirect: false,
        });

        if(signInData?.error){
            console.log(signInData.error);
        } else {
            router.push('/');
        }
    };

  return (
    <div className="block max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow">
        <form className="flex max-w-md flex-col gap-4" onSubmit={onSubmit}>
        <div>
            <div className="mb-2 block">
            <Label
                htmlFor="email1"
                value="E-mail"
            />
            </div>
            <TextInput
            id="email1"
            placeholder="name@email.com"
            required
            type="email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
        </div>
        <div>
            <div className="mb-2 block">
            <Label
                htmlFor="password1"
                value="Senha"
            />
            </div>
            <TextInput
            id="password1"
            required
            type="password"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            />
        </div>
        <div className="flex items-center gap-2">
            <Checkbox id="remember" required/>
            <Label htmlFor="remember">
            Aqui vai ter um captcha futuramente
            </Label>
        </div>
        <Button type="submit" color='purple'>
            <a href="/usuarios/login">Entrar</a>
        </Button>
        </form>
    </div>
  )
}

export default LoginForm;


