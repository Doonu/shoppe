import Environment from 'jest-environment-jsdom';

module.exports = class CustomTestEnvironment extends Environment {
  async setup() {
    await super.setup();
    this.global.TextEncoder = TextEncoder;
    this.global.TextDecoder = TextDecoder;
  }
};
