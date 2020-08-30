import { merge } from 'lodash'

import user from './user.yaml'
import group from './group.yaml'

const copy = merge(
    user,
    group
)

console.log(user)

export default copy
