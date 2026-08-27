import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarItemType } from "./types";

export default function AsideBarItem({
  menuItems,
}: {
  menuItems: ReadonlyArray<SidebarItemType>;
}) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  console.log(menuItems);
  return (
    <nav className="flex-1 overflow-y-auto p-3 space-y-1">
      {menuItems.length > 0 &&
        menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition text-slate-300 hover:bg-slate-800 hover:text-white",
              isActive(item.href) && "bg-slate-800 text-white",
            )}
          >
            <item.icon size={20} className="shrink-0 w-5 h-5" />
            <span className="text-sm">{item.label}</span>
          </Link>
        ))}
    </nav>
  );
}
