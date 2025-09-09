import Template from "./Template.tsx";
import TrafficLight from "./TrafficLight.tsx";
import {ChevronRight} from "lucide-react";

function App() {
  return (
      <Template>
          <div className="p-4 shadow-lg shadow-zinc-950 bg-zinc-800 rounded-xl border-0">
              <TrafficLight />
              <h1 className="text-3xl font-bold mb-4">Woods CS is back for 2025!</h1>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="flex my-8 text-zinc-400 align-baseline">
                  Join us Monday lunches @ Room 100!
              </p>
              <a href="#" className="bg-brand py-3 px-4 rounded-full text-white font-semibold inline-flex">See What's Happening <ChevronRight /></a>
          </div>
      </Template>
  )
}

export default App
