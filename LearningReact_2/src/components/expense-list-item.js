import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ExpenseItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        {console.log(createdAt)}
        <p>Amount:{amount / 100} - CreatedAt:{moment(createdAt).calendar()}</p>
    </div>
);

export default ExpenseItem;