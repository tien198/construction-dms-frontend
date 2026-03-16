import { Outlet } from "react-router";
import { Global_Nav } from "./global-nav";

export default function Global_Layout() {
  return (
    <div className="flex flex-col lg:py-10 min-h-screen bg-wood-grain">
      <Global_Nav />
      <Outlet />
    </div>
  );
}
