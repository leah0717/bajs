import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true,
        coverage: {
            include: ['src/**'], // 配置代码覆盖率报告时，将 src 目录下的所有文件都包括在内。
        },
    },
})
