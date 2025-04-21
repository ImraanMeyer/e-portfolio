"use client";

import { Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { title } from "process";

interface CalloutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export function Callout({ children, className, title = "Instruction" }: CalloutProps) {
  return (
    // <div className={cn("flex flex-col items-start justify-start gap-4 rounded-lg border p-4 bg-muted/50", className)}>
    //   <div className="mt-0.5">
    //     <div className="rounded-full border w-8 h-8 flex items-center justify-center">
    //       <Info className="h-4 w-4" />
    //       {/* title */}
    //       {title ? <div className="text-sm font-medium">{title}</div> : null}
    //     </div>
    //   </div>
    //   <div className="flex-1 [&>p]:text-muted-foreground" >
    //     {children}
    //   </div>
    // </div>
    <div className={cn("flex flex-col gap-2 rounded-lg border p-4 bg-muted/50", className)}>
      <div className="flex items-center gap-2">
        <div className="rounded-full border w-8 h-8 flex items-center justify-center">
          <Info className="h-4 w-4" />
        </div>
        {/* title */}
        {title && <div className="text-sm font-medium">{title}</div>}
      </div>
      <hr className="my-2" />
      <div className="py-2 px-4 [&>p]:text-muted-foreground">
        {children}
      </div>
    </div>
  );
}