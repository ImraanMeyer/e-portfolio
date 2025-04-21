"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  items: {
    id: string;
    title: string;
    level: "h2" | "h3" | "h4";
  }[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionPositions = useRef<Map<string, number>>(new Map());
  const rafRef = useRef<number>();

  useEffect(() => {
    const updatePositions = () => {
      items.forEach(item => {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          sectionPositions.current.set(item.id, rect.top + window.scrollY);
        }
      });
    };

    const checkActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let closestId: string | null = null;
      let closestDistance = Infinity;

      sectionPositions.current.forEach((top, id) => {
        const distance = Math.abs(scrollPosition - top);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = id;
        }
      });

      setActiveId(closestId);
      rafRef.current = requestAnimationFrame(checkActiveSection);
    };

    updatePositions();
    checkActiveSection();

    const handleResize = () => {
      updatePositions();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [items]);

  // Fallback for initial load and small sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-25% 0px -25% 0px"
      }
    );

    items.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="hidden lg:block top-6 w-72 z-10 right-0 fixed h-screen overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">On this page</h2>
      <nav className="space-y-2">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "block text-sm transition-colors hover:text-foreground pl-4 pr-4 border-l-2",
              activeId === item.id
                ? "text-foreground font-medium border-foreground"
                : "text-muted-foreground border-transparent",
              item.level === "h2" ? "pl-2" : 
              item.level === "h3" ? "pl-6" : 
              item.level === "h4" ? "pl-10" : "pl-14"
            )}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(item.id);
              if (element) {
                const top = element.getBoundingClientRect().top + window.scrollY - 20;
                window.scrollTo({
                  top,
                  behavior: "smooth"
                });
              }
            }}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  );
}