declare type Nullable<T> = T | null

// Property 'FreshworksWidget'
// does not exist on type 'Window & typeof globalThis'.

declare interface Window {
  FreshworksWidget: any
}
