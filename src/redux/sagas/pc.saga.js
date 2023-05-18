import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchPC() {
    try {
        const response = yield axios.get('/api/pc');

        yield put({ type: 'SET_PC_LIST', payload: response.data });
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
  yield takeLatest('FETCH_PC_LIST', fetchPC);
}

export default pcSaga;
