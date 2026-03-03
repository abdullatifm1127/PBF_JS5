import Navbar from "../navbar";
import { useRouter } from "next/router";

const disableAuthPages = ["/auth/login", "/auth/register"];

type AppShellProps = {
    children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    const { pathname } = useRouter();
    return (
      <main>
        <div>
          {!disableAuthPages.includes(pathname) && <Navbar />}
          {children}
        </div>
      </main>
    );
};

export default AppShell;