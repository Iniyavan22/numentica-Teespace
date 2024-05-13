'use client'

import { useEffect, useState } from "react";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import listDocuments from "@/components/getCollection";
import getDocument from "@/components/getDocument";


const Blogs = () => {

    const [posts, setPost] = useState<any>([]);
    const [blog, setBlog] = useState<any>([]);
    const [categories, setCategories] = useState<any>([]);
    const [categoryTitle, setCategoriesTitle] = useState<string>('');
    const [tags, setTags] = useState<any>([]);
    const [tagTitle, setTagTitle] = useState<string>('');
    const [article, setArticle] = useState<any>([]);
    const [menuState, setMenuState] = useState<boolean>(false);

    const asyncFunc = async () => {
        setPost(await listDocuments('661767c126a43868fb25', '6620a2e6e2c4fe4b2cd4'));
        const category: any = await getDocument('661767c126a43868fb25', '6620b2c913498bc36592', '6620b34906980f175d02');
        setCategories(category.list);
        setCategoriesTitle(category.title);
        setBlog(await listDocuments('661767c126a43868fb25', '66209d0befd3b9d17d36'));
        const tags: any = await getDocument('661767c126a43868fb25', '6620b2c913498bc36592', '6620b3d7e78700c1b455');
        setTags(tags.list);
        setTagTitle(tags.title);
        setArticle(await listDocuments('661767c126a43868fb25', '6620da6466adfb85ccea'));
    }

    useEffect(() => {
        asyncFunc();
    }, []);

    const handleMenuState = () => {
        setMenuState(!menuState);
    }

    return (
        <div>
            <Header />
            <main className="m-[2%]">
                <div className="mb-24">
                    <p className="flex justify-center font-bold text-3xl">Blogs</p>
                    <div className="flex items-center justify-center  gap-2">
                        <span className="text-root-page-text">Home</span>
                        <HorizontalRuleIcon className="text-root-page-text font-thin" />
                        <span className="font-thin text-md">
                            Blogs</span>
                    </div>
                </div>
                <div className={`md:block fixed sm:block top-0 ${menuState ? 'left-[0%]' : 'left-[-50%]'} hidden backdrop:blur-[7.5] ease-linear duration-300 w-[45%] overflow-scroll h-full z-10 bg-[#96DED1] text-black`}>
                    <span className="m-5 flex justify-end" onClick={() => handleMenuState()}>
                        <CloseIcon className="cursor-pointer" />
                    </span>
                    <aside className="p-2.5">
                        <p className="font-bold text-lg">Search</p>
                        <div className="flex relative items-center my-2.5 ">
                            <input type="search" className="py-2 px-2 rounded-xl w-full" placeholder="Search..." />
                        </div>
                        <p className="font-bold text-lg">{categoryTitle}</p>
                        {<ul className="mb-5 flex flex-col *:cursor-pointer  font-thin *:text-l *:py-3">
                            {categories.map((listData: any) => (<li>{listData}</li>))}
                        </ul>}
                        <p className="font-bold text-lg">Latest Posts</p>
                        <div className="flex flex-col w-[90%] mb-5">
                            {posts?.map((element: any) => (
                                <div className="flex items-center gap-3">
                                    <img src={element?.imageUrl} className="mt-10 w-[50px] rounded-md" />
                                    <div>
                                        <div className="flex gap-1">
                                            {element.tags.map((tag: any) => (
                                                <p className="text-sm">{tag}</p>
                                            ))}
                                        </div>
                                        <p className="font-bold text-sm">{element.title}</p>
                                    </div>
                                </div>))}
                        </div>
                        <div className="relative">
                            <img src="./Icons/white-Tshirts (1).png" />
                            <button className="absolute p-2.5 bottom-5 left-8 rounded-md font-bold text-lg border-transparent bg-white text-black">Shop Now</button>
                        </div>
                        <p className="font-bold text-3xl mb-5 ">{tagTitle}</p>
                        <ul className="flex flex-wrap gap-2 w-[90%] cursor-pointer font-semibold rounded-md px-3 text-lg">
                            {tags.map((element: any) => (<li>{element}</li>))}
                        </ul>
                    </aside>
                </div>
                <div className="grid grid-cols-[1fr_2fr] md:grid-cols-[1fr] sm:grid-cols-[1fr]">
                    <aside className="p-2.5 md:hidden sm:hidden">
                        <p className="font-bold text-[20px]">Search</p>
                        <div className="flex relative items-center my-2.5 ">
                            <input type="search" className="py-2 px-2" placeholder="Search..." />
                            <SearchIcon sx={{ color: '#7e7e7e' }} />
                        </div>
                        <p className="font-bold text-[20px]">{categoryTitle}</p>
                        {<ul className="mb-5 flex flex-col *:cursor-pointer *:text-root-page-text *:font-thin *:text-l *:py-3">
                            {categories.map((listData: any) => (<li>{listData}</li>))}
                        </ul>}
                        <p className="font-bold text-[20px]">Latest Posts</p>
                        <div className="flex flex-col w-[90%] mb-5">
                            {posts?.map((element: any) => (
                                <div className="flex items-center gap-3">
                                    <img src={element?.imageUrl} className="mt-10 w-[100px] rounded-md" />
                                    <div>
                                        <div className="flex gap-1 mt-10 lg:text-sm">
                                            {element.tags.map((tag: any) => (
                                                <p>{tag}</p>
                                            ))}
                                        </div>
                                        <p className="font-bold text-lg">{element.title}</p>
                                    </div>
                                </div>))}
                        </div>
                        <div>
                            <img src="./Icons/white-Tshirts (1).png" />
                            <button className="relative p-2.5 bottom-20 left-24 rounded-md font-bold text-lg border-transparent bg-white ">Shop Now</button>
                        </div>
                        <p className="font-bold text-[20px] mb-5 ">{tagTitle}</p>
                        <ul className="mb-5 flex flex-wrap gap-2 w-[90%] *:cursor-pointer *:text-root-page-text *:font-semibold *:text-l *:py-3  *:rounded-md *:px-3 *:text-lg">
                            {tags.map((element: any) => (<li className="hover:text-primary-color">{element}</li>))}
                        </ul>
                    </aside>
                    <div className="hidden sm:flex  md:flex md  justify-between items-center">
                        <div className="flex relative items-center my-2.5 ">
                            <input type="search" className="py-2 px-2" placeholder="Search..." />
                            <SearchIcon sx={{ color: '#7e7e7e' }} />
                        </div>
                        <span className="cursor-pointer" onClick={() => handleMenuState()} >
                            <MenuIcon />
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-9 ">
                        {blog?.map((element: any) => (
                            <article className="w-[500px] md:w-[300px] sm:w-full">
                                <img src={element.imageUrl} />
                                <div className="px-2.5 py-4 flex gap-2">
                                    {element.tags.map((tag: any) => (<span>{tag}</span>))}
                                </div>
                                <p className="font-bold text-xl pb-4">{element.title}</p>
                                <div>
                                    <span className="font-medium text-lg pr-2.5">{element.date}</span>
                                    <span className="font-medium text-lg pr-2.5">{element.postedBy}</span>
                                    <span className="font-semibold text-primary-color text-lg pr-2.5">{element.sticky}</span>
                                </div>
                                <p className="text-root-page-text font-medium text-lg py-4">{element.content}</p>
                                <button className="rounded-md bg-primary-color text-white font-bold text-lg p-4">{element.buttonText}</button>
                            </article>))}
                        {article.map((element: any) => (
                            <article className="w-[500px] md:w-[300px] sm:w-full">
                                <div className="flex items-center gap-2.5 mb-5">
                                    <img className="rounded-tl rounded-bl" src={element.imageUrl} />
                                    <p className="underline font-semibold ">{element.exclusiveCategory}</p>
                                </div>
                                <div className="mb-5">
                                    <span className="font-medium text-lg pr-2.5">{element.date}</span>
                                    <span className="font-medium text-lg pr-2.5">{element.postedBy}</span>
                                    <span className="font-semibold text-primary-color text-lg pr-2.5">{element.sticky}</span>
                                </div>
                                <p className="font-bold text-xl pb-4">{element.title}</p>
                                <p className="text-root-page-text font-medium text-lg py-4">{element.content}</p>
                                <button className="rounded-md bg-primary-color text-white font-bold text-lg p-4">{element.buttonText}</button>
                            </article>))}
                    </div>
                </div>
                <div className="flex justify-center items-center mt-10 ">
                    <a href="#" className="bg-black text-white rounded-full  inline-block w-[30px] h-[30px] mx-1 pl-3 pt-[2px]">1</a>
                    <a href="#" className="bg-white text-black rounded-full inline-block w-[30px] h-[30px] mx-1">2</a>
                    <a href="#" className="next inline-block px-2 py-4">Next ›› </a>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Blogs;