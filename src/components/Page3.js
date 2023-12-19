import React from 'react'
import './Page3.css'
import IconShoppingCart from '../assests/Icon-Shopping-cart.svg'
export const Page3 = () => {

  return (
    <div className="mainPage3">
      <div className="subheaderPage3">
        <div className="left-description">
          <p className="subheading-text">tin bottle</p>
          <p className="heading">
            Coca-Cola

            <br />
            Original Taste

          </p>
          <div className="auto-group">
            <p className="price">$ 5.00</p>
            <p className="volume">/0.33L</p>
          </div>
          <p className="copy">Coca-Cola, or Coke, is a carbonated soft drink manufactured by The Coca-Cola Company. Originally intended as a patent medicine, it was invented in the late 19th century by John Stith Pemberton. </p>
          <div className="ingredients">
            <p className="ingredients-sub">ingredients:</p>
            <p className="copy-desc">Carbonated water, Sugar, Caffeine, Phosphoric acid, Caramel color (E150d), Natural flavorings</p>
          </div>
        </div>
        <div className="auto-group-rectangle">
          <div className="elements-other-imageselector" >
            <div className="rectangle-3d" ></div>
            <div className="rectangle-3d1" ></div>
            <div className="rectangle-3d2" ></div>
            <div className="rectangle-3d3" ></div>
          </div>
        </div>
        <div className="right-description" >
          <div className="volumebottom" >
            <div className="auto-group-volume">
              <p className="volume-text">Volume:</p>
            </div>
            <div className="auto-group-box" >
              <div className="button-label-1" >0.33L</div>
              <div className="button-label-2" >0.5L</div>
              <div className="button-label-3">1L</div>
              <div className="button-label-4">2L</div>
            </div>
          </div>
          <div className="quantity-page3">
            <p className="quantity-sub">Quantity:</p>
            <div className="input-text-white-1">1</div>
          </div>
          <div className="button-icon-label-addcart" >
            <img className="icon-shopping-cart" src={IconShoppingCart} alt='not found' />
            <p className="add-to-cart" >Add to cart</p>
          </div>
          <div className="links-combo">
            <p className="userreviews">User Reviews</p>
            <p className="informationNutritional">Nutritional information</p>
            <p className="shipping">Shipping</p>
          </div>
        </div>
      </div>
    </div>
  )
}
