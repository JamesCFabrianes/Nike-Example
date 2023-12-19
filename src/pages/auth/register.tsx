import Link from "next/link";

export default function RegisterPage(){
    return(
        <>
            <div>
                <h1>Register Page</h1>
            </div>
            <p>
                Sudah punya akun ? Registrasi <Link href={"/auth/login"}>disini</Link>
            </p>
        </>    
    );
};