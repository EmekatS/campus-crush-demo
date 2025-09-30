import Button from '@components/Button'
import GradientText from '@components/components/GradientText'
import { Checkbox } from '@components/components/ui/checkbox'
import { motion, MotionConfig, scale } from 'motion/react'
import React from 'react'
import { interests } from '../constants/Constants'

const Interests = () => {
  return (
    <>
    <section className='flex-center'>
        <MotionConfig transition={{ duration: .2 }}>
          <div className='flex-center flex-col w-[400px] gap-4 px-4'>
            <div>
              <GradientText
              colors={["#f06090", "#f08383", "#f94646", "#f08383", "#f06090"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class text-3xl font-bold primary-font max-sm:text-3xl max-sm:w-36">
                  Intrests
              </GradientText>
              <p className='text-sm secondary-font'>Tell us what you like so that we can help u find your kind of ppl</p>
            </div>
            <form onSubmit={() => {window.location.href = '/'}} className='w-full flex flex-col gap-5 justify-center items-center'>
              <div className='w-full flex flex-col gap-2 h-[400px] overflow-y-scroll'>
                {interests.map((interest, index) => (
                  <div className='w-full py-4 h-15 bg-pink-100 rounded-full flex items-center gap-4 px-4'>
                    <Checkbox id={interest.interestName} />
                    <label htmlFor={interest.interestName} className='font-secondary font-semibold text-pink-400'>{interest.interestName}</label>
                  </div>
                ))}
                </div>
              <Button type='submit' width='w-90'>Matchmaking</Button>
            </form>
          </div>
        </MotionConfig>
    </section>
    </>
  )
}

export default Interests