import type { ReactNode } from "react";

interface HeaderTitlesProps {
    title: ReactNode;
    subTitle: ReactNode;
}

export default function HeaderTitles({ title, subTitle }: HeaderTitlesProps) {
    return (
        <div className="flex flex-col gap-5 mt-10 font-initial text-center">
            <h1 className="text-white text-3xl md:text-6xl font-extrabold">
                {title}
            </h1>
            <p className="text-white text-xl md:text-2xl">
                {subTitle}
            </p>
        </div>
    )
}
