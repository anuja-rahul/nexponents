import CodeBlock from "@/components/codeblock";
import NotFoundSection from "@/components/not-found";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { componentList } from "@/app/utils/content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components",
  description: "Explore the components that make up the Nexponent ui.",
};

interface ComponentsPageProps {
  params: Promise<{ component: string }>;
}

export default async function ComponentsPage(props: ComponentsPageProps) {
  const params = await props.params;
  const component = componentList.find((c) => c.id === params.component);

  return (
    <section className="mt-16 flex flex-col flex-nowrap md:grid md:grid-cols-[280px_1fr] items-start justify-start w-full min-h-screen">
      <div className="bg-background px-4 hidden md:flex w-[250px] lg:w-[280px] min-h-screen">
        component scrollmenu
      </div>

      <div className="bg-background lg:flex-1 w-full flex-col flex-nowrap xl:flex-none xl:flex xl:flex-row min-h-screen border border-foreground/10">
        <div className="bg-background px-4 mb-4 xl:flex-grow min-h-screen">
          {component ? (
            <>
              <div className="w-full px-4 bg-background h-auto flex flex-col items-start justify-start gap-4">
                <div className="flex flex-row items-start justify-start mt-6">
                  <Breadcrumb>
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
                  </Breadcrumb>
                </div>
                <h1 className="text-4xl font-bold">{component.name}</h1>
                <div>
                  {component.description.map((desc, i) => (
                    <p key={i} className="text-foreground/70 text-lg">
                      {desc}
                    </p>
                  ))}
                </div>
                <Tabs defaultValue="preview" className="w-full">
                  <TabsList className="grid grid-cols-2 max-w-32">
                    <TabsTrigger
                      className="data-[state=active]:border-b-2 font-[600] pb-2 data-[state=active]:text-foreground text-foreground/70"
                      value="preview"
                    >
                      Preview
                    </TabsTrigger>
                    <TabsTrigger
                      className="data-[state=active]:border-b-2 font-[600] pb-2 data-[state=active]:text-foreground text-foreground/70"
                      value="code"
                    >
                      Code
                    </TabsTrigger>
                  </TabsList>
                  <hr className="text-foreground/20 w-full" />
                  <TabsContent value="preview" className="mt-4">
                    <ScrollArea className="h-[350px] w-full rounded-md border border-foreground/20">
                      <div className="min-h-[350px] w-full flex items-center justify-center">
                        <component.preview />
                      </div>
                    </ScrollArea>
                  </TabsContent>
                  <TabsContent value="code" className="mt-4">
                    <ScrollArea className="h-[350px] w-full rounded-md border border-foreground/20">
                      <CodeBlock code={component.code} />
                    </ScrollArea>
                  </TabsContent>
                </Tabs>
              </div>
            </>
          ) : (
            <NotFoundSection />
          )}
        </div>

        {component ? (
          <div>
            <div className="hidden xl:grid">
              <div className="bg-background px-4 w-[240px] min-h-screen border-l border-l-foreground/10">
                navigator
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
