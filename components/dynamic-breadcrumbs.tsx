"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { usePathname } from "next/navigation";

interface DynamicBreadCrumbsProps {
  name?: string;
  className?: string;
}

export default function DynamicBreadCrumbs({ name, className }: DynamicBreadCrumbsProps) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {pathSegments.map((segment, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/${pathSegments.slice(0, index + 1).join("/")}`}
                className="text-foreground/80 font-[600]"
              >
                {index === pathSegments.length - 1 && name
                  ? name
                  : segment.replace(/-/g, " ")}{" "}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

{
  /* <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
            <BreadcrumbLink href="/components">
                Components
            </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbLink
                href={`/components/${component.id}`}
                className="text-foreground/80 font-[600]"
            >
                {component.name}
            </BreadcrumbLink>
            </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb> */
}
