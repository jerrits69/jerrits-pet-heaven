import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import "./pages.css";
import faq from "../photo/faq2.png";
import dropdown from "../photo/dropdown.png";

const FAQItem = () => {
  const faqs = [
    {
      question: "What are the animals available for adoption?",
      answer: "Currently we only have cats and dogs up for adoption."
    },
    {
      question: "What is the procedure to adopt?",
      answer: "You first need to be a member of Pet Heaven Society, afterwards there will be a form for you to fill up to adopt a specific pet."
    },
    {
      question: "If I have a pet that I can no longer take care anymore, can I give it to yall?",
      answer: (
        <div>
          Absolutely, there is a form for owners to also donate their pet to us if they can no longer take care of them.
          &nbsp;
          <HashLink smooth to="/releasepet#releasepet" className="faqsLink">Click Here</HashLink>
        </div>
      )
    },
    {
      question: "Are the animals healthy?",
      answer: "All of Pet Heaven animals are all in good health as they have already seek treatment from us."
    },
    {
      question: "Where are you guys located?",
      answer: "More details can be found at our Contact Us section."
    }
  ];
  const EachFaq = ({question, answer}) => {
    const[show, setShow] = useState(false);
    return(
      <div className = "fivefaq">
        <div className = "onefaq" onClick = {() => setShow(!show)}>
          <h2>{question}</h2>
          <span>{show ? <img src = {dropdown} alt = "dropdown photo" className = "droparrow"></img> : <img src =  {dropdown} alt = "dropdown photo" className = "droparrow"></img>}</span>
        </div>
        {show && <p className = "faqanswer">{answer}</p>}
      </div>
    );
  };
  return(
    <div className = "home4" id = "faqs">
      <div className = "home4box">
        <img src = {faq} alt = "faq photo"></img>
        <div className = "faqitems">
          {faqs.map((faq,index) => (
            <EachFaq key = {index} question = {faq.question} answer = {faq.answer}></EachFaq>
          )
        )}
        </div>
      </div>
    </div>
  );
};
export default FAQItem;
