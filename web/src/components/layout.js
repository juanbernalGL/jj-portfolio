import React from "react";
import { Link } from "gatsby";

import Navbar from "./Navbar";
import Banner from "./Banner";
import "../styles/layout.css";

import favicon from "../assets/images/favicon.ico";
import ZeroanimaLogo from "../assets/svg/Zeroanima_Logo_red.svg";
import JJLogoBig from "../assets/images/JJ_Logo_Big.png";
import JJMainLogo from "../assets/images/JJ_Main_logo.png";
import Designed from "../assets/svg/Designed.svg";
import Helmet from "react-helmet";
import SocialMedia from "../components/SocialMedia";
import Skill from "../components/Skill";
// import IndexPage from "../pages/index";

const Layout = ({ children, path, location }) => (
  <div className="min-h-screen min-w-min bg-black bg-hero-pattern flex flex-col md:flex-row">
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <img src={JJLogoBig} alt="JJLogoBig" className="w-60 p-0 absolute" />
    <div className="w-screen flex flex-col flex align-middle justify-center">
      <div className="flex flex-row">
        <div className="w-full flex align-middle justify-center pt-28">
          <img src={JJMainLogo} alt="JJMainLogo" className=" p-0" />
        </div>
      </div>
      {/* <div className="w-full flex align-middle justify-center pt-20">
        <div className="w-3/6 flex align-middle justify-center flex-wrap gap-x-4 gap-y-4 ">
          <Skill label="Senior Front End Developer"></Skill>
          <Skill label="Senior JS Developer"></Skill>
          <Skill label="Senior Fullstack Developer"></Skill>
          <Skill label="Front End Developer Architect"></Skill>
          <Skill label="Technical Lead"></Skill>
        </div>
      </div> */}
      {/* <Navbar /> */}
      {/* <Banner /> */}
      <div>{children}</div>
      {/* <IndexPage></IndexPage> */}
    </div>
    {/*  <div className="w-12/12 md:w-4/12 lg:2/12 border-l-2 border-b-2 border-primary flex flex-col">
      <Link to="/">
        <div className="h-80 flex justify-center static">
          <img src={ZeroanimaLogo} alt="ZeroanimaLogo" className="" />
        </div>
      </Link>

      <div className="h-8 border-b-2 border-primary left-0">
        <p className="text-2xl pl-1 tracking-wide-1 font-quicksand w-28">SINCE</p>
      </div>
      <div>
        <p className="text-2xl pl-1 tracking-wide-4 font-quicksand w-28">1985</p>
      </div>
      <div className="flex justify-center static">
        <SocialMedia />
      </div>
      <div className="flex justify-center pt-16">
        <img
          src={ZeroanimaLogoSecondary}
          alt="ZeroanimaLogoSecondary"
          className="w-11"
        />
      </div>
      <div className="flex justify-center pt-16">
        <a
          href="https://www.juanjosebernal.work/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Designed} alt="Designed" />
        </a>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className="font-barlow">
            &copy; {new Date().getFullYear()}, Built with{" "}
            <a href="https://www.sanity.io">Sanity</a> &amp;{" "}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </div>
      </footer>
    </div>*/}
  </div>
);

export default Layout;
