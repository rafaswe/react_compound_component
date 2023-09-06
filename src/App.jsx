// import './App.css'

import { Accordions } from "./components/Accordions"

function App() {

  return (
    <>
      <div>
        <h1>React Design Pattern</h1>

        <Accordions>
          <Accordions.Header>
            <button>Click here</button>
          </Accordions.Header>
          <Accordions.Content>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eius, quasi dolores est non a rerum tempore beatae error eveniet aperiam excepturi molestias ullam distinctio maxime consequatur natus? Est, repudiandae.
            </div>
          </Accordions.Content>
        </Accordions>
      </div>

    </>
  )
}

export default App
