"use client";
import { Alarm, ArrowTopRight, BellTilt, Dot, LoveComment, Plus, Telegram } from "@/components/icons";
import { eventNavItems } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/divider";

export default function InPerson() {
	return (
		<section className="flex md:max-w-[992px] mx-auto flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className=" w-full flex justify-between items-center">
				<h3 className="font-normal text-lg ">Event Settings</h3>
				<Button
					radius="md"
					className="text-sm font-bold p-4 py-3"
					variant="flat"

					endContent={<ArrowTopRight />}
				>
					Event page
				</Button>
			</div>

			<div className="w-full relative mx-auto text-center mt-8 overflow-x-scroll tabs-container"  >
				<Tabs variant='light' aria-label="Tabs variants" size="md">
					{eventNavItems.map((e, index) => (
						<Tab key={index} title={e} className="capitalize" />
					))}
				</Tabs>
			</div>

			<div className="w-full flex flex-col md:flex-row justify-between items-center mt-4">
				<div>
					<h3 className="text-lg font-bold text-center md:text-left">Schedule Email</h3>
					<p className="text-[0.76rem]">Lorem Ipsum is placeholder text co</p>
				</div>
				<div className="flex gap-4 mt-4 md:mt-0">
					<Button
						radius="md"
						className="text-sm font-normal p-4 py-3"
						variant="flat"
						startContent={<BellTilt />}
					>
						Add Reminder
					</Button>
					<Button
						radius="md"
						className="text-sm font-normal p-4 py-3"
						variant="flat"
						startContent={<LoveComment />}
					>
						Add Feedback Mail
					</Button>
				</div>
			</div>

			<div className="w-full flex flex-col gap-4">
				<Card fullWidth={true} >
					<CardBody className="flex justify-start">
						<div className="flex gap-4">
							<Button
								isIconOnly
								fullWidth={false}
								radius="md"
								variant="flat"
								startContent={<Alarm />}
							>
							</Button>
							<div className="inline-block">
								<h3 className="text-md md:text-lg"> ⏰ Qui nisi proident tempor commodo culpa aute enim sint do quis.</h3>
								<div className="flex items-center gap-2 mt-4  text-sm ">
									<p className="text-gray-400">Sent To:</p>
									<Chip color="success" variant="flat" radius="sm">Going</Chip>
									<Dot />

									<p className="text-gray-400">Status</p>
									<Chip variant="flat" radius="sm" className="">Not sent</Chip>
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>

			<div className="w-full flex flex-col gap-4">
				<Card fullWidth={true}>
					<CardBody className="flex justify-start">
						<div className="flex gap-4">
							<Button
								isIconOnly
								fullWidth={false}
								radius="md"
								variant="flat"
								startContent={<Alarm />}
							>
							</Button>
							<div className="inline-block">
								<h3 className="text-md md:text-lg">⏰ Qui nisi proident tempor commodo culpa aute enim sint do quis.</h3>
								<div className="flex items-center gap-2 mt-4  text-sm">
									<p className="text-gray-400">Sent To:</p>
									<Chip color="success" variant="flat" radius="sm">Going</Chip>
									<Dot />
									<p className="text-gray-400">Status</p>
									<Chip variant="flat" radius="sm" className="">Not sent</Chip>
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
			<Divider orientation="horizontal" className="mt-6" />

			<div className="w-full flex justify-between items-center mt-4">
				<div>
					<h3 className="text-lg font-bold">Post</h3>
					<p className="text-[0.76rem]">Lorem Ipsum is placeholder text co</p>
				</div>
				<Button
					radius="md"
					className="text-sm font-normal p-4 py-3"
					variant="flat"
					endContent={<Plus />}
				>
					Add Post
				</Button>

			</div>

			<div className="flex flex-col gap-2 items-center mt-9">
				<Telegram />
				<h4 className="text-lg">No post yet!</h4>
				<p className="text-sm text-gray-400">Officia esse adipisicing quis cupidatat fugiat.</p>
				<Button
					radius="md"
					className="text-sm font-normal p-4 py-3 mt-6"
					variant="flat"
					endContent={<Plus />}
				>
					Add Post
				</Button>
			</div>
		</section>
	);
}
