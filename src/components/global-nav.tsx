import { NavLink } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  //   NavigationMenuLink,
  //   navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

type Link = {
  href: string;
  title: string;
};

export function Global_Nav() {
  const links: Link[] = [
    {
      href: "/",
      title: "Trang chủ",
    },
    {
      href: "/a",
      title: "Trang chủ",
    },
    {
      href: "/b",
      title: "Trang chủ",
    },
  ];
  return (
    <div className="fixed top-2 -translate-x-1/2 left-1/2 flex justify-center">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-5">
          {links.map((link, id) => (
            <Item key={id} href={link.href} title={link.title} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function Item({ href, title }: Link) {
  return (
    <NavigationMenuItem>
      {/* <NavigationMenuLink asChild> */}
      <NavLink
        to={href}
        className={(state) =>
          (state.isActive ? "bg-primary text-white" : "bg-white text-primary") +
          " rounded-md py-1 px-4 outline-2 outline-primary"
        }
        end
      >
        {title}
      </NavLink>
      {/* </NavigationMenuLink> */}
    </NavigationMenuItem>
  );
}
