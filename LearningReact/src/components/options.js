import React from 'react';

import Option from './option';

const Options = props => (
    <div>
        <button onClick={props.handleDeleteOptions}
        >Remove All</button>
        {props.options.length <= 0 && <p>No Options Available</p>}
        {
            props.options.map(option => {
                return (
                    <Option key={option._id}
                        option={option}
                        deleteOneOption={props.deleteOneOption}
                    />
                );
            })
        }

    </div>
)

export default Options;