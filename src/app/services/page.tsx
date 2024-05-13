'use client'
import { useEffect, useState } from "react";
import Header from "../../components/header/page";
import Footer from "../../components/footer/page";
import serviceStyles from "./service.module.scss";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import listDocuments from "@/components/getCollection";


const Service = () => {

    const [serviceDetail, setServiceDetail] = useState<any>([]);
    const [serviceArea, setServiceArea] = useState<any>([]);
    const [serviceAccordian, setServiceAccordian] = useState<any>([]);
    const [serviceCards, setServiceCards] = useState<any>([]);
    const [serviceGrid, setServiceGrid] = useState<any>([]);

    const asyncFunc = async () => {
        setServiceDetail(await listDocuments('661767c126a43868fb25', '6639a308003a5f442b80'));
        setServiceArea(await listDocuments('661767c126a43868fb25', '6639b0910033bbf06143'));
        setServiceAccordian(await listDocuments('661767c126a43868fb25', '6639b3b60034cc0151f9'));
        setServiceCards(await listDocuments('661767c126a43868fb25', '6639b5ed0024ab195902'));
        setServiceGrid(await listDocuments('661767c126a43868fb25', '6639b9c3000659ea5662'));
    }

    useEffect(() => {
        asyncFunc();
    }, [])

    return (
        <div>
            <Header />
            <main>
                <div className={serviceStyles.main_headings}>
                    <p className={serviceStyles.page_title}>Services</p>
                    <div className={serviceStyles.page_directory}>
                        <span className={serviceStyles.root_page}>Home</span>
                        <svg width="21" height="1" viewBox="0 0 21 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.0585938" width="20" height="1" fill="#7E7E7E" />
                        </svg>
                        <span className={serviceStyles.page_name}>
                            Services</span>
                    </div>
                </div>
                <div className={serviceStyles.main_headings}>
                    <p className={serviceStyles.heading_service_pg}><svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8360_23373)">
                            <path
                                d="M12.6022 5.77456C12.0231 5.10161 11.4088 4.46387 10.7594 3.86135C10.1099 3.25882 9.4252 2.69933 8.7053 2.18288C8.6427 2.13593 8.57619 2.10072 8.50576 2.07724C8.43534 2.05377 8.361 2.04203 8.28275 2.04203C8.2045 2.04203 8.13016 2.05377 8.05974 2.07724C7.98931 2.10072 7.9228 2.13593 7.8602 2.18288C7.1403 2.69933 6.45561 3.25882 5.80613 3.86135C5.15666 4.46387 4.54239 5.10161 3.96334 5.77456C3.32169 6.51012 2.75046 7.26132 2.24966 8.02817C1.76451 8.77937 1.35761 9.53449 1.02896 10.2935C0.700308 11.0525 0.449907 11.8155 0.277757 12.5823C0.105606 13.3335 0.0195312 14.0769 0.0195312 14.8125C0.0195312 15.908 0.230807 16.9604 0.653358 17.9699C1.07591 18.9793 1.67061 19.8753 2.43746 20.6578C3.21996 21.4246 4.11593 22.0193 5.12536 22.4419C6.13478 22.8644 7.18725 23.0757 8.28275 23.0757C9.37825 23.0757 10.4307 22.8644 11.4401 22.4419C12.4496 22.0193 13.3455 21.4246 14.128 20.6578C14.8949 19.8753 15.4896 18.9793 15.9121 17.9699C16.3347 16.9604 16.546 15.908 16.546 14.8125C16.546 14.0769 16.4599 13.3335 16.2877 12.5823C16.1156 11.8155 15.8652 11.0525 15.5365 10.2935C15.2079 9.53449 14.801 8.77937 14.3158 8.02817C13.815 7.26132 13.2438 6.51012 12.6022 5.77456ZM1.52193 14.8125C1.52193 13.4666 1.80364 12.1911 2.36704 10.986C2.91479 9.78097 3.56427 8.6933 4.31547 7.72299C5.06667 6.75269 5.81787 5.92324 6.56907 5.23464C7.32027 4.54604 7.8915 4.04523 8.28275 3.73223V21.5733C7.3907 21.5733 6.52995 21.4011 5.7005 21.0568C4.87104 20.7125 4.13549 20.2274 3.49384 19.6014C2.86784 18.9597 2.38269 18.2242 2.03839 17.3947C1.69409 16.5653 1.52193 15.7045 1.52193 14.8125Z"
                                fill="#2EBB77" />
                        </g>
                        <defs>
                            <clipPath id="clip0_8360_23373">
                                <rect width="25" height="25" fill="white" transform="matrix(1 0 0 -1 0.0195312 25.8101)" />
                            </clipPath>
                        </defs>
                    </svg>
                        ALL THE FEATURES YOU NEED</p>
                    <p className={serviceStyles.page_title}>Fast and Quality Service</p>
                </div>
                <div className={serviceStyles.service_page_container}>
                    {serviceDetail.map((element: any) => (<div className={serviceStyles.service_page_card}>
                        <img src={element.imageUrl} />
                        <h3>{element.sectionTitle}</h3>
                        <p>{element.sectionContent}</p>
                    </div>))}
                </div>
                <div className={serviceStyles.main_headings}>
                    <p className={serviceStyles.quality_service}>Quality Service</p>
                    <p className={serviceStyles.page_title}>T-Shirt Printing for Everyone</p>
                </div>
                <div className={serviceStyles.service_page_ad}>
                    {serviceArea.map((element: any) => (
                        <div className={serviceStyles.service_page_card}>
                            <img src={element.imageUrl} />
                            <p className={serviceStyles.service_page_ad_title}>{element.serviceTitle}</p>
                            <p>{element.serviceContent}</p>
                            <button className={serviceStyles.service_page_ad_btn}>{element.button}</button>
                        </div>))}
                </div>
                <div className={serviceStyles.service_sub_container_title}>
                    <img className={serviceStyles.recharge_image} src="./Icons/recharge.png" />
                    <p>FAST AND QUALITY SERVICE</p>
                </div>
                <div className={serviceStyles.main_headings}>
                    <p className={`${serviceStyles.page_title} md:text-[10px]`}>Print shirts for yourself or your
                        online business</p>
                </div>
                <div className={serviceStyles.service_sub_container}>
                    <img src="./Icons/allotment.png" />
                    <div>
                        {serviceAccordian.map((element: any) => (
                            <Accordion className={serviceStyles.dropdown}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    className={serviceStyles.accordian_link}
                                >
                                    {element.question}
                                </AccordionSummary>
                                <AccordionDetails>
                                    {element.answer}
                                </AccordionDetails>
                            </Accordion>))}
                    </div>
                </div>
                <div className={serviceStyles.printing_made_easy}>
                    <p className={serviceStyles.page_heading}>T-shirt printing made easy.</p>
                    <p >Let us show you how your product come to life.</p>
                </div>
                <div className={serviceStyles.service_page_cards1}>
                    {serviceCards.map((element: any) => (
                        <div className={serviceStyles.cards}>
                            <img src={element.imageUrl} />
                            <p>{element.cardTitle}</p>
                        </div>))}
                </div>
                <div className={serviceStyles.service_page_shop_container}>
                    <div className={serviceStyles.shop_card_services}>
                        <p className={serviceStyles.print_shirts_buisness}>Print shirt for yourself or your online business</p>
                        <p>What’s more, we do it right! A full administration printing background.
                            Print shirts for yourself or your
                            online business</p>
                        <button className={serviceStyles.primary_button}>Shop Now &#8594;</button>
                    </div>
                    <div className={serviceStyles.service_page_sub_cards}>
                        {serviceGrid.map((element: any) => (
                        <div className={serviceStyles.order_customer_cards}>
                            <img src={element.imageUrl}/>
                            <p className={serviceStyles.service_cards_title}>{element.cardTitle}</p>
                            <p>{element.cardContent}</p>
                        </div>))}   
                    </div>
                    <div className={serviceStyles.service_page_order_customer}>
                        <img src="./Icons/footerContent.png" />
                        <div className={serviceStyles.service_page_order_container}>
                            <p className={serviceStyles.title_order_customer}>Create your own custom products online!</p>
                            <p>Free and easy way to bring your ideas to life</p>
                            <button className={serviceStyles.primary_button}>Order Customer shirts &#8594;</button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}


export default Service;