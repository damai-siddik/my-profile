import { isEmpty } from "radash";
import React from "react";
import { twMerge } from "tailwind-merge";

interface LineStepperData {
    time: string;
    label: string;
    desc: string;
    image?: string;
}

interface LineStepperProps {
    data: LineStepperData[];
}

export default function LineStepper({data}: LineStepperProps) {
    return (
        <div className="mx-6 flex flex-col w-full">
            {data.map((qual, index) => (
                <div key={`${qual.label} - ${index}`} className="flex flex-row gap-4 relative">
                    <div className="order-last my-2 flex flex-row gap-2 p-4 rounded-lg hover:shadow-chat w-full">
                        {!isEmpty(qual.image) && <img src={qual.image} className="w-[250px] rounded object-contain bg-second p-2" />}
                        <div className="flex flex-col">
                            <div className="text-sm text-second-lighter mb-3">{qual.time}</div>
                            <h3 className="text-base font-medium text-title">{qual.label}</h3>
                            <span className="inline-block text-sm mb-4">{qual.desc}</span>
                        </div>
                    </div>
                    <div>
                        <span className="inline-block bg-primary rounded-full w-[13px] h-3 relative top-1/2"></span>
                        <span className={twMerge("h-full bg-primary w-[1px] translate-x-[6px] translate-y-[41%]", index === data.length - 1 ? "hidden" : "block")}></span>
                    </div>
                </div>
            ))}
        </div>
    )
}