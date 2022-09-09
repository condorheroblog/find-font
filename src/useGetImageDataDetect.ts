/**
 * Detect Whether a Font is Installed use getImageData
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData
 * @see https://www.zhangxinxu.com/wordpress/2018/02/js-detect-suppot-font-family/
 */

interface UseGetImageDataDetectOptions {
	canvasContext2D: CanvasRenderingContext2D
	canvasInstance: HTMLCanvasElement
	canvasWidth: number
	canvasHeight: number
	imageDataFontSize: number
	imageDataText: string
}

export const useGetImageDataDetect = (baseFontName: string, fontName: string, {
	canvasInstance,
	canvasContext2D,
	canvasWidth,
	canvasHeight,
	imageDataText,
	imageDataFontSize,
}: UseGetImageDataDetectOptions) => {
	canvasContext2D.save()
	canvasInstance.width = canvasWidth
	canvasInstance.height = canvasHeight

	canvasContext2D.textAlign = 'center'
	canvasContext2D.fillStyle = 'black'
	canvasContext2D.textBaseline = 'middle'
	const getCanvasImageData = function (j: string) {
		canvasContext2D.save()
		canvasContext2D.clearRect(0, 0, canvasWidth, canvasHeight)
		canvasContext2D.font = `${imageDataFontSize}px ${j}, ${baseFontName}`
		canvasContext2D.fillText(imageDataText, canvasWidth / 2, canvasHeight / 2)
		const k = canvasContext2D.getImageData(0, 0, canvasWidth, canvasHeight).data
		canvasContext2D.restore()
		return [...k]
	}
	const baseImageData = getCanvasImageData(baseFontName)
	const testImageData = getCanvasImageData(fontName)
	canvasContext2D.restore()

	let isSupport = false
	for (let index = 0; index < baseImageData.length; index++) {
		if (baseImageData[index] === testImageData[index])
			continue
		isSupport = true
		break
	}
	return isSupport
}
