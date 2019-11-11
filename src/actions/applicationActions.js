export const LOAD = 'LOAD'

export function load(values) {
  return {
    type: LOAD,
    values,
  }
}
