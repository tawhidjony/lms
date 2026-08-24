import { AiOutlineHome } from "react-icons/ai";
import { GoBook } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import type { SidebarItemType } from "../types";
import type { LearnerLayoutLangKey } from "./index.lang";

export type LearnerSidebarItem = Omit<SidebarItemType, "label"> & {
  labelKey: LearnerLayoutLangKey;
};

export const learnerSidebar: ReadonlyArray<LearnerSidebarItem> = [
  { icon: AiOutlineHome, labelKey: "dashboard", href: "/learner" },
  { icon: GoBook, labelKey: "myCourses", href: "/learner/my-courses" },
  {
    icon: IoNotificationsOutline,
    labelKey: "notifications",
    href: "/learner/notifications",
  },
];
