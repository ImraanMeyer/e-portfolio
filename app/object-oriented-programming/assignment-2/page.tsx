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
                                    <BreadcrumbPage>Assignment 2: System Implementation</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="relative mt-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
                            <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                                <h1 className="text-2xl font-bold mb-2">Assignment 2: System Implementation</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 w-5/6" id="system-implementation">
                    <div className="flex flex-col gap-4">
                        <Callout title="Assignment Brief">
                            <p className="mb-2">
                                You are now required to implement the code designed to support the operation of a humanoid robot as described in Unit 7. This should be representative of the activity diagram, class diagram, sequence diagram, and state transition diagram defined in your design document. Please modify any of the diagrammatic capabilities in response to advancements in your thought process since the design document was submitted, or in response to feedback received.
                            </p>
                            <p className="mb-2">
                                Please write and test your scripts within your chosen Python IDE. All code scripts must be documented, explained, and follow best practices, including the PEP-8 Style Guide. You should ensure that your code is fully tested and provide evidence of your testing. Use Python's assert statement to achieve automated testing, in addition to any other types of testing you believe are useful in this deployment.
                            </p>
                        </Callout>
                    </div>

                    <div className="flex flex-col gap-2" id="learning-outcomes">
                        <h3 className="text-lg font-bold mb-2">Learning Outcomes</h3>
                        <ul className="list-disc pl-4 pr-4" >
                            <li className="text-md text-muted-foreground mb-2">
                                Prepared UML models (Activity, Class, Sequence, and State Transition Diagrams) to support the object-oriented design process.
                            </li>
                            <li className="text-md text-muted-foreground mb-2">
                                Applied data structures (lists, stacks, queues, and dictionaries) to support the storage and processing of data in a humanoid robot system.
                            </li>
                            <li className="text-md text-muted-foreground mb-2">
                                Implemented data search algorithms to process stored data efficiently, ensuring optimal performance in dynamic environments.
                            </li>
                            <li className="text-md text-muted-foreground mb-2">
                                Developed and tested Python scripts adhering to the PEP-8 Style Guide, demonstrating best practices in coding and documentation.
                            </li>
                            <li className="text-md text-muted-foreground mb-2">
                                Evaluated the development process through a reflective commentary, highlighting strengths, challenges, and areas for improvement.
                            </li>
                        </ul>

                    </div>

                    <div className="flex flex-col gap-2" id="reflection">
                        <h3 className="text-lg font-bold mb-2">Reflection</h3>
                        <p className="text-md text-muted-foreground">
                            This assignment required the implementation of the software system designed in the previous unit, focusing on the operational capabilities of a humanoid robot. Translating the UML diagrams into functional Python code was both challenging and rewarding. The process reinforced the importance of adhering to coding best practices, such as following the PEP-8 Style Guide and ensuring thorough documentation.
                        </p>
                        <p className="text-md text-muted-foreground">
                            One of the key achievements was the successful integration of object-oriented programming (OOP) principles, which allowed for modular and scalable code. The use of data structures like lists, stacks, and queues ensured efficient data management, while automated testing using Python's <code className="text-primary">assert</code> statement validated the system's functionality.
                        </p>
                        <p className="text-md text-muted-foreground">
                            A significant challenge was ensuring the code's robustness in handling real-world scenarios, such as unexpected inputs or errors. This required iterative testing and debugging, which ultimately improved the system's reliability. The reflective commentary in the README file provided an opportunity to critically evaluate the development process, identifying areas for future improvement, such as enhancing the CLI interface or incorporating machine learning capabilities.
                        </p>
                        <p className="text-md text-muted-foreground">
                            Overall, this assignment deepened my understanding of software development, testing, and documentation. It also highlighted the importance of iterative design and continuous improvement in creating effective software solutions.
                        </p>
                    </div>

                    {/* Resources linking to github, thumbnail preview for diagrams */}
                    <div className="flex flex-col gap-2" id="resources">
                        <h3 className="text-lg font-bold mb-2">Resources</h3>

                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground">
                                <a href="https://github.com/ImraanMeyer/humanoid_oop/" target="_blank" rel="noopener noreferrer">Repository</a>
                            </li>
                            <li className="text-md text-muted-foreground">
                                <a href="https://github.com/ImraanMeyer/humanoid_oop/blob/main/README.md" target="_blank" rel="noopener noreferrer">README</a>
                            </li>
                            <li className="text-md text-muted-foreground">
                                <a href="https://github.com/ImraanMeyer/humanoid_robot_designs/" target="_blank" rel="noopener noreferrer">Diagrams</a>
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