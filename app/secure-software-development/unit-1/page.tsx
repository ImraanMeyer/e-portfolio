import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { ChevronRight, Home } from "lucide-react";
import { Callout } from "@/components/ui/callout";
import { TableOfContents } from "@/components/table-of-content";
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
                                    <BreadcrumbLink href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/secure-software-development`}>Secure Software Development</BreadcrumbLink>
                                    <ChevronRight className="h-4 w-4" />
                                    <BreadcrumbPage>Unit 1</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="relative mt-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
                            <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                                <h1 className="text-2xl font-bold mb-2">Unit 1: Introduction to Secure Software Development</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <Callout className="w-5/6">
                    <p>Select one of the coding weaknesses which have been identified by OWASP and create a flowchart of the steps which may have led to the weakness occurring. Which UML models might you use to present the design of your proposed software, and why are they the most appropriate choice(s)?</p>
                </Callout>

                <div className="space-y-4 w-5/6" id="article-review">
                    <h2 className="text-xl font-bold mb-2">Initial Post</h2>

                    <h3 className="text-lg font-bold w-5/6 mb-4 mt-4" id="initial-post">Addressing A07:2021 - Identification and Authentication Failures Using UML Diagrams</h3>
                    <p className="text-md text-muted-foreground mb-4" id="initial-post">
                    A07:2021 - Identification and Authentication Failures is one of the key vulnerabilities listed in the OWASP Top 10, highlighting the importance of robust identification and authentication mechanisms.
                    </p>

                    <p className="text-md text-muted-foreground mb-4" id="initial-post">
                    A07:2021 - Identification and Authentication Failures, previously referred to as Broken Authentication, highlights flaws in login mechanisms and session management that allow for exploits such as credential stuffing, brute force attacks, session hijacking, and improper logout handling (OWASP, 2021).
                    </p>

                    <p className="text-md text-muted-foreground mb-4" id="flowchart">
                    The flowchart below outlines a potential vulnerability path for authentication failures:
                    </p>
                    
                    <div className="p-4" id="flowchart">
                        <NextImage src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/module-2/unit-1/broken-auth.png`} alt="Flowchart" className="rounded-xl" width={800} height={600} />
                    </div>
                    
                    <p className="text-md text-muted-foreground mb-4" id="uml-models">
                    To present the software design for an authentication module, I would use the following UML models:
                    </p>

                    <ul className="list-disc pl-6" id="uml-models">
                        <li className="text-md text-muted-foreground mb-4">
                            <span className="text-primary">Use Case Diagram</span>: This illustrates interactions between actors (e.g. users, administrators) and system components, useful for defining requirements.
                        </li>
                        <li className="text-md text-muted-foreground mb-4">
                            <span className="text-primary">Sequence Diagram</span>: Appropriate for modelling the step-by-step authentication process including MFA checks, session creation, and credential validation.
                        </li>
                        <li className="text-md text-muted-foreground mb-4">
                            <span className="text-primary">Class Diagram</span>: Suitable for showing the structure of objects involved (e.g. User, Session, MFA Device), their attributes, and relationships.
                        </li>
                    </ul>

                    <div className="flex flex-col gap-4 mt-4" id="references">
                        <h4 className="text-lg font-bold w-5/6 mb-4">References</h4>
                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground mb-4">OWASP, 2025. A07:2021 - Identification and Authentication Failures. [online] Available at: <a href="https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures" target="_blank">https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <TableOfContents items={[
                { id: 'article-review', title: 'Article Review', level: 'h2' },
                { id: 'initial-post', title: 'Initial Post', level: 'h3' },
                { id: 'flowchart', title: 'Flowchart', level: 'h4' },
                { id: 'uml-models', title: 'UML Models', level: 'h4' },
                { id: 'references', title: 'References', level: 'h3' },
            ]} />
        </div>
    );
}