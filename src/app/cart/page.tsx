'use client'
import { useEffect, useState } from "react";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import style from "./shop.module.scss";
import scanDocuments from "@/components/listDocument";
import { Query } from "appwrite";


const Cart = () => {

    const [cart, setCart] = useState<any>([]);

    const asyncFunc = async () => {
        const userID: any = localStorage.getItem("userID");
        const response = await scanDocuments('661767c126a43868fb25', '663da29b000ceadef59d', [Query.equal("userID", [userID])]);
        console.log(response);
        if (response?.total) {
            const productDetails = response?.documents[0].productID;
            if (productDetails.length > 0) {
                const products = await scanDocuments('661767c126a43868fb25', '661767e907e6c66b6f32', [Query.equal("id", productDetails)]);
                setCart(products?.documents);
            }
        }

    }


    useEffect(() => {
        asyncFunc();
    }, [])


    return (
        <div>
            <Header />
            <main>
                <p className="font-bold text-xl mb-4">Add To Cart</p>
                <div className="flex flex-wrap gap-4">
                    {cart.length > 0 ? cart?.map((element: any) => (
                        <div className="flex justify-center items-center gap-4" key={element.id}>
                            <img className="w-[200px]" src={element.imageUrl} />
                            <div>
                                <h3>{element.name}</h3>
                                <p>{element.price}</p>
                                <div className={style.colors}>
                                    {element.color.map((colors: any) => (
                                        <span className={`${style.color_pallete} ${style[colors]}`}></span>
                                    ))}
                                    <span>+3</span>
                                </div>
                            </div>
                        </div>
                    )) : <p className="font-bold font-3xl">No Items</p>}
                </div>
            </main>
            <Footer />
        </div>)
}


export default Cart;