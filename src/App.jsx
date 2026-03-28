import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppContent from "./AppContent";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Toaster />
                <AppContent />
            </BrowserRouter>
        </div>
    );
}

export default App;
