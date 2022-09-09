import { useGetImageDataDetect } from './useGetImageDataDetect'
import { useMeasureTextDetect } from './useMeasureTextDetect'
import { getCanvas } from './getCanvas'

interface FindFontNameOptions {
	canvasInstance?: HTMLCanvasElement
	canvasContext2D?: CanvasRenderingContext2D
	baseFontName?: string
	canvasWidth?: number
	canvasHeight?: number
	imageDataFontSize?: number
	imageDataText?: string
	measureText?: string
	measureTextFontSize?: number
}

const INITALOPTIONS = {
	baseFontName: 'Arial',
	canvasWidth: 100,
	canvasHeight: 100,
	imageDataText: 'a',
	imageDataFontSize: 100,
	measureTextFontSize: 100,
	measureText: 'abcdefghijklmnopqrstuvwxyz0123456789',
}

/**
 * Detect fonts supported by the system on the client.
 * @example
 * // return true if the system support this font
 * findFont('AABBCC')
 * @example
 * // otherwise false
 * findFont('Helvetica')
 */
export const findFont = (fontName: string, findFontNameOptions?: FindFontNameOptions) => {
	const {
		canvasInstance,
		canvasContext2D,
		baseFontName = INITALOPTIONS.baseFontName,
		canvasWidth = INITALOPTIONS.canvasWidth,
		canvasHeight = INITALOPTIONS.canvasHeight,
		imageDataText = INITALOPTIONS.imageDataText,
		imageDataFontSize = INITALOPTIONS.imageDataFontSize,
		measureText = INITALOPTIONS.measureText,
		measureTextFontSize = INITALOPTIONS.measureTextFontSize,
	} = findFontNameOptions ?? {}

	if (typeof fontName !== 'string')
		return false

	if (baseFontName.toUpperCase() === fontName.toUpperCase())
		return true

	const ctx = getCanvas(canvasInstance, canvasContext2D)

	if (!useMeasureTextDetect(baseFontName, fontName, {
		...ctx,
		canvasWidth,
		canvasHeight,
		measureText,
		measureTextFontSize,
	}))
		return false

	return useGetImageDataDetect(baseFontName, fontName, {
		...ctx,
		canvasWidth,
		canvasHeight,
		imageDataText,
		imageDataFontSize,
	})
}
