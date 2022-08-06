export interface RoadmapStep {
	title: string;
	date: string;
	state: 'completed' | 'ongoing' | 'planned';
}

export interface RoadmapStepProps {
	step: RoadmapStep;
}

export const RoadmapStepComponent: React.FC<RoadmapStepProps> = ({ step }) => {
	const getBackgroundColor = () => {
		switch (step.state) {
			case 'planned':
				return 'bg-neutral-500';
			case 'ongoing':
				return 'bg-blue-500';
			case 'completed':
				return 'bg-green-500';
		}
	};

	return (
		<div className="relative flex gap-4 w-full">
			<div className={`w-3 h-3 rounded-full ${getBackgroundColor()}`}>
				<div
					className={`w-3 h-3 rounded-full ${getBackgroundColor()} ${
						step.state === 'ongoing' && 'animate-ping'
					}`}
				/>
			</div>

			<div className="w-full -translate-y-2">
				<div className="flex justify-between text-sm leading-none">
					<p className="text-sm text-dark-primary-lighter block p-1 mr-4">
						{step.date}
					</p>
					<p
						className={`p-2 text-dark-primary rounded-md ${getBackgroundColor()}`}
					>
						{step.state}
					</p>
				</div>
				<p className="text-2xl mt-2">{step.title}</p>
			</div>
		</div>
	);
};
