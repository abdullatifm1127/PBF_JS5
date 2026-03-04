import Link from "next/link";
import styles from './register.module.scss';

const HalamanRegister = () => {
    return (
        <div className={styles.register}>
            <h1 className="text-3xl font-bold" style={{color: '#fff'}}>Halaman Register Abdul Latif</h1>
            <Link href="/auth/login">Ke Halaman Login</Link>
        </div>
    );
}

export default HalamanRegister;