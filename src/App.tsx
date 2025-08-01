import "./App.css";
// import Login from './Component/Page/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Page/Login";
import Dashboard from "./Component/Page/Dashboard";
import Users from "./Component/Page/Users";
import ForgotPassword from "./Component/Page/ForgotPassword";
import NewUsers from "./Component/Page/NewUsers";
import Subscription from "./Component/Page/Subscription";
import ReportsSubscciption from "./Component/Page/ReportsSubscciption";
import Reprotscustomerdata from "./Component/Page/Reprotscustomerdata";
import Reportscustomerusagedata from "./Component/Page/Reportscustomerusagedata";
import AddSubscription from "./Component/Page/AddSubscription";
import MainLayout from "./Component/SmallComponents/MainLayout";
import ProtectedRoute from "./Component/SmallComponents/ProtectedRoute";
import RedirectIfAuthenticated from "./Component/SmallComponents/RedirectIfAuthenticated";
import NotFound from "./Component/SmallComponents/NotFound";
import SendOTP from "./Component/Page/SendOTP";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <RedirectIfAuthenticated>
              <Login />
            </RedirectIfAuthenticated>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          } />
          <Route path="/users" element={<MainLayout>
            <Users />
          </MainLayout>
          } />
          <Route path="/sendOTP" element={<SendOTP />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/newusers" element={
            <ProtectedRoute>
              <MainLayout>
                <NewUsers />
              </MainLayout>
            </ProtectedRoute>
          } />
          <Route path="/subscription" element={
            <ProtectedRoute>
              <MainLayout>
                <Subscription />
              </MainLayout>
            </ProtectedRoute>
          } />
          <Route path="/addSubscription" element={
            <ProtectedRoute>
              <MainLayout>
                <AddSubscription />
              </MainLayout>
            </ProtectedRoute>
          } />
          <Route
            path="/Reportssubscciption"
            element={<MainLayout>
              <ReportsSubscciption />
            </MainLayout>
            }
          />
          <Route
            path="/Reportssubscciption"
            element={

              <MainLayout>
                <ReportsSubscciption />
              </MainLayout>
            }
          />
          <Route
            path="/reprotscustomerdata"
            element={
              <MainLayout>
                <Reprotscustomerdata />
              </MainLayout>
            }
          />
          <Route
            path="/reportscustomerusagedata"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Reportscustomerusagedata />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
