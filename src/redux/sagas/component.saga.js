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

    yield put({ type: 'FETCH_COMPONENT_LIST', payload: { id: action.payload.pc} });
  } catch (error) {
    console.log('Component POST request failed', error);
  }
}

function* removeComponent(action) {
  try {
    yield axios.delete(`/api/component`, { data: action.payload });

    yield put({ type: 'FETCH_COMPONENT_LIST', payload: { id: action.payload.pc} });
  } catch (error){
    console.log('Component DELETE request failed', error);
  }
}

function* gpuFetch() {
  try {
    const response = yield axios.get('/api/component/gpu');
    yield put({ type: 'SET_GPU_LIST', payload: response.data });
  } catch (error){
    console.log('GPU GET request failed', error);
  }
}

function* cpuFetch() {
  try {
    const response = yield axios.get('/api/component/cpu');
    yield put({ type: 'SET_CPU_LIST', payload: response.data });
  } catch (error){
    console.log('CPU GET request failed', error);
  }
}

function* componentSaga() {
  yield takeLatest('ADD_COMPONENT', addComponent);
  yield takeLatest('FETCH_COMPONENT_LIST', fetchComponentList);
  yield takeLatest('FETCH_GPU_LIST', gpuFetch);
  yield takeLatest('FETCH_CPU_LIST', cpuFetch);
  yield takeLatest('REMOVE_COMPONENT', removeComponent);
}

export default componentSaga;