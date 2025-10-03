import React from 'react'
import Slider from '../components/Slider'
import { LoaderOne } from '@components/ui/loader'
import { Logo } from '../assets/images'
import { motion, MotionConfig } from 'motion/react'
import Button from '@components/Button'
import GradientText from '@components/GradientText'
import { Link } from 'react-router'

const Index = () => {
  return (
    <>
        <section>
            <MotionConfig transition={{ duration: .2 }}>
              <div className='flex justify-between items-center w-full h-screen max-sm:justify-center max-md:flex-col'>
                <motion.div className='w-1/3 flex flex-col justify-center items-center space-y-5'>
                  <div className='w-fit'><img src={Logo} alt="Logo" className='max-w-[50px]' /></div>
                    <div className='text-center'>
                      <GradientText
                        colors={["#f06090", "#f08383", "#f94646", "#f08383", "#f06090"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class text-5xl font-bold primary-text max-sm:text-3xl max-sm:w-36">
                        Campus Crush
                      </GradientText>
                      <p className='text-xl text-slate-400 secondary-font'>#Loveisinsession</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                      <Link to="/signin">
                        <Button width="w-80">Sign In</Button>
                      </Link>
                      <Link to="/signup">
                        <Button lighter="text-[var(--red-shade)] bg-transparent" width="w-80">Sign Up</Button>
                      </Link>
                      <Link to="/interests">
                        <Button width="w-80">Intrests</Button>
                      </Link>
                       <Link to="/settings">
                        <Button lighter="text-[var(--red-shade)] bg-transparent" width="w-80">Settings</Button>
                      </Link>
                    </div>
                </motion.div>
                <div className='w-2/3 flex-center'>
                    <Slider />
                </div>
              </div>
            </MotionConfig>
        </section>
    </>
  )
}

export default Index