import MainNavigation from "../components/Navigation/MainNavigation";

import Worm from "../components/UI/Worm/Worm";

import styles from "./Error.module.css";

function ErrorPage() {
    return (
        <>
            <MainNavigation />
            <main className={styles.container}>
                <h1>Uh oh! Looks like an error occurred...</h1>
                <p>Could not find the page you are looking for.</p>
                <Worm />
            </main>
        </>
    );
}

export default ErrorPage;