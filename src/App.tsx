import { useLayoutEffect, useRef } from "react";
import "./App.css";
import "./assets/fonts/Montserrat-VariableFont_wght.ttf"

function App() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="flex justify-between gap-4 max-w-screen-xl mx-auto responsive-wrap ">
          <header className="header-div lg:top-0 lg:flex lg:flex-col lg:justify-between lg:flex-none w-[45%] lg:py-24">
            <div>
              <p className="Name text-[48px] pb-5 leading-none font-bold bg-gradient-to-t from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                Danish Rafid Rajendra  
              </p>
              <h2 className="text-lg font-bold">Software Engineer</h2>
            </div>

          </header>

        <div className="text-left lg:py-24">
            <div className="about mb-9">
              <p className="mb-4">
              I’m a developer who enjoys crafting clean, interactive, and meaningful digital experiences.
              My work sits at the intersection of design and technology,
              I love shaping ideas into interfaces that not only look refined but also feel intuitive and purposeful to use.<br />
              </p>
              <p className="mb-4">
              Currently, I’ve just completed my Computer Science studies at the University of Queensland and Universitas Indonesia. 
              I’m taking time to refine my technical portfolio, learn new frameworks, 
              and explore opportunities where I can continue building products that merge creativity and functionality.
              </p>
              <p className="mb-4">
              In the past, I’ve built products across web, mobile, and interactive media, including SeaSaw,
              an award-winning Unity and Arduino installation showcased at UQ Open Day 2025 and selected for OzCHI 2025.
              </p>
            </div>
            
            <div className="experience">
              <ol>
                <li className="mb-7">
                  <span className="font-bold bg-gradient-to-t from-fuchsia-600 to-pink-600 bg-clip-text text-transparent ">Lead Programmer · SeaSaw</span><br/>
                  <p className="italic mb-[5px]">2025 - PRESENT</p>
                  <p className="mb-[8px]">Led the full programming of SeaSaw, a two-player balance board game, using Unity integrated with Arduino sensors, while
                  also contributing to the system’s design throughout a
                  semester-long course at the University of Queensland.</p>
                  <ol>
                    <li className="mb-[5px]"><p>- Will be presented at the <span className="font-bold bg-gradient-to-t from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">OzCHI 2025</span> - the 37th Australian Conference on Human-Computer Interaction</p></li>
                    <li className="mb-[5px]"><p>-  Showcased at <span className="font-bold bg-gradient-to-t from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">UQ’s Open Day 2025</span></p></li>
                    <li className="mb-[5px]"><p>-  Won the <span className="font-bold bg-gradient-to-t from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">People’s Choice Award</span> (at the course exhibit) - UQ</p></li>
                  </ol>
                </li>
                <li className="mb-7">
                  <span className="font-bold bg-gradient-to-t from-fuchsia-600 to-pink-600 bg-clip-text text-transparent ">Mobile Developer Intern · PT GoTo Gojek Tokopedia Tbk (GOTO)</span><br/>
                  <p className="italic mb-[5px]">December 2024 - February 2025</p>
                  <p className="mb-[8px]">
                    Interned as a Mobile Developer at PT GoTo Gojek Tokopedia Tbk,
                    focusing on Flutter development with BLoC state management.
                    Contributed to the GoPay app by improving and updating UI
                    components to enhance user experience and interface
                    consistency.
                  </p>
                </li>
                <li className="mb-7">
                  <span className="font-bold bg-gradient-to-t from-fuchsia-600 to-pink-600 bg-clip-text text-transparent ">Web Developer Intern · PT Juara Raga Adidaya (JUARAGA)</span><br/>
                  <p className="italic mb-[5px]">December 2024 - February 2025</p>
                  <p className="mb-[8px]">
                    Worked on web development at PT Juara Raga Adidaya by
                    developing reusable templates for the Shopify-based
                    juaraga.id platform, applied across all pages under the
                    Juaraga World section. Designed and implemented a new Our
                    Philosophy page to strengthen brand identity and improve user
                    engagement.
                  </p>
                </li>
              </ol>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
