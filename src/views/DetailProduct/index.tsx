import { ProductType } from "@/types/product.type";
import styles from "./DetailProduct.module.scss";
import Image from "next/image";

export default function DetailProduct({product}: {product: ProductType}){
    return(
        <>
            <h1 className={styles.title}>Detail Product</h1>
            <div className={styles.productDetail}>
                <div className={styles.productDetail__item__image}>
                    {/* <img src={product.image && product.image} alt={product.name}/> */}
                    <Image loader={() => product.image} src={product.image && product.image} alt={product.name} width={300} height={300}/>
                </div>
                <h4 className={styles.productDetail__item__name}>{product.name}</h4>
                <p className={styles.productDetail__item__category}>{product.category}</p>
                <p className={styles.productDetail__item__price}>{product.price && product.price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</p>
            </div>            
        </>        
    );
};