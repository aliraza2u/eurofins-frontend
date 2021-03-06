import Head from "next/head";
// import styles from '../styles/Home.module.css'
import Slider from "./../Components/Slider/Slider";
import OurServices from "../Sections/OurServices/OurServices";
import TestingSpecialist from "../Sections/TestingSpecialist";
import DNALabs from "../Sections/DNAlabs";
import { getProducts } from "./../redux/product/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import Categories from "../Sections/Categories/Categories";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.products?.products?.data?.message
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);



  return (
    <div>
      <Head>
        <title>Eurofins Lab</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slider />
      <Categories/>
      <OurServices />
      <TestingSpecialist />
      <DNALabs />
    </div>
  );
}
