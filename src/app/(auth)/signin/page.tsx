import { SignInForm } from '@/components/signin-form'

export default function LoginPage() {
  return (
    <main className='flex h-screen justify-center items-center'>
      <SignInForm className='max-w-2xl w-full m-7' />
    </main>
  )
}
