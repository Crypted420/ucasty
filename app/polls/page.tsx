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

import { useEffect, useState } from "react";
import { Checkbox } from "@nextui-org/checkbox";
import { Progress } from "@nextui-org/progress";

export default function InPersonEventPage() {
    const votes = [
        {
            opt: "A",
            percentage: '40%',
            content:
                "Esse ipsum deserunt consectetur labore velit amet deserunt veniam velit voluptate quis incididunt.",
        },
        {
            opt: "B",
            percentage: '60%',
            content:
                "Esse ipsum deserunt consectetur labore ",
        },
        {
            opt: "C",
            percentage: '10%',
            content:
                "Est Lorem esse irure consequat ex.",
        },
        {
            opt: "D",
            percentage: '90%',
            content:
                "Excepteur aliqua elit veniam esse anim consequat.",
        },
    ];
    return (
        <>
            <section className="flex md:max-w-[992px] mx-auto flex-col items-center relative justify-center gap-4 py-8 md:py-10">
                <p className="text-lg mt-6 text-left w-full">
                    Aute ut proident aute eu quis. Duis sit ex sunt excepteur. Ut
                    adipisicing in quis irure laborum quis ea veniam. Sint et aute nisi
                    consequat pariatur exercitation. Qui voluptate Lorem Lorem culpa
                    excepteur mollit non minim. Ea sint magna quis tempor laborum commodo
                    sint officia.
                </p>

                <div className="w-full mt-2 flex justify-between">
                    <div className="flex gap-2">
                        <Checkbox defaultSelected>
                            <p>Vote as anonymous</p>
                        </Checkbox>
                    </div>
                    <div>
                        <Card radius="lg">
                            <CardBody>
                                <div className="flex py-0 items-center gap-2">
                                    <AvatarGroup>
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
                                    <p className="text-sm">481+ Votes</p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                {/* Progress bars */}
                <div className="w-full flex flex-col gap-8">
                    {
                        votes.map((vote, index) => {

                            return <div key={index} className="py-0 relative w-full bg-[#2a292e] h-16 rounded-full cursor-pointer">
                                <Card
                                    style={{
                                        width: vote.percentage,
                                        background: "#5E53F5",
                                        height: "100%",
                                        border: "2px solid #8982ef71",
                                    }}
                                    className="rounded-full"
                                >
                                    <CardBody></CardBody>
                                </Card>
                                <div className="absolute bg-red- flex items-center justify-between p-4 pr-6 px-2 w-full h-full top-0">
                                    <div className="flex gap-2 items-center">
                                        <Button
                                            variant="solid"
                                            isIconOnly
                                            radius="lg"
                                            style={{
                                                background: "rgba(255,255,255,0.2)",
                                                borderRadius: "40px",
                                            }}
                                        >
                                            <h1 className="font-bold">{vote.opt}</h1>
                                        </Button>
                                        <p>{vote.content}</p>
                                    </div>
                                    <h2 className="text-md">{vote.percentage}</h2>
                                </div>
                            </div>
                        })
                    }
                </div>
                <Spacer y={20}></Spacer>
                <Button variant="flat" fullWidth className="py-2" size="lg">
                    <h2 className="py-4">Send</h2>
                </Button>
            </section>
        </>
    );
}
