import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import LoggedInUserRoute from "./privateRouter/LoggedInUserRoute";
import NotLoggedInUserRoute from "./privateRouter/NotLoggedInUserRoute";
import Messages from "./pages/Messages";
import RootLayout from "./components/RootLayout";
import "cropperjs/dist/cropper.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<LoggedInUserRoute />}>
        <Route element={<RootLayout/>}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/message" element={<Messages />}></Route>
        </Route>
      </Route>
      <Route element={<NotLoggedInUserRoute />}>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
