# Just One, No More

Most webcomics have a "random" button, that will take you to a random comic
in the archive. It's a nice way to get to know a new comic, but 
can be a real distraction.

This extension disables that button on some popular webcomics.

"Just one more", no more!

## Contributing

To add or update a random selector, please submit a Pull Request!

Selectors are stored [here](./app/scripts.babel/contentscript.js).
You can add a selector there, follow the [Local Development](#local-development) instructions to make sure it works on the site,
then put up a PR with the change.

### Install

```bash
yarn install
```

### Local Development

Build the package locally

```bash
yarn serve
```

Then follow the [Chrome instructions](https://support.google.com/chrome/a/answer/2714278?hl=en) to load the unpacked extension.

### Deploy

Bump the version, build the extension, zip the package.

```bash
npm version patch
yarn build
yarn zip
```

Follow [these instructions](https://developer.chrome.com/webstore/publish)
to publish.

