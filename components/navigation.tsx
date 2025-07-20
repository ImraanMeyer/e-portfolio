"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronRight, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const courses = [
  {
    title: "Object Oriented Programming",
    module: "object-oriented-programming",
    href: "/object-oriented-programming",
    icon: GraduationCap,
    units: Array.from({ length: 9 }, (_, i) => ({
      title: `Unit ${i + 1}`,
      href: `/object-oriented-programming/unit-${i + 1}`,
    })),
    assignments: [
      {
        title: "System Design",
        href: `/object-oriented-programming/assignment-1`
      },
      {
        title: "System Implementation",
        href: `/object-oriented-programming/assignment-2`
      },
      // {
      //   title: "e-Portfolio Submission",
      //   href: `/object-oriented-programming/assignment-3`
      // }
    ],
    additional: []
  },

      {
    title: "Secure Software Development",
    module: "secure-software-development",
    href: "/secure-software-development",
    icon: GraduationCap,
    additional: [],
    units: Array.from([1,2,3,4,5,6,7,8,10,11], (unit) => ({
      title: `Unit ${unit}`,
      href: `/secure-software-development/unit-${unit}`,
    })),
    assignments: [
      {
        title: "Team Project: Design Document",
        href: `/secure-software-development/assignment-1`
      },
      {
        title: "Individual Project: Coding Output and Evidence of Testing",
        href: `/secure-software-development/assignment-2`
      }
    ]
  },
  // {
  //   title: "Professional Development",
  //   href: "/professional-dev",
  //   icon: Brain,
  //   additional: [
  //     {
  //       title: "Skills Matrix",
  //       href: "/professional-dev/skills-matrix",
  //       icon: Target
  //     },
  //     {
  //       title: "Action Plan (PDP)",
  //       href: "/professional-dev/pdp",
  //       icon: BookCheck
  //     }
  //   ]
  // }
];


function NavItem({ 
  href, 
  title, 
  icon: Icon, 
  depth = 0,
  isExpanded = false,
  onToggle,
  children,
  module 
}: { 
  href: string;
  title: string;
  icon?: any;
  depth?: number;
  isExpanded?: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
  module?: string;
}) {
  const pathname = usePathname();
  const unit = href.split("/").pop(); // /foo/bar -> bar
  const pathnameCopy = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname; // /foo/bar/ -> /foo/bar
  const modulePath = pathnameCopy.split("/")[1]; // /foo/bar -> foo
  const pathnameUnit = pathnameCopy.split("/").pop(); // /foo/bar -> bar

  const isActive = modulePath === module && (pathnameUnit === unit) ;

  const padding = depth * 12;

  if (children) {
    return (
      <Collapsible open={isExpanded} onOpenChange={onToggle}>
        <CollapsibleTrigger className="w-full">
          <div
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent mb-2",
            )}
            style={{ paddingLeft: `${padding + 12}px` }}
          >
            {Icon && <Icon className="h-4 w-4" />}
            <span className="flex-1 text-left">{title}</span>
            <ChevronRight className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-90")} />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>{children}</CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
        isActive ? "bg-accent" : "transparent"
      )}
      style={{ paddingLeft: `${padding + 12}px` }}
    >
      {Icon && <Icon className="h-4 w-4" />}
      <span>{title}</span>
    </Link>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  // Automatically expand parent items when on a child page
  useEffect(() => {
    const newExpandedItems: Record<string, boolean> = {};

    courses.forEach(course => {
      // Check if current path is part of this course
      if (pathname.startsWith(course.href)) {
        newExpandedItems[course.href] = true;
      }
    });

    setExpandedItems(prev => ({
      ...prev,
      ...newExpandedItems
    }));
  }, [pathname]);

  const toggleExpanded = (key: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="fixed top-0 border-r bg-background w-72">
      <ScrollArea className="h-screen">
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">e-Portfolio</h2>
            <ThemeToggle />
          </div>
          <nav className="space-y-2">
            {courses.map((course) => (

              <NavItem
                key={course.href}
                href={course.href}
                title={course.title}
                icon={course.icon}
                isExpanded={expandedItems[course.href]}
                onToggle={() => toggleExpanded(course.href)}
              >
                <div className="space-y-1">
                    {course.assignments?.map((assignment) => (
                      <NavItem
                        key={assignment.href}
                        href={assignment.href}
                        title={assignment.title}
                        depth={1}
                        module={course.module}
                      />
                    ))}
                  {course.units?.map((unit) => (
                    <NavItem
                      key={unit.href}
                      href={unit.href}
                      title={unit.title}
                      depth={1}
                      module={course.module}
                    />
                  ))}
                    {/* {course.additional?.map((item) => (
                      <NavItem
                        key={item.href}
                        href={item.href}
                        title={item.title}
                        icon={item.icon}
                        depth={1}
                      />
                    ))} */}
                </div>
              </NavItem>
            ))}
          </nav>
        </div>
      </ScrollArea>
    </div>
  );
}