import { Outlet } from "react-router-dom";

import { SidebarProvider } from "./components/ui/sidebar";
import { DashboardLayout } from "./layout/dashboard-layout/DashboardLayout";
import Navbar from "./layout/dashboard-layout/navbar/Navbar";

function App() {
  return (
    <div>
      <SidebarProvider>
        <DashboardLayout />
        <main className=" w-full min-h-screen ">
          <Navbar />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
}

export default App;
