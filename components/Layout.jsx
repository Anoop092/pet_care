import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../utils/Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, title }) => {
  const { state, dispatch } = useGlobalContext();
  const [count, setCount] = useState(0);
  const { cart } = state;
  const { userInfo } = state;
  console.log(userInfo);
  useEffect(() => {
    let num = cart.cartItems.reduce((sum, cur) => sum + cur.quantity, 0);
    setCount(num);
  }, [cart.cartItems]);

  return (
    <>
      <Head>
        <title>{title ? `${title}-Pet Care` : "Pet Care"}</title>
        <meta name="description" content="the pet-zone for pet lovers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex flex-col min-h-screen justify-between">
        <header>
          <nav className=" flex h-12 shadow-md py-5 px-3 bg-blue-500 items-center justify-between">
            <Link href="/">
              <a className="text-xl text-white font-bold">PET ZONE</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="text-xl p-2 text-white">
                  Cart
                  {count > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {count}
                    </span>
                  )}
                </a>
              </Link>
              {userInfo ? (
                <Link href="/profile">
                  <a className="text-xl p-2">{userInfo.name}</a>
                </Link>
              ) : (
                <Link href="/login">
                  <a className="text-xl p-2">Login</a>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 items-center justify-center shadow-md">
          {" "}
          <p>Copyright &copy; pet-zone</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
