export default (state, action) => {
    switch (action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.fiter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.paylaod, ...state.transactions]
            }

        default:
            return state;
    }
}