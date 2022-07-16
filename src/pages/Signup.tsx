import { ButtonLink, InputGroup, PrimaryButton } from '@/components'

import { twclsx } from '@/utils'

const SignupPage: React.FunctionComponent = () => {
  return (
    <section className={twclsx('flex flex-col gap-6', 'pt-10 md:gap-12')}>
      <div className='w-full'>
        <h1 className='text-4xl md:text-5xl mb-4'>Create Account</h1>
        <p>Want to try out ExpenseApp? signup to check it out!</p>
      </div>

      <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <h2 className='md:col-span-2'>
          Signup to{' '}
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary-5 to-ternary-5'>
            ExpenseApp
          </span>
        </h2>

        <InputGroup
          label='Username'
          htmlForAndName='username'
          placeholder='A neat username is required'
        />
        <InputGroup
          type='email'
          label='Email Address'
          htmlForAndName='email'
          placeholder='Email address to verify you :D'
        />
        <InputGroup
          type='password'
          label='Password'
          htmlForAndName='password'
          placeholder='A strong password is required'
          afterInput={
            <span className='text-sm text-error-2 dark:text-error-1'>
              * ExpenseApp will not share your data
            </span>
          }
        />

        <div className='flex items-center gap-2 md:col-span-2'>
          <PrimaryButton className={twclsx('w-full md:max-w-max', 'py-2.5 px-6 font-semibold')}>
            Signup
          </PrimaryButton>
          <ButtonLink
            to='/signin'
            className={twclsx(
              'w-full md:max-w-max',
              'bg-transparent border px-6',
              'text-theme-6 dark:text-theme-3 border-theme-3 dark:border-theme-7',
              'hover:bg-theme-8 dark:hover:bg-theme-6 hover:text-theme-1'
            )}
          >
            Signin
          </ButtonLink>
        </div>
      </form>
    </section>
  )
}

export default SignupPage