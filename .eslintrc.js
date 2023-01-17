module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    /*변수 선언에 대한 오류를 해결해준다. */
    "rules": {
        "no-unused-vars" : 'off'

    }
}
