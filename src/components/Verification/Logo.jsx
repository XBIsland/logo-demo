import style from './Logo.module.less'

function Logo() {
  return (
    <div className={style.logo}>
      <img src="/src/assets/iphone_tx.png" alt="" />
    </div>
  )
}

export default Logo