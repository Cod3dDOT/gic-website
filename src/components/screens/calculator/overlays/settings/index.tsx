import { FadeReveal } from "@components/common";

export interface SettingsOverlayProps {
    opened: boolean;
}

export const SettingsOverlay: React.FC<SettingsOverlayProps> = ({ opened }) => {
    return (
        <FadeReveal className="absolute inset-0" revealed={opened}>
            <div></div>
        </FadeReveal>
    );
};
