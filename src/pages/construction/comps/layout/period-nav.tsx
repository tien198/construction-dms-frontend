import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router";
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

export function Period_Nav({ isScroll = true }: { isScroll?: boolean }) {
  const params = useParams();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isScroll) return;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 30) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div
      className={`fixed left-0 right-0 top-6 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-24"
      }`}
    >
      <NavLink
        to="/"
        className={(state) =>
          (state.isActive ? "bg-primary text-white" : "bg-white text-primary") +
          " absolute left-6 rounded-md py-1 px-4 outline-2 outline-primary"
        }
      >
        Trang chủ
      </NavLink>

      {conId && (
        <NavigationMenu className="absolute left-1/2 flex -translate-x-1/2">
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
  const location = useLocation();
  const isActive = location.pathname.includes(href);
  return (
    <NavigationMenuItem>
      {/* <NavigationMenuLink asChild> */}
      <NavLink
        to={href}
        className={
          (isActive ? "bg-primary text-white" : "bg-white text-primary") +
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
