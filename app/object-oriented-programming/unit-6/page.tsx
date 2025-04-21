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
                                    <BreadcrumbPage>Unit 6</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="relative mt-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
                            <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                                <h1 className="text-2xl font-bold mb-2">Unit 6: Abstract Methods and Interfaces</h1>
                                <p className="text-md text-muted-foreground">This unit explored the use of abstract classes and interfaces in Python, focusing on their role in code design and the metrics used to evaluate the effectiveness of object-oriented programs.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="space-y-4 w-5/6">
                    <div id="metrics-in-oop">
                        <h2 className="text-xl font-bold mb-2">Metrics in OOP</h2>
                        <Callout>
                            <p>Discuss the metrics used to assess the features of an object-oriented program.</p>
                        </Callout>

                        <p className="text-md text-muted-foreground mb-4 mt-4">Several metrics are used to evaluate the effectiveness of object-oriented programs:</p>

                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground"><strong className="text-primary">Cohesion:</strong> Measures how closely related the methods and attributes within a class are. High cohesion indicates a well-focused class.</li>
                            <li className="text-md text-muted-foreground"><strong className="text-primary">Coupling:</strong> Evaluates the degree of dependency between classes. Low coupling is preferred to ensure modularity and ease of maintenance.</li>
                            <li className="text-md text-muted-foreground"><strong className="text-primary">Inheritance Depth:</strong> Assesses the depth of the inheritance hierarchy. Excessive depth can complicate the program.</li>
                            <li className="text-md text-muted-foreground"><strong className="text-primary">Polymorphism:</strong> Measures the extent to which methods can be overridden or overloaded, enhancing flexibility.</li>
                            <li className="text-md text-muted-foreground"><strong className="text-primary">Encapsulation:</strong> Evaluates how well data and methods are encapsulated within classes, ensuring data integrity.</li>
                            <li className="text-md text-muted-foreground"><strong className="text-primary">Code Reusability:</strong> Assesses the extent to which code can be reused across the program, reducing redundancy.</li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-4" id="agent-based-modeling">
                    <h2 className="text-xl font-bold mb-2">Agent-Based Modeling (ABM)</h2>
                    <Callout className="w-5/6">
                        <p>Read the article byYu, S and Hou, X (2023) and respond to the following:</p>
                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground mb-1">What is agent-based modelling?</li>
                            <li className="text-md text-muted-foreground mb-1">Conduct further research and compare component-based modelling and agent-based modelling.</li>
                            <li className="text-md text-muted-foreground mb-1">Discuss the application of agent-based modelling in the context of the work presented in this paper.</li>
                        </ul>
                    </Callout>
                    <p className="text-md text-muted-foreground w-5/6 mb-4">
                        Agent-Based Modeling (ABM) is a computational approach that simulates the interactions of autonomous agents (e.g., individuals, organizations, or cells) to understand the emergent behavior of complex systems. Agents follow predefined rules, and their interactions lead to system-level outcomes. ABM is widely used in fields like economics, biology, and social sciences.
                    </p>

                    <h3 className="text-lg font-bold mb-2" id="comparison-of-component-based-modeling-and-agent-based-modeling">Comparison of Component-Based Modeling and Agent-Based Modeling</h3>
                    <table className="w-5/6" border={1} cellSpacing={0} cellPadding={8}>
                        <thead>
                            <tr className="border">
                                <th className="text-md text-left">Aspect</th>
                                <th className="text-md text-left">Component-Based Modeling</th>
                                <th className="text-md text-left">Agent-Based Modeling</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border">
                                <td className="text-md text-muted-foreground">Focus</td>
                                <td className="text-md text-muted-foreground">Modularity and reusability of software components.</td>
                                <td className="text-md text-muted-foreground">Interactions and emergent behavior of agents.</td>
                            </tr>
                            <tr className="border">
                                <td className="text-md text-muted-foreground">Granularity</td>
                                <td className="text-md text-muted-foreground">Coarse-grained (components as functional units).</td>
                                <td className="text-md text-muted-foreground">Fine-grained (individual agents).</td>
                            </tr>
                            <tr className="border">
                                <td className="text-md text-muted-foreground">Application</td>
                                <td className="text-md text-muted-foreground">Software engineering and system design.</td>
                                <td className="text-md text-muted-foreground">Social, economic, and biological systems.</td>
                            </tr>
                            <tr className="border">
                                <td className="text-md text-muted-foreground">Interactions</td>
                                <td className="text-md text-muted-foreground">Defined by interfaces and contracts.</td>
                                <td className="text-md text-muted-foreground">Defined by agent rules and behaviors.</td>
                            </tr>
                            <tr className="border">
                                <td className="text-md text-muted-foreground">Outcome</td>
                                <td className="text-md text-muted-foreground">Predictable system behavior.</td>
                                <td className="text-md text-muted-foreground">Emergent system behavior.</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="text-md text-muted-foreground w-5/6 mb-4">The paper introduces Melodie, a Python framework for ABM, which simplifies the development of agent-based models. Melodie separates the environment from agents, enhances data collection, and supports scenario management, calibration, and training. It is particularly useful for modeling complex systems like COVID-19 contagion, where agents (e.g., individuals) interact based on rules, leading to emergent outcomes. Melodie's modular design and infrastructure make it a powerful tool for researchers and practitioners in ABM.</p>

                    <div className="flex flex-col gap-4 mt-4" id="references">
                        <h3 className="text-lg font-bold w-5/6">References</h3>
                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground w-5/6">Yu, S. and Hou, Z., 2023. Melodie: Agent-based modeling in python. Journal of Open Source Software, 8(83), p.5100.
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-4 w-5/6" />

                <div className="space-y-4" id="practical-activity">
                    <h2 className="text-xl font-bold mb-2">Practical Activity</h2>

                    <Callout className="w-5/6">
                        <p className="text-md text-muted-foreground w-5/6">Develop a Python program which has three abstract methods and one subclass which allows a user to perform banking operations.</p>
                    </Callout>

                    <p className="text-md text-muted-foreground w-5/6">
                        You can find the code <a className="text-primary" href="https://github.com/ImraanMeyer/u6-practical-activities/blob/main/bank_system.py" target="_blank">here</a>.
                    </p>

                    <CodeBlock className="w-5/6" code={`
from abc import ABC, abstractmethod

class BankAccount(ABC):
    """Abstract base class for banking operations"""
    def __init__(self, account_holder: str, balance: float = 0.0):
        self.account_holder = account_holder
        self._balance = balance # Protected attribute

    @abstractmethod
    def deposit(self, amount: float) -> str:
        pass

    @abstractmethod
    def withdraw(self, amount: float) -> str:
        pass

    @abstractmethod
    def get_balance(self) -> str:
        pass

class SavingsAccount(BankAccount):
    """Concrete implementation for savings account"""
    def deposit(self, amount: float) -> str:
        if amount <= 0:
            return "Deposit amount must be positive"
        self._balance += amount
        return f'Deposited $\{amount:.2f}. New balance: $\{self._balance:.2f}'

    def withdraw(self, amount: float) -> str:
        if amount <= 0:
            return "Withdrawal amount must be positive"
        if self._balance < amount:
            return "Insufficient funds"
        self._balance -= amount
        return f"Withdrew $\{amount:.2f}. Remaining: $\{self._balance:.2f}"

    def get_balance(self) -> str:
        return f"Account balance: $\{self._balance:.2f}"


if __name__ == "__main__":
    account = SavingsAccount("Imraan", 100.00)
    print(account.deposit(50))      
    print(account.withdraw(100))
    print(account.withdraw(150))    
    print(account.get_balance())
    
# Output
# Deposited $50.00. New balance: $150.00
# Withdrew $100.00. Remaining: $50.00
# Insufficient funds
# Account balance: $50.00`} language="python" />


                </div>
            </div>
            <TableOfContents items={
                [
                    { id: 'article-review', title: 'Article Review', level: 'h2' },
                    { id: 'metrics-in-oop', title: 'Metrics in OOP', level: 'h3' },
                    { id: 'agent-based-modeling', title: 'Agent-Based Modeling (ABM)', level: 'h3' },
                    { id: 'comparison-of-component-based-modeling-and-agent-based-modeling', title: 'Comparison of Component-Based Modeling and Agent-Based Modeling', level: 'h4' },
                    { id: 'references', title: 'References', level: 'h3' },
                    { id: 'practical-activity', title: 'Practical Activity', level: 'h3' },
                ]
            } />
        </div>


    );
}