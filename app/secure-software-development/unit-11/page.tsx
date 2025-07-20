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
                    href={`${
                      process.env.NEXT_PUBLIC_BASE_PATH || ""
                    }/secure-software-development`}
                  >
                    Secure Software Development
                  </BreadcrumbLink>
                  <ChevronRight className="h-4 w-4" />
                  <BreadcrumbPage>Unit 11</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="relative mt-4">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
              <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                <h1 className="text-2xl font-bold mb-2">
                  Unit 11: Future Trends in Secure Software Development
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 w-5/6">
          <Callout>
            <p className="text-md text-muted-foreground mb-4">
              Read the following books:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="text-md text-muted-foreground">
                Valente, M.T. (2024) Software Engineering: A Modern Approach
                (Chapters 7.1 and 7.4).
              </li>
              <li className="text-md text-muted-foreground">
                Gandhi, R., Richards, M. and Ford, N. (2024) Head First Software
                Architecture (Chapters 8 and 10).
              </li>
            </ul>
            <p className="text-md text-muted-foreground mb-4">
              The forum has a message that says: “Torvalds has been proven wrong
              and it only took nearly thirty years. Microservices and
              microkernels are the future. “
            </p>

            <p className="text-md text-muted-foreground mb-4">
              On the forum post a message either agreeing or disagreeing with
              the above and give a justification (ideally with an academic
              reference) supporting your view.
            </p>
          </Callout>

          <div id="initial-post">
            <h3 className="text-lg font-bold mb-2">Initial Post</h3>
            <p className="text-md text-muted-foreground mb-4">
              While some argue that modern developments, such as microservices
              and microkernels, have rendered Linus Torvalds' monolithic
              philosophy obsolete, this view oversimplifies the evolution of
              software architecture. I disagree with the claim that "Torvalds
              has been proven wrong," or that microservices and microkernels are
              inevitably "the future."
            </p>

            <p className="text-md text-muted-foreground mb-4">
              Both approaches introduce significant complexity. Gandhi,
              Richards, and Ford (2024) show that microservices often suffer
              from network, data, and security latency. They identify several
              pieces of "kryptonite" including complex workflows, monolithic
              databases that can't be broken apart, and performance degradation
              when microservices communicate heavily with each other. Similarly,
              the HongMeng microkernel case study demonstrates that even
              commercial implementations require significant design trade-offs
              to manage distributed performance challenges, with IPC frequency
              increasing dramatically in emerging scenarios like smartphones
              (Chen et al., 2024).
            </p>

            <p className="text-md text-muted-foreground mb-4">
              Valente (2024) highlights that microservices are more complex than
              monoliths due to the inherent challenges of distributed systems.
              Gandhi et al. (2024) describe them as one of the most demanding
              architectural styles, requiring thoughtful decisions about
              granularity, transactions, and orchestration. These factors limit
              their suitability for all projects, showing that microservices are
              not a one-size-fits-all solution.
            </p>

            <p className="text-md text-muted-foreground mb-4">
              Architecture is often shaped more by organisational structure than
              technical necessity. Valente (2024) observes that large tech
              companies with distributed teams tend to favour microservices,
              reflecting Conway's Law. Gandhi et al. (2024) make a similar point
              about microkernels, noting they work best when system volatility
              is well-defined and when the core remains stable while plugins
              handle customisation.
            </p>

            <p className="text-md text-muted-foreground mb-4">
              Rather than disproving Torvalds' claims, recent research supports
              the use of hybrid approaches. The HongMeng kernel exemplifies this
              pragmatic strategy, while maintaining microkernel principles, by
              implementing "flexible composition" and "differentiated isolation
              classes" to balance performance with security requirements. As
              Chen et al. (2024) note, HM "respects the design principles of
              microkernels but not to the extreme, with careful compromises".
              Even so, Miemietz et al. (2025) found that running containers on
              microkernels still requires complex locking strategies and careful
              capability management to maintain performance, demonstrating that
              these systems continue to face technical hurdles despite their
              conceptual appeal.
            </p>

            <p className="text-md text-muted-foreground mb-4">
              Torvalds' monolithic design met the needs of its time. Thirty
              years of evolution reinforce a central principle: no single
              architecture is best. Effective systems result from context-aware
              combinations, not one-size-fits-all solutions.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4" id="references">
            <h4 className="text-lg font-bold w-5/6">References</h4>
            <ul className="list-disc pl-6">
              <li className="text-md text-muted-foreground mb-2">
                Chen, H., Miao, X., Jia, N., Wang, N., Li, Y., Liu, N., Liu, Y.,
                Wang, F., Huang, Q., Li, K. and Yang, H., 2024. Microkernel Goes
                General: Performance and Compatibility in the {"{HongMeng}"}{" "}
                Production Microkernel. In 18th USENIX Symposium on Operating
                Systems Design and Implementation (OSDI 24) (pp. 465-485).
              </li>
              <li className="text-md text-muted-foreground mb-2">
                Dini, V. (2025). Microkernel-Based Web Architecture: Design &
                Implementation Considerations. 10.48550/arXiv.2502.08802.
              </li>
              <li className="text-md text-muted-foreground mb-2">
                Gandhi, R., Richards, M. and Ford, N. (2024) Head First Software
                Architecture
              </li>
              <li className="text-md text-muted-foreground mb-2">
                Miemietz, T., Reusch, V., Hille, M., Wrenger, L., Eisoldt, J.,
                Klötzke, J., Kurze, M., Lackorzynski, A., Roitzsch, M. and
                Härtig, H., 2025. {"{MettEagle}"}: Costs and Benefits of
                Implementing Containers on Microkernels. In 19th USENIX
                Symposium on Operating Systems Design and Implementation (OSDI
                25) (pp. 979-996).
              </li>
              <li className="text-md text-muted-foreground mb-2">
                Valente, M.T. (2024) Software Engineering: A Modern Approach
              </li>
            </ul>
          </div>
        </div>
      </div>
      <TableOfContents
        items={[
          { id: "initial-post", title: "Initial Post", level: "h2" },
          { id: "references", title: "References", level: "h2" },
        ]}
      />
    </div>
  );
}
