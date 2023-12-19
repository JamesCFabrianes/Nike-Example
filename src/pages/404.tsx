import styles from "@/styles/404.module.scss";
import Image from "next/image";
import picnotfound from '/public/not_found.png';

export default function Custom404(){
    return(
        <div className = {styles.error}>
            <Image src={picnotfound} alt="404" className={styles.error__image}/>
            <div>404 | Halaman Tidak Ditemukan</div>
        </div>
    );
};