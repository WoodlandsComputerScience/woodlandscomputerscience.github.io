import Template from "./Template.tsx";
import TrafficLight from "./TrafficLight.tsx";
import {ChevronRight} from "lucide-react";

function App() {
  return (
      <Template>
          <div className="p-4 shadow-lg shadow-zinc-950 bg-zinc-800 rounded-xl border-0 mb-8">
              <TrafficLight />
              <h1 className="text-3xl font-bold mb-4">Woods CS is back for 2025!</h1>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="flex my-8 text-zinc-400 align-baseline">
                  Join us Monday lunches @ Room 100!
              </p>
              <a href="#" className="btn primary">See What's Happening <ChevronRight /></a>
              <hr className="my-8"/>
              <h1 className="text-3xl font-bold mb-4">Gallery</h1>
              <hr className="my-8"/>
              <h1 className="text-3xl font-bold mb-4">Calendar</h1>
              <hr className="my-8"/>
              <h1 className="text-3xl font-bold mb-4">Gallery</h1>
              <hr className="my-8"/>
              <h1 className="text-3xl font-bold mb-4">Meeting Notes</h1>
              <p>
                  Past meeting notes and lesson material can be found on our website.
              </p>
              <a href="#" className="btn border-2 mt-8">Meeting Notes <ChevronRight /></a>
              <hr className="my-8"/>
              <h1 className="text-3xl font-bold mb-4">Hack::Peel</h1>


          </div>
      </Template>
  )
}

export default App
