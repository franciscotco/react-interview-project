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
	},

	color: {
		white: string,
		gray_lightest: string
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
	},

	color: {
		white: '#ffffff',
		gray_lightest: '#fcfcfc'
		// gray_lighter: '#f3f3f3',
		// gray_light: '#E2E2E2',
		// gray_medium_light: '#dddddd',
		// gray_medium: '#eaeaea',
		// gray_dark: '#555555',
		// blue_main: '#1B83A4',
		// blue_background: '#f3f9fa',
		// blue_alternate: '#5c717b',
		// blue_dark: '#194553',
		// text_graph: '#3e3e3e',
		// text_light: '#868686',
		// text_dark: '#414141',
		// error: '#DB4736',
		// success: '#5FA052',
		// warning: '#DD7F33',
		// info: '#1B83A4',
		// disabled: '#d4d4d4',
		// chart_good: '#36c161',
		// chart_ok: '#ffa42c',
		// chart_bad: '#e52828',
		// facebook: '#4267B2',
		// foursquare: '#F94877'
	}

};
