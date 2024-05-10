import styles from "./Button.module.css"


function Button({ handleButton }) {

  const key = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']

  return <div className={styles.buttonContainer}>

    {key.map(btn => <button className={styles.button}
      onClick={() => { handleButton(btn) }}
    >{btn}</button>)}
  </div>
}

export default Button;