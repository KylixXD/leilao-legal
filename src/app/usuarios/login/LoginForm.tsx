'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';


export default function LoginForm() {
  return (
    <div className="block max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow">
        <form className="flex max-w-md flex-col gap-4">
        <div>
            <div className="mb-2 block">
            <Label
                htmlFor="email1"
                value="Login/E-mail/CPF"
            />
            </div>
            <TextInput
            id="email1"
            placeholder="name@email.com"
            required
            type="email"
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


