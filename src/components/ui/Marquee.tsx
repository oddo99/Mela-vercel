"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    children?: React.ReactNode;
    vertical?: boolean; // Kept for interface compatibility but forcing horizontal now
    repeat?: number;
    duration?: number;
}

export function Marquee({
    className,
    reverse,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    duration = 30, // Default to matched CSS duration if possible, but we use class
    ...props
}: MarqueeProps) {
    return (
        <div
            {...props}
            className={cn(
                "group flex overflow-hidden p-2 gap-[--gap] [--gap:1rem]",
                {
                    "flex-row": !vertical,
                    "flex-col": vertical,
                },
                className
            )}
        >
            {/* First Set */}
            <div
                className={cn("flex shrink-0 items-center gap-[--gap] animate-scroll-infinite", {
                    "flex-row": !vertical,
                    "flex-col": vertical,
                    "group-hover:[animation-play-state:paused]": pauseOnHover,
                    "[animation-direction:reverse]": reverse,
                })}
                style={{ animationDuration: `${duration}s` }}
            >
                {Array(repeat).fill(0).map((_, i) => (
                    <React.Fragment key={i}>
                        {children}
                    </React.Fragment>
                ))}
            </div>

            {/* Duplicate Set for Seamless Loop */}
            <div
                className={cn("flex shrink-0 items-center gap-[--gap] animate-scroll-infinite", {
                    "flex-row": !vertical,
                    "flex-col": vertical,
                    "group-hover:[animation-play-state:paused]": pauseOnHover,
                    "[animation-direction:reverse]": reverse,
                })}
                style={{ animationDuration: `${duration}s` }}
            >
                {Array(repeat).fill(0).map((_, i) => (
                    <React.Fragment key={i}>
                        {children}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
