import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

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

    yield put({ type: 'SET_PC_ITEM', payload: response.data[0] });
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

function* removePC(action) {
  try {
    yield axios.delete(`/api/pc/${action.payload.id}`);
    yield put({ type: 'FETCH_PC_LIST' });
  } catch (error) {
    console.log('PC DELETE request failed', error);
  }
}

function* updatePCDetails(action) {
  try {
    yield axios.update(`/api/pc/${action.payload.id}`)
  } catch (error) {
    console.log('PC UPDATE request failed', error);
  }
}

function* pcSaga() {
  yield takeLatest('ADD_PC', addPC);
  yield takeLatest('FETCH_PC_LIST', fetchPCList);
  yield takeLatest('FETCH_PC_ITEM', fetchPCItem);
  yield takeLatest('REMOVE_PC', removePC);
}

export default pcSaga;
