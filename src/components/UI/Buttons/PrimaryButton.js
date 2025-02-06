import styles from "./PrimaryButton.module.css";

function PrimaryButton({ text, onClick, className }) {
    return <button 
    className={`${styles.btn} ${className ? className : ''}`}
    onClick={onClick}
    >{text}
    </button>
}

export default PrimaryButton;