import { useState } from "react";
import SectionHeader from "./ui/header";
import icon from "../../assets/svg/icon/Icon.svg";

function Plan() {
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <div className="container  max-w-[1200px] mx-auto py-20">
      <div className="flex flex-col gap-10">
        <SectionHeader
          label="PRICING PLAN"
          title="Choose Package"
          description="Join our pro features for unlimited without any contract and cancel anytime."
        />
        <div className="flex flex-col gap-10 items-center">
          {/* togle */}
          <div className="flex items-center gap-4">
            <span
              className={`font-sans font-normal text-base ${
                !isAnnual ? "text-Primary-600" : "text-Neutral-300"
              }`}
            >
              Monthly
            </span>
            <div
              className={`relative w-16 h-8 flex items-center bg-gray-300 rounded-full p-1 border border-Neutral-200 cursor-pointer transition-all ${
                isAnnual ? "bg-Neutral-100" : "bg-Neutral-300/5"
              }`}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <div
                className={`absolute w-6 h-6 bg-Primary-600 rounded-full shadow-md transform transition-all ${
                  isAnnual ? "translate-x-8" : "translate-x-0"
                }`}
              ></div>
            </div>
            <span
              className={`font-sans font-normal text-base ${
                isAnnual ? "text-Primary-600" : "text-Neutral-300"
              }`}
            >
              Yearly
            </span>
          </div>

          {/* card */}
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col px-10 py-8 bg-Neutral-100 rounded-3xl border border-Primary-600 min-h-[685px] justify-between">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <h3 className="font-sans font-bold text-3xl text-Neutral-600">
                    Basic
                  </h3>
                  <p className="font-sans font-normal text-lg text-Neutral-300">
                    Kickstart product research in your business at no cost.
                  </p>
                </div>
                <ul className="space-y-4">
                  <li>
                    <div className="flex flex-row gap-4">
                      <img src={icon} alt="" />
                      <p className="font-sans font-normal text-lg text-Neutral-600">
                        Unlimited workspace
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-4">
                      <img src={icon} alt="" />
                      <p className="font-sans font-normal text-lg text-Neutral-600">
                        Access to RestAPI
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-row gap-2 items-end">
                  <h1 className="font-sans font-bold text-6xl text-Primary-600">
                    $199
                  </h1>
                  <p className="font-sans font-normal text-sm text-Neutral-300">
                    / month
                  </p>
                </div>
                <div className="border border-Primary-600 rounded-full hover:bg-Primary-600  transition-all">
                  <button className="font-sans font-medium text-base text-Neutral-600 py-4 w-full hover:text-white">
                    Book Demo
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-10 py-8 bg-Neutral-600 rounded-3xl min-h-[685px] justify-between">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <h3 className="font-sans font-bold text-3xl text-white">
                    Pro
                  </h3>
                  <p className="font-sans font-normal text-lg text-Neutral-400">
                    Fuel your product workflow with more advanced research
                    features
                  </p>
                </div>
                <ul className="space-y-4">
                  <li>
                    <div className="flex flex-row gap-4">
                      <img src={icon} alt="" />
                      <p className="font-sans font-normal text-lg text-white">
                        Unlimited workspace
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-4">
                      <img src={icon} alt="" />
                      <p className="font-sans font-normal text-lg text-white">
                        Access to RestAPI
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-4">
                      <img src={icon} alt="" />
                      <p className="font-sans font-normal text-lg text-white">
                        Priority Customer Support
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-4">
                      <img src={icon} alt="" />
                      <p className="font-sans font-normal text-lg text-white">
                        Real-Time Analytics
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-row gap-2 items-end">
                  <h1 className="font-sans font-bold text-6xl text-Primary-600">
                    $250
                  </h1>
                  <p className="font-sans font-normal text-sm text-Neutral-300">
                    / month
                  </p>
                </div>
                <div className="bg-Primary-600 hover:bg-white rounded-full transition-all">
                  <button className="font-sans font-medium text-base text-white py-4 w-full hover:text-Neutral-600">
                    Book Demo
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-10 py-8 bg-Neutral-100 rounded-3xl border border-Primary-600 min-h-[685px] justify-between">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <h3 className="font-sans font-bold text-3xl text-Neutral-600">
                    Enterprises
                  </h3>
                  <p className="font-sans font-normal text-lg text-Neutral-300">
                    Scale product research and learning across your company.
                  </p>
                </div>
                <ul className="space-y-4">
                  <li>
                    <div className="flex flex-row gap-4">
                      <img src={icon} alt="" />
                      <p className="font-sans font-normal text-lg text-Neutral-600">
                        Unlimited workspace
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-4">
                      <img src={icon} alt="" />
                      <p className="font-sans font-normal text-lg text-Neutral-600">
                        Access to RestAPI
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-4">
                      <img src={icon} alt="" />
                      <p className="font-sans font-normal text-lg text-Neutral-600">
                        Priority Customer Support
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-4">
                      <img src={icon} alt="" />
                      <p className="font-sans font-normal text-lg text-Neutral-600">
                        Real-Time Analytics
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-4">
                      <img src={icon} alt="" />
                      <p className="font-sans font-normal text-lg text-Neutral-600">
                        Data Export Capabilities
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-4">
                      <img src={icon} alt="" />
                      <p className="font-sans font-normal text-lg text-Neutral-600">
                        Advanced Security
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-4">
                      <img src={icon} alt="" />
                      <p className="font-sans font-normal text-lg text-Neutral-600">
                        Multi-User Access
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-row gap-2 items-end">
                  <h1 className="font-sans font-bold text-6xl text-Primary-600">
                    $499
                  </h1>
                  <p className="font-sans font-normal text-sm text-Neutral-300">
                    / month
                  </p>
                </div>
                <div className="border border-Primary-600 rounded-full hover:bg-Primary-600  transition-all">
                  <button className="font-sans font-medium text-base text-Neutral-600 py-4 w-full hover:text-white">
                    Book Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Plan;
