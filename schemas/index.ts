import { z } from "zod";
export const RegisterSchema = z.object({
    firstName:z.string().nonempty({ message: "Please enter your first name." }).min(3,{message:"Must be 3 or more characters long"}),
    lastName:z.string().min(3,{message:"Must be 3 or more characters long"}),
    email:z.string().email({message:"Invalid email address"}),
    password:z.string().nonempty({ message: "Enter your password" }),
    confirmPassword:z.string().nonempty({ message: "confrim your password" })
})

export const LoginSchema = z.object({
    email:z.string().email({message:"Invalid email address"}),
    password:z.string().nonempty({message:"Enter your password"})
})