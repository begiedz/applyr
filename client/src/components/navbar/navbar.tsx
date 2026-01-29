import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export default function Navbar({
	className,
	...props
}: React.ComponentProps<"header">) {
	return (
		<header
			{...props}
			className={cn(
				"flex h-16 items-center justify-between border-b px-4",
				className,
			)}
		>
			<Link href="/" className="font-bold text-xl">
				Applyr
			</Link>

			<div className="flex items-center gap-2">
				<SidebarTrigger className="md:hidden" />
			</div>
		</header>
	);
}
