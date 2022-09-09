export const getCanvas = (canvasInstance?: HTMLCanvasElement, canvasContext2D?: CanvasRenderingContext2D) => {
	if (!canvasInstance || !canvasContext2D) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		if (!window.OffscreenCanvas)
			canvasInstance = document.createElement('canvas')
		else
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			canvasInstance = new OffscreenCanvas(100, 100)

		canvasContext2D = canvasInstance!.getContext('2d')!
	}
	canvasInstance = canvasInstance!
	return { canvasInstance, canvasContext2D }
}
