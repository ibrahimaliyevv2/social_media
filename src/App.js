import Home from "./pages/Home";
import "./css/App.css";
import Notifications from "./pages/Notifications";
import NotFound from "./pages/NotFound";
import { HashRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import AuthProvider from "./providers/AuthProvider";
import NoAuthProvider from "./providers/NoAuthProvider";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Weather from "./pages/Weather";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Friends from "./pages/Friends";

function App() {
  return (
    <div className="app">
      <HashRouter basename='/social_media'>
        <Route exact
          path="/"
          element={
            <AuthProvider>
              <Home />
            </AuthProvider>
          }
        />
        <Route
          path="/notifications"
          element={
            <AuthProvider>
              <Notifications />
            </AuthProvider>
          }
        />
        <Route
          path="/friends"
          element={
            <AuthProvider>
              <Friends />
            </AuthProvider>
          }
        />
        <Route
          path="/weather"
          element={
            <AuthProvider>
              <Weather />
            </AuthProvider>
          }
        />
        <Route
          path="/messages"
          element={
            <AuthProvider>
              <Messages />
            </AuthProvider>
          }
        />
        <Route
          path="/my-profile"
          element={
            <AuthProvider>
              <Profile />
            </AuthProvider>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/login"
          element={
            <NoAuthProvider>
              <Login />
            </NoAuthProvider>
          }
        />
        <Route
          path="/register"
          element={
            <NoAuthProvider>
              <Register />
            </NoAuthProvider>
          }
        />
        <Route
          path="/forgot"
          element={
            <NoAuthProvider>
              <Forgot />
            </NoAuthProvider>
          }
        />
      </HashRouter>
    </div>
  );
}

export default App;
