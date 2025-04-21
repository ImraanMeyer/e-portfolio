'use client';

import { TableOfContents } from "@/components/table-of-content";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Callout } from "@/components/ui/callout";
import { ChevronRight, Home } from "lucide-react";



export default function UnitPage() {
    return (
        <div className="flex flex-col-reverse lg:flex-row">
            <div className="space-y-8 w-5/6">
                <div className="inset-0 -z-10 w-5/6 bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-gray-950 dark:[background:radial-gradient(#1f2937_1px,transparent_1px)]">
                    <div className="relative">

                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`}><Home className="h-4 w-4" /></BreadcrumbLink>
                                    <ChevronRight className="h-4 w-4" />
                                    <BreadcrumbLink href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/object-oriented-programming`}>Object-Oriented Programming</BreadcrumbLink>
                                    <ChevronRight className="h-4 w-4" />
                                    <BreadcrumbPage>Assignment 1: System Design</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="relative mt-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
                            <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                                <h1 className="text-2xl font-bold mb-2">Assignment 1: System Design</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 w-5/6" id="system-design">
                    <div className="flex flex-col gap-4">
                        <Callout title="Assignment Brief">
                            <p className="mb-2">
                                As a Software Engineer, you are given the role of designing the software which supports the operation of a humanoid robot. In your research on the capabilities of humanoid robots, you can search for keywords that include robot, human-robot interaction, and collaborative robot.</p>
                            <p className="mb-2">
                                You are required to identify three operations which you wish to support in your software, from the perspective of a robot fulfilling a job, and providing capability for them through the use of an object-oriented Python program. The system should support the ability of a human to interact with the system through a front-end command-line interface (CLI).</p>
                            <p className="mb-2">
                                Running in the system back-end should be a capability that simulates the generation and collection of data attributes to represent the wider environment within which the robot exists.</p>
                        </Callout>
                    </div>
                </div>

                <div className="space-y-4 w-5/6" id="learning-outcomes">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-bold mb-2">Learning Outcomes</h3>
                        <ul className="list-disc pl-4 pr-4" >
                            <li className="text-md text-muted-foreground mb-2">
                                Prepared UML models (Activity, Class, Sequence, and State Transition Diagrams) to support the object-oriented design process.
                            </li>
                            <li className="text-md text-muted-foreground mb-2">
                                Implemented data search algorithms using Python data structures (<span className="text-primary">lists</span>, <span className="text-primary">stacks</span>, <span className="text-primary">queues</span>, and <span className="text-primary">dictionaries</span>) to process stored data efficiently.
                            </li>
                            <li className="text-md text-muted-foreground mb-2">
                                Applied object-oriented programming principles to design a system supporting humanoid robot operations.
                            </li>
                            <li className="text-md text-muted-foreground mb-2">
                                Demonstrated critical thinking and application of knowledge in selecting and justifying key design choices.
                            </li>
                            <li className="text-md text-muted-foreground mb-2">
                                Conducted research to identify relevant references and incorporated them into the design rationale.
                            </li>
                        </ul>

                    </div>
                </div>


                <div className="space-y-4 w-5/6" id="reflection">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-bold mb-2">Reflection</h3>
                        <p className="text-md text-muted-foreground">
                            This assignment provided an opportunity to apply object-oriented programming (OOP) principles to a real-world scenario involving humanoid robots. Designing the system required a deep understanding of UML modeling, data structures, and human-robot interaction concepts. The creation of UML diagrams helped visualize the system's architecture, while the use of Python data structures ensured efficient data management and processing.
                        </p>
                        <p className="text-md text-muted-foreground">
                            One of the challenges was balancing the complexity of the robot's operations with the simplicity of the CLI interface. However, this constraint encouraged creative problem-solving and reinforced the importance of user-centered design. The research process also highlighted the significance of staying updated with advancements in robotics and human-robot collaboration.
                        </p>
                        <p className="text-md text-muted-foreground">
                            Overall, this assignment enhanced my skills in system design, critical thinking, and academic writing. It also underscored the importance of interdisciplinary knowledge in developing innovative software solutions for emerging technologies.
                        </p>
                    </div>
                </div>

                <div className="space-y-4 w-5/6" id="resources">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-bold mb-2">Resources</h3>

                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground">
                                <a href="https://github.com/ImraanMeyer/humanoid_robot_designs/" target="_blank" rel="noopener noreferrer">UML Diagrams</a>
                            </li>
                            <li className="text-md text-muted-foreground">
                                <a href="https://github.com/ImraanMeyer/humanoid_oop/blob/main/System%20Design/Design%20Proposal%20-%20Humanoid%20Robot.pdf" target="_blank" rel="noopener noreferrer">Design Proposal</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>


            <TableOfContents items={[
                { id: 'system-design', title: 'System Design', level: 'h2' },
                { id: 'learning-outcomes', title: 'Learning Outcomes', level: 'h3' },
                { id: 'reflection', title: 'Reflection', level: 'h3' },
                { id: 'resources', title: 'Resources', level: 'h3' },
            ]} />
        </div>

    );
}