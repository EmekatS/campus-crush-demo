
import { Tabs } from '@components/ui/tabs'
import React, { useReducer } from 'react'
import { INITIAL, signupReducer } from '@/reducers/SignupReducer';
import { ACTION_TYPES } from '@/reducers/SignupReducer';
import { FileUpload } from '@components/ui/file-upload';
import { Textarea } from '@components/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/components/ui/select';
import { DatePicker } from '@components/DatePicker';
import { useSignup } from '@/contexts/SignupContext';
import Button from '@components/Button';
import { Trash2 } from 'lucide-react';

const Settings = () => {
    const { state, dispatch } = useSignup();

    const handleInput = (e) => {
        dispatch({ type: ACTION_TYPES.CHANGE_INPUT, payload:{name:e.target.name, value:e.target.value},});
    }
    const handleSelectChange = (name, value) => {
        dispatch({ 
            type: ACTION_TYPES.CHANGE_INPUT, 
            payload: { name, value }
        });
    }
    console.log(state);

    const tabs = [
    {
        title: "Profile",
        value: "profile",
        content: ( 
            <div className="w-full overflow-hidden relative h-fit rounded-2xl md:p-10 space-y-10 bg-transparent">
                <p className='text-xl md:text-4xl font-bold text-pink-400 font-secondary'>Edit Profile</p>
                <div className='grid grid-cols-2 gap-5 max-md:grid-cols-1'>
                    <form className='border-1 p-2'>
                        <h1 className='secondary-font text-xl !text-pink-400'>Information</h1>
                        <div className='w-full space-y-5'>
                            <div className='flex-between w-full gap-3 max-sm:flex-col'>
                                <div className='flex-center w-1/2 border-1 border-dashed rounded-xl max-sm:w-full flex-col p-4'><p className='text-slate-400'>Profile Photo</p><FileUpload /></div>
                                <div className='flex-center w-1/2 border-1 border-dashed rounded-xl max-sm:w-full flex-col p-4'><p className='text-slate-400'>Additional Photos</p><FileUpload multiple={true} /></div>
                            </div>
                            <div><input type="text" placeholder='Full Name' value={state.fullName} onChange={handleInput} name='fullName' /></div>
                            <div className='flex-between w-full gap-4'>
                                <div className='w-1/2'>
                                    <Select value={state.gender} onValueChange={(value) => handleSelectChange('gender', value)}>
                                        <SelectTrigger className="w-full bg-pink-50 border-0 cursor-pointer outline-none rounded-full px-4 py-2">
                                            <SelectValue placeholder="Gender"/>
                                        </SelectTrigger>
                                        <SelectContent className="rounded-2xl">
                                            <SelectItem value="male" className="hover:bg-pink-50">Male</SelectItem>
                                            <SelectItem value="female">Female</SelectItem>
                                            <SelectItem value="complicated">It's Complicated</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className='w-1/2'>
                                    <DatePicker />
                                </div>
                            </div>
                            <div>
                                <Textarea />
                            </div>  
                            <div className='w-full flex-center'>
                                <Button>Update Information</Button>
                            </div>
                        </div>
                    </form>
                    <form className='border-1 p-2'>
                        <h1 className='!text-pink-400 secondary-font text-xl'>Credentials</h1>
                        <div className='w-full space-y-5'>
                            <div><input type="email" placeholder='E-Mail' value={state.fullName} onChange={handleInput} name='fullName' /></div>
                            <div className='flex-between w-full gap-4'>
                                <div className='w-1/2'>
                                    <Select value={state.gender} onValueChange={(value) => handleSelectChange('gender', value)}>
                                        <SelectTrigger className="w-full bg-pink-50 border-0 cursor-pointer outline-none rounded-full px-4 py-2">
                                            <SelectValue placeholder="University Name"/>
                                        </SelectTrigger>
                                        <SelectContent className="rounded-2xl">
                                            <SelectItem value="male" className="hover:bg-pink-50">Male</SelectItem>
                                            <SelectItem value="female">Female</SelectItem>
                                            <SelectItem value="complicated">It's Complicated</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div> 
                                <div className='w-1/2'><input type="text" placeholder='Course/Program' value={state.fullName} onChange={handleInput} name='fullName' /></div>
                            </div>
                            <div className='flex-between w-full gap-4'>
                                <div className='w-1/2'><input type="password" placeholder='Password' value={state.fullName} onChange={handleInput} name='fullName' /></div>
                                <div className='w-1/2'><input type="password" placeholder='Confirm Password' value={state.fullName} onChange={handleInput} name='fullName' /></div>
                            </div>
                            <div className='w-full flex-center'>
                                <Button>Update Information</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
         )
    },
    {
        title: "Account",
        value: "account",
        content: ( 
            <div className="w-full overflow-hidden relative h-fit rounded-2xl md:p-10 text-xl md:text-4xl font-bold text-pink-400 bg-transparent space-y-10">
                <p className='font-secondary'>Account</p>
                <form action="" className='w-full'>
                    <div className='w-full bg-red-100 border-1 border-red-400 mb-10 rounded-full md:px-4 flex-between p-3'>
                        <p className='!text-white text-xl font-bold'>Delete Account</p>
                        <Button lighter="text-[var(--red-shade)] bg-transparent"><Trash2 /></Button>
                    </div>
                </form>
            </div>
         ),
    },
]
  return (
    <>
    <section>
        <div className="w-full h-full ">
            <Tabs tabs={tabs} />
        </div>
    </section>
    </>
  )
}

export default Settings