import styles from './CommonHeader.module.scss'

function CommonHedaer() {
  return (
    <div className={styles.header}>
        <div className={styles.header__logoBox}>
            <img src="src/assets/images/image-logo.png" alt="" className={styles.header__logoBox__logo} />
            <span className={styles.header__logoBox__title}>PhotoSplash</span>
        </div>
        <div className={styles.header__profileBox}>
            <button className={styles.header__profileBox__button}>사진제출</button>
            <button className={styles.header__profileBox__button}>북마크</button>
            <span className={styles.hedaer__profileBox__userName}>SDK | SDK@Youtube.com</span>
        </div>
    </div>
  )
}

export default CommonHedaer