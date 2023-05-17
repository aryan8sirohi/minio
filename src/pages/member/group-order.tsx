import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
//nextAuth
import { useSession, getSession } from "next-auth/react";
import axios from "axios";
import { Image } from "react-bootstrap";
import OrderList from "../../components/orderList/orderList";
// import { useUser } from "@clerk/nextjs";
// import {useRouter} from 'next/navigation'

const groupOrder = () => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    getOrder();
  }, []);

  const getOrder = async () => {
    const res = await axios.get("/api/order/groupOrder");
    console.log(res.data.order);
    if (res.data.status == 200) {
      setOrder(res.data.order);
    }
  };
  //  New work clerk auth
   

  // const Page= ()=> {
  //   const { isLoaded, isSignedIn , user}= useUser()
  //   const router = useRouter()

  //   if (isLoaded && !isSignedIn){
  //     router.push("/sign-in? redirectUrl=/member")
  //   }
  // }

  
  return (
    <>
      <div className="text-6xl">
        <OrderList orders={order} />
      </div>
    </>
  );
};

export default groupOrder;
