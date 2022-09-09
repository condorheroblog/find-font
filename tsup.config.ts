import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/*.ts'],
	dts: true,
	format: ['cjs', 'esm', 'iife'],
	globalName: '__FINDFONT__',
	// legacyOutput: true,
	shims: true,
	clean: true,
})
