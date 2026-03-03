import Navbar from "../navbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1, padding: "20px" }}>
        {children}
      </main>

      <footer
        style={{
          padding: "15px",
          textAlign: "center",
          borderTop: "1px solid #ddd",
        }}
      >
        <p>© 2026 My App. All rights reserved.</p>
      </footer>
    </div>
  );
}