import React, { useState } from "react";

const pack = [
  {
    key: 1,
    name: "1",
    price: "10K",
    oldPrice: "",
    discount: "",
  },
  {
    key: 2,
    name: "5",
    price: "45K",
    oldPrice: "50K",
    discount: "5%",
  },
  {
    key: 3,
    name: "10",
    price: "90K",
    oldPrice: "100K",
    discount: "10%",
  },
  {
    key: 4,
    name: "15",
    price: "10K",
    oldPrice: "112,5K",
    discount: "15%",
  },
  {
    key: 5,
    name: "20",
    price: "160K",
    oldPrice: "200K",
    discount: "20%",
  },
];

function Burn() {
  const [packS, setPackS] = useState<number>(1);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <>
      {/* Burn */}
      <div className={`w-full`}>
        <div className="grid lg:grid-cols-12 gap-4 md:gap-6">
          <div className="lg:col-span-4 card order-last lg:-order-last">
            <div className="card--body !pt-0">
              <ul className="steps steps-vertical">
                <li className="step step-neutral !text-left">
                  Start by selecting the asset to Burn
                </li>
                <li className="step step-neutral !text-left">
                  Pick the asset you want to exchange For
                </li>
                <li className="step step-neutral !text-left">
                  The quote will be ready in a moment!
                </li>
                <li className="step step-neutral !text-left">
                  Receive Product
                </li>
              </ul>
              <div className="flex bg-accent/10  px-4 py-3 rounded-md text-sm mt-4">
                <i className="fa-solid fa-circle-info mr-3 text-base text-accent mt-1"></i>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 card card-primary">
            <div className="card--header">
              <h4 className="">
                <i className="fa-duotone fa-fire mr-3"></i>
                <span className="">Select the Package to Burn</span>
              </h4>
            </div>
            <div className="card--body">
              <div className="grid gap-2">
                {pack.map((item, idx) => (
                  <>
                    <div
                      className={`flex justify-between items-baseline bg-base-200 px-4 py-3 rounded-box border border-base-content/20 cursor-pointer transition-all ${
                        packS === item.key
                          ? "border-primary shadow bg-primary/10"
                          : ""
                      }`}
                      onClick={() => setPackS(item.key)}
                    >
                      <div className="flex flex-col">
                        <div className="mb-2">
                          <span className="text-[10px] uppercase opacity-70 ">
                            Receive
                          </span>
                        </div>

                        <h6 className="flex items-baseline transition-all">
                          <span
                            className={`text-lg font-bold leading-none mr-1 ${
                              packS === item.key ? "text-primary" : ""
                            }`}
                          >
                            {item.name}
                          </span>
                          <span
                            className={`opacity-70 font-medium  text-xs ${
                              packS === item.key ? "opacity-100" : ""
                            }`}
                          >
                            xLOOT
                          </span>
                        </h6>
                      </div>

                      <div className="flex flex-col items-end">
                        <div className="mb-1 flex items-center gap-2">
                          {item.discount && (
                            <span
                              className={`badge badge-success transition-all !text-[10px] !px-[4px] !py-0 ${
                                packS === item.key ? "" : "badge-outline"
                              }`}
                            >
                              {item.discount} Off
                            </span>
                          )}
                          <span className="text-[10px] uppercase opacity-70 ">
                            Burn
                          </span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="line-through opacity-70 text-xs">
                            {item.oldPrice}
                          </span>
                          <span
                            className={`font-bold text-base ${
                              packS === item.key ? "text-primary" : ""
                            }`}
                          >
                            {item.price}
                          </span>

                          <span
                            className={`opacity-70 font-medium  text-xs ${
                              packS === item.key ? "opacity-100" : ""
                            }`}
                          >
                            $LOOT
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>

              <div className="mt-4">
                <button
                  onClick={() =>
                    // @ts-expect-error
                    document.getElementById("burnReceipt_modal").showModal()
                  }
                  className="btn btn-block btn-primary text-base"
                >
                  Burn 15,000 $LOOT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //Burn */}
    </>
  );
}

export default Burn;
