// Client Side Rendering

import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/Product/Main";
import { useRouter } from "next/router";
import {useEffect, useState} from "react";
import useSWR from "swr"; // npm i swr

export default function ProductPage(){
    const[isLogin, setIsLogin] = useState(false);
    const[products, setProducts] = useState([]);
    const { push } = useRouter();

    // Untuk mengecek authetifikasi sudah login atau belum
    // useEffect(() => {
    //     if(!isLogin){
    //         push("/auth/login"); // Jika belum login akan dipaksa untuk ke halaman login
    //     }
    // }, []);

    const { data, error, isLoading } = useSWR(
        "/api/product",
        fetcher
      );

    // useEffect(() => {
    //     fetch("/api/product")
    //     .then((res) => res.json())
    //     .then((response) => {
    //         setProducts(response.data);
    //     });
    // }, []);    

    return(
        <div>
            <ProductView products={isLoading ? [] : data.data}/>
        </div>
    );
};