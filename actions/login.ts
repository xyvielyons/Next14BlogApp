'use server'
import {z} from 'zod'
import { LoginSchema } from '@/schemas'
import { signIn } from "@/auth";
import { AuthError } from 'next-auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
export const Login = async (values:z.infer<typeof LoginSchema>)=>{
   const validatedFields = await LoginSchema.safeParse(values)
   if (!validatedFields.success) return {error:"something went wrong"}


   const {email,password} = validatedFields.data

   
try {
    await signIn("credentials",{
        email,password,redirectTo:DEFAULT_LOGIN_REDIRECT,
    })
    
} catch (error) {
    if(error instanceof AuthError){
        switch(error.type){
            case "CredentialsSignin":
            return {error:"Invalid credentials"}
            default:
            return {error:"Something went wrong"}
        }
    }
    throw error;
    
}
   

  
}