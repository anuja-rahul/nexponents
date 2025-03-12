import { componentList } from "@/lib/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components",
  description: "Explore the components that make up the Nexponent ui.",
};

interface ComponentsPageProps {
  params: { component: string };
}

export default function ComponentsPage({ params }: ComponentsPageProps) {
  const component = componentList.find((c) => c.id === params.component);

  if (!component) {
    return (
      <>
        <div className="mt-20">Component - {params.component} not found !</div>
      </>
    );
  } else {
    return (
      <section className="mt-20 flex flex-col lg:grid lg:grid-cols-[280px_1fr] items-start justify-start w-full min-h-screen">
        <div className="bg-gray-200 px-4 hidden lg:flex w-[280px] min-h-screen">
          component scrollmenu
        </div>

        <div className="bg-gray-100 lg:flex-1 w-full flex-col flex-nowrap xl:flex-none xl:flex xl:flex-row min-h-screen">
          <div className="bg-yellow-200 px-4 mb-4 xl:flex-grow min-h-screen">
            {component.name}
          </div>

          <div className="hidden xl:grid">
            <div className="bg-blue-200 px-4 w-[240px]">navigator</div>
          </div>
        </div>
      </section>
    );
  }
}
