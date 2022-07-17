import Head from "next/head";
import Link from "next/link";
import React from "react";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title}-Pet Care` : "Pet Care"}</title>
        <meta name="description" content="the pet-zone for pet lovers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen justify-between">
        <header>
          <nav className=" flex h-12 shadow-md py-5 px-3 bg-blue-500 items-center ">
            <Link href="/">
              <a className="text-xl text-white font-bold">PET ZONE</a>
            </Link>
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
