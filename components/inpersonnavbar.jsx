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
  Telegram,
  ChatGroup,
  Polls,
  Chat,
  TIcon,
  User,
  Dashboard,
  Present,
  Copy,
} from "@/components/icons";
import { Card, CardBody } from "@nextui-org/card";
import { subtitle, title } from "./primitives";
import { Chip } from "@nextui-org/chip";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Spacer } from "@nextui-org/spacer";
import { usePathname, useRouter } from "next/navigation";

export const InPersonNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="p-unit-10`">
      <NavbarContent className="relative basis-1/5 sm:basis-full  mt-4 ">
        <div className="w-full md:max-w-[992px]  flex  items-center justify-between mx-auto">
          <div className="w-fit">
            <NavbarItem className="flex items-center md:flex">
              <p className="font-bold mx-2 md:mx-4">Event name</p>
            </NavbarItem>
          </div>
          <div className="w-fit flex gap-4 items-center">
            <NavbarItem>
              <Card radius={90} shadow="lg">
                <CardBody>
                  <div className="flex items-center gap-4">
                    <Button
                      onClick={() => router.push("/inperson-event")}
                      isIconOnly
                      color={
                        pathname.match("/inperson-event")
                          ? "success"
                          : "default"
                      }
                    >
                      <ChatGroup width={20} height={20} />
                    </Button>
                    <h2 className="">Questions</h2>
                    <Chip style={{ borderBottomLeftRadius: 20 }}>
                      <h2 className="font-semibold">128</h2>
                    </Chip>
                  </div>
                </CardBody>
              </Card>
            </NavbarItem>

            <NavbarItem className="flex items-center md:flex">
              <div className="flex items-center gap-4 ">
                {" "}
                <Button
                  onClick={() => router.push("/polls")}
                  size="lg"
                  isIconOnly
                  variant={pathname.match("/polls") ? "solid" : "ghost"}
                  radius="lg"
                  color={pathname.match("/polls") ? "success" : "default"}
                >
                  <Polls width={20} height={20} />
                </Button>
                <h2 className="font-semibold">Polls</h2>
              </div>
            </NavbarItem>

            <NavbarItem className="flex items-center md:flex">
              <div className="flex items-center gap-2 ">
                <Button size="lg" isIconOnly variant="ghost">
                  <Chat width={20} height={20} />
                </Button>
                <h2 className="font-semibold">Chat</h2>
              </div>
            </NavbarItem>
            <Spacer x={2} />
            <NavbarItem className="flex items-center md:flex">
              <div className="flex items-center gap-2 ">
                <Button size="lg" isIconOnly variant="ghost" radius="lg">
                  <TIcon width={20} height={20} />
                </Button>
              </div>
            </NavbarItem>
            <NavbarItem>
              <div className="w-fit h-8 ">
                <Divider orientation="vertical" />
              </div>
            </NavbarItem>

            <NavbarItem className="flex items-center md:flex">
              <div className="flex items-center gap-2 ">
                <Dropdown>
                  <DropdownTrigger>
                    <Button size="lg" isIconOnly variant="ghost" radius="lg">
                      <ThreeDots />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    variant="faded"
                    aria-label="Dropdown menu with icons"
                  >
                    <DropdownItem
                      startContent={
                        <Button
                          size="lg"
                          isIconOnly
                          variant="faded"
                          radius="lg"
                        >
                          <User width={20} height={20} />
                        </Button>
                      }
                    >
                      <h3 className="font-bold">Login</h3>
                    </DropdownItem>
                    <DropdownItem
                      startContent={
                        <Button
                          size="lg"
                          isIconOnly
                          variant="faded"
                          radius="lg"
                        >
                          <Dashboard width={20} height={20} />
                        </Button>
                      }
                    >
                      <h3 className="font-bold">Admin Dashboard</h3>
                    </DropdownItem>{" "}
                    <DropdownItem
                      startContent={
                        <Button
                          size="lg"
                          isIconOnly
                          variant="faded"
                          radius="lg"
                        >
                          <Present width={20} height={20} />
                        </Button>
                      }
                    >
                      <h3 className="font-bold">Present Mode</h3>
                    </DropdownItem>
                    <DropdownItem
                      startContent={
                        <Button
                          size="lg"
                          isIconOnly
                          variant="faded"
                          radius="lg"
                        >
                          <Copy width={20} height={20} />
                        </Button>
                      }
                    >
                      <h3 className="font-bold">Copy evenet link</h3>
                    </DropdownItem>
                    <DropdownItem
                      startContent={
                        <Button
                          size="lg"
                          isIconOnly
                          variant="faded"
                          radius="lg"
                        >
                          <ThreeDots />
                        </Button>
                      }
                    >
                      <h3 className="font-bold">Live Transcript</h3>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </NavbarItem>
          </div>
        </div>
      </NavbarContent>
    </NextUINavbar>
  );
};
