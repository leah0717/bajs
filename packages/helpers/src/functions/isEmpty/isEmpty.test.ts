import { describe, it, expect } from 'vitest'
import isEmpty from './isEmpty'

describe('isEmpty', () => {
    it('当字符串只有空格时返回true', () => {
        const res = isEmpty(' ')
        expect(res).toBe(true)
    })
    it('当字符串不为空时返回false', () => {
        const res = isEmpty('ok best')
        expect(res).toBe(false)
    })
})
