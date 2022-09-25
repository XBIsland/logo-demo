import style from './TextField.module.less'

function TextField(props) {
  const {
    icon,
    type = 'text',
    error,
    name,
    placeholder = '',
    errorMessage = '',
    onBlur, onChange
  } = props
  const handleChange = e => onChange && onChange(e)
  const handleBlur = e => onBlur && onBlur(e)
  return (
    <>
      <div className={style['input-custom']}>
        <input
          className={error ? 'error' : ''}
          autocomplete="off"
          type={type}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
        />
        <div className={icon ? `${style[icon]} ${style.icon}` : ''}></div>
      </div>
      {errorMessage && error && <p className="error-text">{errorMessage}</p>}
    </>
  )
}

export default TextField
