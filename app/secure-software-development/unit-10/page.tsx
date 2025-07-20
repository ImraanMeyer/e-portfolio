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
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
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
                                    <BreadcrumbPage>Unit 10</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="relative mt-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
                            <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                                <h1 className="text-2xl font-bold mb-2">
                                    Unit 10: From Distributed Computing to Microarchitectures
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 w-5/6">
                    <Callout>
                        <p className="text-md text-muted-foreground mb-4">
                            Read Schmitz et al (2016) article about faceted data.
                        </p>

                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground">
                                Do you think this is a good approach to protect systems from
                                data leakage? What are the pros and cons?
                            </li>
                            <li className="text-md text-muted-foreground">
                                Create a basic outline design of how you would create such a
                                system in Python.
                            </li>
                        </ul>
                    </Callout>

                    <div id="q1">
                        <h3 className="text-lg font-bold mb-2">
                            Do you think this is a good approach to protect systems from data
                            leakage? What are the pros and cons?
                        </h3>

                        <p className="text-md text-muted-foreground mb-2">
                            Faceted evaluation, as introduced by Schmitz et al. (2016), offers
                            a compelling method for protecting systems from data leakage by
                            allowing data to behave differently depending on the viewer's
                            access level. Rather than duplicating execution paths (as in
                            Secure Multi-Execution), it introduces faceted values that contain
                            both public and private views, making enforcement of information
                            flow policies more efficient and less intrusive.
                        </p>

                        <h4 className="text-lg font-bold mb-2" id="pros">
                            Pros
                        </h4>
                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground">
                                <span className="text-primary">
                                    Strong security guarantees:
                                </span>{" "}
                                It guarantees termination-insensitive noninterference, ensuring
                                that public outputs cannot be influenced by private inputs.
                            </li>
                            <li className="text-md text-muted-foreground">
                                <span className="text-primary">Dynamic enforcement:</span> It
                                works at runtime, catching potential data leaks without
                                requiring static analysis.
                            </li>
                            <li className="text-md text-muted-foreground">
                                <span className="text-primary">No runtime modification:</span>{" "}
                                It can be implemented as a library (as shown in Haskell),
                                avoiding costly changes to the language runtime.
                            </li>
                            <li className="text-md text-muted-foreground">
                                <span className="text-primary">
                                    Supports both explicit and implicit flows:
                                </span>{" "}
                                The system tracks both forms of information leakage using
                                monadic abstractions.
                            </li>
                            <li className="text-md text-muted-foreground">
                                <span className="text-primary">
                                    Flexible policy expression:
                                </span>{" "}
                                Nested faceted values allow nuanced policies that represent
                                multiple principals.
                            </li>
                        </ul>

                        <h4 className="text-lg font-bold mb-2" id="cons">
                            Cons
                        </h4>
                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground">
                                <span className="text-primary">Performance overhead:</span>{" "}
                                Although it simulates multiple executions within a single
                                process, it can still incur performance costs depending on the
                                complexity of faceted trees.
                            </li>
                            <li className="text-md text-muted-foreground">
                                <span className="text-primary">
                                    Increased complexity for developers:
                                </span>{" "}
                                Developers must understand and correctly apply faceted
                                programming, especially around monads and side effects.
                            </li>
                            <li className="text-md text-muted-foreground">
                                <span className="text-primary">Limited language support:</span>{" "}
                                While expressive in Haskell, similar implementations in more
                                mainstream languages (like Python) are rare and would require
                                careful design.
                            </li>
                        </ul>
                    </div>

                    <div id="q2">
                        <h3 className="text-lg font-bold mb-2">
                            Create a basic outline design of how you would create such a
                            system in Python.
                        </h3>

                        <p className="text-md text-muted-foreground mb-2">
                            Below is a minimal design for simulating faceted values in Python.
                            This is a simple example where you store a customer's card number,
                            but only admins should see the real number.
                        </p>

                        <CodeBlock
                            language="python"
                            code={`
class FacetedValue:
    def __init__(self, private, public):
        self.private = private
        self.public = public

    def view(self, is_admin):
        return self.private if is_admin else self.public
        

card_number = FacetedValue("4242 4242 4242 4242", "**** **** **** 4242")

print(card_number.view(is_admin=True))   # Shows full number
# Output: 4242 4242 4242 4242

print(card_number.view(is_admin=False))  # Hides most digits
# Output: **** **** **** 4242`}
                        />

                        <p className="text-md text-muted-foreground mb-2 mt-2">
                            Faceted evaluation, particularly the dual-monad approach of
                            Schmitz et al., is a robust and flexible way to secure systems
                            against both explicit and implicit data leaks. A Python-based
                            system can mimic its structure using classes and label checking,
                            though achieving the same formal guarantees would require
                            extensive development. Still, it remains a powerful paradigm for
                            modern secure programming.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 mt-4" id="references">
                        <h4 className="text-lg font-bold w-5/6 mb-4">References</h4>
                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground mb-4">
                                Schmitz, T., Rhodes, D., Austin, T.H., Knowles, K. and Flanagan, C., 2016, April. Faceted dynamic information flow via control and data monads. In International Conference on Principles of Security and Trust (pp. 3-23). Berlin, Heidelberg: Springer Berlin Heidelberg.{" "}
                                <a
                                    href="https://kennknowles.com/research/schmitz-rhodes-austin-knowles-flanagan.post.16.faceted.pdf"
                                    target="_blank"
                                >
                                    https://kennknowles.com/research/schmitz-rhodes-austin-knowles-flanagan.post.16.faceted.pdf
                                </a>{" "}
                                (Accessed: 14 July 2025).
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <TableOfContents items={[
                { id: "q1", title: "Do you think this is a good approach to protect systems from data leakage?", level: "h2" },
                { id: "pros", title: "Pros", level: "h3" },
                { id: "cons", title: "Cons", level: "h3" },
                { id: "q2", title: "Create a basic outline design of how you would create such a system in Python.", level: "h2" },
                { id: "references", title: "References", level: "h2" },
            ]} />
        </div>
    );
}
