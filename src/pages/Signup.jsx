import GradientText from '@components/components/GradientText';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/components/ui/select';
import { Textarea } from '@components/components/ui/textarea';
import { DatePicker } from '@components/DatePicker';
import Stepper, { Step } from '@components/Stepper'
import { FileUpload } from '@components/ui/file-upload';
import React, { useEffect, useReducer, useState } from 'react'
import { INITIAL, signupReducer, ACTION_TYPES } from '@/reducers/SignupReducer';
import universitiesData from '../data/universities.json'

const Signup = () => {
    const [state, dispatch] = useReducer(signupReducer, INITIAL)
    const [unis, setUni] = useState(universitiesData.data);
    const [loading, setLoading] = useState(true);

    const handleInput = (e) => {
        dispatch({ type: ACTION_TYPES.CHANGE_INPUT, payload:{name:e.target.name, value:e.target.value},});
    }
    const handleSelectChange = (name, value) => {
        dispatch({ 
            type: ACTION_TYPES.CHANGE_INPUT, 
            payload: { name, value }
        });
    }

    console.log(unis)

  return (
    <>
    <section>
        <Stepper
        initialStep={1}
        onStepChange={(step) => {
            console.log(step);
        }}
        onFinalStepCompleted={() => console.log("All steps completed!")}
        backButtonText="Previous"
        nextButtonText="Next">
                <Step>
                    <form action="" className='space-y-5'>
                        <div className='text-center '>
                            <GradientText
                              colors={["#f06090", "#f08383", "#f94646", "#f08383", "#f06090"]}
                              animationSpeed={3}
                              showBorder={false}
                              className="custom-class text-3xl font-bold primary-font max-sm:text-3xl max-sm:w-36">
                              Create your acount
                            </GradientText>
                            <p className='text-sm secondary-font'>Create an account and get started with us now</p>
                        </div>
                    <div className='flex flex-col gap-3'>
                        <div>
                            <input type="text" placeholder='Full Name' value={state.fullName} onChange={handleInput} name='fullName' />
                        </div>
                        <div>
                            <Select value={state.gender} onValueChange={(value) => handleSelectChange('gender', value)}>
                                <SelectTrigger className="w-full bg-pink-50 border-0 cursor-pointer rounded-full px-4 py-2">
                                    <SelectValue placeholder="Gender"/>
                                </SelectTrigger>
                                <SelectContent className="rounded-2xl">
                                    <SelectItem value="male" className="hover:bg-pink-50">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="complicated">It's Complicated</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <DatePicker 
                                value={state.dob} 
                                onValueChange={(value) => handleSelectChange('dob', value)}
                            />
                        </div>
                    </div>
                    </form>
                </Step>
                <Step>
                    <form action="" className='space-y-5'>
                        <div className='text-center'>
                            <GradientText
                              colors={["#f06090", "#f08383", "#f94646", "#f08383", "#f06090"]}
                              animationSpeed={3}
                              showBorder={false}
                              className="custom-class text-3xl font-bold primary-font max-sm:text-3xl max-sm:w-36">
                              Educationl details
                            </GradientText>
                            <p className='text-sm secondary-font'>Dw its not an exam XD</p>
                        </div>
                    <div className='flex flex-col gap-3'>
                        <div>
                            <Select value={state.uniName} onValueChange={(value) => handleSelectChange('uniName', value)}>
                                <SelectTrigger className="w-full bg-pink-50 border-0 cursor-pointer rounded-full px-4 py-2">
                                    <SelectValue placeholder="University Name" />
                                </SelectTrigger>
                                <SelectContent className="rounded-2xl">
                                    {unis.map((uni) => (
                                        <SelectItem key={uni.vice_chacellor} value={uni.name} className="hover:bg-pink-50">{uni.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <input type="text" placeholder='Course/Program' value={state.course} onChange={handleInput} name='course' />
                        </div>
                    </div>
                    </form>
                </Step>
                <Step>
                    <form action="" className='space-y-5'>
                        <div className='text-center'>
                            <GradientText
                              colors={["#f06090", "#f08383", "#f94646", "#f08383", "#f06090"]}
                              animationSpeed={3}
                              showBorder={false}
                              className="custom-class text-3xl font-bold primary-font max-sm:text-3xl max-sm:w-36">
                              Profile Information
                            </GradientText>
                            <p className='text-sm secondary-font'>Tell people about yourself, let them know the real you</p>
                        </div>
                    <div className='flex flex-col gap-3'>
                        <div>
                            <Textarea value={state.bio} onChange={handleInput} name='bio' />
                        </div>  
                    </div>
                    </form>
                </Step>
                <Step>
                    <form action="" className='space-y-5'>
                        <div className='text-center'>
                            <GradientText
                              colors={["#f06090", "#f08383", "#f94646", "#f08383", "#f06090"]}
                              animationSpeed={3}
                              showBorder={false}
                              className="custom-class text-3xl font-bold primary-font max-sm:text-3xl max-sm:w-36">
                              Profile Photos
                            </GradientText>
                            <p className='text-sm secondary-font'>wyll?</p>
                        </div>
                    <div className='flex flex-col gap-3'>
                        <div>
                            <FileUpload  value={state.profilePicture ? [state.profilePicture] : []} onChange={(files) => handleSelectChange('profilePicture', files[0])} />
                        </div>
                        <div className='flex flex-col justify-center items-center w-full'>
                            <h1 className='font-semibold text-slate-400'>Additional Photos</h1>
                            <div className='flex'>
                                <div>
                                    <FileUpload value={state.profileImages} onChange={(files) => handleSelectChange('profileImages', files)} multiple={true} maxFiles={3} />
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </Step>
                <Step>
                    <form action="" onSubmit={() => {
                        console.log('sdjfs');
                    }} className='space-y-5'>
                        <div className='text-center'>
                            <GradientText
                              colors={["#f06090", "#f08383", "#f94646", "#f08383", "#f06090"]}
                              animationSpeed={3}
                              showBorder={false}
                              className="custom-class text-3xl font-bold primary-font max-sm:text-3xl max-sm:w-36">
                              Set up your account
                            </GradientText>
                            <p className='text-sm secondary-font'>Final Steps, Let's get it</p>
                        </div>
                    <div className='flex flex-col gap-3'>
                        <div>
                            <input required type="email" placeholder='E-Mail' value={state.email} onChange={handleInput} name='email' />
                        </div>
                        <div>
                            <input required type="password" placeholder='Password' value={state.password} onChange={handleInput} name='password' />
                        </div>
                        <div>
                            <input required type="password" placeholder='Confirm Password' value={state.cPassword} onChange={handleInput} name='cPassword' />
                        </div>
                    </div>
                    </form>
                </Step>
        </Stepper>
    </section>
    </>
  )
}

export default Signup