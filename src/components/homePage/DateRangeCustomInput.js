import React from "react"


function CustomInput  ({ value, onClick }) {
    return(
        <div>
        <button className="example-custom-input" onClick={onClick}>
          {value}
        </button>
      </div>
    )
}
export default CustomInput
