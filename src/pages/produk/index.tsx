import { useRouter } from "next/router";
import {useEffect, useState} from "react";

const produk = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const status = localStorage.getItem("isLogin");
        if (status === "true") {
            setIsLogin(true);
        }else {
            router.push("/auth/login");
        }
        setIsLoading(false);
    },[router]);
        if (!isLogin) {
        return <div>Loading...</div>;
        }
        if(!isLogin) {
            return null;
        }
  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    router.push("/auth/login");
    };

    return (
        <div>
            <h1>Halaman Produk Abdul Latif M</h1>
            <p>Anda dapat mengakses halaman produk</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};
export default produk;