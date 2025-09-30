import Button from '@components/Button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/components/ui/select'
import GradientText from '@components/GradientText'
import React, { useState } from 'react'

const Signin = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const toMatchmaking = (e) => {
        e.preventDefault();
        window.location.href = '/interests';
    }
  return (
    <>
    <section className='flex-center'>
        <div className='border-1 border-black w-[500px] p-4 rounded-2xl'>
            <form action="" onSubmit={toMatchmaking} className='space-y-5'>
                <div className='text-center'>
                    <GradientText
                      colors={["#f06090", "#f08383", "#f94646", "#f08383", "#f06090"]}
                      animationSpeed={3}
                      showBorder={false}
                      className="custom-class text-3xl font-bold primary-font max-sm:text-3xl max-sm:w-36">
                      Sign In
                    </GradientText>
                    <p className='text-sm secondary-font'>Sign In to your existing account</p>
                </div>
            <div className='flex flex-col gap-3'>
                <div>
                    <input type="text" placeholder='E-Mail' value={mail} onChange={e => setMail(e.target.value)} />
                </div>
                <div>
                    <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                </div>
            </div>
            <div className='w-full flex justify-end'>
                <Button type="submit">Sign In</Button>
            </div>
            </form>
        </div>
    </section>
    </>
  )
}

export default Signin