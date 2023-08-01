"use client"

import React from 'react'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const ContactFormSchema = z.object({
    name: z.string({ required_error: 'Name is required' }).min(2).max(50),
    email: z.string({ required_error: 'Must include an email for response' }).email(),
    message: z.string({ required_error: 'Please include a message' }).min(1).max(500, { message: 'Message must be 500 characters or less' }),
})

type ContactFormInputs = z.infer<typeof ContactFormSchema>

export const ContactForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormInputs>({
        resolver: zodResolver(ContactFormSchema),
    })

    const submitData = async (data: ContactFormInputs) => {
        // TODO - setup email sending (i.e. sendgrid, mailgun, etc.)
    }

    return (
        <div className='flex flex-col items-center my-2'>
            <h1>Get In Touch</h1>
            <form className='max-w-2xl mx-auto w-72 md:w-[30rem] mt-4 md:mt-12'>
                <div className='flex flex-col my-3 mx-2 space-y-2'>
                    <Label htmlFor='name'>Name</Label>
                    <Input
                        id='name'
                        type='text'
                        placeholder='John Doe'
                        {...register('name', { required: true })}
                    />
                    {errors.name && <p className='text-destructive'>{errors.name.message}</p>}
                </div>
                <div className='flex flex-col my-3 mx-2 space-y-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                        id='email'
                        type='email'
                        placeholder='john123@abc.com'
                        {...register('email', { required: true })}
                    />
                    {errors.email && <p className='text-destructive'>{errors.email.message}</p>}
                </div>
                <div className='flex flex-col my-3 mx-2 space-y-2'>
                    <Label htmlFor='message'>Message</Label>
                    <Textarea
                        id='message'
                        placeholder='Enter your message here...'
                        {...register('message', { required: true })}
                    />
                </div>

                <div className='flex flex-col justify-end mx-2 my-3'>
                    <Button type='submit'>Submit</Button>
                </div>
            </form>
        </div>
    )
}