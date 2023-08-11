import "./App.css";

import Index from "./component1";
import Component2 from "./component2";
import Component3 from "./component3";
import Component4 from "./component4";
import Component5 from "./component5";
import Component6 from "./Component6";
import Component7 from "./component7";
import HeroComponent from "./heroComponent";
import FooterComponent from "./FooterComponent";
import ContactForm from "./ContactForm/ContactForm";
import Question from "./FaqComponent/FAQ";
import "./App.css";

export default function App() {
  return (
    <div>
      <HeroComponent />
      <Index />
      <Component2 />
      <Component3 />
      <Component7 />
      <Component4 />
      <Component5 />
      <Component6 />
      <ContactForm />
      <Question/>
      <FooterComponent />
    </div>
  );
}
