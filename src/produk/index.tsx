import { useRouter} from "next/router";
import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import MainSection from "./MainSection";

const Produk = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

//  useEffect(() => {
//     const status = localStorage.getItem("isLogin");
//     if (status !== "true") {
//         router.push("/auth/login");
//     } else {
//         setIsLogin(true);
//     }
//     setIsLoading(false);
// }, []);
    return (
    <div>
        <h1>HALAMAN PRODUK</h1>
    </div>
);
        if (isLoading) {
            return <div>Loading...</div>;
        }
        if (!isLogin) {
            return null;
        }

        const handleLogout = () => {
            localStorage.removeItem("isLogin");
            router.push("/auth/login");
        };

    return (
        <div>
            <HeroSection onLogout={handleLogout}/>
            <MainSection />
        </div>
    );
};

export default Produk;