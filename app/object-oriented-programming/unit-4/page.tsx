import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { ChevronRight, Home } from "lucide-react";
import { TableOfContents } from "@/components/table-of-content";
import { CodeBlock } from "@/components/ui/code-block";
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
                                    <BreadcrumbPage>Unit 4</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="relative mt-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
                            <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                                <h1 className="text-2xl font-bold mb-2">Unit 4: Applying a UML Model to a Program Implementation: UML in Practice</h1>
                                <p className="text-md text-muted-foreground">This unit focused on translating UML models, particularly class diagrams, into Python code, emphasizing the practical application of UML in software development.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="space-y-4 w-5/6" id="unit-summary">
                    <h2 className="text-xl font-bold mb-2">Unit Summary</h2>

                    <div className="p-4">
                        <p className="text-md text-muted-foreground mb-4">
                            The reading, <i>Consistency Problems in UML-Based Software Development</i>, highlights the challenges of maintaining consistency in UML models throughout the software development lifecycle. UML's multiview nature and iterative development process often lead to inconsistencies, categorized as intra-model (within a single model) and inter-model (between different models). Intra-model inconsistencies arise from overlapping views or imprecise UML semantics, while inter-model inconsistencies occur when models at different abstraction levels (e.g., analysis vs. design) fail to align.
                        </p>
                        <p className="text-md text-muted-foreground mb-4">
                            The authors discuss various approaches to address these issues, including:
                        </p>
                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground mb-1"><strong className="text-primary">Rule-Based Definitions:</strong> Adding constraints or well-formedness rules to ensure model consistency.</li>
                            <li className="text-md text-muted-foreground mb-1"><strong className="text-primary">Refinement Relationships:</strong> Defining how models evolve and ensuring consistency across abstraction levels.</li>
                            <li className="text-md text-muted-foreground mb-1"><strong className="text-primary">Translational Approaches:</strong> Translating UML models into formal languages (e.g., B or Object-Z) for automated consistency checks.</li>
                        </ul>
                        <p className="text-md text-muted-foreground mb-4">
                            The paper also emphasizes the importance of tools for consistency checking, such as OCL (Object Constraint Language) or model transformations into formal languages. These tools help detect and resolve inconsistencies, ensuring that models remain accurate and aligned with system requirements.
                        </p>
                        <p className="text-md text-muted-foreground mb-4">
                            Key takeaways include the need for precise semantics, clear refinement relationships, and automated tools to maintain consistency in UML-based development. This reading reinforced the importance of systematic modeling practices to avoid inconsistencies, which is critical for translating UML models into functional software.
                        </p>

                        <div className="flex flex-col gap-4 mt-4">
                            <h4 className="text-lg font-bold">References</h4>
                            <ul className="list-disc pl-6">
                                <li className="text-md text-muted-foreground">Huzar, Z. et al. (2005) 'Consistency Problems in UML-Based Software Development', UML Modeling Languages and Applications, pp. 1-12.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 w-5/6" id="practical-activity">
                    <h2 className="text-xl font-bold mb-2">Practical Activity</h2>

                    <Callout>
                        <p className="text-md text-muted-foreground">
                            Design an activity diagram which shows the relationships and interactivity between the tasks executed by a humanoid robot performing a task of your choice.
                        </p>
                    </Callout>


                    <div className="p-4">
                        <NextImage src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/unit-4/humanoid-activity-diagram.png`} alt="Humanoid Activity Diagram" width={400} height={400} className="m-auto" />
                    </div>

                    <Callout>
                        <p className="text-md text-muted-foreground">
                            Expand the activity diagram with the development of a class diagram using UML to support a system with basic employee-related functionality. This should include the retention of employee details and allow an employee to book a day of annual leave.
                        </p>
                    </Callout>


                    <div className="p-4">
                        <NextImage src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/unit-4/employees-class-diagram.png`} alt="Employees Class Diagram" width={400} height={400} className="m-auto" />
                    </div>

                    <p className="text-md text-muted-foreground">
                        You can find the code <a className="text-primary" href="https://github.com/ImraanMeyer/u4-practical-activities/blob/main/employee_management_system.py" target="_blank">here</a>.
                    </p>

                    <CodeBlock language="python" code={`class Employee:
    def __init__(self, employee_id: str, name: str, email: str, annual_leave_days: int = 25):
        self.employee_id = employee_id
        self.name = name
        self.email = email
        self.annual_leave_days = annual_leave_days
        self.leave_requests: List['LeaveRequest'] = []

    def book_leave(self, leave_date: date) -> bool:
        if self.annual_leave_days > 0:
            self.leave_requests.append(
                LeaveRequest(self.employee_id, leave_date))
            self.annual_leave_days -= 1
            return True
        return False

    def get_leave_balance(self) -> int:
        return self.annual_leave_days


class LeaveRequest:
    def __init__(self, employee_id: str, leave_date: date):
        self.request_id = f"req_{employee_id}_{leave_date.isoformat()}"
        self.employee_id = employee_id
        self.leave_date = leave_date
        self.status = "Pending"

    def approve(self):
        self.status = "Approved"

    def reject(self):
        self.status = "Rejected"


Leave balance after booking: 24
Leave Request ID: req_EMP001_2025-09-10, Status: Pending
Leave Request ID: req_EMP001_2025-09-10, Status after approval: Approved
Leave Request ID: req_EMP001_2025-09-10, Status after rejection: Rejected


# Example Usage
if __name__ == "__main__":
    emp = Employee("EMP001", "Imraan", "imraanm@example.com")
    print(f"Initial leave balance: {emp.get_leave_balance()}") 
    # Initial leave balance: 25
    
    emp.book_leave(date(2025, 9, 10))
    print(f"Leave balance after booking: {emp.get_leave_balance()}") 
    # Leave balance after booking: 24

    for request in emp.leave_requests:
        print(f"Leave Request ID: {request.request_id}, Status: {request.status}") 
        # Leave Request ID: req_EMP001_2025-09-10, Status: Pending
        
        request.approve()
        print(f"Leave Request ID: {request.request_id}, Status after approval: {request.status}") 
        # Leave Request ID: req_EMP001_2025-09-10, Status after approval: Approved
        
        request.reject()
        print(f"Leave Request ID: {request.request_id}, Status after rejection: {request.status}") 
        # Leave Request ID: req_EMP001_2025-09-10, Status after rejection: Rejected`} />
                </div>
            </div>

            <TableOfContents items={[
                { id: "unit-summary", title: "Unit Summary", level: "h2" },
                { id: "practical-activity", title: "Practical Activity", level: "h2" },
            ]} />

        </div>
    );
}