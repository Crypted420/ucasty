'use client';
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Badge } from "@nextui-org/badge";
import { Divider } from "@nextui-org/divider";
import {
	ThreeDots,
	Bell,
	ChevronLeft,
} from "@/components/icons";
import { usePathname, useRouter } from "next/navigation";
import { InPersonNavbar } from "./inpersonnavbar";


export const Navbar = () => {

	const pathname = usePathname();


	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent
				className="relative basis-1/5 sm:basis-full  mt-4 "
			>
				{pathname.match('/inperson-event') || pathname.match('/polls') ? <InPersonNavbar /> : <div className="w-full md:max-w-[992px]  flex justify-between mx-auto">
					<div className="w-fit">
						<NavbarItem className="flex items-center md:flex">
							<Button isIconOnly
								className="text-sm font-normal text-default-600 bg-default-100 p-2"
								variant="flat"
							>
								<ChevronLeft />
							</Button>
							<p className="font-bold mx-2 md:mx-4">Event name</p>
						</NavbarItem>
					</div>

					<div className="w-fit flex gap-3">
						<NavbarItem className="flex items-center md:flex">
							<Button isIconOnly
								className="text-sm font-normal text-default-600 bg-default-100 p-2"
								variant="flat"
							>
								<ThreeDots />
							</Button>
						</NavbarItem>
						<Divider orientation="vertical" />
						<NavbarItem className="flex items-center md:flex">
							<Button isIconOnly
								className="text-sm font-normal text-default-600 bg-default-100 p-2"
								variant="flat"
							>
								<Bell />
							</Button>
						</NavbarItem><NavbarItem className="flex items-center md:flex">
							<Badge content="" className="bg-[#FFB72C]">
								<Button isIconOnly
									className="text-sm font-bold p-2"
									variant="solid"
									color="primary"
								>
									<h2>H</h2>
								</Button>
							</Badge>
						</NavbarItem>
					</div>
				</div>}
			</NavbarContent>

		</NextUINavbar >
	);
};
