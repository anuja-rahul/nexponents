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
    <div className={clsx("bg-slate-950 w-full rounded-xl", disabled && "pointer-events-none opacity-50")}>
      <ScriptCopyBtn
        className="flex items-start justify-start w-full"
        showMultiplePackageOptions={true}
        codeLanguage="shell"
        lightTheme="nord"
        darkTheme="vitesse-dark"
        commandMap={customCommandMap}
      />
    </div>
  );
}
