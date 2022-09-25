import style from './Button.module.less'

function Button(props) {
  const { disabled } = props

  const handleClick = () => {
    props.onClick()
  }
  return (
    <button className={style.btn} onClick={handleClick} disabled={disabled}>
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false
}

export default Button