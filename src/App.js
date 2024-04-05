import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { HomePage } from "./pages/home";
import MoviePage from "./pages/moviePages/MoviePage";
import ContentAdm from "./pages/content_adm/ContentAdm";
import loginpage from "./pages/LoginPage/loginpage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <HomePage />
        </Layout>
      ),
    },
    {
      path: "/movie/:movieId",
      element: (
        <Layout>
          <MoviePage />
        </Layout>
      ),
    },
    {
      path: "*",
      element: (
        <Layout>
          {/* <ErrorPage /> */}
          <div className="error">
            <img src="../images/error.gif" />
            <h1 style={{ color: "white" }}>Ops, página não encontrada!</h1>
          </div>
        </Layout>
      ),
    },
    {
      path: "/pages/Gerenciar",
      element: (
        <Layout>
          <ContentAdm />
        </Layout>
      ),
    },
    {
      path: "/pages/Login",
      element: (
        <Layout>
          <loginpage />
        </Layout>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default App;
