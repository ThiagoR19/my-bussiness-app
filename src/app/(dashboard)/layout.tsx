import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger className="-ml-1" />
      </SidebarProvider>
      {children}
    </main>
  )
}


