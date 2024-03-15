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
} from "@/components/icons";
import { Card, CardBody } from "@nextui-org/card";
import { subtitle, title } from "./primitives";
import { Chip } from "@nextui-org/chip";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem
} from "@nextui-org/dropdown";
import { Spacer } from "@nextui-org/spacer";

export const InPersonNavbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="relative basis-1/5 sm:basis-full  mt-4 ">
        <div className="w-full md:max-w-[992px]  flex  items-center justify-between mx-auto">
          <div className="w-fit">
            <NavbarItem className="flex items-center md:flex">
              <p className="font-bold mx-2 md:mx-4">Event name</p>
            </NavbarItem>
          </div>
          <div className="w-fit flex gap-4 items-center">
            <NavbarItem>
              <Card radius="none" shadow="lg">
                <CardBody>
                  <div className="flex items-center gap-4">
                    <Button isIconOnly color="success">
                      <ChatGroup size={40} />
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
                <Button size="lg" isIconOnly variant="ghost" radius="lg">
                  <Polls />
                </Button>
                <h2 className="font-semibold">Polls</h2>
              </div>
            </NavbarItem>

            <NavbarItem className="flex items-center md:flex">
              <div className="flex items-center gap-2 ">
                <Button size="lg" isIconOnly variant="ghost">
                  <Chat />
                </Button>
                <h2 className="font-semibold">Chat</h2>
              </div>
            </NavbarItem>
            <Spacer x={2} />
            <NavbarItem className="flex items-center md:flex">
              <div className="flex items-center gap-2 ">
                <Button size="lg" isIconOnly variant="ghost" radius="lg">
                  <TIcon />
                </Button>
              </div>
            </NavbarItem>

            <Divider orientation="vertical" />

            <NavbarItem className="flex items-center md:flex">
              <div className="flex items-center gap-2 ">
                <Button size="lg" isIconOnly variant="ghost" radius="lg">
                  <ThreeDots />
                </Button>

                <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
        <DropdownItem
          key="new"
          shortcut="⌘N"
          startContent={<AddNoteIcon className={iconClasses} />}
        >
          New file
        </DropdownItem>
        <DropdownItem
          key="copy"
          shortcut="⌘C"
          startContent={<CopyDocumentIcon className={iconClasses} />}
        >
          Copy link
        </DropdownItem>
        <DropdownItem
          key="edit"
          shortcut="⌘⇧E"
          startContent={<EditDocumentIcon className={iconClasses} />}
        >
          Edit file
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          shortcut="⌘⇧D"
          startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
        >
          Delete file
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
