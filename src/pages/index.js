import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import React, { useRef } from "react";

export default function Home({ products }) {
  console.log(process.env.GOOGLE_ID);
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />
      <main className="max-w-screen-2xl mx-auto ">
        {/* Banner */}
        <Banner />
        {/* Product Feed */}
        {<ProductFeed items={products} name="ADitys" />}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}
/* const emailref = useRef(null);
const passwordref = useRef(null);
const register = (e) => {
  e.preventDefault();
  auth
    .createUserWithEmailAndPassword(
      emailref.current.value,
      passwordref.current.value
    )
    .then((authUser) => {
      console.log(authUser);
    })
    .catch((error) => {
      alert(error.message);
    });
};
 */
