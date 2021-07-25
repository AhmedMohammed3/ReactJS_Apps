import moment from 'moment';

import { date, amount } from '../helpers/constants';
// Get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter(expense => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMath = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMath;
    }).sort((a, b) => {
        if (sortBy === date) {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if (sortBy === amount) {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}