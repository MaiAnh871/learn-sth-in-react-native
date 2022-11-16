import axios from 'axios';

export function storeExpense(expenseData) {
    axios.post(
        'https://react-native-course-cc4f3-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json',
        expenseData
    );
}