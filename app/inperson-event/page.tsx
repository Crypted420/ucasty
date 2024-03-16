'use client';
import { ArrowUp, Chat, ChatGroup, Check, ChevronDown, ChevronLeft, Close, Polls, Smiley, Starred, User } from "@/components/icons";
import { title } from "@/components/primitives";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { Spacer } from "@nextui-org/spacer";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { faker } from '@faker-js/faker'
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
} from "@nextui-org/dropdown";
import { useEffect, useState } from "react";

interface Post {
    user: string,
    content: string,
    picture: string,
    reactionCount: number,
    reactProfilesPics: [],
    emoji: string,
}


export default function InPersonEventPage() {
    const [showChat, isShowingChat] = useState(false);
    const [postData, setPostData] = useState([{
        user: faker.person.fullName(),
        content: faker.lorem.paragraphs(),
        picture: faker.image.avatar(),
        reactionCount: Math.floor(Math.random() * 50),
        reactProfilesPics: Array.from({ length: Math.floor(Math.random() * 5) }, () => (faker.image.avatar())),
        emoji: '😄',
    }]);

    useEffect(() => {
        let generatePosts = Array.from({ length: 8 }, () => ({
            user: faker.person.fullName(),
            content: faker.lorem.paragraphs(),
            picture: faker.image.avatar(),
            reactionCount: Math.floor(Math.random() * 50),
            reactProfilesPics: Array.from({ length: Math.floor(Math.random() * 5) }, () => (faker.image.avatar())),
            emoji: '😄',
        }));
        setPostData(generatePosts);
    }, [])
    return (
        <>
            {/* Chat */}
            {showChat && <aside className="fixed right-0  z-90 w-[400px] bg-[#000] h-[70vh] rounded-3xl z-50" style={{ transform: 'translate(-20px, 20px)', border: '1px solid #272729' }}>
                <div className="w-full h-full relative">
                    {/* Header */}
                    <div className="w-full h-[15%] flex items-center justify-around fixed px-2"  >
                        <Card radius='lg' shadow="lg">
                            <CardBody>
                                <div className="flex items-center gap-2">
                                    <Button isIconOnly color="success">
                                        <Chat width={18} height={18} />
                                    </Button>
                                    <h2 className="font-semibold">Chat</h2>

                                </div>
                            </CardBody>
                        </Card>
                        <div className="flex items-center gap-2 ">
                            {" "}
                            <Button size="lg" isIconOnly variant="bordered" radius="lg">
                                <ChatGroup width={18} height={18} />
                            </Button>
                            <h2 className="font-semibold">Q&A</h2>
                        </div>
                        <div className="flex items-center gap-2 ">
                            {" "}
                            <Button size="lg" isIconOnly variant="bordered" radius="lg">
                                <Polls width={18} height={18} />
                            </Button>
                            <h2 className="font-semibold">Polls</h2>
                        </div>
                    </div>

                    {/* Body */}
                    {/* <div className="w-full h-full flex flex-col justify-end pb-[25%]">
                        <h1 >A message</h1>
                    </div> */}

                    {/* Chat Input */}
                    <div className="w-full h-[15%] flex items-center justify-around fixed bottom-0 px-2" style={{ borderRadius: '0 0 1.5rem 1.5rem' }}>
                        <Input
                            size='lg'
                            radius='full'
                            type="text"
                            placeholder="Ask a question"
                            startContent={
                                <Smiley width={20} height={20} className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            endContent={
                                <Button variant="faded" isIconOnly radius="lg">
                                    <ArrowUp width={20} height={20} className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                </Button>
                            }
                        />
                    </div>
                </div>
            </aside>}

            <section className="flex md:max-w-[992px] mx-auto flex-col items-center relative justify-center gap-4 py-8 md:py-10">
                <Input
                    size='lg'
                    radius='full'
                    type="text"
                    placeholder="Ask a question"
                    startContent={
                        <Smiley width={20} height={20} className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    endContent={
                        <div className="flex items-center gap-5">
                            <p className="text-lg">
                                ✋
                            </p>
                            <Button variant="faded" isIconOnly radius="lg">
                                <ArrowUp width={20} height={20} className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            </Button>
                        </div>
                    }
                />
                <Spacer y={2} />
                <Divider orientation="horizontal" />
                <div className="w-full">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="bordered" endContent={<ChevronDown width={15} height={15} className="mx-10" />} >
                                <h3 className="text-md font-bold">Popular</h3>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            variant="faded"
                            aria-label="Dropdown menu with icons"
                        >
                            <DropdownItem
                                startContent={
                                    <Button
                                        size="sm"
                                        isIconOnly
                                        variant="flat"
                                        radius="sm"
                                    >
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
                                    >

                                    </Button>
                                }
                            >
                                <h3 className="font-normal">Recent</h3>
                            </DropdownItem>
                            <DropdownItem>
                                <Divider />
                            </DropdownItem>
                            <DropdownItem
                                startContent={
                                    <Button
                                        size="sm"
                                        isIconOnly
                                        variant="flat"
                                        radius="sm"
                                    >
                                        <Check width={10} height={10} />

                                    </Button>
                                }
                            >
                                <h3 className="font-normal">All Questions</h3>
                            </DropdownItem>

                            <DropdownItem
                                startContent={
                                    <Button
                                        size="sm"
                                        isIconOnly
                                        variant="flat"
                                        radius="sm"
                                    >
                                        <Starred width={10} height={10} />

                                    </Button>
                                }
                            >
                                <h3 className="font-normal">Starred</h3>
                            </DropdownItem>

                            <DropdownItem
                                startContent={
                                    <Button
                                        size="sm"
                                        isIconOnly
                                        variant="flat"
                                        radius="sm"
                                    >
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
                    {
                        postData.map((post, index) => {

                            return <Card fullWidth key={index} isHoverable={true} style={{ cursor: 'pointer', paddingInline: '1.2rem' }}>
                                <CardBody onClick={() => isShowingChat(!showChat)} >
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
                                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="sm" radius="md" />
                                                    <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" size="sm" radius="md" />
                                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="sm" radius="md" />
                                                </AvatarGroup>
                                                <Button variant="bordered" isIconOnly>
                                                    😍
                                                </Button>
                                            </div>
                                            <Spacer x={20} />
                                            <Chip variant="bordered" size="lg" avatar={
                                                <p>👍😍</p>
                                            }>
                                                <h3 className="px-2"><span></span> {post.reactionCount}</h3>
                                            </Chip>

                                        </div>
                                    </div>
                                    <Spacer y={4} />
                                    <p className="font-md my-1">
                                        {post.content}
                                    </p>
                                    <Spacer y={2} />

                                </CardBody>

                            </Card>
                        })
                    }
                </div>
            </section>
        </>
    );
}