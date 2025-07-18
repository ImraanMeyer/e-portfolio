"use client";

import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalloutProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
}

export function Callout({ children = undefined, className, title = "Instruction" }: CalloutProps) {
  return (
    <div className={cn("flex flex-col gap-2 rounded-lg border p-4 bg-muted/50", className)}>
      <div className="flex items-center gap-2">
        <div className="rounded-full border w-8 h-8 flex items-center justify-center">
          <Info className="h-4 w-4" />
        </div>
        {title && <div className="text-sm font-medium">{title}</div>}
      </div>
      {children && (
        <div className="py-2 px-4 [&>p]:text-muted-foreground">
          {title && <hr className="my-2" />}
          {children}
        </div>
      )}
    </div>
  );
}