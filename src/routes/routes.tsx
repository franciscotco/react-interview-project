// Configs
import HomeConfig from './home/config';
import UserConfig from './user/config';
import StatsConfig from './stats/config';

const ROUTES = [
	HomeConfig,
	UserConfig,
	StatsConfig
];

export interface IRoutes {
	name: string,
	path: string,
	order: number,
	id: string
}

export function getRoutes (): IRoutes[] {
	return ROUTES.sort((a, b) => a.order - b.order);
}
