import { Stack } from "react-bootstrap"
import RelojTabla from "./components/RelojTabla"
import CronometroPista from "./components/CronometroPista"

export default function App() {

    return (
        <Stack>
            <RelojTabla />
            <CronometroPista />
        </Stack>
    )

}