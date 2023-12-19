import { fetcher } from "@/lib/swr/fetcher";
import { ProductType } from "@/types/product.type";
import DetailProduct from "@/views/DetailProduct";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function DetailProductPage({product}: {product: ProductType}) {
    const {query} = useRouter();    

    // [Client Side Rendering]
    // const { data, error, isLoading } = useSWR(
    //     `/api/product/${query.product}`,
    //     fetcher
    //   );
      
    return(
        <div>   
            {/* [Client Side Rendering] */}
            {/* <DetailProduct product = {isLoading ? {} :data.data}/> */}
            {/* [Server Side Rendering] or [Static Side Generation]*/}
            <DetailProduct product={product}/>
        </div>
    );
};

// [Server Side Rendering]
// export async function getServerSideProps({params}: {params: {product: string}}) { // Menggunakan variable product, karena nama file nya [product].tsx
//     // Fetch Data
//     const res = await fetch(`http://localhost:3000/api/product/${params.product}`);
//     const response = await res.json();
//     return {
//         props: {
//             product: response.data,
//         },
//     };
// }

// Untuk bisa mengakses API `http://localhost:3000/api/product/${params.product}`
// Kita harus mendaftarkan list product nya dengan code di bawah ini
export async function getStaticPaths(){
    const res = await fetch("http://localhost:3000/api/product"); // Cara mendaftarkan list productnya, dengan fetch seluruh data productnya
    const response = await res.json();

    const paths = response.data.map((product: ProductType) => ({
        params: {
            product: product.id,
        },
    }));
    
    return {paths, fallback: false};
}

// [Static Side Generation]
export async function getStaticProps({params}: {params: {product: string}}) { // Menggunakan variable product, karena nama file nya [product].tsx
    // Fetch Data
    const res = await fetch(`http://localhost:3000/api/product/${params.product}`);
    const response = await res.json();
    return {
        props: {
            product: response.data,
        },
    };
}