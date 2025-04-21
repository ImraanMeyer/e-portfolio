'use client';

import { TableOfContents } from "@/components/table-of-content";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Callout } from "@/components/ui/callout";
import { ChevronRight, Home } from "lucide-react";
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
                                    <BreadcrumbPage>Unit 9</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="relative mt-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
                            <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                                <h1 className="text-2xl font-bold mb-2">Unit 9: Packaging and Testing</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 w-5/6" id="activity-1">
                    <h2 className="text-xl font-bold mb-2">Activity 1</h2>
                    <div className="flex flex-col gap-4">
                        <Callout>
                            <p className="text-md text-muted-foreground">
                                How relevant is the cyclomatic complexity in object-oriented systems? Which alternative metrics do you consider to be more reflective of the complexity of a piece of code, in comparison to the number of independent paths through a program? Support your response using reference to the related academic literature.
                            </p>
                        </Callout>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-md text-muted-foreground mb-1">
                            Cyclomatic complexity, a concept introduced by McCabe in 1976, quantifies the number of independent paths through a program's control flow, offering a numerical measure of code complexity. Despite its widespread use, its applicability in object-oriented (OO) systems has been debated. This is primarily because cyclomatic complexity does not fully encapsulate the principles of encapsulation, inheritance, and polymorphism that are central to OO programming (Chidamber and Kemerer, 1994).
                        </p>
                        <p className="text-md text-muted-foreground mb-1">
                            In OO systems, cyclomatic complexity might not accurately reflect the true complexity of the code. For example, a method with a low cyclomatic complexity score could still be highly complex if it depends on multiple inherited methods or interacts with other classes in complex ways (Henderson-Sellers, 1996).
                        </p>
                        <p className="text-md text-muted-foreground mb-1">
                            To address these limitations, several alternative metrics have been developed. The Weighted Methods per Class (WMC) metric, part of the Chidamber and Kemerer (1994) suite, calculates the complexity of a class by aggregating the cyclomatic complexity of its methods. This offers a more comprehensive view of class complexity. Additionally, the Depth of Inheritance Tree (DIT) and Coupling Between Objects (CBO) metrics evaluate the influence of inheritance and inter-class dependencies, respectively, which are crucial in OO systems (Chidamber and Kemerer, 1994).
                        </p>
                        <p className="text-md text-muted-foreground mb-1">
                            Another notable metric is the Lack of Cohesion in Methods (LCOM), which assesses the degree to which the methods within a class are related. High LCOM values indicate poor cohesion, suggesting that the class may benefit from refactoring (Hitz and Montazeri, 1995).
                        </p>
                        <p className="text-md text-muted-foreground mb-1">
                            Recent research has also emphasized the significance of cognitive complexity, which focuses on the mental effort required to comprehend code. Unlike cyclomatic complexity, cognitive complexity takes into account factors such as nested structures, variable naming, and code readability (Campbell, 2018). This metric more accurately reflects the challenges developers encounter when maintaining OO systems.
                        </p>
                        <p className="text-md text-muted-foreground mb-4">
                            In conclusion, while cyclomatic complexity remains a valuable tool for evaluating procedural code, its limitations in OO systems necessitate the use of additional metrics such as WMC, DIT, CBO, LCOM, and cognitive complexity. Together, these metrics provide a more holistic understanding of code complexity in OO paradigms.
                        </p>

                        <div className="flex flex-col gap-4">
                            <h5 className="text-base font-bold">References</h5>
                            <ul className="list-disc pl-6">
                                <li className="text-md text-muted-foreground mb-1">
                                    Chidamber, S.R. and Kemerer, C.F. (1994). A Metrics Suite for Object Oriented Design. IEEE Transactions on Software Engineering, 20(6), 476-493.</li>
                                <li className="text-md text-muted-foreground mb-1">
                                    G. Ann Campbell. (2018) Cognitive complexity: an overview and evaluation. In Proceedings of the 2018 International Conference on Technical Debt, pp. 57-58.</li>
                                <li className="text-md text-muted-foreground mb-1">
                                    Hitz, M. and Montazeri, B. (1995). Measuring Coupling and Cohesion in Object-Oriented Systems. Proceedings of the International Symposium on Applied Corporate Computing, 25-27.</li>
                                <li className="text-md text-muted-foreground mb-1">
                                    Henderson-Sellers, B. (1996). Object-Oriented Metrics: Measures of Complexity. Prentice Hall.</li>
                                <li className="text-md text-muted-foreground mb-1">
                                    McCabe, T.J. (1976). A Complexity Measure. IEEE Transactions on Software Engineering, 2(4), 308-320.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 w-5/6" id="activity-2">
                    <h2 className="text-xl font-bold mb-2">Activity 2</h2>

                    <div className="flex flex-col gap-4">
                        <Callout>
                            <p className="text-md text-muted-foreground">
                                To what extent is cyclomatic complexity relevant when developing object-oriented code?
                            </p>
                        </Callout>
                    </div>

                    <h5>Practical Implications</h5>
                    <ul className="list-disc pl-6">
                        <li className="text-md text-muted-foreground mb-1">
                            <span className="text-primary">Refactoring and Code Quality: </span>Cyclomatic complexity remains a valuable tool for identifying methods that may require refactoring. Methods with high cyclomatic complexity often indicate that they are overloaded with functionality and could be divided into smaller, more focused units (Fowler, 1999). This approach aligns with the Single Responsibility Principle in object-oriented (OO) design, which emphasizes that methods and classes should have a single, well-defined purpose.
                        </li>
                        <li className="text-md text-muted-foreground mb-1">
                            <span className="text-primary">Testing and Coverage: </span>Cyclomatic complexity is directly tied to the number of test cases needed to achieve full path coverage. While the metric may not fully capture the complexity of OO systems, it can still help developers ensure that all possible execution paths are tested, particularly in methods with intricate conditional logic (Watson and McCabe, 1996).
                        </li>
                        <li className="text-md text-muted-foreground mb-1">
                            <span className="text-primary">Tooling and Automation: </span>Many modern Integrated Development Environments (IDEs) and static analysis tools incorporate cyclomatic complexity as part of their code quality assessments. These tools can flag methods with high cyclomatic complexity, encouraging developers to review and potentially refactor the code (Mens et al., 2008). However, developers should be mindful of the metric's limitations and use it alongside other OO-specific metrics for a more comprehensive evaluation.
                        </li>
                    </ul>
                    <h5>Considerations for OO Systems</h5>
                    <ul className="list-disc pl-6">
                        <li className="text-md text-muted-foreground mb-1">
                            <span className="text-primary">Inheritance and Polymorphism: </span>In OO systems, inheritance and polymorphism introduce complexities that cyclomatic complexity does not measure. For example, a method in a base class might have low cyclomatic complexity, but its behavior can be significantly modified by overridden methods in derived classes. Metrics such as Depth of Inheritance Tree (DIT) and Number of Children (NOC) can provide additional insights into these complexities (Chidamber and Kemerer, 1994).
                        </li>
                        <li className="text-md text-muted-foreground mb-1">
                            <span className="text-primary">Inter-Class Dependencies: </span>The interactions between classes can significantly influence overall system complexity. Metrics like Coupling Between Objects (CBO) and Response For a Class (RFC) help developers understand these dependencies. High coupling between classes can result in systems that are challenging to maintain and extend (Martin, 2003).
                        </li>
                        <li className="text-md text-muted-foreground mb-1">
                            <span className="text-primary">Cohesion and Modularity: </span>Ensuring that classes and methods are cohesive is critical for maintainability. The Lack of Cohesion in Methods (LCOM) metric can identify classes that may need refactoring to improve cohesion (Hitz and Montazeri, 1995). High cohesion generally leads to more modular and understandable code.


                        </li>
                    </ul>

                    <p className="text-md text-muted-foreground mb-1">
                        While cyclomatic complexity provides useful insights into the control flow complexity of individual methods, it is essential to complement it with other metrics that address the unique characteristics of OO systems. By combining these metrics, developers can gain a more holistic understanding of code complexity and make informed decisions about refactoring, testing, and design improvements.
                    </p>

                    <div className="flex flex-col gap-4 mt-4">
                        <h4 className="text-lg font-bold">References</h4>
                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground mb-1">
                                Fowler, M. (1999). Refactoring: Improving the Design of Existing Code. Addison-Wesley.
                            </li>
                            <li className="text-md text-muted-foreground mb-1">
                                Watson, A.H. and McCabe, T.J. (1996). Structured Testing: A Testing Methodology Using the Cyclomatic Complexity Metric. NIST Special Publication 500-235.
                            </li>
                            <li className="text-md text-muted-foreground mb-1">
                                Mens, T., Tourwé, T., and Demeyer, S. (2008). Software Evolution. Springer.
                            </li>
                            <li className="text-md text-muted-foreground mb-1">
                                Martin, R.C. (2003). Agile Software Development: Principles, Patterns, and Practices. Prentice Hall.
                            </li>
                            <li className="text-md text-muted-foreground mb-1">
                                Chidamber, S.R. and Kemerer, C.F. (1994). A Metrics Suite for Object Oriented Design. IEEE Transactions on Software Engineering, 20(6), 476-493.
                            </li>
                            <li className="text-md text-muted-foreground mb-1">
                                Hitz, M. and Montazeri, B. (1995). Measuring Coupling and Cohesion in Object-Oriented Systems. Proceedings of the International Symposium on Applied Corporate Computing, 25-27.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-4 w-5/6" id="activity-3">
                    <h2 className="text-xl font-bold mb-2">Activity 3</h2>
                    <div className="flex flex-col gap-4">
                        <Callout>
                            <p className="text-md text-muted-foreground">
                                What is the cyclomatic complexity of the following piece of code?
                            </p>
                            <CodeBlock
                                className="mt-4"
                                language="csharp"
                                code={`
public static string IntroducePerson(string name, int age)
{
    var response = $"Hi! My name is {name} and I'm {age} years old.";

    if (age >= 18)
        response += " I'm an adult.";

    if (name.Length > 7)
        response += " I have a long name.";

    return response;
}`}
                            />
                        </Callout>
                    </div>

                    <div className="flex flex-col mt-4">
                        <p className="text-md text-muted-foreground mb-4">
                            Cyclomatic complexity measures the number of independent paths through a piece of code, helping assess its complexity. To calculate it, count the decision points (like <span className="text-primary">if</span> statements) and add one. In the provided code, there are two <span className="text-primary">if</span> statements, so the cyclomatic complexity is <span className="text-primary">( 2 + 1 = 3 )</span>. This means there are three possible execution paths: neither condition is true, the first condition is true, or the second condition is true. A complexity of 3 indicates the code is relatively simple but still requires testing for all paths to ensure correctness. Understanding this metric helps developers identify complex code, plan testing, and improve maintainability.
                        </p>
                    </div>
                </div>


                <div className="space-y-4 w-5/6" id="activity-4">
                    <h2 className="text-xl font-bold mb-2">Activity 4</h2>

                    <div className="flex flex-col gap-4">
                        <Callout>
                            <p className="text-md text-muted-foreground">
                                Extend the following program to test accuracy of operations using the assert statement.
                            </p>
                            <CodeBlock
                                className="mt-4"
                                language="python"
                                code={`
# Python String Operations
str1 = 'Hello'
str2 ='World!'

# using +
print('str1 + str2 = ', str1 + str2)

# using *
print('str1 * 3 =', str1 * 3)`}
                            />
                        </Callout>
                    </div>

                    <div className="flex flex-col gap-4 mt-4">
                        <CodeBlock
                            className="mt-4"
                            language="python"
                            code={`
# Python String Operations
str1 = 'Hello'
str2 = 'World!'

# using +
result1 = str1 + str2
print('str1 + str2 = ', result1)
assert result1 == 'HelloWorld!', "Concatenation failed"

# using *
result2 = str1 * 3
print('str1 * 3 =', result2)
assert result2 == 'HelloHelloHello', "Repetition failed"`}
                        />
                    </div>
                </div>
            </div>


            <TableOfContents items={[
                { id: 'activity-1', title: 'Activity 1', level: 'h2' },
                { id: 'activity-2', title: 'Activity 2', level: 'h2' },
                { id: 'activity-3', title: 'Activity 3', level: 'h2' },
                { id: 'activity-4', title: 'Activity 4', level: 'h2' },
            ]} />
        </div>

    );
}