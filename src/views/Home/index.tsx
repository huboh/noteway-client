import { FC } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


const Home: FC = () => {
  return (
    <section>
      <Header />
      <Footer />
    </section>
  );
};


export {
  Home as default
};