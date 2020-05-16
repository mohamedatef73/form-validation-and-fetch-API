import React from 'react'

const FormInputs = ((props) => {

    function handleInputChange(val) {
        props.handleChange(val)
        props.resetError('')
    }

    
    return (
        <div className="row justify-content-center mt-2">
            <div className="col-12 col-md-8">
                <input type={props.type} className="form-control"
                    value={props.value} placeholder={props.placeholder}
                    onChange={(e) => handleInputChange(e.target.value)} />
                {props.error && <span className='text-danger'>{props.error}</span>}
            </div>
        </div>
    )
})
export default FormInputs