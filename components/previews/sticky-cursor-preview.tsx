import { MenuIcon } from "lucide-react";
import StickyCursor from "../showcase/sticky-cursor/sticky-cursor";

export default function StickyCursorPreview() {
  return (
    <div>
      <StickyCursor>
        <header className="place-items-center">
          <MenuIcon />
        </header>
      </StickyCursor>
    </div>
  );
}
