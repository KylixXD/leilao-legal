import NextAuth from "next-auth"

declare module "next-auth"{

    interface User {
        username:string
        // fullname:string
    }
    interface Session {
        user:  User & {
            username: string
            // fullname: string
        }
        token: {
            username: string
            // fullname:string
        }
    }
}