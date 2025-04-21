"use client";

import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-csharp';
import 'prismjs/themes/prism-tomorrow.css';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = 'python', className }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const trimmedCode = code.trim();

  return (
    <div className={cn(
      "relative rounded-lg overflow-hidden",
      "bg-zinc-950 dark:bg-zinc-900",
      className
    )}>
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 dark:bg-zinc-800">
        <span className="text-sm text-zinc-400">{language}</span>
      </div>
      <pre className="p-4 overflow-x-auto !m-0" suppressHydrationWarning>
        <code
          ref={codeRef}
          className={`language-${language}`}
          suppressHydrationWarning
        >
          {trimmedCode}
        </code>
      </pre>
    </div>
  );
}