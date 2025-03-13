import { ScriptCopyBtn } from "./ui/script-copy-button";

interface ScriptCopyBtnComponentProps {
  component: string;
}

export function ScriptCopyBtnComponent({
  component,
}: ScriptCopyBtnComponentProps) {
  const customCommandMap = {
    npm: `npm run shadcn add ${component}`,
    yarn: `yarn shadcn add ${component}`,
    pnpm: `pnpm dlx shadcn@latest add ${component}`,
    bun: `bun x shadcn@latest add ${component}`,
  };
  return (
    <div className="bg-slate-950 w-full rounded-xl">
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
