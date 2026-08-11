"use client"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from "@/components/sidebar"
import { LifeBuoyIcon, SendIcon, Building2, TerminalIcon, CircleDollarSign, UsersRound, ChartColumn, PackageSearch, NotepadText, Truck, HandCoins, ArchiveRestore } from "lucide-react"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Clients",
      url: "#",
      icon: (
        <UsersRound
        />
      ),
    },
    {
      title: "Finance",
      url: "#",
      icon: (
        <CircleDollarSign
        />
      ),
    },
    {
      title: "Orders",
      url: "#",
      icon: (
        <NotepadText
        />
      ),
    },
    {
      title: "Products",
      url: "#",
      icon: (
        <PackageSearch
        />
      ),
    },
    {
      title: "Statistics",
      url: "#",
      icon: (
        <ChartColumn
        />
      ),
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: (
        <LifeBuoyIcon
        />
      ),
    },
    {
      title: "Feedback",
      url: "#",
      icon: (
        <SendIcon
        />
      ),
    },
  ],
  projects: [
    {
      title: "Profile",
      url: "#",
      icon: (
        <Building2
        />
      ),
    },
    {
      title: "Payment Methods",
      url: "#",
      icon: (
        <HandCoins
        />
      ),
    },
    {
      title: "Shipping",
      url: "#",
      icon: (
        <Truck
        />
      ),
    },
    {
      title: "Backup",
      url: "#",
      icon: (
        <ArchiveRestore
        />
      ),
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="#" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <TerminalIcon className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">My Bussiness App</span>
                <span className="truncate text-xs">Crazy Popcorns</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavMain items={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
