import { Disclosure } from "@headlessui/react";
import React, { Fragment } from "react";

function FAQs() {
  const faq = [
    {
      no: "1",
      question: "Q1: What is $LOOT and $xLOOT?",
      answer:
        "$LOOT is the utility token of LootBot. $xLOOT is the burnt derivative version. Both tokens let holders claim revenue LootBot makes.",
    },
    {
      no: "2",
      question: "Q2: How often does an Epoch occur?",
      answer:
        "An Epoch takes place every 24 hours. Before an Epoch, a snapshot of token holdings is taken to determine RevShare distribution.",
    },
    {
      no: "3",
      question: "Q3: What does 'revenue on a pro-rata basis' mean?",
      answer:
        "'Pro-rata basis' means that RevShare are distributed proportionally according to the amount of $LOOT or $xLOOT held by each participant. The more tokens you hold, the larger your share of the RevShare.",
    },
  ];

  const faq2 = [
    {
      no: "1",
      question: "Q4: How do I claim my RevShare?",
      answer:
        "To claim RevShare, you need to have accumulated at least 0.1 ETH in unredeemed RevShare. When this threshold is reached, you can initiate the RevShare claiming process.",
    },
    {
      no: "2",
      question: "Q5: Can I accumulate RevShare over multiple Epochs?",
      answer:
        "Yes, you can accumulate RevShare over multiple Epochs until you reach the minimum threshold of 0.1 ETH worth of RevShare. Once you meet this requirement, you can claim all available unredeemed RevShare.",
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
                          <div className="text-sm font-semibold">
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
