'use client'

import { useEffect, useState } from "react";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import DoneIcon from '@mui/icons-material/Done';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import listDocuments from "@/components/getCollection";
import getDocument from "@/components/getDocument";
import { Rating } from "@mui/material";

const Home = () => {

    const [homeProducts, setHomeProduct] = useState<any>([]);
    const [procedure, setProcedure] = useState<any>([]);
    const [stats, setStats] = useState<any>([]);
    const [subCards, setSubCards] = useState<any>([]);
    const [homeAd, setHomeAd] = useState<any>([]);
    const [homeBanners, setHomeBanners] = useState<any>([]);
    const [homeMoto, setHomeMoto] = useState<any>([]);
    const [sweaterImg , setSweaterImg] = useState<any>([]);
    const [tanktopImg , setTanktopImg] = useState<any>([]);
    const [tShirtImg , setTshirtImg] = useState<any>([]);
    const [hoodieImg , setHoodieImg] = useState<any>([]);
    const [designerImg , setDesignerImg] = useState<any>([]);


    const collectData = async () => {
        setHomeProduct(await listDocuments('661767c126a43868fb25', '662f89ac0017f8073fe6'));
        setProcedure(await listDocuments('661767c126a43868fb25', '663079270039d5337698'));
        setStats(await listDocuments('661767c126a43868fb25', '663087160029507a587c'));
        setSubCards(await listDocuments('661767c126a43868fb25', '663089480024a81d9c7a'));
        setHomeAd(await listDocuments('661767c126a43868fb25', '6630c0ed0011a64df553'));
        setHomeBanners(await listDocuments('661767c126a43868fb25', '6633082a003180c81d6e'));
        setHomeMoto(await listDocuments('661767c126a43868fb25', '663314a200191a3f64a5'));
        setDesignerImg(await getDocument('661767c126a43868fb25','663b1c6b0014486ff449','663c5b43000dd1732ec2'));
        setHoodieImg(await  getDocument('661767c126a43868fb25','663b1c6b0014486ff449','663c5ab8000426865973'));
        setSweaterImg(await  getDocument('661767c126a43868fb25','663b1c6b0014486ff449','663c5b28000d152308b0'));
        setTanktopImg(await  getDocument('661767c126a43868fb25','663b1c6b0014486ff449','663c5ae90007467c9a0b'));
        setTshirtImg(await  getDocument('661767c126a43868fb25','663b1c6b0014486ff449','663c5b0b003150f67419'));    
    };

    useEffect(() => {
        collectData();
    }, []);

    return (
        <div>
            <Header />
            <main>
                <div className="flex items-center justify-center">
                    {homeBanners.map((element: any) => (
                        <div className="relative">
                            <img src={element.imageUrl} />
                            <div className="absolute mt-[-40%] ml-[5%]">
                                <p className="font-bold mb-2 text-3xl w-56 sm:w-20 md:text-[20px] sm:mb-0 sm:leading-3 md:leading-tight sm:text-[10px] md:my-1">{element.homeTitle}</p>
                                <p className="font-medium mb-2 text-sm w-56 text-root-page-text sm:mb-0 sm:w-20 sm:leading-[0.50rem] md:leading-tight sm:text-[5px]">{element.homeContent}</p>
                                <button
                                    className="font-bold px-10 py-5 md:py-1 text-sm md:px-2 sm:text-[5px] sm:leading-3 sm:px-2 sm:py-1 md:leading-tight rounded-xl border-transparent bg-primary-color text-white">{element.button}</button>
                            </div>
                        </div>))}
                </div>
                <section className="flex flex-wrap justify-around items-center gap-5 my-24">
                    {homeMoto.map((element: any) => (<div className="flex gap-4 ">
                        <img className="w-[60px] h-[70px]" src={element.imageUrl} />
                        <div className="w-48">
                            <p className="font-bold text-lg">{element.sectionTitle}</p>
                            <p className="font-semibold text-sm text-root-page-text">{element.sectionContent}</p>
                        </div>
                    </div>))}
                </section>
                <div className="grid gap-4 grid-cols-[1fr_2fr_1fr]">
                    <div className="flex flex-col gap-4 relative">
                        <img className="rounded-xl" src={hoodieImg.imageUrl} />
                        <button
                            className="absolute border-transparent border-white font-bold text-lg mt-[76%] ml-[20%] lg:text-[12px] bg-white px-8 py-1 rounded-xl  sm:text-[5px] sm:leading-3 lg:leading-3 sm:py-0 sm:px-1 ">{hoodieImg.button}</button>
                        <img className="rounded-xl" src={tanktopImg.imageUrl} />
                        <button
                            className="absolute border-transparent border-white font-bold text-lg mt-[180%] ml-[20%] lg:text-[12px] bg-white px-8 py-1 rounded-xl sm:text-[5px] sm:leading-3 lg:leading-3 sm:py-0 sm:px-1">{tanktopImg.button}</button>
                    </div>
                    <div className="relative">
                        <img className="w-full h-full rounded-xl" src={tShirtImg.imageUrl}/>
                        <button
                            className="absolute border-transparent border-white font-bold text-lg mt-[-10%] ml-[34%] lg:text-[12px] bg-white px-8 py-1 rounded-xl sm:text-[5px] sm:leading-3 lg:leading-3 sm:py-0 sm:px-1 ">{tShirtImg.button}</button>
                    </div>
                    <div className="flex flex-col gap-4 relative">
                        <img className="rounded-xl" src={sweaterImg.imageUrl} />
                        <button
                            className="absolute border-transparent border-white font-bold text-lg mt-[76%] ml-[20%] lg:text-[12px] bg-white px-8 py-1 rounded-xl sm:text-[5px] sm:leading-3 lg:leading-3 sm:py-0 sm:px-1">{sweaterImg.button}</button>
                        <img className="rounded-xl" src={designerImg.imageUrl}/>
                        <button
                            className="absolute border-transparent font-bold text-lg border-white mt-[180%] ml-[20%] lg:text-[12px] bg-white px-8 py-1 rounded-xl sm:text-[5px] sm:leading-3 lg:leading-3 sm:py-0 sm:px-1">{designerImg.button}</button>
                    </div>
                </div>
               
                <div className="text-center my-24 sm:hidden">
                    <p className="font-bold text-3xl sm:text-lg">T-shirt Printing for Everyone</p>
                    <p className="font-medium text-lg text-root-page-text">What’s more, we do it right!</p>
                </div>
                <div className="flex flex-wrap justify-center sm:hidden">
                    {homeProducts.map((element: any) => (
                        <div>
                            <img src={element.imageUrl} />
                            <div className="ml-8 py-2 ">
                                <p className="font-bold text-lg w-5">{element.name}</p>
                                <div className="flex items-center gap-2">
                                <Rating name="half-rating" defaultValue={3.5} precision={0.5}/>
                                <span className="text-sm text-root-page-text">{element.rating}</span>
                                </div>
                                <div className="flex gap-2 pb-2.5 pt-1">
                                    <span className="text-root-page-text font-medium">By</span>
                                    <span className="text-primary-color font-medium">{element.productMake}</span>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div className="flex gap-2 items-center">
                                        <span className="text-lg text-primary-color">${element.newPrice}</span>
                                        <span className="line-through text-xs text-gray-400">${element.oldPrice}</span>
                                    </div>
                                    <div className="flex justify-center items-center p-3 mr-7 bg-green-300 rounded-md ">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_10311_17497)">
                                                <path d="M14 1.72667H2.47333V1.54C2.41111 1.10444 2.21667 0.738889 1.89 0.443334C1.56333 0.147778 1.16667 0 0.7 0H0V1.16667H0.7C0.855556 1.16667 0.987778 1.21333 1.09667 1.30667C1.20556 1.4 1.27556 1.52444 1.30667 1.68L2.24 9.52C2.27111 9.98667 2.45 10.36 2.77667 10.64C3.10333 10.92 3.5 11.0756 3.96667 11.1067H11.6667V9.89333H3.96667C3.81111 9.89333 3.67889 9.84667 3.57 9.75333C3.46111 9.66 3.39111 9.53556 3.36 9.38L3.31333 8.72667H12.74L14 1.72667ZM11.76 7.56H3.17333L2.61333 2.89333H12.6L11.76 7.56ZM2.94 12.8333C2.90889 13.1444 3.01 13.4167 3.24333 13.65C3.47667 13.8833 3.75667 14 4.08333 14C4.41 14 4.68222 13.8833 4.9 13.65C5.11778 13.4167 5.23444 13.1444 5.25 12.8333C5.26556 12.5222 5.15667 12.25 4.92333 12.0167C4.69 11.7833 4.41 11.6667 4.08333 11.6667C3.75667 11.6667 3.48444 11.7833 3.26667 12.0167C3.04889 12.25 2.94 12.5222 2.94 12.8333ZM8.77333 12.8333C8.74222 13.1444 8.84333 13.4167 9.07667 13.65C9.31 13.8833 9.59 14 9.91667 14C10.2433 14 10.5156 13.8833 10.7333 13.65C10.9511 13.4167 11.0678 13.1444 11.0833 12.8333C11.0989 12.5222 10.99 12.25 10.7567 12.0167C10.5233 11.7833 10.2433 11.6667 9.91667 11.6667C9.59 11.6667 9.31778 11.7833 9.1 12.0167C8.88222 12.25 8.77333 12.5222 8.77333 12.8333Z" fill="#3BB77E" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_10311_17497">
                                                    <rect width="14" height="14" fill="white" transform="matrix(1 0 0 -1 0 14)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <button className="text-green-600  border-transparent text-sm">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>))}
                </div>
                <div className="flex justify-center flex-col items-center my-24">
                    <p className="font-bold text-3xl pb-4 sm:text-lg">T-shirt printing made easy.</p>
                    <p className="text-base text-root-page-text">Let us show you how your product come to life.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-1 my-14 place-items-center">
                    <div>
                        <Stepper orientation="vertical">
                            {procedure.map((element: any) => (
                                <Step >
                                    <StepLabel>
                                        <Typography>{element.rule}</Typography>
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </div>
                    <img className="w-auto sm:hidden" src="./Icons/step-banner-41.png.png" />
                </div>
                <div className="flex justify-center flex-col items-center">
                    <p className="font-bold text-3xl">All the features you need</p>
                    <p className="text-base">You've got the ideas, we've got the tools</p>
                </div>
                <div className="flex justify-center flex-wrap my-24">
                    {homeAd.map((element: any) => (
                        <div className="flex flex-col items-center">
                            <img className="w-[80%]" src={element.url} />
                            <div className="w-80 ">
                                <p className="text-lg font-bold pb-6">{element.title}</p>
                                <p className="text-sm  text-root-page-text">{element.content}</p>
                            </div>
                        </div>))}
                </div>
                <div className="flex flex-wrap justify-evenly pt-8 gap-6">
                    <img className="w-auto" src="./Icons/computer-image.png" />
                    <div>
                        <p className="font-bold text-3xl w-80 pb-6 sm:text-sm">10,000+ of free images, icons, and graphics</p>
                        <p className="font-medium text-sm text-gray-400 pb-6">You've got the ideas, we've got the tools</p>
                        <button className="bg-primary-color text-white rounded-xl p-2 text-lg border-transparent pb-2">Get
                            Started</button>
                    </div>
                </div>
                <div className="relative p-36 sm:p-20">
                    <img className="absolute top-[30%] left-[85%] w-28 sm:w-12" src="./Icons/amazon.png" />
                    <img className="absolute top-[30%] left-[8%] w-28 sm:w-12" src="./Icons/app-1.png" />
                    <img className="absolute top-[10%] right-[48%]  w-12 rounded-3xl sm:w-8" src="./Icons/app-2.png" />
                    <img className="absolute top-[65%] left-[20%] sm:w-8" src="./Icons/app3.png" />
                    <div>
                        <p className="font-bold text-center text-3xl pb-4 sm:text-sm">Join the 7,000+ companies trusting us</p>
                        <p className="text-sm text-center pb-4 sm:text-sm">You've got the ideas, we've got the tools</p>
                        <div className="flex justify-center">
                            <button className="bg-primary-color text-white p-2 rounded-lg">Get Started</button>
                        </div>
                    </div>
                    <img className="absolute top-[10%] right-[20%] w-28 sm:w-12" src="./Icons/dlink.png" />
                    <img className="absolute top-[60%] left-[70%] w-28  sm:w-12" src="./Icons/shopify.png" />
                    <img className="absolute top-[10%] left-[20%] w-28 sm:w-12" src="./Icons/messsanger.png" />
                </div>
                <div className="flex flex-wrap justify-center gap-6 mb-10 mt-10">
                    {stats.map((element: any) => (
                        <div className="flex flex-col ">
                            <p className="text-primary-color font-semibold text-3xl pb-2">{element.stats}</p>
                            <p className="w-56 text-root-page-text font-medium text-sm">{element.salesQuote}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="font-bold text-3xl pb-2 sm:text-sm">Simple pricing for everyone</p>
                    <p className="text-sm text-root-page-text">Choose a plan and get started</p>
                </div>
                <div className="flex flex-wrap justify-center mt-4 gap-5">
                    {subCards.map((element: any) => (
                        <div className={`p-10 rounded-sm ${element.shadow ? 'shadow-2xl' : ''} *:pb-3 sm:*:pb-0 sm:p-2`}>
                            {element.popular ? <div className="flex justify-end">
                                <p className="p-2 bg-black text-white rounded-md">Popular</p>
                            </div>:null}
                            <p className="text-center font-medium text-2xl mb-3 sm:text-lg sm:font-bold">{element.subName}</p>
                            <div className="flex justify-center items-end mb-5">
                                <p className="text-center font-bold text-4xl sm:text-xl">{element.subPrice}</p>
                                <p className="text-lg font-medium text-root-page-text sm:text-lg">{element.user}</p>
                            </div>
                            {element.utils.map((provision: any) => (<p className="text-lg font-semibold sm:text-[8px] flex gap-2"><DoneIcon className="text-primary-color rounded-xl" sx={{ bgcolor: "#E2F5F2" }} />{provision}</p>))}
                            <button className="w-[100%] bg-primary-color text-white rounded-lg p-2 mt-4  ">{element.button}</button>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center items-center">
                    <div className="w-[50%] relative" >
                        <p className="pb-5 font-bold text-3xl w-[56%] sm:text-lg sm:w-full">Subscribe to our newsletter.</p>
                        <p className="pb-5 text-root-page-text">Get the latest news, events & more delivered to your inbox.</p>
                        <div className="absolute z-10 bottom-[40%] left-[85%]">
                            <svg className="md:hidden sm:hidden" width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect width="67" height="67" transform="matrix(0 1 1 0 0.810547 0.829834)" fill="url(#pattern0_8360_21879)" />
                                <defs>
                                    <pattern id="pattern0_8360_21879" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_8360_21879" transform="scale(0.0149254)" />
                                    </pattern>
                                    <image id="image0_8360_21879" width="67" height="67" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAYAAADHyrhzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASmSURBVHgB5ZxpqFRlHMafa9q+moUt5JSUFbQRLUR5B/tSUrSA1QetCxUhtBJhC3UtElFx94PghoroB0FFPwgqijsKKu6Cy3VfcEFF0Xvdnof3HOY9y4zb3Htnzv+BH3fmzNw55zzzrv//+04Nrq57yHPkaXJXcOw4OUJ2kn0woNfJJHKGXC7BUTKFfE4eR8ZUQ/qTSyhtQjGWk3q4klRVqok9v42MJT1jxw+S6WQtORsc60A6kmfIU+Rl0jb2f6vIz2QFqlD/I/otHyK9kTQtTbeSj8hwsoxcDD5jFKpQORRuQPQj9+PGpca2201+RqvpBxSM+A3GNRLOCPUe11ItMqc23uNDwd/byfMwLvUIYTXZQz6DcanR9HuT9eRLuFGoSf2FaK8izpPFwWvvIFq9Mq8c3M0XG2WeJDPJxzDU2D5LhpHNKG5MAxkCZ6AZdYEbf2juUcyY8aQTjKkz3BzmBJKGHCCfwqA0MVNvswVJU/6AYdWSrYga8icM6264WWpohrroWhjXrygYsp20g3EpphEakkcVqDlHkie8x0/CsHKIBpK7wah047tRMGIHDKo9GUyaUDBCVeUFGNJjZCCSo9FtMNRWvAk3c21EcvQ5DQZiIIp0K3WwCOkTtYXkbWRcCuiMgItjxA1QrzEBBkaaL5HZSC8FSj4PQJXmRa5HT5AZSIb/zgTHu8Nl0DIthfD6kFNIBoZ/h4FSEEqxiXGImqCe4j8YlD/1DscJr8Kg1F36RmwgD8OgHoBbiuRn03IwKsUwQyO0Wuc9GJaG1H6o37Q2oWDGazAurdGSEadgXH7Yz8R6zlKSGWGJMDO6LCaZsSl4/Ah5EYYlM5Z4z3vDuF5BdPT5I4xrNKKG9EHlq9naOH2wQvq+IfVwQ/VKlL4sjZa1iEbLsbugzMqRXYgaouc9UXnaiGTkbSnpRe5FmRRGuOInUvL4G7gseyXoDXIY6eHIveRfch/KpO/J/pQTKVM2hnwAtwOhNdUZ0cxd2rX+hDKlLLSR5lskq06IMmda3zWUfAE3r2mLlpWSVA0obkhY1dXGPIgySdP6mVc5aRgm1N6SWeRv8m5wwc1pUryETEX6siq9p+Q46nrXcKq0dCUfwq256HiN/6eLUR1vgBv+H4Pb46Z0gyaKp4PjetwYcAGu9DV6NHlcDP7qfTJ8Hlx0Tud5FK4qa/9MPNera/iHTEaZpRPVkYlkJdJTja1BL+8aVYVXI71TqEMzLuq9Bc6g9+EGcouDkzahZc1Yk3JtPZDe/unYd6RdSy111nmUre8E1+V1CGgfPFeLr51Ld5I74Ez1aRNcuKrGpQBVj3MoVCXttgx3T86Bq8pxafuISko9knHeLciIcnBbSsNv+6si79OXkkd64nw7MiLFbsObUkOc1o3WknVImqDSNRcZ2XD0CaI31z/2ep7MR9IErUb8BRkKamn84jeK2o4e3txbZAGiBqjNURfcFRlUHaI3qy3oapQHwRV//zX1bHlkWH6p0ASzL5Jry1QduiPjUmih1FhDadIeMCLNf9JMUG/SF2Wcwle61ADGTVD10O7Lh2BMeRR+0kImmFhbVkr6iYqvUUYTrgDcFwmqonFc9wAAAABJRU5ErkJggg==" />
                                </defs>
                            </svg>
                        </div>
                        <div className="pb-5 flex md:flex-wrap sm:flex-wrap gap-5">
                            <input type="email" placeholder="Your email address"
                                className="w-full rounded-md p-4 sm:text-sm border-transparent" />
                            <button
                                className=" bg-primary-color w-[30%] text-white rounded-xl text-lg border-transparent sm:w-full lg:w-full">Subscribe</button>
                        </div>
                    </div>
                    <img className="sm:hidden md:hidden" src="./Icons/contactpng.png" />
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default Home;