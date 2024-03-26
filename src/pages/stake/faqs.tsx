import { Disclosure } from "@headlessui/react";
import React, { Fragment } from "react";

function FAQs() {
  const faq = [
    {
      no: "1",
      question: "What is $LOOT token staking?",
      answer:
        "$LOOT token staking is a process where holders of $LOOT tokens can lock their tokens to earn a share of revenue rewards. This process not only offers financial incentives but also contributes to accruing loyalty points, which can be exchanged for additional airdrop tokens.",
    },
    {
      no: "2",
      question: "How can I stake my $LOOT tokens?",
      answer:
        "To stake your $LOOT tokens, you'll need to lock your tokens in the staking feature available on our platform. Detailed instructions on how to do this can be found on our website or user guide.",
    },
    {
      no: "3",
      question:
        "Are there any benefits to staking $LOOT tokens for a longer period?",
      answer:
        "Yes, staking $LOOT tokens for a longer duration is advantageous as it allows your rewards to accumulate to a significant amount before claiming. This approach is cost-effective since each claim incurs gas fees.",
    },
  ];

  const faq2 = [
    {
      no: "1",
      question: "Can I claim my staking rewards at any time?",
      answer:
        "Yes, you can claim your staking rewards at any time. However, we recommend waiting until the rewards accumulate to a substantial amount to minimize the impact of gas fees on your earnings.",
    },
    {
      no: "2",
      question:
        "What are the gas fees for claiming staking rewards, and why do I have to pay them?",
      answer:
        "Gas fees are required for processing transactions on the Ethereum blockchain, where $LOOT tokens are based. These fees vary based on network congestion and are necessary to compensate for the computational energy required to process and validate transactions.",
    },
    {
      no: "3",
      question: "What blockchain network is the $LOOT token based on?",
      answer:
        "The $LOOT token is based on the Ethereum mainnet, a leading decentralized platform known for its security and wide adoption in the cryptocurrency space.",
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
        </div>
      </div>
    </>
  );
}

export default FAQs;
