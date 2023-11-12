import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Card } from 'antd';
import { CardDefault } from './MyCards'


// api link save karna ka lia
const apilink ="https://fakestoreapi.com/products?limit=9"





// suestate : defoltvalue, setvalue.
function Cardapi() {
    const [dataapi, setDataapi] = useState([]);
// console.log(dataapi)




//useEffest: emety arrey in time create karna ka lia.
    useEffect(()=>{
const data =axios.get(apilink).then((response)=>{
console.log(response.data);
setDataapi(response.data);

    })
    },[])





return (
  <>
  {/* //responsive karna ka lia tailwent css classes use ki hai */}
        <div className='flex flex-col items-center justify-center'>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center w-[90%] xl:w-[90%]'>

  {
    
    dataapi.map((data, index)=>(

        <div className='justify-center mt-[100px] w-[80%] sm:w-[50%] md:w-[80%] lg:w-[80%] xl:w-[90%] mx-auto sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 'key={index}>
<CardDefault title={data.title } image={data.image} price={data.price} description={data.description} rate={data.rate}  />
            </div>
    ))
  }
        </div>
        </div>

  
  </>
)
}

export default Cardapi;


