import React from 'react';

const Option = props => (
    <div>
        {props.option.text}
        <button
            onClick={(e) => {
                props.deleteOneOption(props.option._id)
            }}>
            remove
        </button>
    </div>
)

export default Option;