import { Outlet } from "react-router";

export function Global_Layout() {
  return (
    <div className="flex flex-col lg:py-10 min-h-screen bg-wood-grain">
      <Outlet />
    </div>
  );
}
