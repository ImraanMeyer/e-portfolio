import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, Brain } from "lucide-react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { ChevronRight, Home } from "lucide-react";
import { Callout } from "@/components/ui/callout";
import { TableOfContents } from "@/components/table-of-content";

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
                                    <BreadcrumbPage>Unit 1</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="relative mt-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
                            <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                                <h1 className="text-2xl font-bold mb-2">Unit 1: An Introduction to Python Programming and the OO Programming Paradigm</h1>
                                <p className="text-md text-muted-foreground">This unit served as a refresher on Python's implementation of Object-Oriented Programming (OOP).</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Callout className="w-5/6">
                    <p>Refer to the article by Padhy et al. (2021), specifically Table 1, where the authors present a list of factors which they consider influence the reusability of a piece of object-oriented software.</p>
                </Callout>

                <div className="space-y-4 w-5/6" id="article-review">
                    <h2 className="text-xl font-bold mb-2">Article Review</h2>

                    <h3 className="text-lg font-bold w-5/6 mb-4 mt-4" id="initial-post">Initial Post: Factors Influencing Reusability in Object-Oriented Software</h3>
                    <p className="text-md text-muted-foreground mb-4">
                        In software engineering, metrics like those proposed by Padhy et al. (2021) provide a framework for evaluating reusability in object-oriented systems. Their work highlights thresholds for metrics such as Coupling Between Objects <span className="text-primary">(CBO)</span>, Weighted Methods per Class <span className="text-primary">(WMC)</span>, and Lack of Cohesion in Methods <span className="text-primary">(LCOM)</span>, which are critical for optimizing modularity and reuse.
                    </p>

                    <p className="text-md text-muted-foreground mb-4">
                        The most critical factor appears to be coupling between classes <span className="text-primary">(CBO)</span>. The research shows that highly interconnected classes are significantly harder to reuse in different contexts. This makes sense - when classes depend too much on each other, they can't be easily separated and repurposed.
                    </p>

                    <p className="text-md text-muted-foreground mb-4">Another key metric is class complexity <span className="text-primary">(WMC)   </span>. Classes with too many methods tend to become "jack of all trades" components that are difficult to adapt. The article suggests there's a sweet spot where classes have enough functionality to be useful but not so much that they become unwieldy.</p>

                    <p className="text-md text-muted-foreground mb-4">The cohesion measurement <span className="text-primary">(LCOM)</span> also stands out. When methods in a class don't share much data or functionality, it often indicates the class is trying to do too many unrelated things. The research suggests breaking these into smaller, more focused classes improves reusability.</p>

                    <p className="text-md text-muted-foreground mb-4">Inheritance metrics <span className="text-primary">(DIT and NOC)</span> present an interesting case. While inheritance can enable code reuse, the article cautions that deep inheritance hierarchies can actually make systems more fragile. There seems to be a balance between leveraging inheritance and creating overly complex class relationships.</p>

                    <p className="text-md text-muted-foreground mb-4">What's particularly valuable is how the authors emphasize these metrics should inform rather than dictate design decisions. They provide thresholds as guidelines, but recognize that different projects may require different approaches. The key takeaway is that being mindful of these factors during design can significantly improve a system's reusability without requiring rigid adherence to specific numbers.</p>

                    <div className="flex flex-col gap-4 mt-4" id="references">
                        <h4 className="text-lg font-bold w-5/6 mb-4">References</h4>
                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground mb-4">Padhy, N., Panigrahi, R. and Neeraja, K., 2021. Threshold estimation from software metrics by using evolutionary techniques and its proposed algorithms, models. Evolutionary intelligence, 14(2), pp.315-329.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <TableOfContents items={[
                { id: 'article-review', title: 'Article Review', level: 'h2' },
                { id: 'initial-post', title: 'Initial Post', level: 'h3' },
                { id: 'references', title: 'References', level: 'h3' },
            ]} />
        </div>
    );
}