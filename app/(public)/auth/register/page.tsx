import SignUpSvg from '@/public/undraw_sign_up_n6im.svg'
import SignUpBlob from '@/public/signinblob.svg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
function Register() {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      


           <div className='mt-0 md:mt-8 md:w-7/12'>
              <div className="relative flex justify-center items-center">
                  <div className="absolute top-20 p-20">  
                    <Image className='' src={SignUpSvg} width='1024' height='768' alt='signup blob'></Image>
                  </div>

                  <div className="p-5">
                    <Image className='' src={SignUpBlob} width='600' height='600' alt='signup blob'></Image>
                  </div>

              </div>
           </div>


          <div className="w-full md:w-5/12">
              <div className="bg-creamywhite m-10 p-7 rounded-2xl space-y-2">
                  <div className="space-y-2">
                      <h1 className='font-bold text-secondarycolor text-2xl'>Register 😃</h1>
                      <p>Please complete the form below to create an account</p>
                  </div>
                  <div className="space-y-1 ">
                    <Button variant="socials" className='w-full'><span className='mr-2'><svg width="20" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6_143)">
<path d="M40.1057 21.2121C40.1057 19.5338 39.9695 18.3091 39.6748 17.039H20.5103V24.614H31.7594C31.5327 26.4965 30.308 29.3315 27.5863 31.2365L27.5482 31.4901L33.6076 36.1843L34.0274 36.2262C37.8829 32.6654 40.1057 27.4263 40.1057 21.2121Z" fill="#4285F4"/>
<path d="M20.5103 41.1704C26.0214 41.1704 30.6481 39.3559 34.0275 36.2262L27.5864 31.2365C25.8627 32.4385 23.5493 33.2777 20.5103 33.2777C15.1125 33.2777 10.5312 29.7171 8.89812 24.7955L8.65875 24.8159L2.35803 29.692L2.27563 29.9211C5.63222 36.5889 12.5269 41.1704 20.5103 41.1704Z" fill="#34A853"/>
<path d="M8.89809 24.7955C8.46718 23.5255 8.2178 22.1646 8.2178 20.7585C8.2178 19.3523 8.46719 17.9915 8.87542 16.7215L8.86401 16.451L2.48434 11.4965L2.2756 11.5957C0.892193 14.3627 0.0983887 17.4699 0.0983887 20.7585C0.0983887 24.0471 0.892193 27.1541 2.2756 29.9211L8.89809 24.7955Z" fill="#FBBC05"/>
<path d="M20.5103 8.23916C24.3431 8.23916 26.9286 9.89478 28.4029 11.2783L34.1635 5.65371C30.6256 2.36513 26.0214 0.346614 20.5103 0.346614C12.5269 0.346614 5.63222 4.92791 2.27563 11.5957L8.87545 16.7215C10.5312 11.7999 15.1125 8.23916 20.5103 8.23916Z" fill="#EB4335"/>
</g>
<defs>
<clipPath id="clip0_6_143">
<rect width="40.0073" height="40.9408" fill="white" transform="translate(0.0983887 0.288116)"/>
</clipPath>
</defs>
                    </svg></span>Sign up with Google</Button>
                    <Button variant="socials" className='w-full'><span className='mr-2'><svg width="20" height="42" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6_148)">
