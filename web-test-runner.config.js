process.env.NODE_ENV = 'test'

export default {
  plugins: [require('@snowpack/web-test-runner-plugin')()],
}
