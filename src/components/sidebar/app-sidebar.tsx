import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
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
import { navLinks } from "../../config";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

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

				<SidebarGroup className="mt-auto">
					<SidebarGroupContent>
						<ModeToggle className=" mx-2" />
						<SidebarGroupLabel>Account</SidebarGroupLabel>
						<div className="flex justify-between items-center px-2">
							Not logged in
							<Button asChild>
								<Link href="/login">Log in</Link>
							</Button>
						</div>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter className="text-xs opacity-60 px-4">
				<Separator />
				<div className="flex flex-row gap-4 mt-2">
					<svg
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 108.92 108"
						fill="currentColor"
						width="20"
						height="20"
					>
						<g id="Base">
							<g>
								<polygon points="0 108 37.23 0 60.29 0 23.06 108 0 108"></polygon>
								<polygon points="52.31 80.66 79.22 71.64 57.85 64.6 64.8 44.45 108.92 62.39 108.92 81.07 42.89 108 52.31 80.66"></polygon>
							</g>
						</g>
					</svg>
					<p className="font-mono">
						<span className="font-bold text-base">begiedz</span>
						<span className="text-sm">.dev</span>
					</p>
				</div>
				<p>Copyright © 2026. All rights reserved.</p>
				<p>
					Made by{" "}
					<a
						href="https://begiedz.dev"
						target="_blank"
						rel="noopener"
						className="link link-ui font-bold"
					>
						Dariusz Begiedza
					</a>
				</p>
			</SidebarFooter>
		</Sidebar>
	);
}
