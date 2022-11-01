import React from 'react'
import './Products.css'
import { useState } from 'react'
import {useDispatch} from 'react-redux';
import {Update} from '../Redux/Action';

function Products() {
  const dispatch=useDispatch();
  const [data, setData] = useState('');
  const datad = [];
  fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
    .then(res => res.json())
    .then(data => {
      console.table(data)
      for (const key in data) {
        datad.push(data[key])
      }
      setData(datad)
    })
  return (
    <div className='Products-container'>
      <div className='Products-heading'>
        <h2>Products</h2>
      </div>
      <div className='Products-fetching'>
        {data && data.map(key => {
          return (
            <div className='Products-carts'>
              <div className='Products-cart'>
                <div className='Product-img'><img src={key.productImage} alt='loading' /></div>
                <div className='Product-textfield'>
                  <div className='Product-name'>{key.productName}</div>
                  <div className='Product-spec'>
                    <div className='Product-start-1'><div className='Product-start'>
                      
                      </div>
                      <div className='Product-start'>
                        
                      </div>
                      <div className='Product-start'>
                        
                      </div>
                      <div className='Product-start'>
                        
                      </div>
                      <div className='Product-start'>
                        
                      </div></div>
                    <div className='Product-price' >
                      <div className='Product-oldPrice'>{key.oldPrice}</div>
                      <div className='oldPrice-bar'>/-</div>
                      <div className='Product-newPrice'>{key.newPrice}/-</div>
                    </div>
                  </div>
                </div>
                <div className='Product-button'>
                  <button 
                  onClick={()=>{
                    dispatch({type:Update})
                  }}
                  >ADD TO CART</button>
                </div>
              </div>

            </div>
          )
        })}


      </div>

    </div>
  )
}

export default Products