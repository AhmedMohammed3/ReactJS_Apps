import { date, amount } from '../helpers/constants';
// Get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
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