import OtpSvg from '@/public/undraw_login_re_4vu2.svg'
import SignUpBlob from '@/public/signinblob.svg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

function Login() {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      


           <div className='mt-0 md:mt-5 md:w-7/12'>
              <div className="relative flex justify-center items-center">
                  <div className="absolute top-20 p-28 ml-10">  
                    <Image className='' src={OtpSvg} width='1024' height='768' alt='signup blob'></Image>
                  </div>

                  <div className="p-5">
                    <Image className='' src={SignUpBlob} width='600' height='600' alt='signup blob'></Image>
                  </div>

              </div>
           </div>


          <div className="w-full md:w-5/12 md:mt-24">
              <div className="bg-creamywhite m-10 p-7 rounded-2xl space-y-2">
                  <div className="space-y-2">
                      <h1 className='font-bold text-secondarycolor text-2xl'>Please enter the One Time
Password 😃</h1>
                      <p>Your one time password has been sent to your email address.</p>
                  </div>
                 
                  <div className="">
                    <form className='space-y-2'>
                      <Input type="text" placeholder="OTP" className='rounded-full'></Input>
                      <Button variant='socials' className='w-full'>Verify <span className='ml-2'><svg width="25" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.8331 25.6953C27.3573 25.6953 26.98 26.0625 26.98 26.5078V34.6485C26.98 35.9922 25.8315 37.086 24.4206 37.086H5.61904C4.20811 37.086 3.05146 35.9922 3.05146 34.6485V5.35158C3.05146 4.00783 4.1999 2.90627 5.61904 2.90627H24.4206C25.8315 2.90627 26.98 4.00002 26.98 5.35158V13.4922C26.98 13.9453 27.3655 14.3047 27.8331 14.3047C28.3089 14.3047 28.6862 13.9375 28.6862 13.4922V5.35158C28.6862 3.10939 26.7667 1.28127 24.4124 1.28127H5.61904C3.26475 1.28127 1.34521 3.10939 1.34521 5.35158V34.6485C1.34521 36.8906 3.26475 38.7188 5.61904 38.7188H24.4206C26.7749 38.7188 28.6944 36.8906 28.6944 34.6485V26.5078C28.6862 26.0625 28.3089 25.6953 27.8331 25.6953Z" fill="white"/>
<path d="M40.5151 20.4453C40.5151 20.4375 40.5233 20.4375 40.5233 20.4297C40.5315 20.4141 40.5479 20.3907 40.5562 20.375C40.5562 20.3672 40.5644 20.3594 40.5644 20.3594C40.5726 20.3438 40.5808 20.3282 40.589 20.3047C40.589 20.2969 40.5972 20.2891 40.5972 20.2813C40.6054 20.2657 40.6136 20.25 40.6136 20.2266C40.6136 20.2188 40.6218 20.211 40.6218 20.2032C40.63 20.1875 40.63 20.1719 40.6382 20.1485C40.6382 20.1407 40.6382 20.125 40.6464 20.1172C40.6464 20.1016 40.6546 20.086 40.6546 20.0703C40.6546 20.0469 40.6546 20.0313 40.6546 20.0078C40.6546 20 40.6546 19.9922 40.6546 19.9922C40.6546 19.9844 40.6546 19.9766 40.6546 19.9766C40.6546 19.9532 40.6546 19.9375 40.6546 19.9141C40.6546 19.8985 40.6464 19.8828 40.6464 19.8672C40.6464 19.8594 40.6464 19.8438 40.6382 19.836C40.6382 19.8203 40.63 19.8047 40.6218 19.7813C40.6218 19.7735 40.6136 19.7657 40.6136 19.7578C40.6054 19.7422 40.5972 19.7266 40.5972 19.7032C40.5972 19.6953 40.589 19.6875 40.589 19.6797C40.5808 19.6641 40.5726 19.6407 40.5644 19.625C40.5644 19.6172 40.5562 19.6094 40.5562 19.6094C40.5479 19.5938 40.5315 19.5703 40.5233 19.5547C40.5233 19.5469 40.5151 19.5469 40.5151 19.5391C40.4823 19.4922 40.4413 19.4453 40.4003 19.4063L33.5671 12.8985C33.2308 12.5782 32.6894 12.5782 32.3612 12.8985C32.0249 13.2188 32.0249 13.7344 32.3612 14.0469L37.7425 19.1719H17.5792C17.1034 19.1719 16.7261 19.5391 16.7261 19.9844C16.7261 20.4375 17.1116 20.7969 17.5792 20.7969H37.7343L32.3612 25.9375C32.0249 26.2578 32.0249 26.7735 32.3612 27.086C32.5253 27.2422 32.7468 27.3282 32.9683 27.3282C33.1897 27.3282 33.403 27.25 33.5753 27.086L40.4085 20.5782C40.4413 20.5391 40.4741 20.5 40.5151 20.4453Z" fill="white"/>
</svg>
</span></Button>

                    </form>
                  </div>

            </div>
           </div>


    </div>
  )
}

export default Login