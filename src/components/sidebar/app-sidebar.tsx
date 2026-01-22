import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { navLinks } from "../../config";

export default function AppSidebar(
	props: React.ComponentProps<typeof Sidebar>,
) {
	return (
		<Sidebar {...props}>
			<SidebarContent>
				<SidebarGroup>
					<SidebarHeader className="font-bold text-2xl">Applyr</SidebarHeader>
					<SidebarGroupLabel>Navigation</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{navLinks.map((item) => (
								<SidebarMenuItem key={item.label}>
									<SidebarMenuButton asChild>
										<a href={item.href}>{item.label}</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
