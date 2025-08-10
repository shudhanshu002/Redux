1. createStore() → returns store with { getState, dispatch, subscribe }
2. Initial dispatch({ type: '@@INIT' }) sets initial state
3. You subscribe UI listeners via store.subscribe()
4. You call dispatch({ type: 'INCREMENT' }) etc.
5. Reducer updates state
6. All subscribed listeners get triggered
