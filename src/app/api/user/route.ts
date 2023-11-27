import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req: Request) {
    try{
        const body = await req.json();
        const { fullname,email, username, password } = body;

        //checando se o email já existe 
        const existingUserByEmail = await db.user.findUnique({
            where: { email: email }
        });
        if(existingUserByEmail){
            return NextResponse.json({ user: null, message: "Usuário com esse email já existe"}, { status: 409})
        }

        //checando se o username já existe 
        const existingUserByUsername = await db.user.findUnique({
            where: { username: username }
        });
        if(existingUserByUsername){
            return NextResponse.json({ user: null, message: "Usuário com esse username já existe"}, { status: 409})
        }

        const hashedPassword = await hash(password, 10);
        const newUser = await db.user.create({
            data: {
                fullname,
                username,
                email,
                password: hashedPassword
            }
        });
        const { password: newUserPassword, ...rest } = newUser;


        return NextResponse.json({ user: rest, message: "Usuário criado com sucesso"}, { status: 201 });
    } catch(error) {
        return NextResponse.json({ message: "Algo está errado"}, { status: 500 });
    }
}