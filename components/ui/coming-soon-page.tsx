// Generic Coming Soon Page
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { ChevronRight, Home } from "lucide-react";

export default function ComingSoonPage() {
    return (
        <div className="h-96">
            {/* Breadcrumbs */}
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`}><Home className="h-4 w-4" /></BreadcrumbLink>
                        <ChevronRight className="h-4 w-4" />
                        <BreadcrumbPage>Coming Soon</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="flex flex-col items-center justify-center mt-4 h-80">

            <h1 className="text-2xl font-bold mb-4">Coming Soon</h1>
            <p className="text-muted-foreground">This page is currently under construction. 🚧</p>
        </div>
        </div>
    );
}
