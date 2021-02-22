// Contants
export const MEDIA_MOBILE_LARGE = 375;
export const MEDIA_TABLET = 681;
export const MEDIA_TABLET_LARGE = 1024;
export const MEDIA_DESKTOP_SMALL = 1100;
export const MEDIA_DESKTOP_MEDIUM = 1300;
export const MEDIA_DESKTOP_LARGE = 1440;
export const MEDIA_DESKTOP_XLARGE = 1720;
export const MEDIA_DESKTOP_XXLARGE = 1920;

export interface ITheme {
	media: {
		mobile_large: string,
		tablet: string,
		tablet_large: string,
		desktop_small: string,
		desktop_medium: string,
		desktop_large: string,
		desktop_xlarge: string,
		desktop_xxlarge: string
	}
}

/*
 *
 */
export const THEME: ITheme = {

	media: {
		mobile_large: `min-width: ${MEDIA_MOBILE_LARGE}px`,
		tablet: `min-width: ${MEDIA_TABLET}px`,
		tablet_large: `min-width: ${MEDIA_TABLET_LARGE}px`,
		desktop_small: `min-width: ${MEDIA_DESKTOP_SMALL}px`,
		desktop_medium: `min-width: ${MEDIA_DESKTOP_MEDIUM}px`,
		desktop_large: `min-width: ${MEDIA_DESKTOP_LARGE}px`,
		desktop_xlarge: `min-width: ${MEDIA_DESKTOP_XLARGE}px`,
		desktop_xxlarge: `min-width: ${MEDIA_DESKTOP_XXLARGE}px`
	}

};
