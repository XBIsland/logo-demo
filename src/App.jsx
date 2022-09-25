import { Fragment, useState } from 'react'
import style from './App.module.less'
import SignInForm from './components/SignInForm/SignInForm'
import Verification from './components/Verification/Verification'
import Tip from './components/ Tip/Tip'
import { ACTION, STEP } from './constant'
import { initFormData, setToken } from './utils'
import { login } from './api'
import useTerminal, { TERMINAL } from './hooks/useTerminal'

function App() {
  const [loginStep, setLoginStep] = useState(STEP.first)
  const [error, setError] = useState('')
  const terminal = useTerminal()

  const handleSigninClick = async formData => {
    const params = initFormData(formData)
    try {
      const { token } = await login(params)
      setToken(token)
      localStorage.setItem('token', token || '')
      dispatch({ type: ACTION.submitSuccess })
    } catch (message) {
      dispatch({ type: ACTION.submitError, message })
    }
  }

  const dispatch = action => {
    switch (action.type) {
      case ACTION.submitSuccess: {
        setError('')
        setLoginStep(STEP.second)
        break
      }
      case ACTION.submitError: {
        setError(action.message)
        break
      }

      default:
        break
    }
  }

  return (
    <Fragment>
      <div className={style.App}>
        {terminal === TERMINAL.PC && (
          <div className={`${style['banner-pc']}`}></div>
        )}
        <section className={style.wrapper}>
          <h4 className={style['page-title']}>登录</h4>
          <section className={style['main-content']}>
            <h3 className="title">DIGITALYCHEE</h3>

            {loginStep === STEP.first ? (
              <SignInForm handleSigninClick={handleSigninClick} />
            ) : (
              <Verification>1</Verification>
            )}

            <section style={{ height: '6rem', paddingTop: '1.5rem' }}>
              {error ? <Tip text={error} severity="error" /> : null}
            </section>

            <div className={style.other}>其他登陆方式</div>
          </section>
        </section>
        {terminal === TERMINAL.PHONE && (
          <div className={`${style['banner-phone']}`}></div>
        )}
      </div>
    </Fragment>
  )
}

export default App
