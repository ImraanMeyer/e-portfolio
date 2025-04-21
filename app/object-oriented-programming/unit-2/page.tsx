import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { ChevronRight, Home } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import { TableOfContents } from "@/components/table-of-content";
import { Callout } from "@/components/ui/callout";


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
                                    <BreadcrumbPage>Unit 2</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="relative mt-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
                            <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                                <h1 className="text-2xl font-bold mb-2">Unit 2: Object Oriented Analysis - Initial Steps towards Programming in Python</h1>
                                <p className="text-md text-muted-foreground">This unit introduced Object-Oriented Analysis using UML, focusing on use case and state machine diagrams to model software requirements and behaviors, while reinforcing Python programming concepts for practical application.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4" id="unit-summary">
                    <h2 className="text-xl font-bold mb-2">Unit Summary</h2>

                    <div id="requirements-capture-and-state-machine-design">
                        <h3 className="text-lg font-bold w-5/6">Requirements Capture and State Machine Design</h3>
                        <p className="text-md text-muted-foreground w-5/6 mb-4">
                            Chapter 6 focuses on requirements capture, emphasizing the importance of gathering and documenting system needs through techniques like interviews, observation, and prototyping. Functional requirements define what the system should do, while non-functional requirements address performance, security, and usability. UML use case diagrams are key tools for visualizing interactions between users and system functionality. </p>

                        <p className="text-md text-muted-foreground w-5/6 mb-4">
                            Chapter 11 shifts to specifying control, using UML state machines to model state-dependent behavior. State machines capture object lifecycles, transitions, and triggers, essential for systems with complex logic (e.g., real-time or workflow-driven systems). Techniques like concurrent and composite states allow for detailed modeling, while consistency checks ensure alignment with other UML models like class and interaction diagrams.
                        </p>

                        <p className="text-md text-muted-foreground w-5/6 mb-4">
                            As a software engineer, I've applied these concepts in projects. Use case diagrams have been invaluable for clarifying requirements and aligning stakeholders, while state machines have helped design robust, state-dependent logic. Prototyping has also been a key tool for validating user interfaces and workflows early in the development process. These techniques have not only improved the clarity of requirements but also ensured the systems I've built are both functional and user-friendly.
                        </p>
                    </div>

                    <div id="key-takeaways">
                        <h3 className="text-lg font-bold w-5/6 mb-2">Key Takeaways</h3>
                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground w-5/6 mb-1"><strong className="text-primary">Requirements Capture:</strong> Systematic gathering and documentation of requirements are critical for delivering systems that meet user needs.</li>
                            <li className="text-md text-muted-foreground w-5/6 mb-1"><strong className="text-primary">State Machines:</strong> Modeling state-dependent behavior ensures systems handle complex logic effectively.</li>
                            <li className="text-md text-muted-foreground w-5/6 mb-1"><strong className="text-primary">UML as a Communication Tool:</strong> Use case diagrams and state machines bridge the gap between technical and non-technical stakeholders, fostering collaboration and clarity.</li>
                        </ul>

                        <div className="flex flex-col gap-4 mt-4" id="references">
                            <h3 className="text-lg font-bold w-5/6">References</h3>
                            <ul className="list-disc pl-6">
                                <li className="text-md text-muted-foreground w-5/6">
                                    BENNETT 2010, EBOOK: Object-Oriented Systems Analysis and Design Using UML, McGraw-Hill UK Higher Ed, London. Available from: ProQuest Ebook Central.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-4 w-5/6" />

                <div className="space-y-4" id="practical-activity">
                    <h2 className="text-xl font-bold w-5/6 mb-2">Practical Activity</h2>

                    <Callout className="w-5/6">
                        <p>
                        Access chapters 16 and 17 in 'Think Python' to help you better understand this week's concepts.
                        You are able to use the 'time1.py' code example within GitHub to help you understand the chapter 16 concepts.
                        You can also use the 'time2.py' code example within GitHub to help you understand the chapter 17 concepts.
                        </p>
                    </Callout>

                    <div className="flex flex-col gap-4">
                        <p className="text-md text-muted-foreground w-5/6">
                            This implementation builds upon the original Time1.py <a className="text-primary" href="https://github.com/AllenDowney/ThinkPython2/blob/master/code/Time1.py" target="_blank">code from Think Python</a> by restructuring it using modern Python OOP practices. While maintaining all original functionality for time calculations (including conversion between time objects and seconds, and time addition), the enhanced version makes several key improvements:
                        </p>

                        <ol className="list-disc pl-6">
                            <li className="text-md text-muted-foreground w-5/6 mb-1">Moving standalone functions like <span className="text-primary">print_time()</span> and <span className="text-primary">add_times()</span> into the Time class as methods and special operators (<span className="text-primary">__str__</span>, <span className="text-primary">__add__</span>),</li>
                            <li className="text-md text-muted-foreground w-5/6 mb-1">Adding validation through the <span className="text-primary">is_valid()</span> method,</li>
                            <li className="text-md text-muted-foreground w-5/6 mb-1">Implementing more intuitive object construction with <span className="text-primary">__init__</span>.</li>
                        </ol>

                        <p className="text-md text-muted-foreground w-5/6">
                            The core time mathematics from the original (using <span className="text-primary">divmod</span> for conversions) remains unchanged, but is now more elegantly encapsulated. The example usage in main() demonstrates identical movie time calculation functionality to the original, but with cleaner object-oriented syntax like <span className="text-primary">noon_time + run_time</span> instead of <span className="text-primary">add_times(noon_time, run_time)</span>. These changes make the code more maintainable while staying true to the original's reliable time handling logic.
                        </p>
                    </div>
                    <p className="text-md text-muted-foreground w-5/6">
                        You can find the code <a className="text-primary" href="https://github.com/ImraanMeyer/oop_practical_activity/blob/main/Time1.py" target="_blank">here</a>.
                    </p>

                    <CodeBlock className="w-5/6" language="python" code={`class Time:
    """Represents the time of day.
    
    attributes: hour, minute, second
    """
    def __init__(self, hour=0, minute=0, second=0):
        """Initialize a Time object.
        
        hour: int (0-23)
        minute: int (0-59)
        second: int (0-59)
        """
        self.hour = hour
        self.minute = minute
        self.second = second
        
    def __str__(self):
        """Return a string representation of the time."""
        return f'{self.hour:02d}:{self.minute:02d}:{self.second:02d}'
    
    def __eq__(self, other):
        """Return True if self == other."""
        return (self.hour == other.hour and 
                self.minute == other.minute and 
                self.second == other.second)
    
    def time_to_int(self):
        """Convert time to seconds since midnight."""
        return self.hour * 3600 + self.minute * 60 + self.second
    
    @classmethod
    def int_to_time(cls, seconds):
        """Convert seconds since midnight to Time (class method)."""
        time = cls()
        minutes, time.second = divmod(seconds, 60)
        time.hour, time.minute = divmod(minutes, 60)
        return time
    
    def add_time(self, other):
        """Add two Time objects or a Time and seconds."""
        if isinstance(other, Time):
            return Time.int_to_time(self.time_to_int() + other.time_to_int())
        else:
            return Time.int_to_time(self.time_to_int() + other)
    
    def __add__(self, other):
        """Add two Time objects or a Time and seconds using + operator."""
        return self.add_time(other)
    
    def is_valid(self):
        """Check if a Time object satisfies invariants."""
        if (self.hour < 0 or self.minute < 0 or self.second < 0 or
            self.minute >= 60 or self.second >= 60):
            return False
        return True

def main():
    # if a movie starts at noon...
    noon_time = Time(hour=12, minute=0, second=0)
    
    # and the run time of the movie is 109 minutes...
    movie_minutes = 109
    run_time = Time.int_to_time(movie_minutes * 60)
    print('Starts at', end=' ')
    print(noon_time)
    print('Run time', end=' ')
    
    print(run_time)
    
    # what time does the movie end?
    end_time = noon_time + run_time
    print('Ends at', end=' ')
    print(end_time)
    
if __name__ == '__main__':
    main()                  `} />
                </div>
            </div>


            <TableOfContents items={[
                { id: 'unit-summary', title: 'Unit Summary', level: 'h2' },
                { id: 'requirements-capture-and-state-machine-design', title: 'Requirements Capture and State Machine Design', level: 'h3' },
                { id: 'key-takeaways', title: 'Key Takeaways', level: 'h3' },
                { id: 'references', title: 'References', level: 'h3' },
                { id: 'practical-activity', title: 'Practical Activity', level: 'h2' },
            ]} />
        </div>
    );
}