import { RoadmapStep, RoadmapStepComponent } from "./roadmap-step";

const WelocomeRoadmapConfig: {
    steps: Array<RoadmapStep>;
} = {
    steps: [
        { title: "Design", state: "completed", date: "June 2022" },
        { title: "Development", state: "ongoing", date: "June 2022" },
        { title: "Beta Test", state: "planned", date: "est Autumn 2022" },
        {
            title: "Release",
            state: "planned",
            date: "est late 2022 / early 2023",
        },
    ],
};

export interface WelocomeRoadmapProps {}

export const WelocomeRoadmap: React.FC<WelocomeRoadmapProps> = ({}) => {
    return (
        <div className="h-screen flex items-center">
            <div
                className="xl:h-[60vh] xl:w-[35vw]
                        lg:h-[26rem] lg:w-[24rem]
                        md:h-[24rem] md:w-[20rem]
                        relative flex"
            >
                <div className="absolute h-full translate-x-[5px] border-[1px] border-dark-primary-light" />
                <div className="relative flex flex-col justify-between gap-8">
                    {WelocomeRoadmapConfig.steps.map((step, index) => {
                        return [
                            <RoadmapStepComponent
                                step={step}
                                onHovered={() => {}}
                            />,
                        ];
                    })}
                </div>
            </div>
        </div>
    );
};
