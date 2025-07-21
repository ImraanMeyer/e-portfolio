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
                                    <BreadcrumbPage>Unit 5</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="relative mt-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
                            <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                                <h1 className="text-2xl font-bold mb-2">
                                    Unit 5: An Introduction to Testing
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 w-5/6" id="discussion">
                    <Callout>
                        <p className="text-md text-muted-foreground">
                            The Cyclomatic Complexity is commonly considered in modules on
                            testing the validity of code design today. However, in your
                            opinion, should it be? Does it remain relevant today? Specific to
                            the focus of this module, is it relevant in our quest to develop
                            secure software? Justify all opinions which support your argument
                            and share your responses with your team.
                        </p>
                    </Callout>

                    <br />
                    <h2 className="text-xl font-bold mb-2" id="q1">
                        The Relevance of Cyclomatic Complexity in Secure Software
                        Development
                    </h2>

                    <p className="text-md text-muted-foreground mb-4">
                        Cyclomatic Complexity, introduced by Thomas J. McCabe in 1976, is a
                        metric used to measure the complexity of a program by analyzing its
                        control flow. While it has been a staple in software testing and
                        design validation, its relevance in modern software development,
                        particularly in the context of secure software, warrants
                        examination.
                    </p>

                    <h3 className="text-lg font-bold mb-2" id="should-cyclomatic">
                        Should Cyclomatic Complexity Be Considered Today?
                    </h3>

                    <p className="text-md text-muted-foreground mb-4">
                        Yes, Cyclomatic Complexity remains relevant today, but its
                        application should be contextualized within modern development
                        practices. The metric provides a quantitative measure of code
                        complexity, which can be indicative of potential issues such as
                        increased likelihood of bugs, reduced maintainability, and higher
                        risk of security vulnerabilities.
                    </p>

                    <h3 className="text-lg font-bold mb-2" id="relevance">
                        Relevance in Secure Software Development
                    </h3>

                    <ul className="list-disc pl-6">
                        <li className="text-md text-muted-foreground mb-4">
                            <span className="text-primary">Identifying complex code:</span> High Cyclomatic Complexity often
                            correlates with intricate control flow, making the code harder to
                            understand and test. Complex code is more prone to errors, which
                            can be exploited as security vulnerabilities.
                        </li>
                        <li className="text-md text-muted-foreground mb-4">
                            <span className="text-primary">Maintainability and security:</span> Code with lower complexity is easier
                            to maintain and audit, reducing the risk of introducing security
                            flaws during updates or modifications.
                        </li>
                        <li className="text-md text-muted-foreground mb-4">
                            <span className="text-primary">Testing efficiency:</span> Simplifying code by reducing its Cyclomatic
                            Complexity can enhance the effectiveness of security testing,
                            ensuring that all paths are adequately covered.
                        </li>
                    </ul>

                    <p className="text-md text-muted-foreground mb-4">
                        Research and industry practices support the continued use of
                        Cyclomatic Complexity as a tool for improving code quality and
                        security. For instance, studies have shown that high Cyclomatic
                        Complexity increases the likelihood of errors and security
                        vulnerabilities (Cr0hn, 2023). Additionally, maintaining low
                        complexity helps in reducing bugs and improving overall software
                        quality (BlueOptima, 2023).
                    </p>

                    <p className="text-md text-muted-foreground mb-4">
                        While Cyclomatic Complexity is not a standalone solution for
                        ensuring secure software, it remains a valuable metric when used in
                        conjunction with other best practices. By identifying and reducing
                        complexity, developers can enhance code maintainability, improve
                        testing efficiency, and mitigate potential security risks.
                    </p>

                    <br />

                    <div className="flex flex-col gap-4 mt-4" id="references">
                        <h4 className="text-lg font-bold w-5/6">References</h4>
                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground mb-4">
                                Cr0hn. (2023). Cyclomatic Complexity in Software Development and
                                Its Impact on Cybersecurity.
                                <a
                                    href="https://cr0hn.medium.com/cyclomatic-complexity-in-software-development-and-its-impact-on-cybersecurity-bcf972322832"
                                    target="_blank"
                                >
                                    https://cr0hn.medium.com/cyclomatic-complexity-in-software-development-and-its-impact-on-cybersecurity-bcf972322832
                                </a>
                            </li>
                            <li className="text-md text-muted-foreground mb-4">
                                BlueOptima. (2023). Understanding Cyclomatic Complexity and Its
                                Importance in Software Development.
                                <a
                                    href="https://www.blueoptima.com/post/understanding-cyclomatic-complexity-and-its-importance-in-software-development"
                                    target="_blank"
                                >
                                    https://www.blueoptima.com/post/understanding-cyclomatic-complexity-and-its-importance-in-software-development
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <TableOfContents
                items={[
                    {
                        id: "q1",
                        title:
                            "The Relevance of Cyclomatic Complexity in Secure Software Development",
                        level: "h2",
                    },
                    {
                        id: "should-cyclomatic",
                        title: "Should Cyclomatic Complexity Be Considered Today?",
                        level: "h3",
                    },
                    {
                        id: "relevance",
                        title:
                            "Relevance of Cyclomatic Complexity in Secure Software Development",
                        level: "h3",
                    },
                    { id: "references", title: "References", level: "h2" },
                ]}
            />
        </div>
    );
}
