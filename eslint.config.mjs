import typescriptEslint from "typescript-eslint"
import eslintJs from "@eslint/js"

export default [
    eslintJs.configs.recommended,
    ...typescriptEslint.configs.recommended,
    {
        ignores: [ // 指定 ESLint 应忽略的文件和文件夹
            "node_modules/**",
            "packages/core/build/**",
            "packages/core/**/*.d.ts"
        ]
    },
    {
        files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"], // 指定 ESLint 需要检查的文件类型
        rules: {
            "no-console": "warn",
            "@typescript-eslint/no-var-requires": "off", // 关闭 TypeScript 中禁止使用 require 的规则
            "@typescript-eslint/no-unused-vars": ["warn"], // 对未使用的变量发出警告
            "@typescript-eslint/no-namespace": "off", // 关闭 TypeScript 中禁止使用命名空间的规则
            "no-duplicate-imports": "warn", //  对重复导入同一个模块发出警告
            "no-undef": "off" // 关闭未定义变量的检查规则
        }
    }
]