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
                  <BreadcrumbPage>Unit 8</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="relative mt-4">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
              <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                <h1 className="text-2xl font-bold mb-2">
                  Unit 8: Cryptography and Its Use in Operating Systems
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 w-5/6">
          <div id="discussion">
            <Callout title="Discussion Topic">
              <p className="mb-2 text-muted-foreground text-md">
                TrueCrypt was a popular and well-respected operating system
                add-on that could create encrypted volumes on a Windows and/or
                Linux system. In addition, it was also designed to create a
                complete, bootable volume that could encrypt the entire
                operating system and data for a Windows XP system. It was
                discontinued in 2014.
              </p>

              <p className="mb-2 text-muted-foreground text-md">
                Case Study: Read the TrueCrypt cryptanalysis by Junestam & Guigo
                (2014) (link is in the reading list) and then answer the
                following questions:
              </p>
              <ul className="list-disc pl-6">
                <li className="mb-2 text-muted-foreground text-md mt-2">
                  The (anonymous) TrueCrypt authors have said "Using TrueCrypt
                  is not secure as it may contain unfixed security issues"
                  (http://truecry.pt.sourceforge.net/, 2014). Does the
                  cryptanalysis provided above prove or disprove this
                  assumption?
                </li>
                <li className="mb-2 text-muted-foreground text-md mt-2">
                  Would you be prepared to recommend TrueCrypt to a friend as a
                  secure storage environment? What caveats (if any) would you
                  add?
                </li>
              </ul>

              <p className="mb-2 text-muted-foreground text-md">
                Present an ontology design which captures the weaknesses of
                TrueCrypt, and organise them according to their severity. Expand
                the ontology design by considering the factors which will cause
                each weakness to become an issue from a user's perspective. For
                example, if a user wishes to encrypt a disk storing bank details
                using TrueCrypt, which weakness of the software might cause this
                specific user goal to be negatively impacted?
              </p>
            </Callout>

            <div className="mt-4">
              <h2 className="text-xl font-bold mb-2">Initial Post</h2>

              <div className="space-y-4" id="truecrypt-cryptanalysis">
                <p className="text-muted-foreground text-md">
                  TrueCrypt Cryptanalysis and Ontological Modelling of Security
                </p>

                <p className="text-muted-foreground text-md">
                  The TrueCrypt developers argue that "using TrueCrypt is not
                  secure as it may contain unfixed security issues" (TrueCrypt,
                  2014), a claim strongly supported by the cryptographic audit
                  carried out by Junestam and Guigo (2014). Although the
                  evaluation did not find any immediately exploitable critical
                  vulnerabilities, it did identify a number of coding and
                  architectural flaws that, when taken together, erode
                  confidence in the software's long-term security assurances.
                </p>

                <p className="text-muted-foreground text-md">
                  The lack of integrity verification procedures, inadequate
                  keyfile management, and the absence of authenticated
                  encryption were among the main findings. These vulnerabilities
                  enable undetected changes to encrypted volumes, cryptographic
                  deterioration when weak keyfiles are used, and silent data
                  manipulation. The project's termination, which leaves all
                  known and potential vulnerabilities unpatched, exacerbates
                  these problems.
                </p>

                <p className="text-muted-foreground text-md">
                  An ontology was created to map the connections between
                  individual flaws, their severity, practical effects, and
                  mitigation techniques in order to analyse these weaknesses
                  systematically. For example, because it could allow for
                  undetected attacks, the absence of integrity verification was
                  categorised as a high-severity vulnerability. As the
                  ontology's impact pathways demonstrate, this becomes
                  particularly problematic when users store sensitive assets,
                  such as banking or legal data. Implementing external file
                  integrity checks and transitioning to actively maintained
                  alternatives, such as VeraCrypt, are suggested mitigations.
                </p>

                <p className="text-muted-foreground text-md">
                  It is inappropriate to recommend TrueCrypt for secure storage,
                  given the audit's conclusions and the lack of further
                  development. Although the tool was a breakthrough during its
                  development, it no longer meets modern security software
                  requirements. It is recommended that users concerned about the
                  privacy and accuracy of their data use up-to-date,
                  well-maintained solutions that have undergone rigorous peer
                  review and receive ongoing security updates.
                </p>

                <div className="p-4" id="flowchart">
                    <NextImage src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/module-2/unit-8/truecrypt_ontology.png`} alt="Flowchart" className="rounded-xl" width={800} height={600} />
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4" id="references">
                  <h4 className="text-lg font-bold w-5/6 mb-4">References</h4>
                  <ul className="list-disc pl-6">
                    <li className="text-md text-muted-foreground mb-4">
                      Junestam, A. and Guigo, N., 2014. Open crypto audit
                      project truecrypt. Security Assessment. iSECpartners.
                      Available at:{" "}
                      <a
                        href="https://kryptera.se/wp-content/uploads/2014/04/iSec_Final_Open_Crypto_Audit_Project_TrueCrypt_Security_Assessment.pdf"
                        target="_blank"
                      >
                        https://kryptera.se/wp-content/uploads/2014/04/iSec_Final_Open_Crypto_Audit_Project_TrueCrypt_Security_Assessment.pdf
                      </a>{" "}
                      (Accessed: 5 July 2025).
                    </li>
                    <li className="text-md text-muted-foreground mb-4">
                      Krebs, B. (2014) True Goodbye: “Using TrueCrypt Is Not
                      Secure”. Available at:{" "}
                      <a
                        href="https://krebsonsecurity.com/2014/05/true-goodbye-using-truecrypt-is-not-secure/"
                        target="_blank"
                      >
                        https://krebsonsecurity.com/2014/05/true-goodbye-using-truecrypt-is-not-secure/
                      </a>{" "}
                      (Accessed: 5 July 2025).
                    </li>
                    <li className="text-md text-muted-foreground mb-4">
                      TrueCrypt (2014). Available at:{" "}
                      <a
                        href="https://truecrypt.sourceforge.net/"
                        target="_blank"
                      >
                        https://truecrypt.sourceforge.net/
                      </a>{" "}
                      (Accessed: 5 July 2025).
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
      <TableOfContents
        items={[
          {
            id: "truecrypt-cryptanalysis",
            title: "TrueCrypt Cryptanalysis and Ontological Modelling of Security",
            level: "h2",
          },
          {
            id: "references",
            title: "References",
            level: "h2",
          },
        ]}
      />
    </div>
  );
}
