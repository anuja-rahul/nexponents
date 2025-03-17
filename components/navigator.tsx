import Link from "next/link";
import { ScrollArea } from "./ui/scroll-area";
import NavigatorLink from "./navigator-link";
import { BugIcon, LightbulbIcon, PencilIcon } from "lucide-react";

interface NavigatorProps {
  navigator: {
    title: string;
    content: {
      name: string;
      subtitles: { name: string }[];
    }[];
  }[];
}

export default function Navigator({ navigator }: NavigatorProps) {
  return (
    <div>
      <div className="hidden xl:grid h-full sticky right-0 top-12">
        <div className="bg-background px-4 w-[240px] h-full border-l border-l-foreground/10">
          <ScrollArea className="h-screen w-full rounded-md pt-8">
            {navigator.map((section, i) => {
              return (
                <div
                  key={i}
                  id={section.title} // Set an ID to match with the link
                  className="gap-3 flex flex-col items-start justify-start w-full mb-5"
                >
                  <h1 className="font-[500] text-foreground px-2 m-0 mb-3 text-base tracking-tight">
                    {section.title}
                  </h1>
                  <div className="gap-[2px] flex flex-col items-start justify-start w-full">
                    {section.content.map((element, index) => {
                      return (
                        <div key={element.name}>
                          <Link
                            href={`#${element.name}`}
                            className={`text-sm text-foreground/70 font-[500] bg-background hover:text-foreground duration-300 py-[6px] p-2 w-full rounded-lg `}
                          >
                            {element.name}
                          </Link>
                          {element.subtitles &&
                            element.subtitles.length > 0 && (
                              <div
                                className="gap-[2px] flex flex-col items-start w-full pl-4 justify-center"
                                key={element.name + index}
                              >
                                {element.subtitles.map((subtitle) => (
                                  <Link
                                    href={`#${subtitle.name}`}
                                    key={subtitle.name}
                                    className={`text-sm text-foreground/70 font-[500] bg-background hover:text-foreground duration-300 py-[4px] p-2 w-full rounded-lg `}
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
                  href="https://github.com/anuja-rahul/nexponents/issues/new/choose"
                  text="Report an issue"
                  target="_blank"
                  icon={
                    <BugIcon className="w-4 h-4 text-foreground/60 group-hover:text-foreground mt-1" />
                  }
                />
                <NavigatorLink
                  href="https://github.com/anuja-rahul/nexponents/issues/new/choose"
                  text="Request a feature"
                  target="_blank"
                  icon={
                    <LightbulbIcon className="w-4 h-4 text-foreground/60 group-hover:text-foreground mt-1" />
                  }
                />
                <NavigatorLink
                  href="https://github.com/anuja-rahul/nexponents/"
                  text="Edit this project"
                  target="_blank"
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
  );
}

// <div>
//   <div className="hidden xl:grid h-full">
//     <div className="bg-background px-4 w-[240px] h-full border-l border-l-foreground/10">
//       <ScrollArea className="h-screen w-full rounded-md pt-8">
//         {component.navigator.map((section, i) => {
//           return (
//             <div
//               key={i}
//               className="gap-1 flex flex-col items-start justify-start w-full mb-5"
//             >
//               <h1 className="font-[500] text-foreground px-2 m-0 mb-2 text-base tracking-tight">
//                 {section.title}
//               </h1>
//               <div className="gap-[2px] flex flex-col items-start justify-start w-full">
//                 {section.content.map((element, index) => {
//                   return (
//                     <div key={element.name}>
//                       <Link
//                         href={`#${element.name}`}
//                         key={element.name}
//                         className="text-sm text-foreground/50 font-[500] bg-background hover:text-foreground duration-300 py-[6px] p-2 w-full rounded-lg"
//                       >
//                         {element.name}
//                       </Link>
//                       {element.subtitles &&
//                         element.subtitles.length > 0 && (
//                           <div
//                             className="gap-[2px] flex flex-col items-start justify-start w-full pl-3"
//                             key={element.name + index}
//                           >
//                             {element.subtitles.map((subtitle) => (
//                               <Link
//                                 href={`#${subtitle.name}`}
//                                 key={subtitle.name}
//                                 className="text-sm text-foreground/50 font-[500] bg-background hover:text-foreground duration-300 py-[6px] p-2 w-full rounded-lg"
//                               >
//                                 {subtitle.name}
//                               </Link>
//                             ))}
//                           </div>
//                         )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })}
//         <div className="gap-1 flex flex-col items-start justify-start w-full mb-5">
//           <h1 className="font-[500] text-foreground px-2 m-0 mb-2 text-base tracking-tight">
//             Contribute
//           </h1>
//           <div className="gap-2 flex flex-col items-start justify-start w-full px-2">
//             <NavigatorLink
//               href="#"
//               text="Report an issue"
//               icon={
//                 <BugIcon className="w-4 h-4 text-foreground/60 group-hover:text-foreground mt-1" />
//               }
//             />
//             <NavigatorLink
//               href="#"
//               text="Request a feature"
//               icon={
//                 <LightbulbIcon className="w-4 h-4 text-foreground/60 group-hover:text-foreground mt-1" />
//               }
//             />
//             <NavigatorLink
//               href="#"
//               text="Edit this page"
//               icon={
//                 <PencilIcon className="w-4 h-4 text-foreground/60 group-hover:text-foreground mt-1" />
//               }
//             />
//           </div>
//         </div>
//       </ScrollArea>
//     </div>
//   </div>
// </div>
