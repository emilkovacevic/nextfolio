'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import { Button } from './ui/button'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  title: z.string().min(3, { message: 'Name must be at least 3 characters.' }),
  email: z.string().email({ message: 'Invalid email format.' }),
  message: z
    .string()
    .min(10, { message: 'Message should be at least 10 characters long.' })
})

type FormValues = z.infer<typeof formSchema>

const ContactForm = () => {
  const { toast } = useToast()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      title: '',
      email: '',
      message: ''
    }
  })

  const {
    formState: { errors },
    reset
  } = form

  function onSubmit(values: FormValues) {
    // Here, handle the form submission to your server or any other logic you want
    console.log(`Form data: ${JSON.stringify(values)}`)

    // code to run on sucsessfull message send
    toast({
      title: 'Message sent',
      description:
        'Thank you for reaching out. I will reply as soon as possible'
    })
    reset({
      name: '',
      title: '',
      email: '',
      message: ''
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Your name"
                  {...field}
                  className="w-full p-2 border rounded-md"
                />
              </FormControl>
              {errors.name?.message && (
                <p className="text-destructive">{errors.name?.message}</p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Message title"
                  {...field}
                  className="w-full p-2 border rounded-md"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="email@example.com"
                  {...field}
                  className="w-full p-2 border rounded-md"
                />
              </FormControl>
              {errors.email?.message && (
                <p className="text-destructive">{errors.email?.message}</p>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <textarea
                  {...field}
                  rows={5}
                  className="w-full p-2 border rounded-md"
                />
              </FormControl>
              {errors.message?.message && (
                <p className="text-destructive">{errors.message?.message}</p>
              )}
            </FormItem>
          )}
        />

        <Button type="submit">Send Message</Button>
      </form>
    </Form>
  )
}

export default ContactForm
