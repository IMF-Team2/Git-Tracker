import {
  Calendar,
  Home,
  Inbox,
  Search,
  User,
  Settings,
  PowerCircleIcon,
  PowerCircle,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

const header = [
  {
    title: "Abdulaziz",
    url: "#",
    icon: User,
  },
];

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const footer = [
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Support",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Logout",
    url: "#",
    icon: PowerCircle,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <div className="mt-3">
        {header.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="py-5 px-4" asChild>
                  <a className="flex items-center gap-4" href={item.url}>
                    <Image
                      src="/profile.png"
                      alt="Git Tracker Logo"
                      className="w-9 h-9 rounded-full"
                      width={10}
                      height={10}
                    />
                    <item.icon className="hidden" />

                    <p className="flex flex-col">
                      <span className="text-xs font-light">Welcome back</span>
                      <span className="text-xl font-medium">{item.title}</span>
                    </p>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4"></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className=" px-4" asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mb-10 ">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {footer.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="px-4" asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
