import { Routes, Route } from "react-router-dom"; // Using ES module syntax
import AuthLayout from "./components/auth/layout"; // Make sure the path is correct
import AuthLogin from "./pages/login"; // Make sure the path is correct
import AuthRegister from "./pages/register"; // Corrected typo here

function App() {
    return (
        <div className="flex flex-col overflow-hidden bg-white">
            {/* Common component */}
            <h1>Header component</h1>

            <Routes>
                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="login" element={<AuthLogin />} />
                    <Route path="register" element={<AuthRegister />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
