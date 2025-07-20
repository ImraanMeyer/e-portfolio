import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { ChevronRight, Home } from "lucide-react";
import { Callout } from "@/components/ui/callout";
import { TableOfContents } from "@/components/table-of-content";
import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
} from "@/components/ui/table";

export default function UnitPage() {
    return (
        <div className="flex flex-col-reverse lg:flex-row">
            <div className="space-y-8 w-5/6">
                <div className="inset-0 -z-10 w-5/6 bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-gray-950 dark:[background:radial-gradient(#1f2937_1px,transparent_1px)]">
                    <div className="relative">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink
                                        href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/`}
                                    >
                                        <Home className="h-4 w-4" />
                                    </BreadcrumbLink>
                                    <ChevronRight className="h-4 w-4" />
                                    <BreadcrumbLink
                                        href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""
                                            }/secure-software-development`}
                                    >
                                        Secure Software Development
                                    </BreadcrumbLink>
                                    <ChevronRight className="h-4 w-4" />
                                    <BreadcrumbPage>Unit 2</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="relative mt-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
                            <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                                <h1 className="text-2xl font-bold mb-2">
                                    Unit 2: UML Modelling to Support Secure System Planning
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <Callout
                    className="w-5/6"
                    title="Seminar Activity: Scrum Security Review"
                />

                <div className="space-y-4 w-5/6" id="q1">
                    <h2 className="text-xl font-bold mb-2">Question 1: Table</h2>

                    <Callout>
                        <p>
                            Create a 2-column multi-line table. In the left-hand column,
                            include the software development stages of the Scrum agile life
                            cycle approach to project management. In the right-hand column,
                            describe the processes which you recommend are applied at each
                            stage to ensure that secure software is produced at the end of the
                            development. To support the preparation of your response, you can
                            refer to the following literature:
                        </p>

                        <br />
                        <small>
                            <i>
                                Sharma, A. & Bawa, R. K. (2020) Identification and Integration
                                of Security Activities for Secure Agile Development.
                                International Journal of Information Technology.
                            </i>
                        </small>
                    </Callout>

                    <br />


                    <Table id="table">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Scrum Development Stage</TableHead>
                                <TableHead>Recommended Security Practices</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Product Backlog Creation</TableCell>
                                <TableCell>
                                    Conduct threat modelling to identify potential security risks.
                                    Prioritise security features as backlog items. Involve
                                    security experts in defining non-functional requirements
                                    related to confidentiality, integrity, and availability.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Sprint Planning</TableCell>
                                <TableCell>
                                    Include security-related tasks in the sprint backlog. Use
                                    security acceptance criteria and define 'Done' conditions that
                                    include security verification. Perform a security impact
                                    analysis of user stories.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Sprint Execution (Development)</TableCell>
                                <TableCell>
                                    Implement secure coding practices (e.g. OWASP ASVS). Conduct
                                    regular code reviews with a focus on security. Adopt static
                                    application security testing (SAST) tools to identify
                                    vulnerabilities early in development.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Daily Stand-up</TableCell>
                                <TableCell>
                                    Use stand-ups to track progress on security tasks. Highlight
                                    and discuss any security blockers or incidents. Promote a
                                    DevSecOps culture by integrating developers and security
                                    personnel.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Sprint Review</TableCell>
                                <TableCell>
                                    Demonstrate security features as part of the sprint outcomes.
                                    Review adherence to security acceptance criteria. Gather
                                    feedback on security aspects from stakeholders.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Sprint Retrospective</TableCell>
                                <TableCell>
                                    Reflect on any security issues that occurred. Identify
                                    opportunities for improving secure development processes.
                                    Update the Definition of Done to include newly discovered
                                    security considerations.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Release Planning</TableCell>
                                <TableCell>
                                    Conduct final penetration testing or dynamic security
                                    assessments. Validate system security posture before release.
                                    Ensure all vulnerabilities are either resolved or documented
                                    with risk acceptance.
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <br />
                    <hr />
                    <br />

                    <h2 className="text-xl font-bold mb-2">Question 2: Blog Post</h2>
                    <Callout>
                        <p>Some say that people are the biggest risk of cyber security.</p>
                        <br />
                        <p>Select five terms from ISO/IEC Standard 27000 Section 3 Terms and Definitions and write a 300-word blog post on how people can be managed to overcome cyber security attacks from the inside.</p>
                    </Callout>
                    <p id="q2" className="text-md text-muted-foreground mb-4">
                        Cybersecurity is not solely a technical challenge; it is a
                        people-centric issue. According to ISO/IEC 27000:2018, five key
                        terms help explain the role of humans in managing internal cyber
                        risks: Asset, Control, Incident, Risk, and Vulnerability.
                    </p>

                    <p className="text-md text-muted-foreground mb-4">
                        An asset (3.6.1) in cybersecurity may include human resources whose
                        access to systems and information must be managed responsibly. While
                        people are valuable assets, they also represent a potential threat
                        if proper controls are not applied.
                    </p>

                    <p className="text-md text-muted-foreground mb-4">
                        A control (3.8.1) refers to a measure that modifies risk.
                        Organisations must implement administrative controls, such as access
                        restrictions and awareness training, to reduce the likelihood of
                        human error or malicious actions.
                    </p>

                    <p className="text-md text-muted-foreground mb-4">
                        An incident (3.4.7) describes a single or series of unwanted events.
                        Human errors, such as clicking on phishing links or misconfiguring
                        access rights, are among the leading causes of security incidents.
                        Addressing the root causes of these errors is critical for
                        prevention.
                    </p>

                    <p className="text-md text-muted-foreground mb-4">
                        The concept of risk (3.6.5) reflects the potential for loss or harm
                        due to human behaviour. Risks can arise from social engineering,
                        insider threats, or even unintentional disclosure. A comprehensive
                        risk management framework must consider human factors.
                    </p>
                    <p className="text-md text-muted-foreground mb-4">
                        Lastly, vulnerability (3.6.6) captures any weakness that can be
                        exploited. Poor password hygiene, lack of security awareness, and
                        over-privileged accounts are examples of vulnerabilities caused by
                        people.
                    </p>
                    <p className="text-md text-muted-foreground mb-4">
                        To mitigate these risks, organisations must invest in continual
                        education, enforce the principle of least privilege, monitor user
                        behaviour, and foster a culture of security. By treating people as
                        both a defence mechanism and a potential weakness, cyber resilience
                        becomes more achievable.
                    </p>

                    <div className="flex flex-col gap-4 mt-4" id="references">
                        <h4 className="text-lg font-bold w-5/6 mb-4">References</h4>
                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground mb-4">
                                ISO/IEC 27000:2018 {" "} <a href="https://www.iso.org/obp/ui/#iso:std:iso-iec:27000:ed-5:v1:en" target="_blank">https://www.iso.org/obp/ui/#iso:std:iso-iec:27000:ed-5:v1:en</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <TableOfContents
                items={[
                    { id: "q1", title: "Question 1", level: "h2" },
                    { id: "table", title: "Table", level: "h3" },
                    { id: "q2", title: "Question 2", level: "h2" },
                    { id: "references", title: "References", level: "h2" },
                ]}
            />
        </div>
    );
}
