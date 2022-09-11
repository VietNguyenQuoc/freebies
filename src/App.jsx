import React from 'react';
import CheckIcon from "./components/CheckIcon";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App bg-[#F6F6F6]">
      <NavBar />

      <div className="hero flex gap-4 px-20 mt-20">
        <div className="flex-1">
          <h2 className="text-5xl leading-snug">
            Want anything to be easy with{" "}
            <span className="font-bold">LaslesVPN</span>.
          </h2>
          <p className="text-slate-700 mt-8 leading-loose">
            Provide a network for all your needs with ease and fun using{" "}
            <span className="font-medium">LaslesVPN</span> discover interesting
            features from us.
          </p>
          <button className="text-white font-bold text-sm bg-primary py-3 px-20 rounded-lg mt-12 shadow-2xl shadow-primary">
            Get Started
          </button>
        </div>
        <div className="flex-1">
          <img src="img/hero.svg" alt="Hero" className=" object-cover" />
        </div>
      </div>

      <div className="info-container container flex w-5/6 mx-auto rounded-lg bg-white mt-20 py-8 shadow-lg">
        <div className="info-item flex justify-center flex-1 gap-6 items-center py-6 border-r-2 border-r-gray-200">
          <div className="info-icon bg-[#FFECEC] p-3 rounded-full">
            <svg
              class="w-6 h-6 fill-primary"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <p className="info-details">
            <span className="block text-2xl text-slate-900 font-bold">90+</span>
            <span className="block text-xl text-slate-500">Users</span>
          </p>
        </div>
        <div className="info-item flex justify-center flex-[1.2_1.2_0] gap-6 items-center py-6 border-r-2 border-r-gray-200">
          <div className="info-icon bg-[#FFECEC] p-3 rounded-full">
            <svg
              class="w-6 h-6 fill-primary"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <p className="info-details">
            <span className="block text-2xl text-slate-900 font-bold">30+</span>
            <span className="block text-xl text-slate-500">Locations</span>
          </p>
        </div>
        <div className="info-item flex justify-center flex-1 gap-6 items-center">
          <div className="info-icon bg-[#FFECEC] p-3 rounded-full">
            <svg
              class="w-6 h-6 fill-primary"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <p className="info-details">
            <span className="block text-2xl text-slate-900 font-bold">50+</span>
            <span className="block text-xl text-slate-500">Servers</span>
          </p>
        </div>
      </div>

      <div className="features flex mt-20">
        <div className="flex-1 object-contain">
          <img className="mx-auto" src="img/main-1.png" alt="features" />
        </div>
        <div className="pl-12 pt-12 flex-1">
          <h2 className="text-slate-900 text-4xl font-medium w-2/3">
            We provide many features you can use
          </h2>
          <p className="text-slate-700 leading-loose w-2/3 mt-6">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <ul className="feature-list mt-4 space-y-6">
            <li className="flex gap-2">
              <CheckIcon circle />
              <span>Powerful online protection.</span>
            </li>
            <li className="flex gap-2">
              <CheckIcon circle />
              <span>Internet without borders.</span>
            </li>
            <li className="flex gap-2">
              <CheckIcon circle />
              <span>Supercharged VPN.</span>
            </li>
            <li className="flex gap-2">
              <CheckIcon circle />
              <span>No specific time limits.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="choose-your-plan mt-20">
        <h3 className="text-center font-medium text-4xl">Choose your plan</h3>
        <p className="text-center text-slate-600 w-1/3 mx-auto mt-5">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
        <div className="flex gap-12 text-center px-40 mt-16">
          <div className="flex flex-col justify-between flex-1 p-10 pt-20 border-2 rounded-lg border-gray-300">
            <div className="self-center">
              <img
                src="img/plan-free.png"
                alt="plan free"
                className="w-full mx-auto"
              />
              <p className="font-medium text-lg mt-8">Free plan</p>
              <ul className="space-y-4 text-slate-500 mt-12 text-center">
                <li className="flex gap-3">
                  <CheckIcon />
                  <span>Unlimited Bandwitch</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span>Encrypted Connection</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span>No Traffic Logs</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span>Works on All Devices</span>
                </li>
              </ul>
            </div>
            <div className="mt-12">
              <p className="font-medium text-2xl">Free</p>
              <button className="border-2 border-primary rounded-full w-full text-primary font-bold py-3 mt-4">
                Select
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between flex-1 p-10 pt-20 border-2 rounded-lg border-gray-300">
            <div className="self-center">
              <img
                src="img/plan-standard.png"
                alt="plan standard"
                className="w-full mx-auto"
              />
              <p className="font-medium text-lg mt-8">Standard plan</p>
              <ul className="space-y-4 text-slate-500 mt-12">
                <li className="flex gap-3">
                  <CheckIcon />
                  <span>Unlimited Bandwitch</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span>Encrypted Connection</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span>No Traffic Logs</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span>Works on All Devices</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span>Connect Anywere</span>
                </li>
              </ul>
            </div>
            <div className="mt-12">
              <p className="font-medium text-2xl">
                $9 <span className="font-normal text-slate-500">/ mo</span>
              </p>
              <button className="border-2 border-primary rounded-full w-full text-primary font-bold py-3 mt-4">
                Select
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between flex-1 p-10 pt-20 border-2 rounded-lg border-primary">
            <div className="self-center">
              <img
                src="img/plan-premium.png"
                alt="plan premium"
                className="w-full mx-auto"
              />
              <p className="font-medium text-lg mt-8">Premium plan</p>
              <ul className="space-y-4 text-slate-500 mt-12">
                <li className="flex gap-3">
                  <CheckIcon />
                  <span>Unlimited Bandwitch</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span>Encrypted Connection</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span>No Traffic Logs</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span>Works on All Devices</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span>Connect Anywere</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span>Get New Features</span>
                </li>
              </ul>
            </div>
            <div className="mt-12">
              <p className="font-medium text-2xl">
                $12 <span className="font-normal text-slate-500">/ mo</span>
              </p>
              <button className="bg-primary rounded-full w-full text-white font-bold py-3 mt-4">
                Select
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="global text-center mt-40">
        <h3 className="font-medium text-4xl w-96 mx-auto">
          Huge Global Network of Fast VPN
        </h3>
        <p className="text-slate-500 w-1/3 mx-auto mt-5">
          See <span className="font-medium">LaslesVPN</span> everywhere to make
          it easier for you when you move locations.
        </p>
        <div className="world-map w-2/3 mx-auto mt-40">
          <img src="img/world-map.png" alt="world map" className="w-full" />
        </div>
      </div>

      <div className="sponsored w-5/6 mx-auto mt-8">
        <img src="img/sponsored.png" alt="sponsors" className="w-full" />
      </div>

      <div className="feedbacks text-center">
        <h3 className="font-medium text-4xl w-1/3 mx-auto">
          Trusted by Thousands of Happy Customer
        </h3>
        <p className="text-slate-500 w-1/3 mx-auto mt-5">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
        <div className="feedback-wrapper">
          <div className="feedback-list text-left flex gap-12 w-5/6 mx-auto mt-16">
            <div className="card flex-1 w-1/4 p-8 border-2 border-primary rounded-xl">
              <div className="card-header flex justify-between items-center">
                <div className="user-info flex items-center">
                  <img src="img/ava-1.png" alt="" className="w-14 h-14" />
                  <div className="ml-5">
                    <p className="font-medium text-lg">Viezh Robert</p>
                    <p className="text-sm text-slate-500">Warsaw, Poland</p>
                  </div>
                </div>
                <div>
                  <span>4.5</span>
                  <svg
                    class="w-6 h-6 fill-[#FEA250] inline ml-2"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              <p className="mt-5 leading-8">
                “Wow... I am very happy to use this VPN, it turned out to be
                more than my expectations and so far there have been no
                problems. LaslesVPN always the best”.
              </p>
            </div>
            <div className="card flex-1 w-1/4 p-8 border-2 border-primary rounded-xl">
              <div className="card-header flex justify-between items-center">
                <div className="user-info flex items-center">
                  <img src="img/ava-1.png" alt="" className="w-14 h-14" />
                  <div className="ml-5">
                    <p className="font-medium text-lg">Viezh Robert</p>
                    <p className="text-sm text-slate-500">Warsaw, Poland</p>
                  </div>
                </div>
                <div>
                  <span>4.5</span>
                  <svg
                    class="w-6 h-6 fill-[#FEA250] inline ml-2"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              <p className="mt-5 leading-8">
                “Wow... I am very happy to use this VPN, it turned out to be
                more than my expectations and so far there have been no
                problems. LaslesVPN always the best”.
              </p>
            </div>
            <div className="card flex-1 w-1/4 p-8 border-2 border-primary rounded-xl">
              <div className="card-header flex justify-between items-center">
                <div className="user-info flex items-center">
                  <img src="img/ava-1.png" alt="" className="w-14 h-14" />
                  <div className="ml-5">
                    <p className="font-medium text-lg">Viezh Robert</p>
                    <p className="text-sm text-slate-500">Warsaw, Poland</p>
                  </div>
                </div>
                <div>
                  <span>4.5</span>
                  <svg
                    class="w-6 h-6 fill-[#FEA250] inline ml-2"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              <p className="mt-5 leading-8">
                “Wow... I am very happy to use this VPN, it turned out to be
                more than my expectations and so far there have been no
                problems. LaslesVPN always the best”.
              </p>
            </div>
          </div>
          <div className="feedback-footer flex justify-between items-center w-5/6 mx-auto mt-8">
            <div className="feedback-bullets">
              <span className="inline-block w-8 h-3 rounded-lg bg-primary"></span>
              <span className="inline-block w-3 h-3 rounded-full ml-3 bg-gray-300"></span>
              <span className="inline-block w-3 h-3 rounded-full ml-3 bg-gray-300"></span>
              <span className="inline-block w-3 h-3 rounded-full ml-3 bg-gray-300"></span>
            </div>
            <div className="flex gap-4">
              <button className="rounded-full bg-primary p-4">
                <svg
                  class="w-6 h-6 fill-white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="rounded-full bg-primary p-4">
                <svg
                  class="w-6 h-6 fill-white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="subcribe flex justify-between w-5/6 mx-auto items-center bg-white px-20 py-14 mt-20">
        <div>
          <p className="font-medium text-4xl leading-[45px] w-2/3">
            Subscribe Now for Get Special Features!
          </p>
          <p className="text-slate-500 mt-5">
            Let's subscribe with us and find the fun.
          </p>
        </div>
        <button className="capitalize text-white font-bold bg-primary px-16 py-4 rounded-xl shadow-primary shadow-2xl">
          Subscribe now
        </button>
      </div>

      <footer className="grid grid-cols-6 w-5/6 mx-auto mt-20 pb-20">
        <div className="col-span-3">
          <div className="flex items-center gap-2">
            <img className="w-6 h-6" src="img/logo.png" />
            <p className="text-xl">
              Lasles<span className="font-bold">VPN</span>
            </p>
          </div>
          <p className="text-gray-600 leading-loose mt-6 w-1/2">
            <span className="font-medium">LaslesVPN</span> is a private virtual
            network that has unique features and has high security.
          </p>
          <div className="flex gap-5 mt-8">
            <img
              className="rounded-full shadow-lg fill-primary bg-primary"
              src="img/fb.svg"
              alt=""
            />
            <img
              className="rounded-full shadow-lg fill-primary bg-primary"
              src="img/tw.svg"
              alt=""
            />
            <img
              className="rounded-full shadow-lg fill-primary bg-primary"
              src="img/ins.svg"
              alt=""
            />
          </div>
          <p className="text-gray-400 mt-8">©2020LaslesVPN</p>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-medium">Product</h3>
          <ul className="flex flex-col gap-4 mt-8">
            <li className="text-gray-600">Download</li>
            <li className="text-gray-600">Pricing</li>
            <li className="text-gray-600">Locations</li>
            <li className="text-gray-600">Server</li>
            <li className="text-gray-600">Countries</li>
            <li className="text-gray-600">Blog</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-medium">Engage</h3>
          <ul className="flex flex-col gap-4 mt-8">
            <li className="text-gray-600">LaslesVPN ? </li>
            <li className="text-gray-600">FAQ</li>
            <li className="text-gray-600">Tutorials</li>
            <li className="text-gray-600">About us</li>
            <li className="text-gray-600">Private Policy</li>
            <li className="text-gray-600">Term of Service</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-medium">Earn Money</h3>
          <ul className="flex flex-col gap-4 mt-8">
            <li className="text-gray-600">Affiliate</li>
            <li className="text-gray-600">Become Partner</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
