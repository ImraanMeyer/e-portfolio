import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { ChevronRight, Home } from "lucide-react";
import { TableOfContents } from "@/components/table-of-content";
import { Callout } from "@/components/ui/callout";
import NextImage from "next/image";


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
                                    <BreadcrumbPage>Unit 3</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="relative mt-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
                            <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                                <h1 className="text-2xl font-bold mb-2">Unit 3: Unified Modelling Language (UML)</h1>
                                <p className="text-md text-muted-foreground">This unit provided an introduction to UML, a standardized toolset for designing software systems on paper before implementation, covering its syntax, major models, and their application across the Software Development Life Cycle (SDLC).</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4" id="discussion">
                    <h2 className="text-xl font-bold mb-2">Discussion</h2>

                    <Callout className="w-5/6">
                        <p>
                            Discuss which UML models are most applicable at different stages of the Software Development Life Cycle.
                        </p>
                    </Callout>

                    <div className="w-5/6">
                        <h3 className="text-lg font-bold" id="applicability-of-uml-models-in-the-software-development-life-cycle-sdlc">Applicability of UML Models in the Software Development Life Cycle (SDLC)</h3>
                        <p className="text-md text-muted-foreground mb-4">
                            UML (Unified Modeling Language) provides a standardized set of tools to model software systems, and different UML models are most applicable at various stages of the Software Development Life Cycle (SDLC). These models can be broadly categorized into behavioral, structural, and architectural types, each serving distinct purposes.</p>

                        <h3 className="text-lg font-bold mb-2" id="requirements-analysis-early-sdlc">Requirements Analysis (Early SDLC)</h3>
                        <p className="text-md text-muted-foreground mb-4">
                            During the initial stages, use case diagrams are particularly valuable. They capture the functional requirements of the system from the perspective of users (actors), which can be people, other systems, or hardware. Use cases help model scenarios, such as a library user borrowing a book, and their deviations, ensuring all possible interactions are considered. They are essential for scoping requirements, planning development iterations, and validating the final system. However, over-reliance on use cases can lead to a focus on functionality at the expense of system architecture.
                        </p>

                        <h3 className="text-lg font-bold mb-2" id="design-phase-mid-sdlc">Design Phase (Mid SDLC)</h3>
                        <p className="text-md text-muted-foreground mb-4">
                            During the design phase, structural models like class diagrams and object diagrams become critical. These models represent the components of the system (nouns) and their relationships, providing a static view of the system. For example, a class diagram for a library system would show entities like <span className="text-primary">Book</span>, <span className="text-primary">User</span>, and <span className="text-primary">Librarian</span>, along with their attributes and methods. Structural models ensure the system's architecture is well-defined before implementation.
                        </p>

                        <h3 className="text-lg font-bold mb-2" id="implementation-and-testing-late-sdlc">Implementation and Testing (Late SDLC)</h3>
                        <p className="text-md text-muted-foreground mb-4">
                            During implementation and testing, behavioral models such as sequence diagrams, activity diagrams, and state machine diagrams are most applicable. These models capture dynamic interactions between system components over time (verbs). For instance, a state machine diagram can model the lifecycle of a <span className="text-primary">Book</span> object, transitioning between states like <span className="text-primary">Available</span>, <span className="text-primary">On Loan</span>, and <span className="text-primary">Overdue</span>. Behavioral models help developers understand how the system behaves under different conditions and ensure all edge cases are tested.
                        </p>

                        <h3 className="text-lg font-bold mb-2" id="architectural-modeling-throughout-sdlc">Architectural Modeling (Throughout SDLC)</h3>
                        <p className="text-md text-muted-foreground mb-4">
                            Architectural models, such as component diagrams and deployment diagrams, provide a high-level perspective of the system. They are useful throughout the SDLC to ensure the system's overall structure aligns with its requirements and design goals.
                        </p>


                        <p className="text-md text-muted-foreground mb-4">In summary, the choice of UML model depends on the SDLC stage: use case diagrams for requirements, structural models for design, behavioral models for implementation and testing, and architectural models for overarching system structure. Together, these models ensure a comprehensive and well-documented software development process.</p>

                        <div className="flex flex-col gap-4 mt-4" id="references-#1">
                            <h3 className="text-lg font-bold">References</h3>
                            <ul className="list-disc pl-6">
                                <li className="text-md text-muted-foreground">University of Essex Online. (2025) Unified Modelling Language. [Lecturecast] OOP_PCOM7E Object Oriented Programming. University of Essex Online.</li>
                            </ul>
                        </div>
                    </div>

                    <hr className="my-4 w-5/6" />

                    <div className="space-y-4 w-5/6" id="practical-activity">
                        <h2 className="text-xl font-bold mb-2">Practical Activity</h2>

                        <Callout>
                            <p>
                                Making reference to 'The Unified Modeling Language Reference Manual Second Edition', use the State Machine Diagram in Figures 3-7 in Chapter 21 to design a similar model for a washing machine.
                            </p>
                        </Callout>

                        <p className="text-md text-muted-foreground mb-4">
                            This section presents a state machine-inspired component diagram for a washing machine system. The structure draws from Figure 3-7 in Chapter 3 of The Unified Modeling Language Reference Manual (Second Edition), adapted to represent real-world interactions and internal components of a washing machine.</p>

                        <div className="p-4" id="washing-machine-component-diagram">
                            <NextImage src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/module-1/unit-3/washing-machine-component-diagram.png`} alt="Washing Machine Component Diagram" className="rounded-xl" width={800} height={600} />
                        </div>

                        <h3 className="text-lg font-bold mb-2" id="diagram-components">Diagram Components</h3>
                        <h4 className="text-md font-bold" id="actors">Actors:</h4>
                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground mb-2"><span className="text-primary">User</span>: The person operating the washing machine. They initiate washing cycles and interact with the system via the user interface to select modes, temperatures, and cycle types.</li>
                            <li className="text-md text-muted-foreground mb-2"><span className="text-primary">Technician</span>: A maintenance professional who connects to the machine through the maintenance interface to run diagnostics, perform troubleshooting, or access system logs for repair or servicing.</li>
                        </ul>

                        <h4 className="text-md font-bold" id="main-components">Main Components:</h4>
                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground mb-2"><span className="text-primary">UserInterface</span>: The control panel where users interact with the machine. It allows for input selections like wash cycle type, temperature, spin speed, and cycle start/stop operations.</li>
                            <li className="text-md text-muted-foreground mb-2"><span className="text-primary">Controller</span>: The central logic unit responsible for coordinating all washing machine operations. It receives user inputs, interprets them, and sends appropriate commands to physical components.</li>
                            <li className="text-md text-muted-foreground mb-2"><span className="text-primary">PowerSupply</span>: Supplies electrical power to all components of the washing machine. It is activated or deactivated by the controller based on the machine's current state.</li>
                            <li className="text-md text-muted-foreground mb-2"><span className="text-primary">DoorLock</span>: Ensures the door is securely locked before starting any wash cycle. It receives signals from the controller and provides safety by preventing door opening during operation.</li>
                            <li className="text-md text-muted-foreground mb-2"><span className="text-primary">Motor</span>: Drives the drum rotation for washing and spinning cycles. The controller manages its speed and direction based on the selected program and phase of the wash cycle.</li>
                            <li className="text-md text-muted-foreground mb-2"><span className="text-primary">WaterSensor</span>: Monitors the water level inside the drum. It informs the controller when the correct level is reached for washing or rinsing, preventing overflow or underfilling.</li>
                            <li className="text-md text-muted-foreground mb-2"><span className="text-primary">DrainPump</span>: Responsible for pumping out water from the drum during and after the wash cycle. It activates at specific points as instructed by the controller.</li>
                            <li className="text-md text-muted-foreground mb-2"><span className="text-primary">Heater</span>: Heats the water to the required temperature for different cycles (e.g., hot wash). The controller turns it on or off depending on the program selected.</li>
                            <li className="text-md text-muted-foreground mb-2"><span className="text-primary">CycleLogger</span>: Logs each cycle's activities, statuses, and any errors or interruptions. Useful for both diagnostics and tracking machine usage patterns over time.</li>
                            <li className="text-md text-muted-foreground mb-2"><span className="text-primary">DataStorage</span>: A local or internal memory component used to store logs, error messages, and cycle history, allowing for reference during maintenance or user feedback.</li>
                            <li className="text-md text-muted-foreground mb-2"><span className="text-primary">MaintenanceInterface</span>: A service interface used by technicians to connect diagnostic tools or access logs. It provides an entry point for troubleshooting and internal status checks.</li>
                        </ul>

                        <div className="flex flex-col gap-4 mt-4" id="references-#2">
                            <h3 className="text-lg font-bold w-5/6">References</h3>
                            <ul className="list-disc pl-6">
                                <li className="text-md text-muted-foreground w-5/6">Jacobson, L. and Booch, J.R.G., 2021. The unified modeling language reference manual.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <TableOfContents items={[
                { id: 'discussion', title: 'Discussion', level: 'h2' },
                { id: 'applicability-of-uml-models-in-the-software-development-life-cycle-sdlc', title: 'Applicability of UML Models in the Software Development Life Cycle (SDLC)', level: 'h3' },
                { id: 'requirements-analysis-early-sdlc', title: 'Requirements Analysis (Early SDLC)', level: 'h3' },
                { id: 'design-phase-mid-sdlc', title: 'Design Phase (Mid SDLC)', level: 'h3' },
                { id: 'implementation-and-testing-late-sdlc', title: 'Implementation and Testing (Late SDLC)', level: 'h3' },
                { id: 'architectural-modeling-throughout-sdlc', title: 'Architectural Modeling (Throughout SDLC)', level: 'h3' },
                { id: 'references-#1', title: 'References', level: 'h3' },
                { id: 'practical-activity', title: 'Practical Activity', level: 'h2' },
                { id: 'washing-machine-component-diagram', title: 'Washing Machine Component Diagram', level: 'h3' },
                { id: 'diagram-components', title: 'Diagram Components', level: 'h3' },
                { id: 'actors', title: 'Actors', level: 'h4' },
                { id: 'main-components', title: 'Main Components', level: 'h4' },
                { id: 'references-#2', title: 'References', level: 'h3' }
            ]} />
        </div>
    );
}