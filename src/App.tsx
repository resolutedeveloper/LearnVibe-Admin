import "./App.css";
// import Login from './Component/Page/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Page/Login";
import Dashboard from "./Component/Page/Dashboard";
import Users from "./Component/Page/Users";
import ForgotPassword from "./Component/Page/ForgotPassword";
import NewUsers from "./Component/Page/NewUsers";
import Subscription from "./Component/Page/Subscription";
import AddSubscription from "./Component/Page/AddSubscription";
import ReportsSubscciption from "./Component/Page/ReportsSubscciption";
import Reprotscustomerdata from "./Component/Page/Reprotscustomerdata";
import Reportscustomerusagedata from "./Component/Page/Reportscustomerusagedata";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users/>} />
          {/* <Route path="/users" element={<Users />}>
            <Route index element={<NewUsers />} />
            <Route path="newusers" element={<NewUsers />} />
          </Route> */}

          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/newusers" element={<NewUsers />} />
          {/* <Route path="/users" element={<UsersLayout />}>
  <Route index element={<UserList />} />
  <Route path="new" element={<NewUser />} />
</Route> */}
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/addSubscription" element={<AddSubscription />} />
          <Route
            path="/Reportssubscciption"
            element={<ReportsSubscciption />}
          />
          <Route
            path="/Reportssubscciption"
            element={<ReportsSubscciption />}
          />
          <Route
            path="/reprotscustomerdata"
            element={<Reprotscustomerdata />}
          />
          <Route
            path="/reportscustomerusagedata"
            element={<Reportscustomerusagedata />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
