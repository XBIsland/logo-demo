import { useState } from 'react'
import { verify } from '../../api'
import { initFormData } from '../../utils'
import TextField from '../TextField/TextField'
import Button from '../Button/Button'
import Logo from './Logo'

function Verification() {
  const [code, setCode] = useState('')
  const [error, setError] = useState({
    verifyError: false,
    verifyErrorMsg: ''
  })
  const handleChange = e => {
    const v = e.target.value
    setCode(v)
  }
  const handleClick = async () => {
    setError({ verifyError: false, verifyErrorMsg: '' })
    try {
      const params = initFormData({tfa: code})
      await verify(params)
      window.location.href = 'https://www.lizhi.io'
    } catch (message) {
      setError({ ...error, verifyError: true, verifyErrorMsg: message })
    }
  }

  return (
    <>
      <Logo />
      <TextField
        error={error.verifyError}
        errorMessage={error.verifyErrorMsg}
        type="text"
        name="tfa"
        icon="password"
        placeholder="请输入你的两步认证验证码"
        onChange={handleChange}
        // onBlur={handleBlur}
      />
      <Button onClick={() => handleClick()} disabled={!code}>
        下一步
      </Button>
    </>
  )
}

export default Verification
