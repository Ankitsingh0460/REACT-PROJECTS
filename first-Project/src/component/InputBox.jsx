import styles from "./InputBox.module.css"

function InputBox({ onkeyButton }) {

  return <div className={styles["inp"]}>
    <input placeholder="Type here" type="text" className={styles["inputs"]}
      onKeyDown={onkeyButton}
    ></input>

  </div>
}


export default InputBox;