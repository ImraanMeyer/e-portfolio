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
                  <BreadcrumbPage>Unit 4</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="relative mt-4">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
              <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                <h1 className="text-2xl font-bold mb-2">
                  Unit 4: Exploring Programming Language Concepts
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 w-5/6" id="discussion">
          <Callout>
            <p className="text-md text-muted-foreground">
              Read Weidman (no date) then answer the questions below, adding
              them as evidence to your e-portfolio. You may want to complete
              this activity in conjunction with or after completing Seminar 2
              preparation.
            </p>
            <br />
            <ul className="list-disc pl-6">
              <li className="text-md text-muted-foreground">
                What is Evil Regex?
              </li>
              <li className="text-md text-muted-foreground">
                What are the common problems associated with the use of regex?
                How can these be mitigated?
              </li>
              <li className="text-md text-muted-foreground">
                How and why could regex be used as part of a security solution?
              </li>
            </ul>
          </Callout>

          <br />
          <h2 className="text-xl font-bold mb-2">
            Understanding Evil Regex and Its Implications in Security
          </h2>

          <div id="q1">
            <h3 className="text-lg font-bold mb-2">What is Evil Regex?</h3>

            <p className="text-md text-muted-foreground">
              Evil Regex refers to a regular expression that can cause
              catastrophic backtracking, leading to significant performance
              degradation or even denial of service (DoS) attacks. These regex
              patterns are typically complex and involve nested quantifiers that
              can exponentially increase the number of possible matches, causing
              the regex engine to consume excessive resources.
            </p>
          </div>

          <br />
          <hr />
          <br />
          <div id="q2">
            <h3 className="text-lg font-bold mb-2">
              Common Problems and Mitigation Strategies for Regex
            </h3>

            <h4 className="text-lg font-bold mb-2" id="common-problems">Common Problems</h4>

            <ol className="list-decimal pl-6">
              <li className="text-md text-muted-foreground">
                <span className="font-bold">Catastrophic Backtracking:</span> As mentioned, certain regex patterns
                can lead to excessive backtracking, causing the system to hang
                or crash.
              </li>
              <li className="text-md text-muted-foreground">
                <span className="font-bold">Complexity and Readability:</span> Regex can be difficult to write,
                read, and maintain, especially for those who are not familiar
                with its syntax.
              </li>
              <li className="text-md text-muted-foreground">
                <span className="font-bold">Security Vulnerabilities:</span> Poorly designed regex can introduce
                security vulnerabilities, such as ReDoS (Regular Expression
                Denial of Service) attacks.
              </li>
              <li className="text-md text-muted-foreground">
                <span className="font-bold">Performance Issues:</span> Inefficient regex patterns can slow down
                applications, especially when processing large inputs.
              </li>
            </ol>

            <br />

            <h4 className="text-lg font-bold mb-2" id="mitigation-strategies">
              Mitigation Strategies
            </h4>

            <ol className="list-decimal pl-6">
              <li className="text-md text-muted-foreground">
                <span className="font-bold">Simplify Regex Patterns:</span> Avoid using nested quantifiers and
                overly complex patterns. Break down complex regex into simpler,
                more manageable components.
              </li>
              <li className="text-md text-muted-foreground">
                <span className="font-bold">Use Non-Greedy Quantifiers:</span> Non-greedy quantifiers can reduce
                the amount of backtracking by matching the shortest possible
                string.
              </li>
              <li className="text-md text-muted-foreground">
                <span className="font-bold">Limit Input Size:</span> Restrict the length of input strings to reduce
                the potential for excessive backtracking.
              </li>
              <li className="text-md text-muted-foreground">
                <span className="font-bold">Testing and Profiling:</span> Regularly test and profile regex patterns
                to identify and mitigate performance bottlenecks.
              </li>
              <li className="text-md text-muted-foreground">
                <span className="font-bold">Use Libraries and Tools:</span> Leverage libraries and tools designed
                to optimize and validate regex patterns.
              </li>
            </ol>
          </div>
          <br />
          <hr />
          <br />

          <div id="q3">
            <h3 className="text-lg font-bold mb-2">
              How and Why Could Regex Be Used as Part of a Security Solution?
            </h3>

            <p className="text-md text-muted-foreground">
              Regex can be a powerful tool in security solutions when used
              correctly. It can be employed to:
            </p>

            <ul className="list-disc pl-6">
              <li className="text-md text-muted-foreground">
                <span className="font-bold">Input Validation:</span> Ensure that user inputs conform to expected
                formats, preventing injection attacks and other malicious
                inputs.
              </li>
              <li className="text-md text-muted-foreground">
                <span className="font-bold">Pattern Matching:</span> Detect and block known malicious patterns in
                data, such as SQL injection attempts or cross-site scripting
                (XSS) payloads.
              </li>
              <li className="text-md text-muted-foreground">
                <span className="font-bold">Log Analysis:</span> Parse and analyze logs to identify suspicious
                activities or patterns indicative of security breaches.
              </li>
              <li className="text-md text-muted-foreground">
                <span className="font-bold">Data Sanitization:</span> Cleanse data by removing or escaping
                potentially harmful characters before processing or storage.
              </li>
            </ul>
          </div>

          <br />

          <div className="flex flex-col gap-4 mt-4" id="references">
            <h4 className="text-lg font-bold w-5/6">References</h4>
            <ul className="list-disc pl-6">
              <li className="text-md text-muted-foreground mb-4">
                Weidman, A. (no date). Understanding Evil Regex and Its Implications in Security. 
                <a href="https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS" target="_blank">
                  https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <TableOfContents items={[
        {
          id: "discussion",
          title: "Discussion",
          level: "h2"
        },
        {
          id: "q1",
          title: "What is Evil Regex?",
          level: "h3"
        },
        {
          id: "q2",
          title: "Common Problems and Mitigation Strategies for Regex",
          level: "h3"
        },
        {
          id: "common-problems",
          title: "Common Problems",
          level: "h4"
        },
        {
          id: "mitigation-strategies",
          title: "Mitigation Strategies",
          level: "h4"
        },
        {
          id: "q3",
          title: "How and Why Could Regex Be Used as Part of a Security Solution?",
          level: "h3"
        },
        {
          id: "references",
          title: "References",
          level: "h2"
        }
      ]} />
    </div>
  );
}
