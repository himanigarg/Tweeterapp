const logger = (store) => (next)=> (action)=> {
    console.group(action.type)
    console.log('the action is :', action)
    const returnValue = next(action)
    console.log('the value of state is :', store.getState())
    console.groupEnd()
    return returnValue
}

export default logger