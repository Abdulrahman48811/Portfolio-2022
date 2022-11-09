import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};



type Props = {}

function ContactMe({ }: Props) {
    const { register,
            handleSubmit,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:abdulrahman48811@gmail.com?subject=${formData.subject}&body=
        Hey there, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    }

    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl
     px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Contact Me
            </h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I've got just what you need. {" "}
                    <span className='decoration-[#f7ab0a]/50 underline'>
                        Lets Talk.
                    </span>
                </h4>

                <div className='space-y-10'>

                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-2xl font-serif '>+1 (619)-855-2160</p>
                    </div>


                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-2xl font-serif'>Abdulrahman48811@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-2xl font-serif'>San Diego, California</p>
                    </div>

                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register("name")} placeholder="Name" className="contactInput" type="text" />
                        <input {...register("email")} placeholder="Email" className="contactInput" type="email" />
                    </div>

                    <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />
                    <textarea {...register("message")} placeholder="Message" className="contactInput" />
                    <button type="submit" className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold'>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default ContactMe