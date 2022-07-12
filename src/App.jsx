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
              <CheckIcon />
              <span>Powerful online protection.</span>
            </li>
            <li className="flex gap-2">
              <CheckIcon />
              <span>Internet without borders.</span>
            </li>
            <li className="flex gap-2">
              <CheckIcon />
              <span>Supercharged VPN.</span>
            </li>
            <li className="flex gap-2">
              <CheckIcon />
              <span>No specific time limits.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
