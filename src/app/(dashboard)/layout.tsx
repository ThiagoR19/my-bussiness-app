import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
      {children}
    </main>
  )
}


