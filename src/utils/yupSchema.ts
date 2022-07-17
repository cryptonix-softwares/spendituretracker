import * as yup from 'yup'

const requiredMsg = 'This field is required'

export const signupSchema = yup.object().shape({
  email: yup.string().required(requiredMsg).email('Invalid email address'),
  password: yup
    .string()
    .required(requiredMsg)
    .min(8, 'Should be 8 to 16 characters')
    .max(16, 'Password should less than 16 characters'),
  username: yup.string().required(requiredMsg).matches(/^\S*$/, 'Username should not contain space')
})

export const signinSchema = yup.object().shape({
  email: yup.string().required(requiredMsg).email('Invalid email address'),
  password: yup.string().required(requiredMsg)
})

export const createExpenseSchema = yup.object().shape({
  title: yup
    .string()
    .required(requiredMsg)
    .min(6, 'At least 6 characters')
    .max(24, 'Should less than 24 characters'),
  total_money: yup
    .number()
    .required(requiredMsg)
    .typeError('Amount should not an empty string')
    .moreThan(4, 'At least 5 dollar')
    .lessThan(10000000000, 'maximum money exceeded')
})
