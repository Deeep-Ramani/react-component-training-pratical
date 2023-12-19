import React from 'react'
import './Page4.css'
import Img1 from '../assests/Page4Img1.png'
import Img2 from '../assests/Page4Img2.png'
import Img3 from '../assests/Page4Img3.png'
import Img4 from '../assests/Page4Img4.png'
import ArrowIcon from '../assests/Page4Arrow.svg'
export const Page4 = () => {
  return (
    <div className="product-white">
      <div className="product-sub">
        <div className="image-back">
          <img className="image-placeholder" src={Img1} alt='not found'/>
          <div className="auto-group-page4" >
            <img className="image-placeholder-2" src={Img2} alt='not found'/>
            <img className="image-placeholder-3" src={Img3} alt='not found'/>
            <img className="image-placeholder-4" src={Img4} alt='not found'/>
          </div>
        </div>
        <div className="auto-group-description" >
          <p className="subheading-summer" >Spring/Summer collection</p>
          <p className="heading-stay" >
            Stay Wild

            <br />
            Regular T-Shirt

          </p>
          <p className="price-100">$ 100.00</p>
          <p className="code">ART NO: 7003-14</p>
          <p className="description-long">Techwear focuses on utilitarian clothing that makes everyday life easier in one way or another. The style focuses more on individual pieces and their fit, features, and construction.</p>
          <div className="material-main">
            <p className="material-sub">Material:</p>
            <p className="cotton">100% cotton</p>
          </div>
          <div className="auto-group-size">
            <div className="size">
              <p className="size-main">Size:</p>
              <div className="input-text-icon-white-page4">
                <p className="label-l">L</p>
                <img className="icon-chevron-down-1" src={ArrowIcon} alt='not found'/>
              </div>
            </div>
            <div className="color" >
              <p className="color-main" >Color:</p>
              <div className="input-text-icon-white-1" >
                <p className="label-black">Black</p>
                <img className="icon-chevron-down-2" src={ArrowIcon} alt='not found'/>
              </div>
            </div>
            <div className="quantity-page4" >
              <p className="quantity-main" >Quantity:</p>
              <div className="input-text-icon-white-3" >
                <p className="label-1text" >1</p>
                <img className="icon-chevron-down-4" src={ArrowIcon} alt='not found'/>
              </div>
            </div>
          </div>
          <div className="button-label-add-cart-100" >Add to cart - $100</div>
          <div className="shipping-page4" >
            <p className="shipping-page4-main" >Shipping</p>
            <p className="calculated-page4" >calculated at checkout.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
