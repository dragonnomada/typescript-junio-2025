import { CounterContextProvider } from "./components/CounterContext";
import CounterDemo from "./components/CounterDemo";

export default function App() {

    return (
        <div>
            <CounterContextProvider>
                <CounterDemo />
                <CounterDemo />
                <CounterDemo />
            </CounterContextProvider>
        </div>
    )

}