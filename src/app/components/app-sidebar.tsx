import * as React from "react"
import {
  PieChart,
  UserPen,
  FolderPen,
  Code,
  Globe2,

} from "lucide-react"

import { NavMain } from "@/app/components/nav-main"
import { NavProjects } from "@/app/components/nav-projects"
import { NavUser } from "@/app/components/nav-user"
import { AppSidebarHeader } from "@/app/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/app/components/ui/sidebar"
const data = {
  user: {
    name: "student",
    email: "student@university.edu",
    avatar: "/avatars/avatar.jpg",
  },
  navMain: [
    {
      title: "Profile",
      url: "#",
      icon: UserPen,
      isActive: true,
      items: [
        {
          title: "Home",
          url: "/",
        },
        {
          title: "Grades",
          url: "/grades",
        },
      ],
    },
    {
      title: "Skills",
      url: "#",
      icon: FolderPen,
      items: [
        {
          title: "Skill List",
          url: "/skills",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Java Backend",
      url: "#",
      icon: Code,
    },
    {
      name: "Data Analysis",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Web Developement",
      url: "#",
      icon: Globe2,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AppSidebarHeader/>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
