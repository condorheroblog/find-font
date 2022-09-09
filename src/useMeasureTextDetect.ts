/**
 * Detect Whether a Font is Installed use measureText
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/measureText
 * @see https://www.kirupa.com/html5/detect_whether_font_is_installed.htm
 */

interface UseMeasureTextDetectOptions {
	canvasContext2D: CanvasRenderingContext2D
	canvasInstance: HTMLCanvasElement
	canvasWidth: number
	canvasHeight: number
	measureText: string
	measureTextFontSize: number
}

/**
 * use measureText detect font(but Lucida Console === Arial === Helvetica)
 * @param baseFontName
 * @param fontName
 * @returns boolean
 */
export const useMeasureTextDetect = (baseFontName: string, fontName: string, {
	canvasInstance, canvasContext2D, canvasWidth, canvasHeight, measureText,
	measureTextFontSize,
}: UseMeasureTextDetectOptions) => {
	canvasContext2D.save()
	canvasInstance.width = canvasWidth * measureText.length
	canvasInstance.height = canvasHeight

	canvasContext2D.textAlign = 'center'
	canvasContext2D.fillStyle = 'black'
	canvasContext2D.textBaseline = 'middle'

	const getTextWidth = function (j: string) {
		canvasContext2D.save()
		canvasContext2D.clearRect(0, 0, canvasWidth, canvasHeight)
		canvasContext2D.font = `${measureTextFontSize}px ${j}, ${baseFontName}`
		const w = canvasContext2D.measureText(measureText).width
		canvasContext2D.restore()
		return w
	}
	const baseWidth = getTextWidth(baseFontName)
	const testWidth = getTextWidth(fontName)
	canvasContext2D.restore()
	return baseWidth === testWidth
}
