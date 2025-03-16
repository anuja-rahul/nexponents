import clsx from "clsx";
import { ScriptCopyBtn } from "./ui/script-copy-button";

interface ScriptCopyBtnComponentProps {
  component: string;
  disabled?: boolean;
}

export function ScriptCopyBtnComponent({
  component,
  disabled = true,
}: ScriptCopyBtnComponentProps) {
  const customCommandMap = {
    npm: `npm run nexponent add ${component}`,
    yarn: `yarn nexponent add ${component}`,
    pnpm: `pnpm dlx nexponent@latest add ${component}`,
    bun: `bun x nexponent@latest add ${component}`,
  };
  return (
    <div
      className={clsx(
        "bg-slate-950 w-full rounded-xl",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      <div className="absolute z-10 flex flex-col items-center justify-center text-white text-lg font-bold left-[35%] md:left-[55%] lg:left-[45%]
      mt-10 p-2 py-[6px] rounded-md backdrop-blur-sm">
        Coming Soon
      </div>
      <ScriptCopyBtn
        className="flex items-start justify-start w-full blur-[1px] pointer-events-none"
        showMultiplePackageOptions={true}
        codeLanguage="shell"
        lightTheme="nord"
        darkTheme="vitesse-dark"
        commandMap={customCommandMap}
      />
    </div>
  );
}
