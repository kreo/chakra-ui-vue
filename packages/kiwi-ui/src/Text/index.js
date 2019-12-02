import Box from '../Box'
import { forwardProps } from '../utils'
import { baseProps } from '../config/props'

export default {
  name: 'KText', // <-- Vue does not allow components to be registered using built-in or reserved HTML elements as component id: like "Text". So need to rename this.
  inject: ['$theme', '$colorMode'],
  props: {
    as: {
      type: [String, Array],
      default: 'p'
    },
    ...baseProps
  },
  render (h) {
    return h(Box, {
      props: {
        as: this.as,
        ...forwardProps(this.$props)
      }
    }, this.$slots.default)
  }
}
