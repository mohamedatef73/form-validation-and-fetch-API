import React from 'react'

function Forms(props){
    return(
        <div>
            <div className='row justify-content-center'>
                <div >
                    <input type={props.type} placeholder={props.placeholder} />
                </div>
                
            </div>
        </div>
    )
}

export default Forms