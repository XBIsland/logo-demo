import style from './Tip.module.less'

// const SEVERITY = {
//   error: 'error',
//   success: 'success'
// }

function Tip(props) {
  const { text, severity } = props
  return text ? (
    <>
      <div className={`${style[severity]} ${style.wrapper}`}>
        <span className="text">{text}</span>
      </div>
    </>
  ) : (
    <></>
  )
}

export default Tip
