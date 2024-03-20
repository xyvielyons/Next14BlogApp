'use server'
import {z} from 'zod'
import { LoginSchema } from '@/schemas'
export const Login = async (values:z.infer<typeof LoginSchema>)=>{
   const validatedFields = await LoginSchema.safeParse(values)
   if (!validatedFields.success) return {error:"something went wrong"}
   return {success:"logging in...."}

}