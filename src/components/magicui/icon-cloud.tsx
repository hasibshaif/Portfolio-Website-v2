"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/legacy/image";

import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(), // Updated type
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
  customIcons?: Array<{ src: string; name: string }>; // Add customIcons prop
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function IconCloud({ iconSlugs, customIcons = [] }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (iconSlugs.length > 0) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    const simpleIconElements = data
      ? Object.values(data.simpleIcons).map((icon) =>
          renderCustomIcon(icon, theme || "light")
        )
      : [];
  
      const customIconElements = customIcons.map((customIcon) => (
        <div key={customIcon.name} style={{ width: 42, height: 42, position: "relative" }}>
          <Image
            src={customIcon.src}
            alt={customIcon.name}
            width={42}
            height={42}
            style={{ objectFit: "contain" }} // Ensures the image fits properly
            priority // Optional: Loads images with higher priority
          />
        </div>
      ));
  
    return [...simpleIconElements, ...customIconElements];
  }, [data, theme, customIcons]);

  return (
    <Cloud {...cloudProps}>
      {renderedIcons} {/* Directly provide the children here */}
    </Cloud>
  );
}
