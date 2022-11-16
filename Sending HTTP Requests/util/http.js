import axios from 'axios';

const BACKEND_URL = 'https://react-native-course-cc4f3-default-rtdb.asia-southeast1.firebasedatabase.app'

export function storeExpense(expenseData) {
    axios.post(
        BACKEND_URL + '/expense.json',
        expenseData
    );
}

export async function fetchExpense() {
    const response = await axios.get(
        BACKEND_URL + '/expense.json',
    );

    const expenses = [];

    //console.log(response.data);

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        };

        expenses.push(expenseObj);
    }

    return expenses;
}