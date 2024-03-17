"use client";
import {
    ArrowUp,
    Chat,
    ChatGroup,
    Polls,
    Smiley,
} from "@/components/icons";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { useRouter } from "next/navigation";


function ChatBox() {
    const router = useRouter();
    return (
        <aside
            className="fixed right-0  z-90 w-[400px] bg-[#000] h-[70vh] rounded-3xl z-50"
            style={{
                transform: "translate(-20px, 20px)",
                border: "1px solid #272729",
            }}
        >
            <div className="w-full h-full relative">
                {/* Header */}
                <div className="w-full h-[15%] flex items-center bg-black justify-around fixed px-2 z-[999999] chat-header-gradient">
                    <Card radius="lg" shadow="lg">
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
                        <Button size="lg" isIconOnly variant="bordered" radius="lg" onClick={() => router.push('/polls')}>
                            <Polls width={18} height={18} />
                        </Button>
                        <h2 className="font-semibold">Polls</h2>
                    </div>
                </div>

                {/* Body */}
                <div className="w-full h-full justify-end pb-[25%] px-4 overflow-y-auto remove-scroll-bar">
                    <div className="w-full h-fit flex justify-start items-center">
                        <div className="w-fit max-w-[70%] h-fit py-4 flex items-end gap-2 ">
                            <div className="w-10 h-8 bg-[brown] flex items-center justify-center rounded-lg">
                                <h2 className="font-bold">S</h2>
                            </div>
                            <Card
                                fullWidth
                                className=""
                                style={{ borderRadius: "20px 20px 20px 10px" }}
                            >
                                <CardBody>
                                    <div className="flex flex-col justify-between gap-2">
                                        <h2 className="font-bold">ia221</h2>
                                        <p className="text-sm text-[gray]">
                                            Ullamco magna proident nostrud ad id aliqua quis.
                                        </p>
                                        <p className="text-[gray] text-[0.5rem]">Now</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    <div className="w-full h-fit flex justify-start items-center">
                        <div className="w-fit max-w-[70%] h-fit py-4 flex items-end gap-2 ">
                            <div className="w-10 h-8 bg-[brown] flex items-center justify-center rounded-lg">
                                <h2 className="font-bold">S</h2>
                            </div>
                            <Card
                                fullWidth
                                className=""
                                style={{ borderRadius: "20px 20px 20px 10px" }}
                            >
                                <CardBody>
                                    <div className="flex flex-col justify-between gap-2">
                                        <h2 className="font-bold">Amalia221</h2>
                                        <p className="text-sm text-[gray]">
                                            Ullamco magna proident nostrud ad id aliqua quis.
                                        </p>
                                        <p className="text-[gray] text-[0.5rem]">Now</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    <div className="w-full h-fit flex justify-end items-center">
                        <div className="w-fit max-w-[70%] h-fit py-4">
                            <Card
                                fullWidth
                                className="bg-[#5E53F5]"
                                style={{ borderRadius: "20px 20px 10px 20px" }}
                            >
                                <CardBody>
                                    <Card style={{ borderLeft: '3px solid #ccc', background: '#4F45D9' }} className="mb-2 z-10">
                                        <CardBody>
                                            <h2>You</h2>
                                            <p className="text-[0.75rem]">Sint aute exercitation commodo officia labore duis irure commodo deserunt amet minim ea ipsum in.</p>
                                        </CardBody>
                                    </Card>
                                    <p className="text-sm">
                                        incididunt minim duis minim adipisicing. Adipisicing
                                        dolore labore ad ipsum ullamco eu in.
                                    </p>
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    <div className="w-full h-fit flex justify-start items-center">
                        <div className="w-fit max-w-[70%] h-fit py-4 flex items-end gap-2 ">
                            <div className="w-10 h-8 bg-[brown] flex items-center justify-center rounded-lg">
                                <h2 className="font-bold">S</h2>
                            </div>
                            <Card
                                fullWidth
                                className=""
                                style={{ borderRadius: "20px 20px 20px 10px" }}
                            >
                                <CardBody>
                                    <div className="flex flex-col justify-between gap-2">
                                        <h2 className="font-bold">Nathan</h2>
                                        <p className="text-sm text-[gray]">
                                            Ullamco magna proident nostrud ad id aliqua quis.
                                        </p>
                                        <p className="text-[gray] text-[0.5rem]">Now</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Chat Input */}
                <div
                    className="w-full h-[15%] flex items-center justify-around fixed bottom-0 px-2 chatbox-gradient"
                    style={{ borderRadius: "0 0 1.5rem 1.5rem" }}
                >
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
            </div>
        </aside>
    )
}

export default ChatBox