# Hostyn Template

## What's inside?

This template includes the following packages/apps:

### Apps and Packages

- `frontend`: a [Next.js](https://nextjs.org/) app
- `backend`: a [TRPC](https://trpc.io/) backend
- `ui`: a library of ui components
- `eslint-config-custom`: `eslint` configurations
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `prisma`: [Prisma](https://www.prisma.io/) package with all the models
- `iron-session-config`: `iron-session` configuration

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This template is already configured to work with full Server-side rendering.

### Build

To build all apps and packages, run the following command:

```
cd hostyn-template
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd hostyn-template
pnpm dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
