module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'eslint:recommended',
        "standard-with-typescript",
        "plugin:vue/vue3-essential",
        'plugin:@typescript-eslint/recommended',
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": "@typescript-eslint/parser",
        "project": './tsconfig.json',
        "extraFileExtensions": ['.vue'],
    },
    "parser": "vue-eslint-parser",
    "plugins": [
        "vue"
    ],
    rules: {
        "max-len": ['error', 140],
        "no-dupe-keys": 0,
        "no-multiple-empty-lines": "warn",
        eqeqeq: 0,
        'semi': 0,
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/semi": "off",
        "no-unused-vars": ["warn"],
        "@typescript-eslint/no-var-requires": 0,
        "no-var": "error",
        "vue/custom-event-name-casing": "off",
        "key-spacing": [2,{
          "beforeColon": false,
          "afterColon": true
        }],
        'vue/multi-word-component-names': 'off',
        'vue/script-setup-uses-vars': 'error', 
        'vue/custom-event-name-casing': 'off',
        'vue/attributes-order': 'off',
        'vue/one-component-per-file': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': 'off',
        // 'vue/html-self-closing': [
        // 'error',
        //  {
        //     html: {
        //     void: 'always',
        //     normal: 'never',
        //     component: 'always',
        //     },
        //     svg: 'always',
        //     math: 'always',
        //  },
        // ],
        'vue/no-v-html': 'off',
        }
}