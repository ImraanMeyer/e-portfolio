'use client';

import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Callout } from "@/components/ui/callout";
import { ChevronRight, Home } from "lucide-react";
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
                                    <BreadcrumbLink href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`}><Home className="h-4 w-4" /></BreadcrumbLink>
                                    <ChevronRight className="h-4 w-4" />
                                    <BreadcrumbLink href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/object-oriented-programming`}>Object-Oriented Programming</BreadcrumbLink>
                                    <ChevronRight className="h-4 w-4" />
                                    <BreadcrumbPage>Unit 8</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="relative mt-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
                            <div className="relative backdrop-blur-sm border rounded-lg p-6 bg-white/50 dark:bg-gray-950/50">
                                <h1 className="text-2xl font-bold mb-2">Unit 8: Data Structures and Data Search in Practice</h1>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-4" id="article-review">
                    <Callout className="w-5/6">
                        <p className="text-md text-muted-foreground">
                            Referring to the article by Baskara et al (2024) consider the strengths and weaknesses of designing a metamodel to support object-oriented design of the IOT. Design a smart model equivalent to Figure 1 or Figure 2 which would instead support operation of a humanoid robot.
                        </p>
                    </Callout>
                </div>

                <div className="space-y-4 w-5/6">
                    <h2 className="text-xl font-bold mb-2">Article Review</h2>
                    <h3 className="text-lg font-bold mx-auto mb-2" id="initial-post">Initial Post</h3>

                    <p className="text-md text-muted-foreground mx-auto mb-4">
                        In the article by Baskara et al. (2024), the authors present T-UFF, a warehouse tracking application that uses IoT and object-oriented programming (OOP) to improve logistics efficiency. The app employs QR codes and a microcontroller to guide users to the location of goods, reducing order-picking time. This approach highlights the strengths of designing a metamodel for IoT systems, particularly in terms of modularity, scalability, and reusability. For example, the use of OOP allows the system to be easily extended or modified to include new features, such as real-time tracking or optimized route planning. Additionally, the metamodel provides a structured framework for integrating IoT devices, which can enhance system reliability and performance.
                    </p>

                    <p className="text-md text-muted-foreground mx-auto mb-4">
                        However, the metamodel has limitations. The T-UFF system's reliance on QR codes introduces challenges in environments where codes are obscured, damaged, or difficult to scan, potentially reducing operational efficiency. The use of Bluetooth for communication, while cost-effective, may struggle in large warehouses with signal interference or obstacles, leading to connectivity issues. Furthermore, integrating IoT devices with existing enterprise systems, such as ERP, can be complex, requiring significant time and resources for seamless interoperability. While the SDLC ensures a thorough development process, its structured nature may slow down deployment in fast-paced environments where rapid implementation is critical.
                    </p>

                    <p className="text-md text-muted-foreground mx-auto mb-4">
                        To address these challenges, a smart model for a humanoid robot could use RFID tags and computer vision instead of QR codes and Bluetooth. This would eliminate the need for QR codes and improve reliability. The robot's software could follow a modular design, allowing for easy updates and integration with other systems. For example, sensors could help the robot detect obstacles and optimize its path in real-time, enhancing efficiency and adaptability.</p>

                    <p className="text-md text-muted-foreground mx-auto mb-4">
                        Here's a diagram to illustrate the proposed smart model for a humanoid robot:</p>

                    <div className="flex flex-col gap-4 w-3/6 mx-auto" id="diagram">
                        <NextImage src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/module-1/unit-8/diagram.png`} alt="Humanoid Robot Smart Model" width={400} height={400} className="h-auto mx-auto mb-4 rounded-md" />
                    </div>

                    <p className="text-md text-muted-foreground mx-auto mb-4">
                        This model combines the strengths of RFID and computer vision to create a versatile and efficient system, providing a more robust solution for warehouse automation.
                    </p>

                    <div className="flex flex-col gap-4 mt-4" id="references">
                        <h3 className="text-lg font-bold">References</h3>
                        <ul className="list-disc pl-6">
                            <li className="text-md text-muted-foreground mb-1">
                                Baskara, Wahyu & Eucharisto, Thomas & Utari, Ni & Soimun, Ahmad & Sasue, Riz. (2024). T-UFF (Tracker stuff): application development for warehouse tracking. IOP Conference Series: Earth and Environmental Science. 1294. 012025. <a target="_blank" href="https://doi.org/10.1088/1755-1315/1294/1/012025">https://doi.org/10.1088/1755-1315/1294/1/012025</a>.
                            </li>
                            <li className="text-md text-muted-foreground mb-1">
                                Junhong, M. (2020). Research on Intelligent Warehouse Management System Based on RFID. Advances in Engineering Research, 197, 29-31. <a target="_blank" href="https://doi.org/10.2991/aer.k.201203.006">https://doi.org/10.2991/aer.k.201203.006</a>.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <TableOfContents items={[
                { id: 'article-review', title: 'Article Review', level: 'h2' },
                { id: 'initial-post', title: 'Initial Post', level: 'h3' },
                { id: 'diagram', title: 'Diagram', level: 'h3' },
                { id: 'references', title: 'References', level: 'h3' },
            ]} />
        </div>
    );
}