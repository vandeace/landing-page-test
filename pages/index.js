import Hero from '../components/parts/Hero';
import Categories from '../components/parts/Categories';
import Header from '../components/elements/Header';
import Dropdown from '../components/elements/Dropdown';
import { useEffect, useState } from "react";
import Footer from '../components/elements/Footer';
import data from "../utils/landingPage.json";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  }, [isOpen]);

  return (
    <div >
    <Header toggle={toggle} isOpen={isOpen} />
    <Dropdown isOpen={isOpen} toggle={toggle} />
     <Hero  />
     <Categories data={data.categories} />
     <Footer/>
    </div>
  )
}
