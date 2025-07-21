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
                    href={`${
                      process.env.NEXT_PUBLIC_BASE_PATH || ""
                    }/secure-software-development`}
                  >
                    Secure Software Development
                  </BreadcrumbLink>
                  <ChevronRight className="h-4 w-4" />
                  <BreadcrumbPage>Unit 3</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="relative mt-4">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
              <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                <h1 className="text-2xl font-bold mb-2">
                  Unit 3: Programming Languages: History, Concepts & Design
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 w-5/6" id="discussion">
          <h2 className="text-xl font-bold mb-2">Discussion</h2>

          <Callout>
            <p className="text-md text-muted-foreground">
              You should read Cifuentes & Bierman (2019) and then answer the
              questions below, adding them as evidence your e-portfolio.
            </p>
            <br />
            <ul className="list-disc pl-6">
              <li className="text-md text-muted-foreground">
                What factors determine whether a programming language is secure
                or not?
              </li>
              <li className="text-md text-muted-foreground">
                Could Python be classed as a secure language? Justify your
                answer.
              </li>
              <li className="text-md text-muted-foreground">
                Python would be a better language to create operating systems
                than C. Discuss.
              </li>
            </ul>
          </Callout>

          <br />

          <div id="q1">
            <h3 className="text-lg font-bold w-5/6 mb-4">
              What factors determine whether a programming language is secure or
              not?
            </h3>
            <br />
            <p className="text-md text-muted-foreground">
              A secure programming language is one that helps prevent, detect,
              or mitigate security vulnerabilities at the language level.
              According to Cifuentes and Bierman (2019), security in a
              programming language is influenced by several factors:
            </p>
            <br />
            <ol className="list-decimal pl-6">
              <li className="text-md text-muted-foreground">
                Memory safety: Prevents issues like buffer overflows and
                use-after-free bugs, common in low-level languages like C and
                C++.
              </li>
              <li className="text-md text-muted-foreground">
                Type safety: Ensures that variables are used consistently
                according to their defined types, reducing chances of injection
                attacks and undefined behaviour.
              </li>
              <li className="text-md text-muted-foreground">
                Formal semantics and verification: Languages with formally
                defined semantics allow the use of verification tools to prove
                the absence of certain classes of bugs.
              </li>
              <li className="text-md text-muted-foreground">
                Concurrency safety: Includes features that help avoid race
                conditions and deadlocks.
              </li>
              <li className="text-md text-muted-foreground">
                Safe defaults and sandboxing: Prevents unintended access to
                system-level resources by default.
              </li>
            </ol>
            <br />

            <p className="text-md text-muted-foreground">
              These features collectively help restrict the impact of insecure
              code and make vulnerabilities easier to reason about and detect.
            </p>
          </div>

          <br />
          <hr />
          <br />

          <div id="q2">
            <h3 className="text-lg font-bold w-5/6 mb-4">
              Could Python be classed as a secure language? Justify your answer.
            </h3>
            <br />
            <p className="text-md text-muted-foreground">
              Python can be considered a relatively secure language,
              particularly when compared with low-level alternatives. It
              provides memory safety (via abstraction), strong dynamic typing,
              and safe defaults that reduce the likelihood of certain critical
              vulnerabilities such as buffer overflows. Python also includes
              extensive standard libraries that prevent developers from needing
              to implement low-level functionality insecurely.
            </p>
            <br />
            <p className="text-md text-muted-foreground">
              However, Python does have limitations:
            </p>
            <ul className="list-disc pl-6">
              <li className="text-md text-muted-foreground">
                It lacks compile-time guarantees, so many errors can only be
                detected at runtime.
              </li>
              <li className="text-md text-muted-foreground">
                It permits dynamic code execution via{" "}
                <code className="text-primary">eval()</code> and{" "}
                <code className="text-primary">exec()</code>, which can be
                exploited if used improperly.
              </li>
              <li className="text-md text-muted-foreground">
                It is not formally verifiable at the language level in the way
                that some modern languages (e.g. Rust) aim to be.
              </li>
            </ul>
            <br />
            <p className="text-md text-muted-foreground">
              Thus, Python is secure for many applications when best practices
              are followed, but the language itself does not prevent developers
              from writing insecure code.
            </p>
          </div>

          <br />
          <hr />
          <br />

          <div className="q3">
            <h3 className="text-lg font-bold w-5/6 mb-4">
              Python would be a better language to create operating systems than
              C. Discuss.
            </h3>
            <br />
            <p className="text-md text-muted-foreground mb-4">
              Python offers benefits like ease of use, maintainability, and
              fewer memory management bugs, features that are desirable in
              secure software development. However, for operating system (OS)
              development, C remains the dominant language for valid reasons.
            </p>

            <p className="text-md text-muted-foreground mb-4">
              C allows direct access to hardware, fine-tuned performance
              optimisation, and precise memory control, all of which are
              critical for writing OS kernels and device drivers. In contrast,
              Python runs on an interpreter and requires a virtual machine or an
              underlying OS to function, making it unsuitable as a systems-level
              language.
            </p>

            <p className="text-md text-muted-foreground mb-4">
              While research exists on writing OS components or scripting parts
              in Python, it cannot replace{" "}
              C at the core OS level. The
              trade-off is between safety and control, as Python abstracts too
              much for the low-level work needed in operating systems.
            </p>

            <p className="text-md text-muted-foreground mb-4">
              While Python may improve developer productivity and reduce certain
              vulnerabilities, it is not a better choice than{" "}
              C for OS development due to
              its high-level nature and dependence on runtime environments.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-4" id="references">
            <h4 className="text-lg font-bold w-5/6">References</h4>
            <ul className="list-disc pl-6">
              <li className="text-md text-muted-foreground mb-4">
                Cifuentes, C., & Bierman, G. (2019). What is a secure
                programming language? In: Proceedings of the 2nd Summit on
                Advances in Programming Languages (SNAPL 2019). Schloss
                Dagstuhl-Leibniz-Zentrum fuer Informatik.{" "}
                <a
                  href="https://doi.org/10.4230/LIPIcs.SNAPL.2019.3"
                  target="_blank"
                >
                  https://doi.org/10.4230/LIPIcs.SNAPL.2019.3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <TableOfContents
        items={[
          { id: "discussion", title: "Discussion", level: "h2" },
          {
            id: "q1",
            title:
              "What factors determine whether a programming language is secure or not?",
            level: "h3",
          },
          {
            id: "q2",
            title:
              "Could Python be classed as a secure language? Justify your answer.",
            level: "h3",
          },
          {
            id: "q3",
            title:
              "Python would be a better language to create operating systems than C. Discuss.",
            level: "h3",
          },
          { id: "references", title: "References", level: "h2" },
        ]}
      />
    </div>
  );
}
