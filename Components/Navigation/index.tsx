import { navigationsData } from "@/Constants/Navigations";
import Link from "next/link";

export default function NavigationBar() {
	return (
		<div className="p-4 shadow-lg flex justify-between gap-3">
			<Link target="_blank" href={"https://linkedin.com/in/choudhary-lokesh"}>
				Lokesh-dc
			</Link>
			<div className="flex gap-4">
				{navigationsData?.map((navItem, navId) => (
					<Link className="underline" href={navItem?.href}>
						{navItem?.label}
					</Link>
				))}
			</div>
		</div>
	);
}
