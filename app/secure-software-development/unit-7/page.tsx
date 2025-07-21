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
                    href={`${
                      process.env.NEXT_PUBLIC_BASE_PATH || ""
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
            <Callout className="text-muted-foreground">
              What do you understand about the ontology that has been presented
              for your reading this week? Could you attempt to define an
              ontology that would be relevant to the system that you are
              designing for the summative assessment?
            </Callout>

            <div id="q1-answer" className="mt-4">
              <p className="text-md text-muted-foreground mb-2">
                From my understanding, an ontology is essentially a structured
                way to define and organize the key concepts within a specific
                area, in our case, a software system. It's not just about listing
                terms, but also about explaining how they relate to each other.
                This helps everyone working on a system have a shared language
                and understanding of what things mean, how they connect, and
                what rules apply.
              </p>
              <p className="text-md mt-2 text-muted-foreground mb-2">
                In the context of this module, the ontology we looked at focuses
                on cybersecurity. It identifies important concepts like threats,
                vulnerabilities, assets, and controls, and then maps out how
                they interact. For example, a threat (like a brute force attack)
                could exploit a vulnerability (such as weak password policies),
                which puts an asset (like user credentials) at risk. A control
                (e.g. multi-factor authentication) can help mitigate that
                threat.
              </p>
              <p className="text-md mt-2 text-muted-foreground mb-2">
                For the system we designed in this module, a secure e-commerce
                CLI app, we could define a simple ontology along similar lines:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>
                  <span className="text-primary">Threats:</span> things like SQL injection, brute force login
                  attempts, session hijacking.
                </li>
                <li>
                  <span className="text-primary">Vulnerabilities:</span> weak passwords, lack of rate limiting,
                  missing input validation.
                </li>
                <li><span className="text-primary">Assets:</span> user data, admin privileges, order records.</li>
                <li>
                  <span className="text-primary">Controls:</span> bcrypt for hashing, PyOTP for 2FA.
                </li>
                <li>
                  <span className="text-primary">Incidents:</span> unauthorized access attempts, lockout triggers,
                  audit log entries.
                </li>
              </ul>
              <p className="text-md mt-2 text-muted-foreground mb-2">
                The relationships might look something like:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li><span className="text-primary">Threats</span> exploit <span className="text-primary">vulnerabilities</span></li>
                <li><span className="text-primary">Controls</span> protect <span className="text-primary">assets</span> or mitigate <span className="text-primary">threats</span></li>
                <li><span className="text-primary">Incidents</span> affect <span className="text-primary">assets</span> and should trigger <span className="text-primary">controls</span></li>
              </ul>
              <p className="text-md mt-2 text-muted-foreground mb-2">
                Having this kind of structured view helps make security less
                abstract and more actionable, especially when trying to justify
                why certain features (like session encryption or lockouts) are
                worth the development effort.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-4" id="references">
              <h4 className="text-lg font-bold w-5/6">References</h4>
              <ul className="list-disc pl-6">
                <li className="text-md text-muted-foreground">
                  MDPI. (2019). Managing Software Security Knowledge in Context:
                  An Ontology Based Approach.{" "}
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
                <code className="text-primary">api.py</code> and copy the
                following code into it (a copy is provided for upload to
                Codio/GitHub): You can install{" "}
                <code className="text-primary">Jupyter Notebook</code> on your
                local machine following these instructions or via the University
                of Essex Software Hub.
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
                <p className="text-md text-muted-foreground mb-2">
                  Run the API.py code. Take a screenshot of the terminal output.
                  What command did you use to compile and run the code?
                </p>
              </Callout>

              <Collapsible className="mt-4 mb-4">
                <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent bg-background">
                  <span>Show Screenshot</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <p className="pl-4 mt-2 text-md text-muted-foreground mb-2">
                    What command did you use to compile and run the code?{" "}
                    <code className="text-primary">python api.py</code>
                  </p>
                  <NextImage
                    src={`${
                      process.env.NEXT_PUBLIC_BASE_PATH || ""
                    }/images/module-2/unit-7/api-screenshot.png`}
                    alt="API Screenshot"
                    width={600}
                    height={600}
                    className="m-auto"
                  />
                </CollapsibleContent>
              </Collapsible>
            </div>

            <br />
            <hr />
            <br />

            <div id="q2-2">
              <Callout title="Question 2">
                <p className="text-md text-muted-foreground mb-2">
                  Run the following command at the terminal prompt:{" "}
                  <small>
                    <code className="text-primary">
                      w3m http://127.0.0.1:5000/user/Ann
                    </code>
                  </small>
                </p>
                <p className="text-md text-muted-foreground mb-2">
                  What happens when this command is run, and why?
                </p>
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
                <li className="text-md text-muted-foreground mb-2">
                  Returns Ann's user record (HTTP{" "}
                  <code className="text-primary">200</code>) with her age and
                  occupation.
                </li>
                <li className="text-md text-muted-foreground mb-2">
                  The <code className="text-primary">GET</code> method in the{" "}
                  <code className="text-primary">User</code> class finds a match
                  for "name": "Ann" in the users list and returns the data.
                </li>
              </ul>
            </div>

            <br />
            <hr />
            <br />

            <div id="q2-3">
              <Callout title="Question 3">
                <p className="text-md text-muted-foreground mb-2">
                  Run the following command at the terminal prompt:{" "}
                  <small>
                    <code className="text-primary">
                      w3m http://127.0.0.1:5000/user/Adam
                    </code>
                  </small>
                </p>

                <p className="text-md text-muted-foreground mb-2">
                  What happens when this command is run, and why?
                </p>
              </Callout>

              <CodeBlock
                className="mt-4 mb-4"
                language="json"
                code={`"User not found"`}
              />
              <ul className="list-disc pl-6">
                <li className="text-md text-muted-foreground mb-2">
                  Returns "User not found" (HTTP{" "}
                  <code className="text-primary">404</code>).
                </li>
                <li className="text-md text-muted-foreground mb-2">
                  The <code className="text-primary">GET</code> method iterates
                  through users but finds no entry for "Adam", triggering the{" "}
                  <code className="text-primary">404</code> response.
                </li>
              </ul>
            </div>

            <br />
            <hr />
            <br />

            <div id="q2-4">
              <Callout title="Question 4">
                <p className="text-md text-muted-foreground mb-2">
                  What capability is achieved by the flask library?
                </p>
              </Callout>

              <p className="text-md text-muted-foreground mb-2 mt-2">
                Flask enables the creation of RESTful APIs with minimal setup.
                Specifically:
              </p>

              <ul className="list-disc pl-6">
                <li className="text-md text-muted-foreground mb-2">
                  Routing: Maps URLs (e.g.,{" "}
                  <code className="text-primary">{"/user/<name>"}</code>) to
                  Python functions.
                </li>
                <li className="text-md text-muted-foreground mb-2">
                  HTTP methods: Handles{" "}
                  <code className="text-primary">GET</code>,{" "}
                  <code className="text-primary">POST</code>,{" "}
                  <code className="text-primary">PUT</code>, and{" "}
                  <code className="text-primary">DELETE</code> requests via
                  Resource class methods.
                </li>
                <li className="text-md text-muted-foreground mb-2">
                  Request parsing: Extracts data from requests (e.g.,{" "}
                  <code className="text-primary">age</code>,{" "}
                  <code className="text-primary">occupation</code>) using{" "}
                  <code className="text-primary">reqparse</code>.
                </li>
                <li className="text-md text-muted-foreground mb-2">
                  Response handling: Returns structured data (
                  <code className="text-primary">JSON</code>) with HTTP status
                  codes (e.g., <code className="text-primary">200</code>,{" "}
                  <code className="text-primary">404</code>).
                </li>
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
