import { NavLink, useParams } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  //   NavigationMenuLink,
  //   navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type Link = {
  href: string;
  title: string;
};

export function Period_Nav() {
  const params = useParams();
  const conId = params["con-id"];
  const links: Link[] = [
    {
      href: `/cong-trinh/kh-lcnt/${conId}`,
      title: "Kê hoạch LCNT",
    },
    {
      href: `/cong-trinh/kq-kh-lcnt/${conId}`,
      title: "Kết quả LCNT",
    },
    {
      href: `/cong-trinh/bcktkt/${conId}`,
      title: "Báo cáo kinh tế kỹ thuật",
    },
  ];
  return (
    <div>
      <NavLink
        to="/"
        className={(state) =>
          (state.isActive ? "bg-primary text-white" : "bg-white text-primary") +
          " rounded-md py-1 px-4 outline-2 outline-primary fixed top-6 left-6"
        }
      >
        Trang chủ
      </NavLink>

      {conId && (
        <NavigationMenu className="fixed top-6 -translate-x-1/2 left-1/2 flex">
          <NavigationMenuList className="flex gap-5">
            {links.map((link, id) => (
              <Item key={id} href={link.href} title={link.title} />
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      )}
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
