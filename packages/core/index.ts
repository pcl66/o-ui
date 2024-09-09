import { makeInstaller } from '@o-ui/utils'
import components from './components'

const installer = makeInstaller(components)

export * from '@o-ui/components'
export default installer