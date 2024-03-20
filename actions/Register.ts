'use server'
import {z} from "zod"
import { RegisterSchema } from "@/schemas"

export const Register = async(values:z.infer<typeof RegisterSchema>)=>{
    const validatedFields = await RegisterSchema.safeParse(values)
    

    if(!validatedFields.success){
        return {error:"Invalid fields"}
    }
   
    return {success:"Email sent!"}
}