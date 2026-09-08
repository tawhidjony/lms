import { AiOutlineHome } from "react-icons/ai";
import { FiBox } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { TbBuilding } from "react-icons/tb";
import { SidebarItemType } from "../types";

export const adminSidebarKeys = [
  "dashboard",
  "catalog",
  "assignments",
  "departments",
] as const;

export type AdminSidebarKey = (typeof adminSidebarKeys)[number];

export type AdminSidebarConfigItem = Omit<SidebarItemType, "label"> & {
  labelKey: AdminSidebarKey;
};

export const adminSidebarConfig: ReadonlyArray<AdminSidebarConfigItem> = [
  {
    icon: AiOutlineHome,
    labelKey: "dashboard",
    href: "/admin",
  },
  {
    icon: FiBox,
    labelKey: "catalog",
    href: "/admin/catalog",
  },
  {
    icon: HiOutlineDocumentText,
    labelKey: "assignments",
    href: "/admin/assignments",
  },
  {
    icon: TbBuilding,
    labelKey: "departments",
    href: "/admin/departments",
  },
];
