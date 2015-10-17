/// <reference path="../flux/flux.d.ts" />

declare module 'clux' {
  interface DispatcherParams {
    actions: {
      id: string
      name: string
    }
    arguments: IArguments
  }

  export function createDispatcher(): Flux.Dispatcher<DispatcherParams>

  interface Actions {
    id(): string
    dispatcher(): Flux.Dispatcher<DispatcherParams>
    [name: string]: Function
  }

  export function generateActions(actionNames: string[], dispatcher: Flux.Dispatcher<DispatcherParams>): Actions

  interface StoreConfig<T> {
    getState(): T
    [actionName: string]: Function
  }

  interface Store<T> {
    getState(): T
    wait(): void
    connectActions(actions: Actions): Store<T>
    subscribe(callback: Function): Store<T>
    unsubscribe(callback: Function): Store<T>
  }

  export function createStore<T>(storeConfig: StoreConfig<T>, dispatcher: Flux.Dispatcher<DispatcherParams>): Store<T>
}
