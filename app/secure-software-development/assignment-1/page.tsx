"use client";

import { TableOfContents } from "@/components/table-of-content";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Callout } from "@/components/ui/callout";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronDown, ChevronRight, Home } from "lucide-react";

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
                  <BreadcrumbPage>
                    Assignment 1: Team Project
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="relative mt-4">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
              <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                <h1 className="text-2xl font-bold mb-2">
                  Assignment 1: Team Project: Design Document
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 w-5/6" id="system-design">
          <div className="flex flex-col gap-4">
            <Callout title="Assignment Brief">
              <p className="mb-2">
                For this assessment, you are advised to position yourself and
                your team as software system designers that will ultimately
                respond to a legitimate system user and a hacker.
              </p>

              <p className="mb-2">
                You are required to firstly develop a secure application, for
                either one of a school (Falana et al., 2021), online retailer
                (D’Adamo et al., 2021), or the international space station
                (Pipikaite et al., 2022). The system’s capabilities should be
                tailored to the specific needs of the chosen domain.
              </p>

              <p className="mb-2">Application requirements:</p>

              <Collapsible>
                <CollapsibleTrigger>
                  <p className="mb-2 flex items-center text-muted-foreground">
                    The agreed criteria for successful development are
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </p>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="list-disc pl-4 pr-4 text-muted-foreground">
                    <li>
                      The application should be developed using the Python
                      programming language.
                    </li>
                    <li>
                      The data repository should be created in Python. You are
                      required to use at least three different structures to
                      store the data within the data repository.
                    </li>
                    <li>
                      The application should be accessed via a terminal, using a
                      Command Line Interface as the User Interface.
                    </li>
                    <li>
                      All functionality of the system should adhere to GDPR
                      (anon, n.d.a).
                    </li>
                    <li>
                      The system should be designed so that a design pattern may
                      be applied.
                    </li>
                    <li>
                      Mechanisms should be deployed to minimise the attack
                      surface of the solution. At a minimum, the application
                      should include authentication, authorisation, data
                      encryption and event monitoring. Capabilities should also
                      be enabled to protect against the hacker attacks (details
                      below).
                    </li>
                    <li>
                      The system should support ability to turn secure
                      capability on and off.
                    </li>
                    <li>
                      Object-oriented programming practices should be used.
                    </li>
                    <li>
                      Write unit tests to examine the effectiveness and
                      completeness of your programme. These should be integrated
                      as part of a testing suite, additionally including system,
                      integration, and user acceptance.
                    </li>
                    <li>
                      At least one API should be used to support system
                      functionality.
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <CollapsibleTrigger>
                  <p className="mb-2 flex items-center text-muted-foreground">
                    Legitimate User Requirements
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </p>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="list-disc pl-4 pr-4 text-muted-foreground">
                    <li>
                      A user should have ability to perform CRUD functions
                      (anon, no date).
                    </li>
                    <li>A user should be able to create a secure account.</li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <CollapsibleTrigger>
                  <p className="mb-2 flex items-center text-muted-foreground">
                    Hacker Requirements
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </p>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="list-disc pl-4 pr-4 text-muted-foreground">
                    <li>
                      A hacker should have the ability to carry out a brute
                      force attack on the local network system.
                    </li>
                    <li>
                      A hacker should be able to carry out a Denial of Service
                      attack on the local network system.
                    </li>
                    <li>
                      A hacker should be able to carry out an API injection
                      attack (Sani et al., 2022).
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              <p className="mb-2 mt-2 text-muted-foreground">
                The overall goal of the system is to be able to turn security on
                from the command line user interface and prove that the system
                is secure against brute force, Denial of Service, and API
                injection attacks. The system should therefore also be able to
                be run with security turned off.
              </p>
            </Callout>
          </div>
        </div>

        <div className="space-y-4 w-5/6" id="learning-outcomes">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-2">Learning Outcomes</h3>
            <ul className="list-disc pl-4 pr-4">
              <li className="text-md text-muted-foreground mb-2">
                Identified and mitigated security risks in a real-world software
                development context using frameworks such as OWASP Top 10.
              </li>
              <li className="text-md text-muted-foreground mb-2">
                Applied object-oriented design and secure coding practices to a
                system concept tailored to the online retail domain.
              </li>
              <li className="text-md text-muted-foreground mb-2">
                Produced and interpreted UML diagrams including class and misuse
                activity diagrams to support secure system design.
              </li>
              <li className="text-md text-muted-foreground mb-2">
                Demonstrated the ability to work collaboratively within a
                virtual development team to produce a coherent, technically
                sound design proposal.
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="space-y-4 w-5/6" id="reflection">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-2">Reflection</h3>
            <p className="text-md text-muted-foreground">
              This assignment was both collaborative and deeply technical,
              requiring a holistic understanding of secure system design.
              Working in a team to conceptualize and plan a secure CLI-based
              e-commerce system provided insight into how application
              architecture, cybersecurity, and user experience must align in
              software projects.
            </p>
            <p className="text-md text-muted-foreground">
              Our choice of an online retail platform brought clear challenges:
              the system needed to facilitate sensitive operations such as user
              authentication and order placement, while also defending against
              prevalent cyber threats. Designing mitigations for brute-force and
              API injection attacks required us to explore and implement
              practical controls like bcrypt password hashing, PyOTP for
              two-factor authentication, and strict input validation.
            </p>

            <p className="text-md text-muted-foreground">
              The class diagram helped define system structure and object
              relationships, while the misuse diagram encouraged us to think
              from a hacker's perspective, reinforcing the value of threat
              modeling. Personally, this assignment deepened my understanding of
              balancing functional requirements with security imperatives.
            </p>
          </div>
        </div> */}

        <div className="space-y-4 w-5/6" id="reflection">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-2">Reflection</h3>
            <p className="text-md text-muted-foreground mb-2">
              This assignment was both collaborative and technically
              challenging, offering a well-rounded experience of secure system
              design. Our group of four (intially five) came together early via
              WhatsApp after Arianna reached out, and we quickly established a
              supportive working environment. We didn't assign formal roles,
              instead, we all contributed equally across the project. That
              approach worked particularly well given our small team size, and
              everyone pulled their weight throughout the process.
            </p>

            <p className="text-md text-muted-foreground mb-2">
              We pre-scheduled Zoom calls for our design discussions and system
              diagrams. When I had to miss one meeting due to a work commitment,
              the team was understanding and even offered to reschedule, a
              gesture that reflected how seriously we all took shared ownership.
            </p>

            <p className="text-md text-muted-foreground mb-2">
              As a team, we selected an online retail system and focused on
              integrating key security mechanisms such as authentication,
              authorisation, data encryption, and logging. We collaborated on
              the class and misuse diagrams, using them to define roles, flows,
              and threat surfaces.
            </p>

            <p className="text-md text-muted-foreground mb-2">
              For the design document, we split the writing equally, reviewed
              each other's sections, and ensured consistency throughout. The
              final output was shaped not just by technical considerations, but
              by strong collaboration, adaptability, and a mutual respect for
              deadlines and quality.
            </p>

            <p className="text-md text-muted-foreground mb-2">
              This assignment significantly deepened my understanding of secure
              software architecture. It also highlighted the practical
              importance of soft skills, especially in virtual teams, to drive a
              project forward.
            </p>
          </div>
        </div>

        <div className="space-y-4 w-5/6" id="resources">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-2">Resources</h3>

            <ul className="list-disc pl-6">
              <li className="text-md text-muted-foreground">
                <a
                  href="https://github.com/ImraanMeyer/online_retailer_designs/blob/main/README.MD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UML diagrams
                </a>
              </li>
              <li className="text-md text-muted-foreground">
                <a
                  href="https://github.com/ImraanMeyer/online_retailer_designs/blob/main/pdf/Secure_Software_Development_Group_Project_Design_Document.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Design document
                </a>
              </li>
              <li className="text-md text-muted-foreground">
                <a
                  href="https://drive.google.com/drive/folders/160wB2bfkFij_KklEQdP9EClO49mwbbuk?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meeting minutes and recordings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <TableOfContents
        items={[
          { id: "system-design", title: "System Design", level: "h2" },
          { id: "learning-outcomes", title: "Learning Outcomes", level: "h3" },
          { id: "reflection", title: "Reflection", level: "h3" },
          { id: "resources", title: "Resources", level: "h3" },
        ]}
      />
    </div>
  );
}
