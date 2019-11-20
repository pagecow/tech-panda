import React, {useState, useEffect} from 'react';

function HomeProductHeaderTwo() {
    return(  
        <div id='home-product-page-header-2'>
            <p className='product-logo'>Google Pixel 4</p>

            <div className='product-header-2-center-menu'>
                <button className='product-header-2-menu-buttons'>Overview</button>
                <button className='product-header-2-menu-buttons'>Tech Specs</button>
            </div>

            <div className='product-header-2-right-stuff'>
                <div className='product-header-2-text'>
                    <p className='product-header-2-text-p-1'>From $799 or $33.29/mo for 24 mos</p>
                    <p className='product-header-2-text-p-2'>with 0% APR Google Store Financing*</p>
                </div>
                
                <button className='product-header-2-buy-button'>Buy</button>
            </div>
        </div>
        
    )
}

export default HomeProductHeaderTwo;