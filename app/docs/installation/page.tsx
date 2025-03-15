import NotFoundSection from "@/components/not-found";
import { ScrollArea } from "@/components/ui/scroll-area";
import ScrollMenu from "@/components/scroll-menu";
import Navigator from "@/components/navigator";
import { InstallationNavigator } from "@/app/utils/content";
// import DynamicBreadCrumbs from "@/components/dynamic-breadcrumbs";

export default function Installation() {
  return (
    <section className="mt-16 flex flex-col flex-nowrap md:grid md:grid-cols-[280px_1fr] items-start justify-start w-full min-h-screen">
      <div className="bg-background px-4 hidden md:flex w-[250px] lg:w-[280px] min-h-screen sticky left-0 top-12">
        <ScrollArea className="h-screen w-full rounded-md pt-8">
          <ScrollMenu />
        </ScrollArea>
      </div>

      <div className="bg-background lg:flex-1 w-full flex-col flex-nowrap xl:flex-none xl:flex xl:flex-row min-h-screen border border-foreground/10">
        <div className="bg-background px-4 mb-4 xl:flex-grow min-h-screen">
          <NotFoundSection className="pt-4" />
        </div>

        <Navigator navigator={InstallationNavigator} />
      </div>
    </section>
  );
}
