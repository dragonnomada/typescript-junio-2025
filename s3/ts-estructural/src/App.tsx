import { AppContextProvider } from "./Context/AppContext"
import RandomUserList from "./Views/RandomUserList"
import RandomUserSearch from "./Views/RandomUserSearch"

export default function App() {

    return (
        <div>
            <AppContextProvider>
                <div className="p-3">
                    <RandomUserSearch />
                </div>
                <div className="p-3">
                    <RandomUserList />
                </div>
            </AppContextProvider>
        </div>
    )

}