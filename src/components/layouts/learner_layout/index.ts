import { AiOutlineHome } from "react-icons/ai";
import { GoBook } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { SidebarItemType } from "../types";

export const learnerSidebarKeys = [
  "dashboard",
  "myCourses",
  "notifications",
] as const;

export type LearnerSidebarKey = (typeof learnerSidebarKeys)[number];

export type LearnerSidebarConfigItem = Omit<SidebarItemType, "label"> & {
  labelKey: LearnerSidebarKey;
};

export const learnerSidebar: ReadonlyArray<LearnerSidebarConfigItem> = [
  {
    icon: AiOutlineHome,
    labelKey: "dashboard",
    href: "/learner/dashboard",
  },
  {
    icon: GoBook,
    labelKey: "myCourses",
    href: "/learner/my-courses",
  },
  {
    icon: IoNotificationsOutline,
    labelKey: "notifications",
    href: "/learner/notifications",
  },
];
