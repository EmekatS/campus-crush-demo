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
    const [error, setError] = useState('');

    const handleInput = (e) => {
        setError(null);
        dispatch({ type: ACTION_TYPES.CHANGE_INPUT, payload:{name:e.target.name, value:e.target.value}});
    }
    
    const handleSelectChange = (name, value) => {
        setError(null);
        dispatch({ 
            type: ACTION_TYPES.CHANGE_INPUT, 
            payload: { name, value }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        
        if (!state.email || state.email.trim() === '') {
            setError('Please enter your email');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(state.email)) {
            setError('Please enter a valid email address');
            return;
        }
        
        if (!state.password || state.password.length === 0) {
            setError('Please enter a password');
            return;
        }
        
        if (state.password.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }
        if (state.password !== state.cPassword) {
            setError('Passwords do not match!');
            return;
        }
        console.log("working")
    }

    console.log(error);

  return (
    <>
    <section>
        <form onSubmit={handleSubmit}>
            <Stepper
            initialStep={1}
            onStepChange={(step) => {
                setError(null);
                console.log(step);
            }}
            onFinalStepCompleted={() => {
                console.log("All steps completed!");
                handleSubmit(new Event('submit'));
            }}
            backButtonText="Previous"
            nextButtonText="Next">
                    <Step>
                        <div className='space-y-5'>
                            <div className='text-center '>
                                <GradientText
                                  colors={["#f06090", "#f08383", "#f94646", "#f08383", "#f06090"]}
                                  animationSpeed={3}
                                  showBorder={false}
                                  className="custom-class text-3xl font-bold primary-font max-sm:text-3xl max-sm:w-36">
                                  Create your account
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
                        </div>
                    </Step>
                    <Step>
                        <div className='space-y-5'>
                            <div className='text-center'>
                                <GradientText
                                  colors={["#f06090", "#f08383", "#f94646", "#f08383", "#f06090"]}
                                  animationSpeed={3}
                                  showBorder={false}
                                  className="custom-class text-3xl font-bold primary-font max-sm:text-3xl max-sm:w-36">
                                  Educational details
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
                        </div>
                    </Step>
                    <Step>
                        <div className='space-y-5'>
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
                                <Textarea 
                                    value={state.bio} 
                                    onChange={handleInput} 
                                    name='bio'
                                    placeholder='Tell us about yourself...'
                                />
                            </div>  
                        </div>
                        </div>
                    </Step>
                    <Step>
                        <div className='space-y-5'>
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
                                <FileUpload value={state.profilePicture ? [state.profilePicture] : []} onChange={(files) => handleSelectChange('profilePicture', files[0])} />
                            </div>
                            <div className='flex flex-col justify-center items-center w-full'>
                                <h1 className='font-semibold text-slate-400 secondary-font'>Additional Photos</h1>
                                <div className='flex'>
                                    <div>
                                        <FileUpload value={state.profileImages} onChange={(files) => handleSelectChange('profileImages', files)} multiple={true} maxFiles={3} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </Step>
                    <Step>
                        <div className='space-y-5'>
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
                            
                            {error && (
                                <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-full text-center'>
                                    {error}
                                </div>
                            )}
                             <div className='flex flex-col gap-3'>
                                <div>
                                    <input 
                                        required 
                                        type="email" 
                                        placeholder='E-Mail' 
                                        value={state.email} 
                                        onChange={handleInput} 
                                        name='email' 
                                    />
                                </div>
                                <div>
                                    <input 
                                        required 
                                        type="password" 
                                        placeholder='Password' 
                                        value={state.password} 
                                        onChange={handleInput} 
                                        name='password' 
                                        minLength={8} 
                                    />
                                </div>
                                 <div>
                                    <input 
                                        required 
                                        type="password" 
                                        placeholder='Confirm Password' 
                                        value={state.cPassword} 
                                        onChange={handleInput} 
                                        name='cPassword' 
                                    />
                                </div>
                            </div>
                        </div>
                    </Step>
            </Stepper>
        </form>
    </section>
    </>
  )
}

export default Signup