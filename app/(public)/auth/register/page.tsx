import type {Metadata} from 'next'
export const metadata: Metadata = {
  title: "Register",
  description: "Register an account with Techie.io to get the latest news and updates",
};
import RegisterForm from '@/components/auth/RegisterForm';
function Register() {
  return (
    <RegisterForm></RegisterForm>
  )
}

export default Register