export const RECEIVE_ENTRIES = "RECEIVE_ENTRIES ";
export const ADD_ENTRY = " ADD_ENTRY ";

export function reveiveEntries(entries) {
  return {
    type: RECEIVE_ENTRIES,
    entries
  };
}
