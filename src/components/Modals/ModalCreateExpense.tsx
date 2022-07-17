import { Button, Input, InputError, PrimaryButton } from '@/components'

import { useCreateExpenseModal } from '@/hooks'
import { createExpenseSchema, twclsx } from '@/utils'

import Modal from './Modal'

import { yupResolver } from '@hookform/resolvers/yup'
import { CreateExpensePayload } from 'expense-app'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const ModalCreateExpense: React.FunctionComponent = () => {
  const defaultValues: CreateExpensePayload = { title: '', total_money: 0 }

  const { isOpen, closeModal } = useCreateExpenseModal()
  const rhf = useForm<CreateExpensePayload>({
    defaultValues,
    resolver: yupResolver(createExpenseSchema)
  })

  const onSubmit = (args: CreateExpensePayload) => {
    console.info(args)
    rhf.reset()
  }

  useEffect(() => {
    if (isOpen) rhf.reset()
  }, [isOpen])

  return (
    <Modal show={isOpen} onClose={closeModal} title='Create expense' className={twclsx('max-w-lg')}>
      <p className='max-w-prose'>
        Just like a wallet, expense represint your wallet to display how much money you are
        currently want to calculate.
      </p>

      <form
        onSubmit={rhf.handleSubmit(onSubmit, (args) => console.info(args))}
        className={twclsx('flex flex-col gap-4 md:gap-6', 'w-full mt-8')}
      >
        <div className='inline-flex flex-col gap-2.5'>
          <label htmlFor='title'>Expense name</label>
          <Input
            type='text'
            id='title'
            placeholder='E.g: June savings'
            className={twclsx(
              rhf.formState.errors.title?.message &&
                'border-error-1 dark:border-error-1 focus:border-error-2 focus:ring-error-1'
            )}
            {...rhf.register('title')}
          />
          {rhf.formState.errors.title?.message && (
            <InputError msg={rhf.formState.errors.title.message} />
          )}
        </div>

        <div className='inline-flex flex-col gap-2.5'>
          <label htmlFor='total_money'>Amount money💸</label>
          <Input
            type='number'
            id='total_money'
            placeholder='The money you want to put'
            className={twclsx(
              rhf.formState.errors.total_money?.message &&
                'border-error-1 dark:border-error-1 focus:border-error-2 focus:ring-error-1'
            )}
            {...rhf.register('total_money')}
          />
          {rhf.formState.errors.total_money?.message && (
            <InputError msg={rhf.formState.errors.total_money.message} />
          )}
        </div>

        <div className='inline-flex items-center gap-4'>
          <PrimaryButton type='submit' className='py-2 px-4 md:py-2.5 md:px-6'>
            Create
          </PrimaryButton>
          <Button
            type='button'
            onClick={closeModal}
            className={twclsx(
              'py-2 px-4 md:py-2.5 md:px-6',
              'dark:border-theme-6 hover:bg-theme-3 dark:hover:bg-theme-5'
            )}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default ModalCreateExpense