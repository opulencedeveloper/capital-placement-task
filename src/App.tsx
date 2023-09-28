import { Route, Routes, useLocation } from "react-router-dom";

import TaskOne from "./pages/TaskOne";
import TaskTwo from "./pages/TaskTwo";
import Layout from "./components/task-two/layout/Layout";

function App() {
  const location = useLocation();
  const path = location.pathname;

  if (path === "/task-two") {
    return (
      <Layout>
        <Routes>
          <Route path="/task-two" element={<TaskTwo />} />
        </Routes>
      </Layout>
    );
  }

  return (
    <Routes>
      <Route index element={<TaskOne />} />
    </Routes>

  );
}


export default App;