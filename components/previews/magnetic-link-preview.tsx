import { FacebookIcon, GithubIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import MagneticLinks from "../magnetic-links";

export default function MagneticLinkPreview() {
  return (
    <div className="flex flex-row items-center justify-center flex-wrap w-full h-full gap-3 md:gap-6">
      <MagneticLinks href="/" className="w-16 p-2 aspect-square">
        <FacebookIcon />
      </MagneticLinks>
      <MagneticLinks href="/" className="w-16 p-2 aspect-square">
        <TwitterIcon />
      </MagneticLinks>
      <MagneticLinks href="/" className="w-16 p-2 aspect-square">
        <YoutubeIcon />
      </MagneticLinks>
      <MagneticLinks href="/" className="w-16 p-2 aspect-square">
        <GithubIcon />
      </MagneticLinks>
    </div>
  );
}
