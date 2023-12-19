// Static Side Generation

import ProductView from "@/views/Product/Main";
import { ProductType } from "@/types/product.type";

export default function ProductPage(props: {products: ProductType[]}){
    const {products} = props; 
    return(
        <div>
            <ProductView products={products}/>
        </div>
    );
};

export async function getStaticProps(){
    // Fetch Data
    const res = await fetch('http://localhost:3000/api/product');
    const response = await res.json();
    return {
        props: {
            products: response.data,
        },
        revalidate: 10,
    };
}