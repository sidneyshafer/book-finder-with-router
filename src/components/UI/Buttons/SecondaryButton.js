import styles from "./SecondaryButton.module.css";

function SecondaryButton({ text, onClick, className }) {
    return <button 
    className={`${styles.btn} ${className ? className : ''}`}
    onClick={onClick}
    >{text}
    </button>
}

export default SecondaryButton;