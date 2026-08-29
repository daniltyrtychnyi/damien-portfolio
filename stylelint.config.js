/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  plugins: ['stylelint-selector-bem-pattern'],
  rules: {
    'selector-class-pattern': null,
    'custom-property-pattern': null,
    'scss/dollar-variable-pattern': null,
    'font-family-name-quotes': null,
    'color-hex-length': 'long',
    'alpha-value-notation': null,
    'custom-property-empty-line-before': null,

    'plugin/selector-bem-pattern': {
      preset: 'bem',
    },
  },
}
