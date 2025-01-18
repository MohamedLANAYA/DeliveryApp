import React, { useContext,useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../components/Context/StoreContext';
import axios from 'axios';


const Verify = () => {
    const[searchParams,setSearchParams]=useSearchParams();
    const success=searchParams.get("success");
    const orderId=searchParams.get("orderId");
    const navigate =useNavigate();
    // console.log(success,orderId);
    const {url}=useContext(StoreContext);


    const verifyPayment=async ()=>{
      // console.log(success,orderId);
      const response=await axios.post(url+"/api/order/verify",{success,orderId});
      // console.log(response);
      if(response.data.success){
        navigate("/myorders")
      }else{
        alert("not working")
      }
    }
    useEffect(()=>{  
        verifyPayment();
    },[])

  return (
    <div className=' min-h-[60vh] grid'>
      <div className='spinner'> 

      </div>

        
    </div>
  )
}

export default Verify
