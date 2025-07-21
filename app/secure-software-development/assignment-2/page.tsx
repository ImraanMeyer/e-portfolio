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
import { ChevronRight, Home } from "lucide-react";
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
                  <BreadcrumbPage>
                    Assignment 2: Individual Project
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="relative mt-4">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
              <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                <h1 className="text-2xl font-bold mb-2">
                  Assignment 2: Individual Project: Coding Output and Evidence
                  of Testing
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 w-5/6" id="system-design">
          <div className="flex flex-col gap-4">
            <Callout title="Assignment Brief">
              <p className="mb-2 text-muted-foreground">
                Carrying on from the Full Brief provided in Unit 6, this
                assignment focuses on the second deliverable, a practical
                development of your design from Unit 6.
              </p>

              <p className="mb-2 text-muted-foreground">
                The code should be developed using Python within any IDE. You
                should submit a fully tested code set. Code should be organised
                and documented according to Python’s PEP-8 style guide (van
                Rossum, 2001). You should supply evidence of execution,
                demonstrating how the various aspects of the system work. Your
                code should also be tested and the evidence of this provided.
                Testing should be supported using unit tests which you have
                written, in addition to the use of linters. You should submit a
                README file that documents how the application can be run.
              </p>

              <p className="mb-2 text-muted-foreground">
                The final submission builds on the work which you demonstrated
                during the seminars.
              </p>
            </Callout>
          </div>
        </div>

        <div className="space-y-4 w-5/6" id="learning-outcomes">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-2">Learning Outcomes</h3>
            <ul className="list-disc pl-4 pr-4 text-muted-foreground">
              <li className="mb-2">
                Designed and implemented a secure e-commerce system using
                Python, combining both a Command-Line Interface (CLI) and a
                RESTful API (Flask) to simulate an online retail environment.
              </li>

              <li className="mb-2">
                Applied object-oriented programming principles and adhered to
                PEP-8 guidelines using{" "}
                <code className="text-primary">black</code> and{" "}
                <code className="text-primary">flake8</code> for formatting and
                linting.
              </li>

              <li className="mb-2">
                Integrated layered security mechanisms including AES-encrypted
                JSON storage, input validation, 2FA using PyOTP, role-based
                access control, rate limiting, and lockout policies to mitigate
                threats like brute-force attacks, script injection, and
                denial-of-service.
              </li>

              <li className="mb-2">
                Developed a comprehensive automated test suite using{" "}
                <code className="text-primary">pytest</code>, covering unit,
                integration, and edge case scenarios with additional coverage
                reports using <code className="text-primary">pytest-cov</code>.
              </li>

              <li className="mb-2">
                Documented the entire system through inline code comments,
                architecture diagrams, and a comprehensive README to facilitate
                reproducibility and assessment.
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 w-5/6" id="reflection">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-2">Reflection</h3>
            <p className="text-md text-muted-foreground">
              This solo project challenged me to apply secure development
              practices within a full application lifecycle, from architecture
              to implementation and testing. Expanding on a previous team
              proposal, I developed a Python-based CLI and API hybrid
              application that emulates the core features of an online retail
              system while safeguarding against common security threats.
            </p>

            <p className="text-md text-muted-foreground">
              Security was a primary design driver throughout this assignment. I
              implemented password hashing with{" "}
              <code className="text-primary">bcrypt</code>, added two-factor
              authentication via <code className="text-primary">PyOTP</code> and
              QR codes, and secured all user and admin actions with role-based
              access control. A toggleable "security mode" feature was also
              introduced, enabling validators, rate limiting, and lockouts on
              demand to test different runtime scenarios.
            </p>

            <p className="text-md text-muted-foreground">
              I structured the application into well-organized modules: core
              services (<code className="text-primary">user</code>,{" "}
              <code className="text-primary">order</code>,{" "}
              <code className="text-primary">product</code>), CLI commands,
              Flask API routes, and utility helpers. All data persisted via
              AES-encrypted JSON files, simulating secure storage in the absence
              of a traditional database. Sensitive input was validated
              consistently, and security logs were recorded for auditing.
            </p>

            <p className="text-md text-muted-foreground">
              To ensure robustness, I created over 60 automated test cases
              covering route access, role restrictions, validation paths, and
              expected error responses. Code formatting was enforced using{" "}
              <code className="text-primary">black</code>, and I monitored
              coverage with <code className="text-primary">pytest-cov</code>.
              Screenshots, coverage reports, and log files were included in the
              final submission.
            </p>

            <p className="text-md text-muted-foreground">
              This assignment not only sharpened my Python development skills,
              but also reinforced the importance of designing with security in
              mind from day one. I walked away with deeper confidence in
              building maintainable, testable, and secure systems, qualities
              that I will carry into future projects and professional
              environments.
            </p>
          </div>
        </div>

        {/* screenshots */}
        <div className="space-y-4 w-5/6">
          {/* screenshot of test coverage (public/images/module-2/unit-11/pytest_coverage.png) */}
          <div className="p-4" id="pytest_coverage">
            <h3 className="text-lg font-bold mb-2">Test Coverage</h3>
            <NextImage
              src={`${
                process.env.NEXT_PUBLIC_BASE_PATH || ""
              }/images/module-2/unit-11/pytest_coverage.png`}
              alt="Test coverage report screenshot"
              className="rounded-xl"
              width={800}
              height={800}
            />
          </div>
          {/* screenshot of system running (public/images/module-2/unit-11/api_running.png) */}
          <div className="p-4" id="api_running">
            <h3 className="text-lg font-bold mb-2">System Running</h3>
            <NextImage
              src={`${
                process.env.NEXT_PUBLIC_BASE_PATH || ""
              }/images/module-2/unit-11/api_running.png`}
              alt="Flask API running screenshot"
              className="rounded-xl"
              width={800}
              height={800}
            />
          </div>
          {/* screenshot of admin login (public/images/module-2/unit-11/admin_login.png) */}
          <div className="p-4" id="admin_login">
            <h3 className="text-lg font-bold mb-2">Admin Login</h3>
            <NextImage
              src={`${
                process.env.NEXT_PUBLIC_BASE_PATH || ""
              }/images/module-2/unit-11/admin_login.png`}
              alt="Admin login screenshot"
              className="rounded-xl"
              width={800}
              height={800}
            />
          </div>

          {/* screenshot of system logs (public/images/module-2/unit-11/app_log_screenshot.png) */}
          <div className="p-4" id="app_log_screenshot">
            <h3 className="text-lg font-bold mb-2">System Logs</h3>
            <NextImage
              src={`${
                process.env.NEXT_PUBLIC_BASE_PATH || ""
              }/images/module-2/unit-11/app_log_screenshot.png`}
              alt="System logs screenshot"
              className="rounded-xl"
              width={800}
              height={800}
            />
          </div>
        </div>

        <div className="space-y-4 w-5/6" id="resources">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-2">Resources</h3>

            <ul className="list-disc pl-6">
              <li className="text-md text-muted-foreground">
                <a
                  href="https://github.com/ImraanMeyer/secure_ecommerce#secure-e-commerce-cli--api-application"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  README
                </a>
              </li>
              <li className="text-md text-muted-foreground">
                <a
                  href="https://github.com/ImraanMeyer/secure_ecommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code (GitHub)
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
