import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Map from "./components/map/Map";
import Dashboard from "./components/dashboard/Dashboard";
import WorkersTable from "./components/worker list/worker_list";
import WorkplacesTable from "./components/workplace list/workplace_list";
import About from "./components/about/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/map",
    element: <Map />,
  },
  {
    path: "/services/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/services/workerlist",
    element: <WorkersTable />,
  },
  {
    path: "/services/workplacelist",
    element: <WorkplacesTable />,
  },
  {
    path: "/services/about",
    element: <About />,
  },
]);

function App() {
  // const imie = "world";

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
