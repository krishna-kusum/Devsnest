const addItem = item => {
  return {
    type: 'ADD_ITEM',
    payload: item
  };
};

const deleteItem = id => {
  return {
    type: 'DELETE_ITEM',
    payload: id
  };
};

const clearData = () => {
  return {
    type: 'CLEAR_DATA'
  };
};

const loadData = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: 'LOAD_DATA',
          payload: data
        })
      );
  };
};

export { addItem, deleteItem, clearData, loadData };
