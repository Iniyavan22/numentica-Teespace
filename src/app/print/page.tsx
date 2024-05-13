'use client'
import { useState } from 'react';
import printStyles from './print.module.scss';
import Header from '../../components/header/page';
import Footer from '../../components/footer/page';
import LoopIcon from '@mui/icons-material/Loop';
import BackupIcon from '@mui/icons-material/Backup';

const Print = () => {

    const [productCount, setProductCount] = useState<any>(1);

    function handleIncrement() {
        setProductCount(productCount + 1);
    }

    function handleDecrement() {
        if (productCount>0){
        setProductCount(productCount - 1);
        }
        else{
            setProductCount(productCount);
        }
    }

    return (
        <div>
            <Header />
            <main>
                <div className={printStyles.main_page}>
                    <div className={printStyles.print_page_banner}>
                        <p className={printStyles.print_page_title}>Let's configure your own print product</p>
                        <p>The easiest way to get your print as you want</p>
                        <button className={printStyles.print_main_btn}>Print Your Own</button>
                        <img className={printStyles.print_banner_image} src="https://cloud.appwrite.io/v1/storage/buckets/6617957cdfa7fcd02bbf/files/661ce27e774c3251ae52/view?project=6617679f5c0eb645569f&mode=admin" />
                        <img className={printStyles.print_banner_image} src="https://cloud.appwrite.io/v1/storage/buckets/6617957cdfa7fcd02bbf/files/661ce2d76a7bc4d5cdfa/view?project=6617679f5c0eb645569f&mode=admin" />
                        <img className={printStyles.print_banner_image} src="https://cloud.appwrite.io/v1/storage/buckets/6617957cdfa7fcd02bbf/files/661ce266ed51663e3742/view?project=6617679f5c0eb645569f&mode=admin" />
                        <img className={printStyles.print_banner_image} src="https://cloud.appwrite.io/v1/storage/buckets/6617957cdfa7fcd02bbf/files/661ce25d38186a7ccdc1/view?project=6617679f5c0eb645569f&mode=admin" />
                        <img className={printStyles.print_banner_image} src="https://cloud.appwrite.io/v1/storage/buckets/6617957cdfa7fcd02bbf/files/661ce253993b4bc82c7e/view?project=6617679f5c0eb645569f&mode=admin" />
                        <img className={printStyles.print_banner_image} src="https://cloud.appwrite.io/v1/storage/buckets/6617957cdfa7fcd02bbf/files/661ce24c5ccd67567851/view?project=6617679f5c0eb645569f&mode=admin" />
                    </div>
                </div>
                <div className={printStyles.purchasing_steps}>
                    <p className={printStyles.steps}>STEP 1</p>
                    <div className={printStyles.step_cards}>
                        <BackupIcon sx={{ color: '#7e7e7e', width: '100px', height: '100px' }} />
                        <p>Drag & Drop files Here</p>
                        <p>or</p>
                        <button className={printStyles.browse_button}>Browse Files</button>
                    </div>
                    <p className={printStyles.steps}>STEP 2</p>
                    <p className={printStyles.step_title}>Choose your Color</p>
                    <ul className={printStyles.step_cards}>
                        <li className={`${printStyles.color_pallete} ${printStyles.black}`}></li>
                        <li className={`${printStyles.color_pallete} ${printStyles.red}`}></li>
                        <li className={`${printStyles.color_pallete} ${printStyles.yellow}`}></li>
                        <li className={`${printStyles.color_pallete} ${printStyles.white}`}></li>
                        <li className={`${printStyles.color_pallete} ${printStyles.pink}`}></li>
                    </ul>
                    <p className={printStyles.steps}>STEP 3</p>
                    <p className={printStyles.step_title}>Choose your Size</p>
                    <ul className={printStyles.step_cards}>
                        <li><a href="#">2XL </a></li>
                        <li><a href="#">3XL </a></li>
                        <li><a href="#">L </a></li>
                        <li><a href="#">M </a></li>
                        <li><a href="#">S </a></li>
                        <li><a href="#">XS </a></li>
                    </ul>
                    <p className={printStyles.steps}>STEP 4</p>
                    <p className={printStyles.step_title}>Choose your Material</p>
                    <div className={printStyles.materials_container}>
                        <div>
                            <img src="https://cloud.appwrite.io/v1/storage/buckets/6617957cdfa7fcd02bbf/files/661ce287f3eeed3626f8/view?project=6617679f5c0eb645569f&mode=admin" />
                            <p>Glass</p>
                        </div>
                        <div>
                            <img src="https://cloud.appwrite.io/v1/storage/buckets/6617957cdfa7fcd02bbf/files/661ce28def6dff7aa4fd/view?project=6617679f5c0eb645569f&mode=admin" />
                            <p>Metal</p>
                        </div>
                        <div>
                            <img src="https://cloud.appwrite.io/v1/storage/buckets/6617957cdfa7fcd02bbf/files/661ce295606925156105/view?project=6617679f5c0eb645569f&mode=admin" />
                            <p>Paper</p>
                        </div>
                        <div>
                            <img src="https://cloud.appwrite.io/v1/storage/buckets/6617957cdfa7fcd02bbf/files/661ce287f3eeed3626f8/view?project=6617679f5c0eb645569f&mode=admin" />
                            <p>Wood</p>
                        </div>
                    </div>
                    <p className={printStyles.steps}>STEP 5</p>
                    <p className={printStyles.step_title}> Choose your Delivery</p>
                    <div className={printStyles.purchase_item}>
                        <input type="text" placeholder="1-3 business days" className={printStyles.package_deleivery_input} />
                        <button type="reset" className={printStyles.clear_selection_btn}><LoopIcon /> Clear selection</button>
                        <div className={printStyles.add_to_cart_container}>
                            <div className='grid grid-cols-3 items-center'>
                                <button className={printStyles.increase_decrease_btn} onClick={() => handleDecrement()}>-</button>
                                <span className={printStyles.quantity_purchased}>{productCount}</span>
                                <button className={printStyles.increase_decrease_btn} onClick={() => handleIncrement()}>+</button>
                            </div>
                            <div>
                                <span className={printStyles.new_price}>$29.14</span>
                                <span className={printStyles.old_price}>$39.00</span>
                            </div>
                        </div>
                        <button className={printStyles.print_add_to_cart_btn}>Add To Cart</button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Print;