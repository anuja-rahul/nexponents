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
import { componentList, scrollMenuList } from "@/app/utils/content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Metadata } from "next";
import Link from "next/link";
import NavigatorLink from "@/components/navigator-link";
import { BugIcon, LightbulbIcon, PencilIcon } from "lucide-react";
import { ScriptCopyBtnComponent } from "@/components/script-copy-button";

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
        <ScrollArea className="h-screen w-full rounded-md pt-8">
          {scrollMenuList.map((section, i) => {
            return (
              <div
                key={i}
                className="gap-1 pl-6 flex flex-col items-start justify-start w-full mb-5"
              >
                <h1 className="font-[600] text-foreground px-2 m-0">
                  {section.name}
                </h1>
                <div className="gap-[2px] flex flex-col items-start justify-start w-full">
                  {section.elements.map((element, index) => {
                    return (
                      <Link
                        href={element.path}
                        key={index}
                        className="text-sm text-foreground/65 font-[500] bg-background hover:bg-foreground/5 duration-300 py-[6px] p-2 w-full rounded-lg"
                      >
                        {element.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </ScrollArea>
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
                {/* INSTALLATION SECTION =========================================================================================================================> */}
                <div
                  id="Installation"
                  className="flex flex-col items-start justify-start w-full gap-4 mt-4"
                >
                  <h1 className="text-2xl font-bold w-full border-b border-b-foreground/20 pb-3">
                    Installation
                  </h1>
                  <Tabs defaultValue="cli" className="w-full">
                    <TabsList className="grid grid-cols-2 max-w-32">
                      <TabsTrigger
                        className="data-[state=active]:border-b-2 font-[600] pb-2 data-[state=active]:text-foreground text-foreground/70"
                        value="cli"
                      >
                        CLI
                      </TabsTrigger>
                      <TabsTrigger
                        className="data-[state=active]:border-b-2 font-[600] pb-2 data-[state=active]:text-foreground text-foreground/70"
                        value="manual"
                      >
                        Manual
                      </TabsTrigger>
                    </TabsList>
                    <hr className="text-foreground/20 w-full" />
                    <TabsContent value="cli" className="mt-4 w-full flex flex-col items-start justify-start">
                      {/* <ScrollArea className="h-[150px] w-full rounded-md border border-foreground/20"> */}
                        <div className="min-h-[150px] w-full flex items-start justify-start">
                          <ScriptCopyBtnComponent component={component.id} />
                        </div>
                      {/* </ScrollArea> */}
                    </TabsContent>
                    <TabsContent value="manual" className="mt-4">
                      <ScrollArea className="h-[350px] w-full rounded-md border border-foreground/20"></ScrollArea>
                    </TabsContent>
                  </Tabs>
                </div>
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
                <ScrollArea className="h-screen w-full rounded-md pt-8">
                  {component.navigator.map((section, i) => {
                    return (
                      <div
                        key={i}
                        className="gap-1 flex flex-col items-start justify-start w-full mb-5"
                      >
                        <h1 className="font-[500] text-foreground px-2 m-0 mb-2 text-base tracking-tight">
                          {section.title}
                        </h1>
                        <div className="gap-[2px] flex flex-col items-start justify-start w-full">
                          {section.content.map((element, index) => {
                            return (
                              <div key={element.name}>
                                <Link
                                  href={`#${element.name}`}
                                  key={element.name}
                                  className="text-sm text-foreground/50 font-[500] bg-background hover:text-foreground duration-300 py-[6px] p-2 w-full rounded-lg"
                                >
                                  {element.name}
                                </Link>
                                {element.subtitles &&
                                  element.subtitles.length > 0 && (
                                    <div
                                      className="gap-[2px] flex flex-col items-start justify-start w-full pl-3"
                                      key={element.name + index}
                                    >
                                      {element.subtitles.map((subtitle) => (
                                        <Link
                                          href={`#${subtitle.name}`}
                                          key={subtitle.name}
                                          className="text-sm text-foreground/50 font-[500] bg-background hover:text-foreground duration-300 py-[6px] p-2 w-full rounded-lg"
                                        >
                                          {subtitle.name}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                  <div className="gap-1 flex flex-col items-start justify-start w-full mb-5">
                    <h1 className="font-[500] text-foreground px-2 m-0 mb-2 text-base tracking-tight">
                      Contribute
                    </h1>
                    <div className="gap-2 flex flex-col items-start justify-start w-full px-2">
                      <NavigatorLink
                        href="#"
                        text="Report an issue"
                        icon={
                          <BugIcon className="w-4 h-4 text-foreground/60 group-hover:text-foreground mt-1" />
                        }
                      />
                      <NavigatorLink
                        href="#"
                        text="Request a feature"
                        icon={
                          <LightbulbIcon className="w-4 h-4 text-foreground/60 group-hover:text-foreground mt-1" />
                        }
                      />
                      <NavigatorLink
                        href="#"
                        text="Edit this page"
                        icon={
                          <PencilIcon className="w-4 h-4 text-foreground/60 group-hover:text-foreground mt-1" />
                        }
                      />
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
