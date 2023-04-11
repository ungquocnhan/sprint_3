import './App.css';
import UseState from "./demo/UseState";
import UseEffect from "./demo/UseEffect";
import {HookCustom} from "./demo/HookCustom";
import {CarSelection} from "./demo/CarSelection";
import {Timer} from "./demo/Timer";
import {Counter1} from "./demo/counter/Counter1";
import {Counter2} from "./demo/counter/Counter2";

function App() {
    return (
        <div className="App">
            <UseState/>
            <UseEffect/>
            <HookCustom/>
            <CarSelection/>
            <Timer/>
            <Counter1/>
            <Counter2/>
        </div>
    );
}

export default App;
