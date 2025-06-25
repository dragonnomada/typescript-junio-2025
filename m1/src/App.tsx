import AlertUserConfirmTest from "./AlertUserConfirmTest";
import CounterStore from "./CounterStore";
import Hello from "./Hello";
import ModalUserConfirmTest from "./ModalUserConfirmTest";
import PersonaTest from "./PersonaTest";

export default function App() {

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                padding: "1rem",
            }}
        >
            <Hello
                title="Hello React"
                date={new Date()}
            />
            <CounterStore />
            <PersonaTest />
            <AlertUserConfirmTest />
            <ModalUserConfirmTest />
        </div>
    )

}