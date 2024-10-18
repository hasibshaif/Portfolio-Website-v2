import { cn } from "@/lib/utils";
import DoubleUnderline from "../text/double-underline";

export type SkillData = {
  name: string;
  image: string;
};

export default function AvatarList({
  data,
  heading,
  size = "md",
  className,
}: {
  data: SkillData[];
  heading: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes: Record<"sm" | "md" | "lg", string> = {
    lg: "p-1 w-20 h-20", // Large size
    md: "p-0.5 w-16 h-16", // Medium size
    sm: "p-0.5 w-12 h-12", // Small size
  };

  return (
    <div className="w-full text-center">
      {/* Heading under the avatar list */}
      <DoubleUnderline className="text-xl font-semibold mb-6">{heading}</DoubleUnderline>

      {/* Avatar List */}
      <div className={cn("flex justify-center flex-wrap gap-6 py-6", className)}>
        {data.map((item) => (
          <div
            key={item.name}
            className="group relative z-0 flex scale-100 items-center transition-all duration-200 ease-in-out hover:z-10 hover:scale-110"
          >
            <div
              className={cn(
                "relative overflow-hidden rounded-full bg-white",
                sizes[size] ?? sizes.md
              )}
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="rounded-full object-contain w-full h-full"
                style={{ padding: "4px" }}
              />
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 transform whitespace-nowrap rounded bg-slate-900 p-2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900">
              <div className="text-sm font-semibold">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
