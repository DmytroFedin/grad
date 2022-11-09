
export const checkIfClickedOutside = (e, dropdownRef, setOpen) => {
  if ( dropdownRef.current && !dropdownRef.current.contains(e.target)) {
    setOpen(false)
  }
}