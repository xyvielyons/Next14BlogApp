'use server'
import {z} from "zod"
import { RegisterSchema } from "@/schemas"
import bcrypt from 'bcryptjs'
import { db } from "@/lib/db"
import { getUserByEmail } from "@/data/user"
export const Register = async(values:z.infer<typeof RegisterSchema>)=>{
    const validatedFields = await RegisterSchema.safeParse(values)

    if(!validatedFields.success){
      return {error:"Invalid fields"}
    }
  
    const {firstName,lastName,email,password,confirmPassword} = validatedFields.data

    if(password !== confirmPassword ){
        return {error:"Passwords do not match"}
    }
     

    //hash the password
    const salt= await bcrypt.genSaltSync(10);
    const HashedPassword = await bcrypt.hashSync(password,salt)
    console.log(HashedPassword)

    //look if email is taken
    const existingUser = await getUserByEmail(email)
    if(existingUser){
        return{error:"Email already in use!"}
    }
    const fullnames:string = firstName + lastName
    

     await db.user.create({
        data:{
            firstName,
            fullname:fullnames,
            email:email,
            password:HashedPassword

        }
     })

//TODO:send verification token email


    return {success:"User Successfully created"}
}