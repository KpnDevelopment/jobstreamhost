import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Jobs",
    path: "/jobs",
    icon: <AiIcons.AiFillBuild />,
    cName: "nav-text",
  },
  // {
  //   title: "AppliedJob",
  //   path: "/appliedjob",
  //   icon: <AiIcons.AiFillBuild />,
  //   cName: "nav-text",
  // },
  // {
  //   title:'Add Jobs',
  //   path: '/jobs-add',
  //   icon: <AiIcons.AiFillBuild/>,
  //   cName:'nav-text'
  // },
  // {
  //   title: "Users",
  //   path: "/users",
  //   icon: <IoIcons.IoMdPeople />,
  //   cName: "nav-text",
  // },
  // {
  //   title: "Add User",
  //   path: "/users-add",
  //   icon: <IoIcons.IoIosAddCircle />,
  //   cName: "nav-text",
  // },
  {
    title: "Category",
    path: "/category",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Course",
    path: "/course",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Qualification",
    path: "/qualification",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Payment",
    path: "/payment",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
];
