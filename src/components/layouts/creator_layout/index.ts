import { AiOutlineHome } from "react-icons/ai";
import { FiVideo } from "react-icons/fi";
import { GoWorkflow } from "react-icons/go";
import { HiOutlineDocumentText } from "react-icons/hi";
import { TbMessage2, TbReportSearch } from "react-icons/tb";
import { SidebarItemType } from "../types";

export const creatorSidebarKeys = [
  "dashboard",
  "courses",
  "videos",
  "quizzes",
  "scenarios",
  "feedback",
] as const;

export type CreatorSidebarKey = (typeof creatorSidebarKeys)[number];

export type CreatorSidebarConfigItem = Omit<SidebarItemType, "label"> & {
  labelKey: CreatorSidebarKey;
};

export const creatorSidebarConfig: ReadonlyArray<CreatorSidebarConfigItem> = [
  {
    icon: AiOutlineHome,
    labelKey: "dashboard",
    href: "/creator",
  },
  {
    icon: HiOutlineDocumentText,
    labelKey: "courses",
    href: "/creator/courses",
  },
  {
    icon: FiVideo,
    labelKey: "videos",
    href: "/creator/videos",
  },
  {
    icon: TbReportSearch,
    labelKey: "quizzes",
    href: "/creator/quizzes",
  },
  {
    icon: GoWorkflow,
    labelKey: "scenarios",
    href: "/creator/scenarios",
  },
  {
    icon: TbMessage2,
    labelKey: "feedback",
    href: "/creator/feedback",
  },
];
