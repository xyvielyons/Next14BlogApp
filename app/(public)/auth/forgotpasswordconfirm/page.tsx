import ConfirmSvg from '@/public/undraw_forgot_password_re_hxwm.svg'
import SignUpBlob from '@/public/signinblob.svg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'


function ForgotPasswordConfirm() {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      


           <div className='mt-0 md:mt-5 md:w-7/12'>
              <div className="relative flex justify-center items-center">
                  <div className="absolute top-20 p-28 ml-10">  
                    <Image className='' src={ConfirmSvg} width='1024' height='768' alt='signup blob'></Image>
                  </div>

                  <div className="p-5">
                    <Image className='' src={SignUpBlob} width='600' height='600' alt='signup blob'></Image>
                  </div>

              </div>
           </div>


          <div className="w-full md:w-5/12 md:mt-24">
              <div className="bg-creamywhite m-10 p-7 rounded-2xl space-y-2 shadow-md">
                  <div className="space-y-2">
                      <h1 className='font-bold text-secondarycolor text-2xl'>Please enter Your new
Password 😁</h1>
                  </div>
                 

                  <div className="">
                    <form className='space-y-2'>
                      <Input type="password" placeholder="password" className='rounded-full'></Input>
                      <Input type="password" placeholder="confirm password" className='rounded-full'></Input>
                      <Button variant='socials' className='w-full'>Send Request <span className='ml-2'><svg width="25" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.8331 25.6953C27.3574 25.6953 26.98 26.0625 26.98 26.5078V34.6484C26.98 35.9922 25.8316 37.0859 24.4206 37.0859H5.61907C4.20814 37.0859 3.0515 35.9922 3.0515 34.6484V5.35156C3.0515 4.00781 4.19993 2.90625 5.61907 2.90625H24.4206C25.8316 2.90625 26.98 4 26.98 5.35156V13.4922C26.98 13.9453 27.3656 14.3047 27.8331 14.3047C28.3089 14.3047 28.6863 13.9375 28.6863 13.4922V5.35156C28.6863 3.10937 26.7667 1.28125 24.4124 1.28125H5.61907C3.26478 1.28125 1.34525 3.10937 1.34525 5.35156V34.6484C1.34525 36.8906 3.26478 38.7188 5.61907 38.7188H24.4206C26.7749 38.7188 28.6945 36.8906 28.6945 34.6484V26.5078C28.6863 26.0625 28.3089 25.6953 27.8331 25.6953Z" fill="white"/>
<path d="M40.5153 20.4453C40.5153 20.4375 40.5235 20.4375 40.5235 20.4297C40.5317 20.4141 40.5481 20.3906 40.5563 20.375C40.5563 20.3672 40.5645 20.3594 40.5645 20.3594C40.5727 20.3437 40.5809 20.3281 40.5891 20.3047C40.5891 20.2969 40.5974 20.2891 40.5974 20.2812C40.6056 20.2656 40.6138 20.25 40.6138 20.2266C40.6138 20.2187 40.622 20.2109 40.622 20.2031C40.6302 20.1875 40.6302 20.1719 40.6384 20.1484C40.6384 20.1406 40.6384 20.125 40.6466 20.1172C40.6466 20.1016 40.6548 20.0859 40.6548 20.0703C40.6548 20.0469 40.6548 20.0312 40.6548 20.0078C40.6548 20 40.6548 19.9922 40.6548 19.9922C40.6548 19.9844 40.6548 19.9766 40.6548 19.9766C40.6548 19.9531 40.6548 19.9375 40.6548 19.9141C40.6548 19.8984 40.6466 19.8828 40.6466 19.8672C40.6466 19.8594 40.6466 19.8437 40.6384 19.8359C40.6384 19.8203 40.6302 19.8047 40.622 19.7812C40.622 19.7734 40.6138 19.7656 40.6138 19.7578C40.6056 19.7422 40.5974 19.7266 40.5974 19.7031C40.5974 19.6953 40.5891 19.6875 40.5891 19.6797C40.5809 19.6641 40.5727 19.6406 40.5645 19.625C40.5645 19.6172 40.5563 19.6094 40.5563 19.6094C40.5481 19.5937 40.5317 19.5703 40.5235 19.5547C40.5235 19.5469 40.5153 19.5469 40.5153 19.5391C40.4825 19.4922 40.4415 19.4453 40.4005 19.4062L33.5673 12.8984C33.2309 12.5781 32.6895 12.5781 32.3614 12.8984C32.0251 13.2188 32.0251 13.7344 32.3614 14.0469L37.7427 19.1719H17.5794C17.1036 19.1719 16.7263 19.5391 16.7263 19.9844C16.7263 20.4375 17.1118 20.7969 17.5794 20.7969H37.7345L32.3614 25.9375C32.0251 26.2578 32.0251 26.7734 32.3614 27.0859C32.5255 27.2422 32.747 27.3281 32.9684 27.3281C33.1899 27.3281 33.4032 27.25 33.5755 27.0859L40.4087 20.5781C40.4415 20.5391 40.4743 20.5 40.5153 20.4453Z" fill="white"/>
</svg>
</span></Button>
                    </form>
                  </div>
            </div>
           </div>


    </div>
  )
}

export default ForgotPasswordConfirm