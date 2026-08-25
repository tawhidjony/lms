import { SidebarItemType } from "@/components/layouts/types";
import { usePathname } from "next/navigation";

export default function Breadcrumb({
  breadcrumb,
}: {
  breadcrumb: ReadonlyArray<SidebarItemType>;
}) {
  const pathname = usePathname();
  const breadcrumbItems = breadcrumb.filter(
    (item) => (item.href ?? "") === pathname,
  )[0]["label"];
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol>
        <li className="text-base font-semibold text-slate-800">
          {breadcrumbItems}
        </li>
      </ol>
    </nav>
  );
}
