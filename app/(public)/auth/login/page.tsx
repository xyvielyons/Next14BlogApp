import type {Metadata} from 'next'
import LoginForm from '@/components/auth/LoginForm';
export const metadata: Metadata = {
  title: "Login",
  description: "Log in to your blogging account",
};
function Login() {
  return (
    <LoginForm/>
  )
}

export default Login