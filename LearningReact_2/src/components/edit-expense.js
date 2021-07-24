import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <p>Editing expense with id {props.match.params.expenseId}</p>
        </div>
    )
};

export default EditExpensePage;