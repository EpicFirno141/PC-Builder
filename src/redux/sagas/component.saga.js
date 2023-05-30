import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchComponentList(action) {
  try {
      const response = yield axios.get(`/api/component/pc/${action.payload.id}`);

      yield put({ type: 'SET_COMPONENT_LIST', payload: response.data });
  } catch (error) {
      console.log('Component List GET request failed', error);
  }
}

function* addComponent(action) {
  try {
    yield axios.post('/api/component', action.payload );

    yield put({ type: 'FETCH_COMPONENT_LIST' });
  } catch (error) {
    console.log('Component POST request failed', error);
  }
}

function* gpuFetch() {
  const response = yield axios.get('/api/component/gpu');
  yield put({ type: 'SET_GPU_LIST', payload: response.data });
}

function* removeComponent(action) {
  try {
    yield axios.delete('/api/component/', action.payload );
    yield put({ type: 'FETCH_COMPONENT_LIST' });
  } catch (error){
    console.log('Component DELETE request failed', error);
  }
}

function* componentSaga() {
  yield takeLatest('ADD_COMPONENT', addComponent);
  yield takeLatest('FETCH_COMPONENT_LIST', fetchComponentList);
  yield takeLatest('FETCH_GPU_LIST', gpuFetch);
}

export default componentSaga;