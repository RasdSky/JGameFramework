export interface IAvatar {
    changeFeature(featureID: string): Promise<void>;
    play(clip: string, start: number): void;
}