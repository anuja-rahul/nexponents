import CodeBlock from "@/components/codeblock";
import NotFoundSection from "@/components/not-found";
import { ScrollArea } from "@/components/ui/scroll-area";
import { componentList } from "@/app/utils/content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Metadata } from "next";
import { ScriptCopyBtnComponent } from "@/components/script-copy-button";
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline";
import PropTable from "@/components/props-table";
import { NextButton, PrevButton } from "@/components/move-buttons";
import ScrollMenu from "@/components/scroll-menu";
import Navigator from "@/components/navigator";
import DynamicBreadCrumbs from "@/components/dynamic-breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: { default: "Components", template: "%s | Components" },
  description: "Explore the components that make up the Nexponent ui.",
};

interface ComponentsPageProps {
  params: Promise<{ component: string }>;
}

export default async function ComponentsPage(props: ComponentsPageProps) {
  const params = await props.params;
  const component = componentList.find((c) => c.id === params.component);
  const currentIndex = componentList.findIndex(
    (c) => c.id === params.component
  );

  let prevComponent = null;
  let nextComponent = null;

  if (currentIndex > 0) {
    prevComponent = componentList[currentIndex - 1];
  }

  if (currentIndex < componentList.length - 1) {
    nextComponent = componentList[currentIndex + 1];
  }

  return (
    <section className="mt-16 flex flex-col flex-nowrap md:grid md:grid-cols-[280px_1fr] items-start justify-start w-full min-h-screen">
      <div className="bg-background px-4 hidden md:flex w-[250px] lg:w-[280px] min-h-screen sticky left-0 top-12">
        <ScrollArea className="h-screen w-full rounded-md pt-8">
          <ScrollMenu />
        </ScrollArea>
      </div>

      <div className="bg-background lg:flex-1 w-full flex-col flex-nowrap xl:flex-none xl:flex xl:flex-row min-h-screen border border-foreground/10">
        <div className="bg-background px-4 mb-4 xl:flex-grow min-h-screen">
          {component ? (
            <>
              <div className="w-full px-4 bg-background h-auto flex flex-col items-start justify-start gap-4">
                <div className="flex flex-row items-start justify-start mt-6">
                  <DynamicBreadCrumbs name={component.name} />
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
                    <ScrollArea className="h-[350px] w-full max-w-[380px] sm:max-w-[480px] lg:max-w-full rounded-md border border-foreground/20 overflow-x-auto">
                      <div className="min-h-[350px] w-full flex items-center justify-center">
                        <component.preview />
                      </div>
                    </ScrollArea>
                  </TabsContent>
                  <TabsContent value="code" className="mt-4 overflow-hidden">
                    <ScrollArea className="h-[350px] w-fit rounded-md border border-foreground/20 overflow-hidden">
                      <CodeBlock
                        code={component.demo}
                        className="md:max-w-[55vw] lg:max-w-[65vw] xl:max-w-[55vw]"
                      />
                    </ScrollArea>
                  </TabsContent>
                </Tabs>
                {/* PREREQUISITES SECTION =========================================================================================================================> */}
                {component.prerequisites.length > 0 && (
                  <div
                    id="Prerequisites"
                    className="flex flex-col items-start justify-start w-full gap-4 mt-4"
                  >
                    <h1 className="text-2xl font-bold w-full border-b border-b-foreground/20 pb-3">
                      Prerequisites
                    </h1>
                    <div className="gap-2">
                      {component.prerequisites.map((desc, pi) => (
                        <div key={pi}>
                          <h2 className="text-foreground/90 text-xl">
                            {desc.title}
                          </h2>
                          <div className="pl-3">
                            <ul className="list-disc pl-5 text-foreground">
                              <li className="text-foreground/70 text-base">
                                {desc.message}
                              </li>
                              <li className="text-foreground/70 text-base">
                                Click{" "}
                                <Link
                                  href={desc.link}
                                  className="text-blue-600 hover:text-blue-400 duration-200 underline"
                                  target="_blank"
                                >
                                  here
                                </Link>{" "}
                                for more information.
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
                        disabled={false}
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
                    <TabsContent
                      value="cli"
                      className="mt-4 w-full flex flex-col items-start justify-start"
                    >
                      {/* <ScrollArea className="h-[150px] w-full rounded-md border border-foreground/20"> */}
                      <div className="min-h-[150px] w-full flex items-start justify-start">
                        <ScriptCopyBtnComponent
                          disabled={false}
                          component={component.id}
                        />
                      </div>
                      {/* </ScrollArea> */}
                    </TabsContent>
                    <TabsContent
                      value="manual"
                      className="mt-4 rounded-md w-full"
                    >
                      <ScrollArea className="h-[550px] w-full rounded-md">
                        {/* <div className="h-auto w-full items-start justify-start flex flex-col">
                          <h2>
                            Copy and paste the following code into your project.
                          </h2>
                        </div>
                        <CodeBlock code={component.code} />
                        */}
                        <Timeline className="w-full">
                          <TimelineItem status="done" className="w-full">
                            <TimelineHeading className="text-lg font-[500] text-foreground">
                              Copy and paste the following code into your
                              project.
                            </TimelineHeading>
                            <TimelineDot
                              customIcon="1"
                              status="custom"
                              className="text-foreground m-1 bg-foreground/5"
                            />
                            <TimelineLine done className="bg-foreground/10" />
                            <TimelineContent className="w-full mt-6 gap-4">
                              {/* <CodeBlock code={component.code} /> */}
                              {component.code.map((data) => (
                                <CodeBlock
                                  type={data.type}
                                  key={data.key}
                                  code={data.sourceCode}
                                  className="mb-4"
                                />
                              ))}
                            </TimelineContent>
                          </TimelineItem>
                          <TimelineItem status="done" className="w-full">
                            <TimelineHeading className="text-lg font-[500] text-foreground">
                              Update the import paths to match your project
                              setup.
                            </TimelineHeading>
                            <TimelineDot
                              customIcon="2"
                              status="custom"
                              className="text-foreground m-1 bg-foreground/5 border-none"
                            />
                            <TimelineContent className="w-full mt-6"></TimelineContent>
                          </TimelineItem>
                        </Timeline>
                      </ScrollArea>
                    </TabsContent>
                  </Tabs>
                </div>
                {/* Props Section ============================================================================================> */}
                <div
                  id="Props"
                  className="flex flex-col items-start justify-start w-full gap-4 mt-4"
                >
                  <h1 className="text-2xl font-bold w-full border-b border-b-foreground/20 pb-3">
                    Props
                  </h1>
                  <div className="w-full">
                    {component.props.map((prop) => (
                      <div
                        id={prop.id}
                        key={prop.name}
                        className="flex flex-col items-start justify-start w-full gap-4"
                      >
                        <h2 className="text-lg font-bold mt-2">{prop.name}</h2>
                        <div className="w-full">
                          <PropTable items={prop.content} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Credits Section ============================================================================================> */}
                <div
                  id="Credits"
                  className="flex flex-col items-start justify-start w-full gap-4 mt-4"
                >
                  <h1 className="text-2xl font-bold w-full border-b border-b-foreground/20 pb-3">
                    Credits
                  </h1>
                  <div className="w-full pl-4">
                    <ul className="list-disc pl-5 text-foreground">
                      {component.credits.map((credit, i) => (
                        <li key={i}>{credit.data}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Buttons Section ============================================================================================> */}
                <div className="flex flex-row items-center justify-between flex-nowrap w-full">
                  {prevComponent ? (
                    <PrevButton
                      href={prevComponent.id}
                      name={prevComponent.name}
                    />
                  ) : (
                    <PrevButton href="/" name="Back to Home" />
                  )}
                  {nextComponent ? (
                    <NextButton
                      href={nextComponent.id}
                      name={nextComponent.name}
                    />
                  ) : (
                    <NextButton href="/" name="Back to Home" />
                  )}
                </div>
              </div>
            </>
          ) : (
            <NotFoundSection className="pt-4" />
          )}
        </div>

        {component ? <Navigator navigator={component.navigator} /> : null}
      </div>
    </section>
  );
}
