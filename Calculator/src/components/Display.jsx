import styles from './Display.module.css'

function Display({ calvalue }) {
  return <input type='text' className={styles.display} value={calvalue} readOnly></input>

}

export default Display;