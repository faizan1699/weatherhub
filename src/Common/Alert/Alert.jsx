import React from 'react'

export default function Alert(props) {

  const capiTalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }

  return (
    props.alert && <div className={`alert fw-bold border-0 alert-${props.alert.type}`} role="alert">
      <span className={`text-${props.alert.type} px-4 py-1 rounded-pill `}>{capiTalize(props.alert.type)} :</span> {props.alert.message}
    </div>
  )
}
