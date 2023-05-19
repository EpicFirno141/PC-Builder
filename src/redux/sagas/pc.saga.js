import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchPCList() {
  try {
      const response = yield axios.get('/api/pc');

      yield put({ type: 'SET_PC_LIST', payload: response.data });
  } catch (error) {
      console.log('PC GET request failed', error);
  }
}

function* fetchPCItem(action) {
  try {
    const response = yield axios.get(`/api/pc/${action.payload.id}`);

    yield put({ type: 'SET_PC_ITEM', payload: response.data });
  } catch (error) {
      console.log('PC GET request failed', error);
  }
}

function* addPC() {
  try {
    yield axios.post('/api/pc');

    yield put({ type: 'FETCH_PC_LIST' });
  } catch (error) {
    console.log('PC POST request failed', error);
  }
}

function* pcSaga() {
  yield takeLatest('ADD_PC', addPC);
  yield takeLatest('FETCH_PC_LIST', fetchPCList);
  yield takeLatest('FETCH_PC_ITEM', fetchPCItem);
}

export default pcSaga;
