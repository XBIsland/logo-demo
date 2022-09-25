import Button from '../Button/Button'
import TextField from '../TextField/TextField'
import style from './SignInForm.module.less'
import { validate } from '../../utils'
import { useState } from 'react'

function SignInForm(props) {
  const { handleSigninClick } = props

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const [error, setError] = useState({
    usernameError: false,
    usernameErrorMsg: '',
    passwordError: false,
    passwordErrorMsg: ''
  })

  const handleChange = e => {
    const field = e.target.name
    const value = e.target.value

    setFormData({ ...formData, [field]: value })
  }

  const handleBlur = e => {
    const field = e.target.name
    const value = e.target.value
    const { state, message } = validate(field, value)

    setError({
      ...error,
      [`${field}Error`]: state,
      [`${field}ErrorMsg`]: message
    })
  }

  return (
    <form className={style['login-form']} onSubmit={e => e.preventDefault()}>
      <div className={style['form-body']}>
        <TextField
          error={error.usernameError}
          errorMessage={error.usernameErrorMsg}
          type="username"
          name="username"
          icon="email"
          placeholder="请输入用户名/邮箱"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextField
          error={error.passwordError}
          errorMessage={error.passwordErrorMsg}
          type="password"
          name="password"
          icon="password"
          placeholder="请输入密码"
          onChange={handleChange}
        />
        <Button
          onClick={() => handleSigninClick(formData)}
          disabled={!formData.username || !formData.password || error.state}
        >
          下一步
        </Button>
      </div>
    </form>
  )
}

export default SignInForm
