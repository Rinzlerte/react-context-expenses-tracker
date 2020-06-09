export default (state, action) => {
    switch (action.type) {

      case "DELETE TRANSACTION":
        return {
          ...state,
          transactions: state.transactions.filter(
            (item) => item.id != action.payload
          ),
        };

    //   case "ADD TRANSACTION":
    //     return {
    //       ...state,
    //       transactions: state.transactions.filter(
    //         (item) => item.id != action.payload
    //       ),
    //     };

      default:
        return state;
    }
}