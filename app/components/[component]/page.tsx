import NotFoundSection from "@/components/not-found";
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

  return (
    <section className="mt-20 flex flex-col lg:grid lg:grid-cols-[280px_1fr] items-start justify-start w-full min-h-screen">
      <div className="bg-gray-200 px-4 hidden md:flex w-[250px] lg:w-[280px] min-h-screen">
        component scrollmenu
      </div>

      <div className="bg-background lg:flex-1 w-full flex-col flex-nowrap xl:flex-none xl:flex xl:flex-row min-h-screen">
        <div className="bg-background px-4 mb-4 xl:flex-grow min-h-screen">
          {component ? (
            <div>{component.name}</div>
          ) : (
            <NotFoundSection />
          )}
        </div>

        {component ? (
          <div>
            <div className="hidden xl:grid">
              <div className="bg-gray-200 px-4 w-[240px] min-h-screen">navigator</div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
