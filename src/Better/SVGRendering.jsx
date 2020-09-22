import React from 'react'


const SVGRendering = (props) => {
    return (
        <>
            <img src={props.url} {...props} alt= ''/>
        </>
    )
}

export default SVGRendering