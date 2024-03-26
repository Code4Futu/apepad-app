import { Disclosure } from "@headlessui/react";
import React, { Fragment } from "react";

function FAQs() {
  const faq = [
    {
      no: "1",
      question: "What tokens do I need?",
      answer:
        "Depending on which interface you are using, each will have its own token needed for gas fees and collateral. For example, Goal3 on the zkSync chain currently requires only USDT for both.",
    },
    {
      no: "2",
      question: "Which blockchain is Sided built on?",
      answer:
        "Sided is a chain-agnostic protocol, which anyone can build an interface on top of. At the first inception, Sided is ready for all EVM-compatible L1s and L2s.",
    },
    {
      no: "3",
      question: "How many Interfaces / Exchanges are there?",
      answer:
        "The Sided protocol consults a variety of institutional-grade APIs to set out the initial odds. Afterwards, the protocol depends on its algorithmic Automated Market-Maker (AMM) and incentivized arbitrageurs to set the correct prices. Unbalanced pools represent a profit opportunity for incentivized parties: sharp bettors, arbitrageurs, etc. These trades re-balance the pool and ensure that prices accurately reflect the market value.",
    },
  ];

  const faq2 = [
    {
      no: "1",
      question: "What tokens do I need?",
      answer:
        "Depending on which interface you are using, each will have its own token needed for gas fees and collateral. For example, Goal3 on the zkSync chain currently requires only USDT for both.",
    },
    {
      no: "2",
      question: "Which blockchain is Sided built on?",
      answer:
        "Sided is a chain-agnostic protocol, which anyone can build an interface on top of. At the first inception, Sided is ready for all EVM-compatible L1s and L2s.",
    },
    {
      no: "3",
      question: "How many Interfaces / Exchanges are there?",
      answer:
        "The Sided protocol consults a variety of institutional-grade APIs to set out the initial odds. Afterwards, the protocol depends on its algorithmic Automated Market-Maker (AMM) and incentivized arbitrageurs to set the correct prices. Unbalanced pools represent a profit opportunity for incentivized parties: sharp bettors, arbitrageurs, etc. These trades re-balance the pool and ensure that prices accurately reflect the market value.",
    },
  ];

  return (
    <>
      <div className="w-full text-sm">
        <div className="card--header">
          <h4 className="">
            <i className="fa-duotone fa-block-question mr-3 text-lg"></i>
            <span className="">Frequently Asked Questions</span>
          </h4>
        </div>

        <div className="card--body grid md:grid-cols-2 gap-4 -mx-2">
          <div className="space-y-4">
            {faq.map((item, idx) => (
              <Fragment key={idx}>
                <Disclosure
                  as="div"
                  className="border border-base-content border-opacity-10 rounded-box"
                  defaultOpen={false}
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full px-4 py-3 text-left">
                        <div className="flex justify-between">
                          <div className="font-semibold">{item.question}</div>
                          <div className="pl-4">
                            {!open ? (
                              <i className="fa-solid fa-caret-right text-sm transition-all"></i>
                            ) : (
                              <i className="fa-solid fa-caret-right text-sm rotate-90 transition-all"></i>
                            )}
                          </div>
                        </div>
                      </Disclosure.Button>
                      <Disclosure.Panel className="w-full px-4 pb-3 -mt-1">
                        <div className="text-base-content/70 leading-relaxed">
                          {item.answer}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </Fragment>
            ))}
          </div>
          <div className="space-y-4">
            {faq2.map((item, idx) => (
              <Fragment key={idx}>
                <Disclosure
                  as="div"
                  className="border border-base-content border-opacity-10 rounded-box"
                  defaultOpen={false}
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full px-4 py-3 text-left">
                        <div className="flex justify-between">
                          <div className="text-base font-semibold">
                            {item.question}
                          </div>
                          <div className="pl-4">
                            {!open ? (
                              <i className="fa-solid fa-caret-right text-sm transition-all"></i>
                            ) : (
                              <i className="fa-solid fa-caret-right text-sm rotate-90 transition-all"></i>
                            )}
                          </div>
                        </div>
                      </Disclosure.Button>
                      <Disclosure.Panel className="w-full px-4 pb-3 -mt-1">
                        <div className="text-base-content/70 leading-relaxed">
                          {item.answer}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQs;
