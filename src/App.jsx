import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "../Pages/FormPage";
import UserList from "./Components/UserList";
import EditList from "./Components/EditList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<FormPage />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/editUser" element={<EditList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
