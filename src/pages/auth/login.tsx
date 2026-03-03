import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.css";

const halamanLogin = () => {
    const router = useRouter();
    const handleLogin = (destination: string) => {
        console.log(`Button clicked, navigating to ${destination}`); 
        localStorage.setItem("isLogin", "true");

        document.cookie = "isLogin=true; path=/"; // Set cookie untuk status login
        router.push(destination);
    }
    return (
        <div className={styles.login}>
            <h1>Halaman Login</h1>
            <button onClick={() => handleLogin("/produk")}>Login ke Produk (Imperatif)</button> <br />
            <button onClick={() => handleLogin("/shop")}>Login ke Shop</button>
            <Link href="/auth/register">Ke Halaman Register (Link)</Link>
        </div>
    );
};

export default halamanLogin;