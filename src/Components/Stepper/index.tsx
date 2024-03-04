import React from "react";
import { twMerge } from "tailwind-merge";

interface StepperData {
    time: string;
    label: string;
    desc: string;
}

interface StepperProps {
    data: StepperData[];
    // activeIndex: number;
}

export default function Stepper({
    data,
    // activeIndex = 0,
}: StepperProps): JSX.Element {
    return (
        <>
            {
                 data.map((qual, index) => (
                    <div key={`${qual.label} - ${index}`} className="grid grid-cols-[1fr_max-content_1fr] gap-6">
                      {index % 2 !== 0 && <div></div>}
                      <div className={index % 2 !== 0 ? "order-last" : ""}>
                        <div className="text-sm text-second-lighter mb-3">{qual.time}</div>
                        <h3 className="text-base font-medium text-title">{qual.label}</h3>
                        <span className="inline-block text-sm mb-4">{qual.desc}</span>
                      </div>
                      <div>
                        <span className="inline-block bg-primary rounded-full w-[13px] h-3"></span>
                        <span className={twMerge("h-full bg-primary w-[1px] translate-x-[6px] translate-y-[-7px]", index === data.length - 1 ? "hidden" : "block")}></span>
                      </div>
                    </div>
                  ))
            }
        </>
    )
}