<path d="M15.0193 33.6513C15.0193 33.8164 14.8233 33.9484 14.5762 33.9484C14.295 33.9732 14.099 33.8411 14.099 33.6513C14.099 33.4862 14.295 33.3541 14.5421 33.3541C14.7977 33.3293 15.0193 33.4614 15.0193 33.6513ZM12.3691 33.2798C12.3095 33.4449 12.4799 33.6348 12.7356 33.6843C12.9571 33.7668 13.2128 33.6843 13.2639 33.5192C13.315 33.3541 13.1531 33.1642 12.8975 33.0899C12.6759 33.0321 12.4288 33.1147 12.3691 33.2798ZM16.1356 33.1394C15.8885 33.1972 15.718 33.3541 15.7436 33.5439C15.7692 33.709 15.9907 33.8164 16.2464 33.7586C16.4935 33.7008 16.6639 33.5439 16.6383 33.3788C16.6128 33.222 16.3827 33.1147 16.1356 33.1394ZM21.7426 1.50598C9.9235 1.50598 0.882324 10.1986 0.882324 21.6484C0.882324 30.8033 6.83024 38.6373 15.3261 41.3945C16.4168 41.5844 16.8002 40.9322 16.8002 40.3957C16.8002 39.8838 16.7747 37.0606 16.7747 35.327C16.7747 35.327 10.8097 36.5653 9.55708 32.867C9.55708 32.867 8.58565 30.4648 7.18814 29.8457C7.18814 29.8457 5.23675 28.5496 7.32448 28.5744C7.32448 28.5744 9.4463 28.7395 10.6137 30.7042C12.4799 33.8907 15.6073 32.9743 16.8258 32.4295C17.0218 31.1087 17.5757 30.1924 18.1892 29.6475C13.4258 29.1357 8.61973 28.4671 8.61973 20.5257C8.61973 18.2555 9.26735 17.1163 10.6308 15.6634C10.4092 15.1269 9.6849 12.9145 10.8523 10.0582C12.6333 9.52166 16.7321 12.2871 16.7321 12.2871C18.4364 11.8248 20.2684 11.5854 22.0835 11.5854C23.8986 11.5854 25.7306 11.8248 27.4349 12.2871C27.4349 12.2871 31.5337 9.5134 33.3147 10.0582C34.4821 12.9228 33.7578 15.1269 33.5362 15.6634C34.8996 17.1246 35.7347 18.2638 35.7347 20.5257C35.7347 28.4918 30.7157 29.1275 25.9522 29.6475C26.7362 30.2997 27.4008 31.538 27.4008 33.4779C27.4008 36.2599 27.3753 39.7022 27.3753 40.3792C27.3753 40.9157 27.7673 41.5679 28.8495 41.378C37.3708 38.6373 43.1483 30.8033 43.1483 21.6484C43.1483 10.1986 33.5618 1.50598 21.7426 1.50598ZM9.1651 29.9777C9.05432 30.0603 9.07988 30.2502 9.22475 30.407C9.36109 30.5391 9.55708 30.5969 9.66786 30.4896C9.77864 30.407 9.75307 30.2171 9.60821 30.0603C9.47187 29.9282 9.27588 29.8704 9.1651 29.9777ZM8.24479 29.3091C8.18514 29.4164 8.27035 29.5485 8.44078 29.631C8.57712 29.7136 8.74755 29.6888 8.8072 29.5732C8.86685 29.4659 8.78164 29.3339 8.61121 29.2513C8.44078 29.2018 8.30444 29.2265 8.24479 29.3091ZM11.0057 32.2479C10.8694 32.3552 10.9205 32.6029 11.1165 32.7597C11.3125 32.9496 11.5596 32.9743 11.6704 32.8423C11.7812 32.7349 11.73 32.4873 11.5596 32.3304C11.3721 32.1406 11.1165 32.1158 11.0057 32.2479ZM10.0343 31.0344C9.89794 31.117 9.89794 31.3316 10.0343 31.5215C10.1706 31.7113 10.4007 31.7939 10.5115 31.7113C10.6478 31.604 10.6478 31.3894 10.5115 31.1995C10.3922 31.0096 10.1706 30.9271 10.0343 31.0344Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_6_148">
<rect width="42.266" height="42.266" fill="white" transform="translate(0.882324 0.845612)"/>
</clipPath>
</defs>
</svg>
</span>Sign up with Github</Button>
                  </div>

                  <div className="">
                    <form className='space-y-2'>
                      <Input type="text" placeholder="First Name" className='rounded-full'></Input>
                      <Input type="text" placeholder="Last Name" className='rounded-full'></Input>
                      <Input type="email" placeholder="Email" className='rounded-full'></Input>
                      <Input type="password" placeholder="********" className='rounded-full'></Input>
                      <Input type="password" placeholder="********" className='rounded-full'></Input>
                      <p><Link href='/login' className='hover:text-accentcolor'>Have an Account?</Link></p>
                      <Button variant='socials' className='w-full'>Register</Button>
                    </form>
                  </div>
            </div>
           </div>


    </div>
  )
}

export default Register