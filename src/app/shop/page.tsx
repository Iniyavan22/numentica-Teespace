"use client"

import style from "./shop.module.scss";
import { useEffect, useState, useRef } from "react";
import { ID } from "appwrite";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import GridViewIcon from '@mui/icons-material/GridView';
import CloseIcon from '@mui/icons-material/Close';
import Header from "../../components/header/page";
import Footer from "../../components/footer/page";
import listDocuments from "@/components/getCollection";
import postDocument from "@/components/postDocument";
import updateDocument from "@/components/updateDocument";
import scanDocuments from "@/components/listDocument";
import { Query } from "appwrite";

interface Cart {
    userID: string | null;
    productID: any[];
}


const Shop = function () {

    const userData = {
        "userID": localStorage.getItem("userID"),
        "productID": []
    }

    const [product, setProduct] = useState<any>([]);
    const [menuState, setMenuState] = useState<boolean>(false);
    const [cart, setCart] = useState<Cart>(userData);

    const asyncFunc = async () => {
        setProduct(await listDocuments('661767c126a43868fb25', '661767e907e6c66b6f32'));
    }
    useEffect(() => {
        asyncFunc();
    }, []);


    const [lowerVal, setLowerVal] = useState('0');
    const [upperVal, setUpperVal] = useState("60");


    const  handleClick= async (event:any)=>{
        const filteredProd = event.target.id;
        const filterOutProducts = await scanDocuments('661767c126a43868fb25', '661767e907e6c66b6f32', [Query.equal("type", [filteredProd])]);
        setProduct(filterOutProducts?.documents);
    }

    const handleMenuState = () => {
        setMenuState(!menuState);
    }

 
    const handleProduct = async(productID: any, event: any) => {
        setCart(prevCart => ({
            ...prevCart,
            productID: [...prevCart.productID, productID]
        }));
    
        const userID: any = localStorage.getItem("userID");
        const response: any = await scanDocuments('661767c126a43868fb25', '663da29b000ceadef59d', [Query.equal("userID", [userID])]);
    
        if (response?.total > 0) {
            const documentID = response.documents[0].$id;
            console.log("Updating document");
            const prevProd = response.documents[0].productID;
            await updateDocument({...cart,productID:[...prevProd,productID]}, documentID); 
        }
        else {
            const documentID = ID.unique();
            console.log("Creating new document");
            await postDocument(cart, documentID); 
        }
    }

    return (
        <div>
            <Header />
            <main className={style.content_padding} >
                <div className={style.main_headings}>
                    <p className={style.page_title}>Shop</p>
                    <div className={style.page_directory}>
                        <span className={style.root_page}>Home</span>
                        <svg width="21" height="1" viewBox="0 0 21 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.0585938" width="20" height="1" fill="#7E7E7E" />
                        </svg>
                        <span className={style.page_name}>
                            Shop</span>
                    </div>
                </div>
                <div className={`md:block fixed sm:block top-0 ${menuState ? 'left-[0%]' : 'left-[-50%]'} hidden backdrop:blur-[7.5] ease-linear duration-300 w-[45%] overflow-scroll sm:w-[45%] h-full z-10 bg-[#96DED1] text-black`}>
                    <span className="m-5 flex justify-end" onClick={() => handleMenuState()}>
                        <CloseIcon className="cursor-pointer" />
                    </span>
                    <aside className={style.shop_aside_panel}>
                        <p className={style.aside_panel_title}>Search</p>
                        <div>
                            <input type="search" className={style.search_bar} placeholder="Search..." />
                            <SearchIcon sx={{ color: '#7e7e7e' }} />
                        </div>
                        <p className={style.aside_panel_title}>Product Categories</p>
                        <ul className={`${style.categories_list}`} id="category" onClick={(event) => handleClick(event)}>
                            <li className="flex justify-between p-2" id="Hoodies">Hoodie{<p>1</p>}</li>
                            <li className="flex justify-between p-2" id="Kids">Kids<p>1</p></li>
                            <li className="flex justify-between p-2" id="Long-sleeves">Long Sleeves<p>1</p></li>
                            <li className="flex justify-between p-2" id="Designers">Product Designer<p>1</p></li>
                            <li className="flex justify-between p-2" id="Sweaters">Sweater<p>1</p></li>
                            <li className="flex justify-between p-2" id="T-shirts">T-shirt<p>1</p></li>
                        </ul>
                        <p className={style.aside_panel_title}>Filter by Color</p>
                        <ul className={style.categories_list}>
                            <li className="flex justify-between p-2"><div className="flex gap-1"><p className="w-[20px] h-[20px] rounded-full bg-black"></p>Black</div><p>1</p></li>
                            <li className="flex justify-between p-2"><div className="flex gap-1"><p className="w-[20px] h-[20px] rounded-full bg-[#D7A983]"></p>Brown</div><p>1</p></li>
                            <li className="flex justify-between p-2"><div className="flex gap-1"><p className="w-[20px] h-[20px] rounded-full bg-[#DD3333]"></p>Red</div><p>1</p></li>
                            <li className="flex justify-between p-2"><div className="flex gap-1"><p className="w-[20px] h-[20px] rounded-full bg-gray-300"></p>White</div><p>1</p></li>
                            <li className="flex justify-between p-2"><div className="flex gap-1"><p className="w-[20px] h-[20px] rounded-full bg-yellow-300"></p>Yellow</div><p>1</p></li>
                        </ul>
                        <p className={style.aside_panel_title}>Filter by Size</p>
                        <ul className={style.categories_list}>
                            <li className="flex justify-between p-2">2XL<p>1</p></li>
                            <li className="flex justify-between p-2">3XL<p>1</p></li>
                            <li className="flex justify-between p-2">L<p>1</p></li>
                            <li className="flex justify-between p-2">M<p>1</p></li>
                            <li className="flex justify-between p-2">S<p>1</p></li>
                            <li className="flex justify-between p-2">XL<p>1</p></li>
                        </ul>
                        <p className={style.aside_panel_title}>Filter by Material</p>
                        <ul className={style.categories_list}>
                            <li className="flex justify-between p-2"><span className="flex gap-1"><img className="w-[20px]" src="https://cloud.appwrite.io/v1/storage/buckets/6617957cdfa7fcd02bbf/files/661ce287f3eeed3626f8/view?project=6617679f5c0eb645569f&mode=admin" />
                                Glass</span><p>1</p></li>
                            <li className="flex justify-between p-2"><span className="flex gap-1"><img className="w-[20px]" src="https://cloud.appwrite.io/v1/storage/buckets/6617957cdfa7fcd02bbf/files/661ce28def6dff7aa4fd/view?project=6617679f5c0eb645569f&mode=admin" />
                                Metal</span><p>1</p></li>
                            <li className="flex justify-between p-2"><span className="flex gap-1"><img className="w-[20px]" src="https://cloud.appwrite.io/v1/storage/buckets/6617957cdfa7fcd02bbf/files/661ce295606925156105/view?project=6617679f5c0eb645569f&mode=admin" />
                                Paper</span><p>1</p></li>
                            <li className="flex justify-between p-2"><span className="flex gap-1"><img className="w-[20px]" src="https://cloud.appwrite.io/v1/storage/buckets/6617957cdfa7fcd02bbf/files/661ce287f3eeed3626f8/view?project=6617679f5c0eb645569f&mode=admin" />
                                Wood</span><p>1</p></li>
                        </ul>
                        <p className={style.aside_panel_title}>Sort by</p>
                        <ul className={style.categories_list}>
                            <li className="p-2">Popularity</li>
                            <li className="p-2">Average rating</li>
                            <li className="p-2">Latest</li>
                            <li className="p-2">Price: low to high</li>
                            <li className="p-2">Price: high to low</li>
                        </ul>
                        <p className={style.aside_panel_title}>Product tags</p>
                        <ul className={style.product_tags}>
                            <li className="p-2">Designer</li>
                            <li className="p-2">Kids</li>
                            <li className="p-2">T-Shirt</li>
                            <li className="p-2">Woman</li>
                        </ul>
                    </aside>
                </div>
                <div className={style.shop_page_main_container}>
                    <aside className={style.shop_aside_panel}>
                        <p className={style.aside_panel_title}>Search</p>
                        <div>
                            <input type="search" className='rounded-xl m-2' placeholder="Search..." />
                            <SearchIcon sx={{ color: '#7e7e7e' }} />
                        </div>
                        <p className={style.aside_panel_title}>Product Categories</p>
                        <ul className={style.categories_list} id="category" onClick={(event) => handleClick(event)}>
                            <li id="Hoodies">Hoodie{<p>1</p>}</li>
                            <li id="Kids">Kids<p>1</p></li>
                            <li id="Long-sleeves">Long Sleeves<p>1</p></li>
                            <li id="Designers">Product Designer<p>1</p></li>
                            <li id="Sweaters">Sweater<p>1</p></li>
                            <li id="T-shirts">T-shirt<p>1</p></li>
                        </ul>
                        <p className={style.aside_panel_title}>Filter by Price</p>
                        <div className={style.range_input}>
                            <input id="lower" type="range" className="min" min="0" max="60" value={lowerVal} step="2" onChange={(e) => setLowerVal(e.target.value)} />
                            <input id="upper" type="range" className="max" min="0" max="60" value={upperVal} step="2" onChange={(e) => setUpperVal(e.target.value)} />
                        </div>
                        <div className={style.filter_price}>
                            <div>
                                <span className={style.price_title}>Price</span>
                                <span>{lowerVal}</span>
                                <span>-</span>
                                <span>{upperVal}</span>
                            </div>
                            <p className={style.filter_text}>Filter</p>
                        </div>
                        <p className={style.aside_panel_title}>Filter by Color</p>
                        <ul className={style.categories_list}>
                            <li><div className="flex gap-1"><p className="w-[20px] h-[20px] rounded-full bg-black"></p>Black</div><p>1</p></li>
                            <li><div className="flex gap-1"><p className="w-[20px] h-[20px] rounded-full bg-[#D7A983]"></p>Brown</div><p>1</p></li>
                            <li><div className="flex gap-1"><p className="w-[20px] h-[20px] rounded-full bg-[#DD3333]"></p>Red</div><p>1</p></li>
                            <li><div className="flex gap-1"><p className="w-[20px] h-[20px] rounded-full bg-gray-300"></p>White</div><p>1</p></li>
                            <li><div className="flex gap-1"><p className="w-[20px] h-[20px] rounded-full bg-yellow-300"></p>Yellow</div><p>1</p></li>
                        </ul>
                        <p className={style.aside_panel_title}>Filter by Size</p>
                        <ul className={style.categories_list}>
                            <li>2XL<p>1</p></li>
                            <li>3XL<p>1</p></li>
                            <li>L<p>1</p></li>
                            <li>M<p>1</p></li>
                            <li>S<p>1</p></li>
                            <li>XL<p>1</p></li>
                        </ul>
                        <p className={style.aside_panel_title}>Filter by Material</p>
                        <ul className={style.categories_list}>
                            <li><span className="flex gap-1"><img className="w-[20px]" src="https://cloud.appwrite.io/v1/storage/buckets/6617957cdfa7fcd02bbf/files/661ce287f3eeed3626f8/view?project=6617679f5c0eb645569f&mode=admin" />
                                Glass</span><p>1</p></li>
                            <li><span className="flex gap-1"><img className="w-[20px]" src="https://cloud.appwrite.io/v1/storage/buckets/6617957cdfa7fcd02bbf/files/661ce28def6dff7aa4fd/view?project=6617679f5c0eb645569f&mode=admin" />
                                Metal</span><p>1</p></li>
                            <li><span className="flex gap-1"><img className="w-[20px]" src="https://cloud.appwrite.io/v1/storage/buckets/6617957cdfa7fcd02bbf/files/661ce295606925156105/view?project=6617679f5c0eb645569f&mode=admin" />
                                Paper</span><p>1</p></li>
                            <li><span className="flex gap-1"><img className="w-[20px]" src="https://cloud.appwrite.io/v1/storage/buckets/6617957cdfa7fcd02bbf/files/661ce287f3eeed3626f8/view?project=6617679f5c0eb645569f&mode=admin" />
                                Wood</span><p>1</p></li>
                        </ul>
                        <p className={style.aside_panel_title}>Sort by</p>
                        <ul className={style.categories_list}>
                            <li>Popularity</li>
                            <li>Average rating</li>
                            <li>Latest</li>
                            <li>Price: low to high</li>
                            <li>Price: high to low</li>
                        </ul>
                        <p className={style.aside_panel_title}>Product tags</p>
                        <ul className={style.product_tags}>
                            <li>Designer</li>
                            <li>Kids</li>
                            <li>T-Shirt</li>
                            <li>Woman</li>
                        </ul>
                    </aside>
                    <div className={style.shopper_container}>
                        <div className={style.shop_container}>
                            <p className={style.results_message}>Showing 1–12 of 20 results</p>
                            <div className={style.sort_container}>
                                <select>
                                    <option value="Default sorting">Default sorting</option>
                                    <option value="sort by price low to high">sort by price low to high</option>
                                    <option value="sort by price high to low">sort by price high to low</option>
                                    <option value="sort by ratings">sort by ratings</option>
                                </select>
                                <span>See</span>
                                <GridViewIcon />
                                <span className="cursor-pointer" onClick={() => handleMenuState()} >
                                    <MenuIcon />
                                </span>
                            </div>

                        </div>
                        <div className={style.shop_cards}>
                            {product?.map((element: any) => (
                                <div className={style.product_card} key={element.id} onClick={(event) => handleProduct(element.id, event)} >
                                    <img src={element.imageUrl} />
                                    <div>
                                        <p className="font-bold text-lg">{element.name}</p>
                                        <p>{element.price}</p>
                                        <div className={style.colors}>
                                            {element.color.map((colors: any) => (
                                                <span className={`${style.color_pallete} ${style[colors]}`}></span>
                                            ))}
                                            <span>+3</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={style.pagination_container}>
                    <a href="#" className={`${style.previous} ${style.round} ${style.active} ${style.pages}`}>1</a>
                    <a href="#" className={`${style.previous} ${style.round} ${style.pages}`}>2</a>
                    <a href="#" className={`${style.next} ${style.pages}`}>Next &#8250;&#8250; </a>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Shop;