import Link from "next/link";
import Image from "next/image"; // Use Image for local SVGs
import { Dock, DockIcon } from "./ui/dock";

export function FloatingDoc() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <Dock magnification={80} distance={120} direction="middle" className="mx-auto">
        
        {/* LinkedIn */}
        <DockIcon>
          <Link href="https://www.linkedin.com/in/hasib-shaif/" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/doc-icons/linkedin-icon.svg" alt="LinkedIn" width={40} height={40} />
          </Link>
        </DockIcon>
        
        {/* GitHub */}
        <DockIcon>
          <Link href="https://github.com/hasibshaif" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/doc-icons/github-icon.svg" alt="GitHub" width={40} height={40} />
          </Link>
        </DockIcon>
        
        {/* Email */}
        <DockIcon>
          <Link href="mailto:hasibshaif1@gmail.com">
            <Image src="/icons/doc-icons/email-icon.svg" alt="Email" width={40} height={40} />
          </Link>
        </DockIcon>
        
        {/* Phone */}
        <DockIcon>
          <Link href="tel:+19293745110">
            <Image src="/icons/doc-icons/phone-icon.svg" alt="Phone" width={40} height={40} />
          </Link>
        </DockIcon>
        
      </Dock>
    </nav>
  );
}
