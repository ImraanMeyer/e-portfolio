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
                                    <BreadcrumbPage>Unit 7</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="relative mt-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
                            <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                                <h1 className="text-2xl font-bold mb-2">
                                    Unit 7: Introduction to Operating Systems
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 w-5/6">
                    <div id="q1">
                        <h2 className="text-xl font-bold mb-2">What is an Ontology?</h2>
                        <Callout>
                            What do you understand about the ontology that has been presented
                            for your reading this week? Could you attempt to define an
                            ontology that would be relevant to the system that you are
                            designing for the summative assessment?
                        </Callout>

                        <div id="q1-answer" className="mt-4">
                            <p className="text-md text-muted-foreground mb-2">
                                Ontology, in the context of system design, refers to a formal
                                representation of knowledge within a domain. It defines the
                                concepts, relationships, and rules that govern a particular area
                                of interest. Ontologies are used to create a shared
                                understanding of a domain, facilitating communication,
                                interoperability, and knowledge management.
                            </p>
                            <p className="text-md text-muted-foreground mb-2">
                                Ontologies play a crucial role in system design by providing a
                                structured framework for representing and organizing knowledge.
                                They help in:
                            </p>
                            <ul className="list-disc pl-6">
                                <li className="text-md text-muted-foreground">
                                    <span className="font-bold">Clarifying concepts:</span>{" "}
                                    Defining the key concepts and their relationships within the
                                    system.
                                </li>
                                <li className="text-md text-muted-foreground">
                                    <span className="font-bold">Enhancing interoperability:</span>{" "}
                                    Ensuring that different components of the system can
                                    communicate and work together effectively.
                                </li>
                                <li className="text-md text-muted-foreground">
                                    <span className="font-bold">
                                        Facilitating knowledge management:
                                    </span>{" "}
                                    Organizing and managing knowledge in a way that is accessible
                                    and usable.
                                </li>
                                <li className="text-md text-muted-foreground">
                                    <span className="font-bold">Supporting decision-making:</span>{" "}
                                    Providing a basis for reasoning and decision-making within the
                                    system.
                                </li>
                            </ul>
                            <h3 className="text-md mb-2 mt-2 font-bold" id="q1-2">
                                Defining an Ontology for Secure Software Systems
                            </h3>
                            <p className="text-md text-muted-foreground mb-2 mt-2">
                                An ontology relevant to secure software systems could be defined
                                as follows:
                            </p>

                            <h4 className="text-md mb-2 mt-2 font-bold" id="concepts">
                                Concepts:
                            </h4>
                            <ul className="list-disc pl-6">
                                <li className="text-md text-muted-foreground">
                                    <span className="font-bold">Threat:</span> Potential dangers
                                    to the system (e.g., SQL injection, cross-site scripting).
                                </li>
                                <li className="text-md text-muted-foreground">
                                    <span className="font-bold">Vulnerability:</span> Weaknesses
                                    in the system that can be exploited by threats (e.g., weak
                                    authentication, insecure APIs).
                                </li>
                                <li className="text-md text-muted-foreground">
                                    <span className="font-bold">Asset:</span> Valuable components
                                    of the system that need protection (e.g., user data, system
                                    configurations).
                                </li>
                                <li className="text-md text-muted-foreground">
                                    <span className="font-bold">Control:</span> Measures
                                    implemented to mitigate risks (e.g., encryption, multi-factor
                                    authentication).
                                </li>
                                <li className="text-md text-muted-foreground">
                                    <span className="font-bold">Incident:</span> Security events
                                    that have occurred (e.g., data breach, unauthorized access).
                                </li>
                            </ul>
                            <h4 className="text-md mb-2 mt-2 font-bold" id="relationships">
                                Relationships:
                            </h4>
                            <ul className="list-disc pl-6">
                                <li className="text-md text-muted-foreground">
                                    <span className="font-bold">
                                        Threat exploits vulnerability:
                                    </span>{" "}
                                    A threat takes advantage of a vulnerability to compromise the
                                    system.
                                </li>
                                <li className="text-md text-muted-foreground">
                                    <span className="font-bold">Control mitigates threat:</span> A
                                    control reduces the risk posed by a threat.
                                </li>
                                <li className="text-md text-muted-foreground">
                                    <span className="font-bold">
                                        Asset is protected by control:
                                    </span>{" "}
                                    A control safeguards an asset from potential threats.
                                </li>
                                <li className="text-md text-muted-foreground">
                                    <span className="font-bold">Incident impacts asset:</span> An
                                    incident affects the integrity, availability, or
                                    confidentiality of an asset.
                                </li>
                            </ul>
                            <h4 className="text-md mb-2 mt-2 font-bold" id="rules">
                                Rules:
                            </h4>
                            <ul className="list-disc pl-6">
                                <li className="text-md text-muted-foreground">
                                    If a threat exploits a vulnerability, then an incident may
                                    occur.
                                </li>
                                <li className="text-md text-muted-foreground">
                                    If a control is in place, it can mitigate the threat and
                                    protect the asset.
                                </li>
                                <li className="text-md text-muted-foreground">
                                    An incident must be logged and analyzed to improve future
                                    controls.
                                </li>
                            </ul>
                            <p className="text-md text-muted-foreground mb-2 mt-2">
                                Ontologies provide a structured and formal way to represent
                                knowledge within a domain, making them invaluable in system
                                design. By defining an ontology for secure software systems, it
                                is possible to create a shared understanding of the key
                                concepts, relationships, and rules that govern security. This
                                ontology can enhance the design, implementation, and management
                                of secure software systems.
                            </p>

                            <div className="flex flex-col gap-4 mt-4" id="references">
                                <h4 className="text-lg font-bold w-5/6">References</h4>
                                <ul className="list-disc pl-6">
                                    <li className="text-md text-muted-foreground">
                                        MDPI. (2019). Managing Software Security Knowledge in
                                        Context: An Ontology Based Approach.{" "}
                                        <a
                                            href="https://www.mdpi.com/2078-2489/10/6/216"
                                            target="_blank"
                                        >
                                            https://www.mdpi.com/2078-2489/10/6/216
                                        </a>
                                    </li>
                                    <li className="text-md text-muted-foreground">
                                        (2023). [CyberSec] Semantic and Ontology in Cybersecurity.{" "}
                                        <a
                                            href="https://medium.com/@tribal.secberet/cybersec-semantic-and-ontology-in-cybersecurity-442646ae0c36"
                                            target="_blank"
                                        >
                                            https://medium.com/@tribal.secberet/cybersec-semantic-and-ontology-in-cybersecurity-442646ae0c36
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="q2">
                        <h2 className="text-2xl font-bold mb-2">
                            Developing an API for a Distributed Environment
                        </h2>
                        <Callout>
                            <p className="text-md text-muted-foreground mb-2">
                                In this session, you will create a RESTful API which can be used
                                to create and delete user records. Responses to the questions
                                should be recorded in your e-portfolio.
                            </p>

                            <p className="text-md text-muted-foreground mb-2">
                                You are advised to use these techniques to create an API for
                                your team’s submission in Unit 11 and be prepared to demonstrate
                                it during next week’s seminar (Unit 10). Remember that you can
                                arrange a session with the tutor during office hours for more
                                support, if required.
                            </p>

                            <p className="text-md text-muted-foreground mb-2">
                                Using the Jupyter Notebook workspace, create a file named{" "}
                                <code className="text-primary">api.py</code> and copy the following code into it (a copy
                                is provided for upload to Codio/GitHub): You can install{" "}
                                <code className="text-primary">Jupyter Notebook</code> on your local machine following
                                these instructions or via the University of Essex Software Hub.
                            </p>

                            {/* toggle code */}
                            <Collapsible>
                                <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent bg-background">
                                    <span>Show Code</span>
                                    <ChevronDown className="h-4 w-4" />
                                </CollapsibleTrigger>

                                <CollapsibleContent>
                                    <CodeBlock
                                        code={`
#source of code: Codeburst


from flask import Flask
from flask_restful import Api, Resource, reqparse
 
app = Flask(__name__)
api = Api(app)
 
users = [
    {
        "name": "James",
        "age": 30,
        "occupation": "Network Engineer"
    },
    {
        "name": "Ann",
        "age": 32,
        "occupation": "Doctor"
    },
    {
        "name": "Jason",
        "age": 22,
        "occupation": "Web Developer"
    }
]
 
class User(Resource):
    def get(self, name):
        for user in users:
            if(name == user["name"]):
                return user, 200
        return "User not found", 404
 
    def post(self, name):
        parser = reqparse.RequestParser()
        parser.add_argument("age")
        parser.add_argument("occupation")
        args = parser.parse_args()
 
        for user in users:
            if(name == user["name"]):
                return "User with name {} already exists".format(name), 400
 
        user = {
            "name": name,
            "age": args["age"],
            "occupation": args["occupation"]
        }
        users.append(user)
        return user, 201
 
    def put(self, name):
        parser = reqparse.RequestParser()
        parser.add_argument("age")
        parser.add_argument("occupation")
        args = parser.parse_args()
 
        for user in users:
            if(name == user["name"]):
                user["age"] = args["age"]
                user["occupation"] = args["occupation"]
                return user, 200
        
        user = {
            "name": name,
            "age": args["age"],
            "occupation": args["occupation"]
        }
        users.append(user)
        return user, 201
 
    def delete(self, name):
        global users
        users = [user for user in users if user["name"] != name]
        return "{} is deleted.".format(name), 200
      
api.add_resource(User, "/user/<string:name>")
 
app.run(debug=True)`}
                                    />
                                </CollapsibleContent>
                            </Collapsible>
                        </Callout>

                                            {/* 
Question 1
Run the API.py code. Take a screenshot of the terminal output. What command did you use to compile and run the code?

Question 2
Run the following command at the terminal prompt: w3m http://127.0.0.1:5000/user/Ann

What happens when this command is run, and why?

Question 3
Run the following command at the terminal prompt: w3m http://127.0.0.1:5000/user/Adam

What happens when this command is run, and why?

Question 4
What capability is achieved by the flask library?
                                            
                                            */}
                        <div id="q2-1" className="mt-4 mb-4">
                            <Callout title="Question 1">
                                <p className="text-md text-muted-foreground mb-2">Run the API.py code. Take a screenshot of the terminal output. What command did you use to compile and run the code?</p>
                            </Callout>

                            <Collapsible className="mt-4 mb-4">
                                <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent bg-background">
                                    <span>Show Screenshot</span>
                                    <ChevronDown className="h-4 w-4" />
                                </CollapsibleTrigger>

                                <CollapsibleContent>
                                    <p className="pl-4 mt-2 text-md text-muted-foreground mb-2">What command did you use to compile and run the code? <code className="text-primary">python api.py</code></p>
                                    <NextImage src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/module-2/unit-7/api-screenshot.png`} alt="API Screenshot" width={600} height={600} className="m-auto" />
                                </CollapsibleContent>   
                            </Collapsible>
                        </div>

                        <br />
                        <hr />
                        <br />

                        <div id="q2-2">
                            <Callout title="Question 2">
                                <p className="text-md text-muted-foreground mb-2">Run the following command at the terminal prompt: <small><code className="text-primary">w3m http://127.0.0.1:5000/user/Ann</code></small></p>
                                <p className="text-md text-muted-foreground mb-2">What happens when this command is run, and why?</p>
                            </Callout>

                            <CodeBlock
                                className="mt-4 mb-4"
                                language="json"
                                code={`{
    "name": "Ann",
    "age": 32,
    "occupation": "Doctor"
}`}
                            />
                            <ul className="list-disc pl-6">
                                <li className="text-md text-muted-foreground mb-2">Returns Ann's user record (HTTP <code className="text-primary">200</code>) with her age and occupation.</li>
                                <li className="text-md text-muted-foreground mb-2">The <code className="text-primary">GET</code> method in the <code className="text-primary">User</code> class finds a match for "name": "Ann" in the users list and returns the data.</li>
                            </ul>
                        </div>

                        <br />
                        <hr />
                        <br />

                        <div id="q2-3">
                            <Callout title="Question 3">
                                <p className="text-md text-muted-foreground mb-2">Run the following command at the terminal prompt: <small><code className="text-primary">w3m http://127.0.0.1:5000/user/Adam</code></small></p>

                                <p className="text-md text-muted-foreground mb-2">What happens when this command is run, and why?</p>
                            </Callout>

                            <CodeBlock
                                className="mt-4 mb-4"
                                language="json"
                                code={`"User not found"`}
                            />
                            <ul className="list-disc pl-6">
                                <li className="text-md text-muted-foreground mb-2">Returns "User not found" (HTTP <code className="text-primary">404</code>).</li>
                                <li className="text-md text-muted-foreground mb-2">The <code className="text-primary">GET</code> method iterates through users but finds no entry for "Adam", triggering the <code className="text-primary">404</code> response.</li>
                            </ul>
                        </div>

                        <br />
                        <hr />
                        <br />

                        <div id="q2-4">
                            <Callout title="Question 4">
                                <p className="text-md text-muted-foreground mb-2">What capability is achieved by the flask library?</p>
                            </Callout>

                            <p className="text-md text-muted-foreground mb-2 mt-2">Flask enables the creation of RESTful APIs with minimal setup. Specifically:</p>

                            <ul className="list-disc pl-6">
                                <li className="text-md text-muted-foreground mb-2">Routing: Maps URLs (e.g., <code className="text-primary">{"/user/<name>"}</code>) to Python functions.</li>
                                <li className="text-md text-muted-foreground mb-2">HTTP methods: Handles <code className="text-primary">GET</code>, <code className="text-primary">POST</code>, <code className="text-primary">PUT</code>, and <code className="text-primary">DELETE</code> requests via Resource class methods.</li>
                                <li className="text-md text-muted-foreground mb-2">Request parsing: Extracts data from requests (e.g., <code className="text-primary">age</code>, <code className="text-primary">occupation</code>) using <code className="text-primary">reqparse</code>.</li>
                                <li className="text-md text-muted-foreground mb-2">Response handling: Returns structured data (<code className="text-primary">JSON</code>) with HTTP status codes (e.g., <code className="text-primary">200</code>, <code className="text-primary">404</code>).</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <TableOfContents
                items={[
                    {
                        id: "q1",
                        title: "What is an Ontology?",
                        level: "h2",
                    },
                    {
                        id: "q1-2",
                        title: "Defining an Ontology for Secure Software Systems",
                        level: "h2",
                    },
                    {
                        id: "concepts",
                        title: "Concepts",
                        level: "h3",
                    },
                    {
                        id: "relationships",
                        title: "Relationships",
                        level: "h3",
                    },
                    {
                        id: "rules",
                        title: "Rules",
                        level: "h3",
                    },
                    {
                        id: "references",
                        title: "References",
                        level: "h2",
                    },
                    {
                        id: "q2",
                        title: "Developing an API for a Distributed Environment",
                        level: "h2",
                    },
                ]}
            />
        </div>
    );
}
