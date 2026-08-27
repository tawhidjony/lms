import { AiOutlineHome } from "react-icons/ai";
import { FiBox } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { TbBuilding } from "react-icons/tb";
import { SidebarItemType } from "../types";

export const operatorSidebarKeys = [
  "dashboard",
  "tenants",
  "packages",
  "contracts",
] as const;

export type OperatorSidebarKey = (typeof operatorSidebarKeys)[number];

export type OperatorSidebarConfigItem = Omit<SidebarItemType, "label"> & {
  labelKey: OperatorSidebarKey;
};

export const operatorSidebarConfig: ReadonlyArray<OperatorSidebarConfigItem> = [
  {
    icon: AiOutlineHome,
    labelKey: "dashboard",
    href: "/operator/dashboard",
  },
  {
    icon: TbBuilding,
    labelKey: "tenants",
    href: "/operator/tenants",
  },
  {
    icon: FiBox,
    labelKey: "packages",
    href: "/operator/packages",
  },
  {
    icon: HiOutlineDocumentText,
    labelKey: "contracts",
    href: "/operator/contracts",
  },
];
