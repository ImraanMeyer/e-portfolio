import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronRight, Home, ChevronDown } from "lucide-react";

import { Callout } from "@/components/ui/callout";
import { TableOfContents } from "@/components/table-of-content";
import { CodeBlock } from "@/components/ui/code-block";


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
                                    <BreadcrumbPage>Unit 5</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="relative mt-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
                            <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                                <h1 className="text-2xl font-bold mb-2">Unit 5: More on Classes</h1>
                                <p className="text-md text-muted-foreground">This unit deepened my understanding of Python classes, focusing on constructors, abstract classes, and the principles of polymorphism, aggregation, and composition to enhance modularity in object-oriented programming.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 w-5/6" id="practical-activity">
                    <h2 className="text-xl font-bold mb-2">Practical Activity</h2>

                    <Collapsible>
                        {/* Add the above code snippet  */}
                        <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent bg-background">
                            <span>An example of a Python program which uses polymorphism given</span>
                            <ChevronDown className="h-4 w-4" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="py-4">
                            <CodeBlock language="python" code={`class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def info(self):
        print(f"I am a cat. My name is {self.name}. I am {self.age} years old.")

    def make_sound(self):
        print("Meow")


class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def info(self):
        print(f"I am a dog. My name is {self.name}. I am {self.age} years old.")

    def make_sound(self):
        print("Bark")


cat1 = Cat("Kitty", 2.5)
dog1 = Dog("Fluffy", 4)

for animal in (cat1, dog1):
    animal.make_sound()
    animal.info()
    animal.make_sound()
                                    `} />
                        </CollapsibleContent>
                    </Collapsible>

                    <Callout>
                        <p>
                            Write a Python program with polymorphism that is usable within the summative assessment for the humanoid robot.
                        </p>
                    </Callout>

                    <p className="text-md text-muted-foreground mb-4">
                        You can find the code <a className="text-primary" href="https://github.com/ImraanMeyer/u5-practical-activities/blob/main/humanoid_robot.py" target="_blank">here</a>.
                    </p>
                    

                    <div id="code-block">
                        <CodeBlock language="python" code={`class RobotTask:
    def perform(self):
        """All robot tasks must implement this"""
        pass

class PickUpTask(RobotTask):
    def perform(self):
        return "Picking up object with robotic arms"

class NavigateTask(RobotTask):
    def perform(self):
        return "Moving to target location"

class SpeakTask(RobotTask):
    def perform(self):
        return "Playing greeting audio"

# Create robot tasks
tasks = [PickUpTask(), NavigateTask(), SpeakTask()]

# Polymorphic execution - same method call, different behaviors
def main():
    for task in tasks:
        print(task.perform())

# Output:
# Humanoid Robot Daily Tasks:
# - Picking up object with robotic arms
# - Moving to target location
# - Playing greeting audio`} />
                    </div>

                    <div className="p-4">
                        <h2 className="text-lg font-bold mb-2" id="polymorphism-in-robotics">Polymorphism in Robotics</h2>
                        <p className="text-md text-muted-foreground mb-4">
                            This simple example demonstrates how a humanoid robot can perform different tasks using the same interface. Each task (picking up objects, navigation, speaking) has its own implementation, but the robot controls them all through the common <span className="text-primary">.perform()</span> method.
                        </p>
                        <h3 className="text-md font-bold mb-4">Why This Matters:</h3>
                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground mb-1">Allows adding new tasks without changing existing code</li>
                            <li className="text-md text-muted-foreground mb-1">Makes the robot's control system more flexible</li>
                            <li className="text-md text-muted-foreground mb-1">Mirrors real-world robotics programming principles</li>
                        </ul>
                        <h3 className="text-md font-bold mb-4">How It Works:</h3>
                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground mb-1">RobotTask is the base class with the required method</li>
                            <li className="text-md text-muted-foreground mb-1">Each subclass implements its own version of <span className="text-primary">.perform()</span></li>
                            <li className="text-md text-muted-foreground mb-1">The robot executes tasks without needing to know their specific types</li>
                        </ul>
                    </div>
                </div>
            </div>

            <TableOfContents items={[
                { id: "practical-activity", title: "Practical Activity", level: "h2" },
                { id: "code-block", title: "Code Block", level: "h3" },
                { id: "polymorphism-in-robotics", title: "Polymorphism in Robotics", level: "h2" },
                { id: "why-this-matters", title: "Why This Matters", level: "h3" },
                { id: "how-it-works", title: "How It Works", level: "h3" },
            ]} />
        </div>
    );
}