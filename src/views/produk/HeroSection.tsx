interface HeroSectionProps {
    onLogout: () => void;
}

const HeroSection =({ onLogout }: HeroSectionProps) => {
    return (
        <div style={{padding: "20px", backgroundColor: "#f0f0f0", textAlign: "center"}}>
            <h1>Produk User Page</h1>
            <p style={{color: "#666"}}>Anda sudah login dapat mengakses halaman ini</p>
            <button onClick={onLogout} style={{padding:"10px 20px", marginTop: "10px"}}>Kembali ke Halaman Login</button>   
        </div>
    );
};

export default HeroSection;