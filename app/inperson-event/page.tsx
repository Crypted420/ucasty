"use client";
import {
    ArrowUp,
    Chat,
    ChatGroup,
    Check,
    ChevronDown,
    ChevronLeft,
    Close,
    Polls,
    Smiley,
    Starred,
    User,
} from "@/components/icons";
import { title } from "@/components/primitives";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { Spacer } from "@nextui-org/spacer";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { faker } from "@faker-js/faker";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
} from "@nextui-org/dropdown";
import { useEffect, useState } from "react";
import Searcher from "./Searcher";
import ChatBox from "./ChatBox";


export default function InPersonEventPage() {
    const [showChat, isShowingChat] = useState(true);
    const moderatorBool = [true, false]
    const [postData, setPostData] = useState([
        {
            user: faker.person.fullName(),
            content: faker.lorem.paragraphs(),
            picture: faker.image.avatar(),
            reactionCount: Math.floor(Math.random() * 50),
            reactProfilesPics: Array.from(
                { length: Math.floor(Math.random() * 5) },
                () => faker.image.avatar()
            ),
            emoji: "😄",
            hasModoerator: false,
        },
    ]);
    const [focusedQ, setFocusedQ] = useState(-1);
    useEffect(() => {
        let generatePosts = Array.from({ length: 8 }, () => ({
            user: faker.person.fullName(),
            content: faker.lorem.paragraphs(),
            picture: faker.image.avatar(),
            reactionCount: Math.floor(Math.random() * 50),
            reactProfilesPics: Array.from(
                { length: Math.floor(Math.random() * 5) },
                () => faker.image.avatar()
            ),
            emoji: "😄",
            hasModoerator: moderatorBool[Math.floor(Math.random() * moderatorBool.length)]

        }));
        setPostData(generatePosts);
    }, []);

    return (
        <>
            <Searcher />

            {showChat && <ChatBox />}

            {/* Content */}
            <section className="flex md:max-w-[992px] mx-auto flex-col items-center relative justify-center gap-4 py-8 md:py-10">
                <Input
                    size="lg"
                    radius="full"
                    type="text"
                    placeholder="Ask a question"
                    startContent={
                        <Smiley
                            width={20}
                            height={20}
                            className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                        />
                    }
                    endContent={
                        <div className="flex items-center gap-5">
                            <p className="text-lg">✋</p>
                            <Button variant="faded" isIconOnly radius="lg">
                                <ArrowUp
                                    width={20}
                                    height={20}
                                    className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                                />
                            </Button>
                        </div>
                    }
                />
                <Spacer y={2} />

                <Divider orientation="horizontal" />

                <div className="w-full">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                variant="bordered"
                                endContent={
                                    <ChevronDown width={15} height={15} className="mx-10" />
                                }
                            >
                                <h3 className="text-md font-bold">Popular</h3>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
                            <DropdownItem
                                startContent={
                                    <Button size="sm" isIconOnly variant="flat" radius="sm">
                                        <Check width={10} height={10} />
                                    </Button>
                                }
                            >
                                <h3 className="font-normal">Popular</h3>
                            </DropdownItem>
                            <DropdownItem
                                startContent={
                                    <Button
                                        size="sm"
                                        isIconOnly
                                        variant="light"
                                        radius="sm"
                                    ></Button>
                                }
                            >
                                <h3 className="font-normal">Recent</h3>
                            </DropdownItem>
                            <DropdownItem>
                                <Divider />
                            </DropdownItem>
                            <DropdownItem
                                startContent={
                                    <Button size="sm" isIconOnly variant="flat" radius="sm">
                                        <Check width={10} height={10} />
                                    </Button>
                                }
                            >
                                <h3 className="font-normal">All Questions</h3>
                            </DropdownItem>

                            <DropdownItem
                                startContent={
                                    <Button size="sm" isIconOnly variant="flat" radius="sm">
                                        <Starred width={10} height={10} />
                                    </Button>
                                }
                            >
                                <h3 className="font-normal">Starred</h3>
                            </DropdownItem>

                            <DropdownItem
                                startContent={
                                    <Button size="sm" isIconOnly variant="flat" radius="sm">
                                        <Close width={10} height={10} />
                                    </Button>
                                }
                            >
                                <h3 className="font-normal">Not labeled</h3>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>

                <div className="flex flex-col gap-6 w-full">
                    {postData.map((post, index) => {
                        return (
                            <div
                                key={index}>
                                <Card
                                    fullWidth
                                    style={{ cursor: "pointer", paddingInline: "1.2rem" }}
                                >
                                    <CardBody onClick={() => setFocusedQ(index)}>
                                        <Spacer y={2} />
                                        <div className="flex justify-between w-full">
                                            {/* Profile info */}
                                            <div className="flex gap-4">
                                                <Avatar src={post.picture} size="lg" radius="md" />

                                                <p className="inline-block pt-2">{post.user}</p>
                                            </div>
                                            {/* Reactions */}
                                            <div className="flex items-center">
                                                <div className="flex items-center gap-5">

                                                    <AvatarGroup isBordered>
                                                        <Avatar
                                                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                                            size="sm"
                                                            radius="md"
                                                        />
                                                        <Avatar
                                                            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                                                            size="sm"
                                                            radius="md"
                                                        />
                                                        <Avatar
                                                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                                            size="sm"
                                                            radius="md"
                                                        />
                                                    </AvatarGroup>

                                                    <div className="w-full">
                                                        <Dropdown>
                                                            <DropdownTrigger>
                                                                <Button variant="bordered" isIconOnly>
                                                                    😍
                                                                </Button>
                                                            </DropdownTrigger>
                                                            <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
                                                                <DropdownItem>
                                                                    <div className="flex justify-center gap-2 items-center">
                                                                        <Button variant="ghost" isIconOnly>
                                                                            All
                                                                        </Button>
                                                                        <Button variant="ghost" isIconOnly>
                                                                            😍
                                                                        </Button><Button variant="ghost" isIconOnly>
                                                                            🥸
                                                                        </Button><Button variant="ghost" isIconOnly>
                                                                            😊
                                                                        </Button>
                                                                    </div>
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    <div className="flex justify-between gap-4 items-center">
                                                                        <div className="flex items-center gap-2">
                                                                            <Avatar
                                                                                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                                                                size="sm"
                                                                                radius="sm"
                                                                            />
                                                                            <p className="text-sm">{faker.person.fullName()}</p>
                                                                        </div>
                                                                        <Spacer x={10} />
                                                                        <p>😊</p>
                                                                    </div>
                                                                </DropdownItem>

                                                                <DropdownItem>
                                                                    <div className="flex justify-between gap-4 items-center">
                                                                        <div className="flex items-center gap-2">
                                                                            <Avatar
                                                                                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                                                                size="sm"
                                                                                radius="sm"
                                                                            />
                                                                            <p className="text-sm">{faker.person.fullName()}</p>
                                                                        </div>
                                                                        <p>🥳</p>
                                                                    </div>
                                                                </DropdownItem>

                                                                <DropdownItem>
                                                                    <div className="flex justify-between gap-4 items-center">
                                                                        <div className="flex items-center gap-2">
                                                                            <Avatar
                                                                                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                                                                size="sm"
                                                                                radius="sm"
                                                                            />
                                                                            <p className="text-sm">{faker.person.fullName()}</p>
                                                                        </div>
                                                                        <p>😒</p>
                                                                    </div>
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </Dropdown>
                                                    </div>

                                                </div>
                                                <Spacer x={20} />
                                                <Chip variant="bordered" size="lg" avatar={<p className="tracking-widest" style={{ letterSpacing: '2px' }}>😍😍🥸</p>}>
                                                    <h3 className="ml-4">
                                                        {post.reactionCount}
                                                    </h3>
                                                </Chip>
                                            </div>

                                        </div>
                                        <Spacer y={4} />
                                        <p className="font-md my-1">{post.content}</p>
                                        <Spacer y={4} />

                                        <div
                                            className="w-full flex items-center justify-around"
                                            style={{
                                                display: focusedQ == index ? 'flex' : 'none'
                                            }}
                                        >
                                            <Input
                                                size="lg"
                                                radius="full"
                                                type="text"
                                                placeholder="Type a answer"
                                                variant="flat"

                                                startContent={
                                                    <Smiley
                                                        width={20}
                                                        height={20}
                                                        className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                                                    />
                                                }
                                                endContent={
                                                    <Button variant="faded" isIconOnly radius="lg">
                                                        <ArrowUp
                                                            width={20}
                                                            height={20}
                                                            className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                                                        />
                                                    </Button>
                                                }
                                            />
                                        </div>
                                        <Spacer y={2} />
                                    </CardBody>
                                </Card>
                                <Spacer y={4} />

                                {/* Moderator card */}
                                {post.hasModoerator && <div className="w-[95%] float-right moderator-card">
                                    <Card
                                        fullWidth
                                        key={index}
                                        className="py-5"
                                        style={{ cursor: "pointer", paddingInline: "1.2rem", background: 'rgba(79, 69, 217, 0.3)' }}
                                    >
                                        <CardBody>
                                            <h1 className="font-bold mb-2">Moderator</h1>
                                            <p className="text-[0.75rem]">{faker.definitions.commerce.product_description}</p>
                                        </CardBody>
                                    </Card>
                                </div>}
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
