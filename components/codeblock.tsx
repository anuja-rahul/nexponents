"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Button } from "./ui/button";
import { CheckIcon, Clipboard } from "lucide-react";
import clsx from "clsx";

interface CodeBlockProps {
  code: string;
  className?: string;
}

export default function CodeBlock({ code, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false); // State to track copied status

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div
      className={clsx(
        "relative overflow-hidden md:max-w-[50vw] lg:max-w-[55vw]",
        className
      )}
    >
      <Button
        onClick={copyToClipboard}
        className="absolute top-1 bg-slate-950 hover:bg-slate-700/80 duration-300 ml-2 lg:right-3 rounded-full text-white"
      >
        {copied ? <CheckIcon /> : <Clipboard />}
      </Button>
      <SyntaxHighlighter
        language="tsx"
        style={atomDark}
        customStyle={{
          margin: 0,
          padding: "1rem",
          background: "black",
          fontSize: "0.875rem",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          overflowX: "scroll",
          width: "100%",
        }}
        wrapLines={true}
        showLineNumbers={true}
        PreTag="div"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
