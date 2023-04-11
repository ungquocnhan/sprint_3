import './App.css';
import PreventDefault from "./handle_event/PreventDefault";
import ExampleThis from "./handle_event/ExampleThis";
import ExampleArrowFunction from "./handle_event/ExampleArrowFunction";
import ExampleMounting from "./life_circle/ExampleMounting";
import ExampleLifeCycle from "./life_circle/ExampleLifeCycle";
import ExampleLifeCycleV17 from "./life_circle/ExampleLifeCycleV17";

function App() {
    return (
        <div className="App">
            {/*<PreventDefault/>*/}
            {/*  <ExampleThis/>*/}
            {/*  <ExampleArrowFunction/>*/}
            {/*  <ExampleMounting/>*/}
            {/*  <ExampleLifeCycle/>*/}
            <ExampleLifeCycleV17/>
        </div>
    );
}

export default App;
