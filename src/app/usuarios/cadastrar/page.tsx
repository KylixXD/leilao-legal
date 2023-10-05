'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';

export default function Cadastrar() {
  return (
    <div className="flex items-center justify-center min-h-screen">

        <form className="flex max-w-md flex-col gap-4 mt-4 ">
        <div className="block max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow">
            <div id="col1" className="flex flex-col gap-2">
            <div>
                <div className="mb-2 block">
                <Label htmlFor="name" value="Nome completo" />
                </div>
                <TextInput id="name" required type="text" />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="mail" value="Email" />
                </div>
                <TextInput id="mail" required type="email" />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="confirmemail" value="Confirmar Email" />
                </div>
                <TextInput id="confirmemail" required type="email" />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="cpf" value="CPF" />
                </div>
                <TextInput id="cpf" required type="number" />
            </div>
            </div>

            <div id="col2" className="flex flex-col gap-2">
            <div>
                <div className="mb-2 block">
                <Label htmlFor="password" value="Senha" />
                </div>
                <TextInput id="password" required type="password" />
            </div>

            <div>
                <div className="mb-2 block">
                <Label htmlFor="confirmPassword" value="Confirmar Senha" />
                </div>
                <TextInput id="confirmPassword" required type="password" />
            </div>

            <div className="flex items-center gap-2">
                <Checkbox id="terms" />
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

            <span className="flex flex-col col-span-2 gap-2">
            <Button type="submit" color='purple'>
                Criar conta
            </Button>
            <p className="text-sm w-fit">
                Já possui conta? <Link href={"/"}>Entrar</Link>
            </p>
            </span>
        </div>
        </form> 
    </div>
  )
}

