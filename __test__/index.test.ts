import { describe, expect, it } from 'vitest'

import { findFont } from '../src'

describe('fonts supported by the system', async () => {
	it('support Helvetica font', async () => {
		const isSupportHelvetica = findFont('Helvetica')
		expect(isSupportHelvetica).toBe(true)
	})
})

describe('font not supported by the system', async () => {
	it('Not support AABBCC font', async () => {
		const isSupport = findFont('AABBCC')
		expect(isSupport).toBe(false)
	})
})

describe('Verify the parameters of findFont function', async () => {
	it('findFontNameOptions is {}', async () => {
		const isSupportHelvetica = findFont('Helvetica')
		expect(isSupportHelvetica).toBe(true)
		const isSupport = findFont('AABBCC')
		expect(isSupport).toBe(false)
	})
})
