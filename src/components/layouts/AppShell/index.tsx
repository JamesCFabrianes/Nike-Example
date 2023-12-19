import { useRouter } from "next/router";
import NavBar from "../NavBar";

type AppShellProps = {
    children: React.ReactNode;
}

const disableNavbar = ["/404", "/auth/login", "/auth/register"] // Disable Navbar untuk halaman login dan halaman register

export default function AppShell(props: AppShellProps){
    const {children} = props;
    const {pathname} = useRouter();
    return(
        <main>
            {!disableNavbar.includes(pathname) && <NavBar/>}
            {children}        
        </main>
    );
};