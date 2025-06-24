import CounterStore from "./CounterStore";
import Hello from "./Hello";

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
        </div>
    )

}