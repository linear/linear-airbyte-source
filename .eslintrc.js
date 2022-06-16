const typescriptRules = {
  "@typescript-eslint/array-type": [
    "error",
    {
      default: "array",
    },
  ],
  "@typescript-eslint/await-thenable": "warn",
  "@typescript-eslint/dot-notation": "warn",
  "@typescript-eslint/explicit-member-accessibility": [
    "warn",
    {
      accessibility: "explicit",
      overrides: {
        accessors: "explicit",
        constructors: "explicit",
        parameterProperties: "explicit",
      },
    },
  ],
  "@typescript-eslint/indent": "off",
  "@typescript-eslint/member-ordering": "off",
  "@typescript-eslint/naming-convention": "off",
  "@typescript-eslint/no-empty-function": "warn",
  "@typescript-eslint/no-empty-interface": "off",
  "@typescript-eslint/no-explicit-any": "warn",
  "@typescript-eslint/no-floating-promises": "error",
  "@typescript-eslint/no-misused-promises": [
    "warn",
    {
      checksVoidReturn: false,
    },
  ],
  "@typescript-eslint/no-misused-new": "error",
  "@typescript-eslint/no-unnecessary-type-assertion": "off", // Too many false positives. See https://github.com/typescript-eslint/typescript-eslint/issues/1410
  "@typescript-eslint/no-var-requires": "error",
  "@typescript-eslint/unified-signatures": "error",
  "@typescript-eslint/no-unused-vars": [
    "warn",
    {
      vars: "all",
      args: "none", // "after-used", TODO: enable
      // argsIgnorePattern: "^_",
      ignoreRestSiblings: true,
    },
  ],
  "@typescript-eslint/no-shadow": [
    "warn",
    {
      hoist: "all",
    },
  ],
  // Should fix
  "@typescript-eslint/ban-types": ["off"], // Todo: switch from tslint/ban
  "@typescript-eslint/no-inferrable-types": "off", // TODO: enable
  // Disable a few @typescript-eslint recommended rules
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/no-unsafe-assignment": "off", // TODO: enable
  "@typescript-eslint/no-unsafe-member-access": "off", // TODO: enable
  "@typescript-eslint/no-unsafe-call": "off", // TODO: enable
  "@typescript-eslint/no-unsafe-return": "off", // TODO: enable
  "@typescript-eslint/restrict-template-expressions": "off", // TODO: enable
  "@typescript-eslint/require-await": "off", // TODO: enable
  "@typescript-eslint/no-unsafe-return": "off", // TODO: enable
  "@typescript-eslint/prefer-regexp-exec": "off", // TODO: enable
  "@typescript-eslint/unbound-method": "off", // TODO: enable
  "@typescript-eslint/ban-ts-comment": "off",
  "@typescript-eslint/no-non-null-assertion": "off",
  "@typescript-eslint/restrict-plus-operands": "off",
  "@typescript-eslint/no-namespace": "off",
  "@typescript-eslint/tslint/config": [
    "error",
    {
      rules: {
        ban: [
          true,
          "eval",
          {
            name: "getConnection",
            message: "Deadlock possibility! Use context-based db operations instead",
          },
          {
            name: "getRepository",
            message: "Deadlock possibility! Use context-based db operations instead",
          },
          {
            name: ["ContextRunner", "createContext"],
            message: "Deadlock possibility! See Context.ts how to obtain a context",
          },
          {
            name: ["ContextRunner", "runAnonymousContext"],
            message: "Deadlock possibility! See Context.ts how to obtain a context",
          },
          {
            name: ["ContextRunner", "runOrganizationContext"],
            message: "Deadlock possibility! Use withOrganizationContext instead",
          },
          {
            name: ["ContextRunner", "runUserContext"],
            message: "Deadlock possibility! Use withOrganizationContext instead",
          },
          {
            name: ["ContextRunner", "runTransaction"],
            message: "Deadlock possibility! Use withTxOrganizationContext instead",
          },
          {
            name: ["*", "where"],
            message: "Use `andWhere` instead to not accidentally override previous conditions",
          },
        ],
      },
    },
  ],
};
const generalRules = {
  "prefer-spread": "off", // TODO: enable
  "constructor-super": "error",
  curly: "error",
  "default-case": "error",
  "eol-last": "off",
  eqeqeq: ["error", "always"],
  "id-blacklist": ["warn", "any", "String", "string", "Boolean", "boolean", "Undefined", "undefined"],
  "id-match": "error",
  "no-template-curly-in-string": "error",
  "no-undef-init": "warn",
  "no-underscore-dangle": "off",
  "no-var": "warn",
  "prefer-arrow-functions": "off",
  "prefer-const": "warn",
  "linebreak-style": "off",
  "no-caller": "error",
  "no-console": "warn",
  "no-debugger": "error",
  "no-duplicate-imports": "error",
  "no-empty": "error",
  "no-eval": "error",
  "no-invalid-this": "off",
  "no-null/no-null": "off",
  "no-redeclare": "off",
  "no-unused-vars": "off",
};
const jsDocRules = {
  "jsdoc/check-alignment": "warn",
  "jsdoc/check-indentation": "off", // TODO: enable
  "jsdoc/newline-after-description": "warn",
};
const importRules = {
  "no-restricted-imports": [
    "error",
    {
      paths: [
        {
          name: "typeorm",
          importNames: ["BaseEntity"],
        },
        {
          name: "type-graphql",
          importNames: ["Mutation", "Query"],
          message: "Please use @AuthorizedMutation or @AuthorizedQuery instead (refer to resolvers/Decorators.ts)",
        },
      ],
      patterns: ["^[\\./]+/common/", "@linear/*/src/*"],
    },
  ],
  "import/no-cycle": "warn",
  "import/order": [
    "warn",
    {
      pathGroups: [
        {
          pattern: "~/**",
          group: "external",
        },
      ],
    },
  ],
};
const reactRules = {
  "react/jsx-key": "off",
  "react/jsx-uses-vars": "warn",
  "react/jsx-uses-react": "warn",
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "off", // Enable later
};
const nodeRules = {
  "node/no-process-env": "error",
};

const config = {
  env: {
    browser: true,
    es6: true,
  },
  ignorePatterns: ["**/.eslintrc.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./src/tsconfig.json",
    tsconfigRootDir: ".",
    sourceType: "module",
    extraFileExtensions: [".json"],
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "@typescript-eslint",
    "@typescript-eslint/tslint",
    "eslint-plugin-jsdoc",
    "eslint-plugin-import",
    "eslint-plugin-no-null",
    "eslint-plugin-react",
    "eslint-plugin-node",
    "eslint-plugin-react-hooks",
    "import",
  ],
  extends: ["plugin:prettier/recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    "prettier/prettier": "warn",
    ...typescriptRules,
    ...generalRules,
    ...jsDocRules,
    ...reactRules,
    ...importRules,
    ...nodeRules,
  },
  overrides: [
    {
      files: ["**/*.js"],
      env: { node: true },
      parserOptions: {
        ecmaVersion: 6,
        sourceType: "script",
        ecmaFeatures: {
          jsx: true,
        },
      },
      extends: ["plugin:prettier/recommended"],
      rules: {
        ...generalRules,
        ...jsDocRules,
        ...nodeRules,
        "node/no-process-env": "off",
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};

module.exports = config;
