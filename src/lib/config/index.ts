export interface IConfig {
	version: string;
	underConstruction: boolean;
	underMaintainance: boolean;
}

export const getConfig = async (): Promise<IConfig> => {
	return {
		version: process.env.NEXT_PUBLIC_APP_VERSION || '',
		underConstruction: process.env.NODE_ENV === 'production',
		underMaintainance: false
	};
};
