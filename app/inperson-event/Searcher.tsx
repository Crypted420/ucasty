"use client";
import {
    ArrowUp,
    Chat,
    ChatGroup,
    ChevronDown,
    ChevronUp,
    Polls,
    Search,
    Smiley,
    ThreeDots,
    Translate,
} from "@/components/icons";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";

import { useEffect, useState } from "react";

function Searcher() {
    return (

        <aside
            className="fixed top-0 left-0 z-90 w-[400px] bg-black h-[100vh] z-50"

        >
            {/* Body */}
            <div className="w-full h-[70%] relative rounded-3xl mt-6" style={{
                transform: "translate(20px, 20px)",
                border: "1px solid #272729",
            }}>
                <div className="absolute w-full h-[70%] bg-red-50 faded-gradient rounded-3xl"></div>
                <div className="w-full h-full justify-end pb-[25%] px-4 overflow-y-auto remove-scroll-bar">
                    <div className="w-full h-fit flex justify-start items-center p-2">
                        <p>Fugiat consequat dolore in consequat nisi consectetur sunt et adipisicing ea amet sit. Enim in laborum amet anim excepteur nostrud labore cillum ex irure sunt laboris. Culpa dolore exercitation est incididunt tempor pariatur. Ullamco velit do sint consequat incididunt Lorem id culpa ullamco sint ut quis.Consectetur proident nisi est irure aute quis excepteur minim amet reprehenderit enim duis occaecat ut. Et quis aliquip nulla sunt consectetur ipsum magna aliqua magna. Eiusmod ut culpa id dolore eu consequat officia velit et sit ea non. Eu officia laboris voluptate deserunt labore eiusmod dolore velit adipisicing. Laboris non anim incididunt laboris reprehenderit aliqua. Labore occaecat quis qui Lorem minim tempor. Ex in fugiat cillum veniam proident eiusmod pariatur nulla irure aliquip irure commodo sint consectetur.</p>
                    </div>


                </div>

                {/* Chat Input */}
                <div
                    className="w-full h-[15%] flex gap-1 items-center justify-around fixed bottom-0 px-2 faded-gradient"
                    style={{ borderRadius: "0 0 1.5rem 1.5rem" }}
                >

                    <Input
                        size="sm"
                        radius="lg"
                        type="text"
                        placeholder="Filter questions"
                        startContent={
                            <Search
                                width={20}
                                height={20}
                                className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                            />
                        }
                        endContent={
                            <div className="flex gap-2">
                                <ChevronUp
                                    width={15}
                                    height={15}
                                    className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                                />
                                <ChevronDown
                                    width={15}
                                    height={15}
                                    color="gray"
                                    className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                                />


                            </div>
                        }
                    />
                    <Button isIconOnly variant="faded" size="md" radius="md">
                        <Translate width={15} height={15} />
                    </Button>
                </div>
            </div>

            <div className="absolute bottom-0 mx-4 mb-4">
                <Button variant="bordered" className="h-unit-15">
                    <Button isIconOnly size="md" variant="bordered"><ThreeDots width={12} height={12} /></Button>
                    <Button isIconOnly size="md" variant="bordered">🤯</Button>
                    <Button isIconOnly size="md" variant="bordered">❤️</Button>
                    <Button isIconOnly size="md" variant="bordered">😂</Button>
                    <Button isIconOnly size="md" variant="bordered">😡</Button>

                </Button>
            </div>
        </aside >
    )
}

export default Searcher