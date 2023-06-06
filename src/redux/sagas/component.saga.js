import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchComponentList(action) {
  try {
      const response = yield axios.get(`/api/component/pc/${action.payload.id}`);

      yield put({ type: 'SET_COMPONENT_LIST', payload: response.data });
      yield put({ type: 'SET_PC_PRICE', payload: response.data });
      yield put({ type: 'SET_PC_WATTAGE', payload: response.data });
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

function* coolerFetch() {
  try {
    const response = yield axios.get('/api/component/cooler');
    yield put({ type: 'SET_COOLER_LIST', payload: response.data });
  } catch (error){
    console.log('Cooler GET request failed', error);
  }
}

function* moboFetch() {
  try {
    const response = yield axios.get('/api/component/mobo');
    yield put({ type: 'SET_MOBO_LIST', payload: response.data });
  } catch (error){
    console.log('Mobo GET request failed', error);
  }
}

function* psuFetch() {
  try {
    const response = yield axios.get('/api/component/psu');
    yield put({ type: 'SET_PSU_LIST', payload: response.data });
  } catch (error){
    console.log('PSU GET request failed', error);
  }
}

function* memoryFetch() {
  try {
    const response = yield axios.get('/api/component/memory');
    yield put({ type: 'SET_MEMORY_LIST', payload: response.data });
  } catch (error){
    console.log('Memory GET request failed', error);
  }
}

function* storageFetch() {
  try {
    const response = yield axios.get('/api/component/storage');
    yield put({ type: 'SET_STORAGE_LIST', payload: response.data });
  } catch (error){
    console.log('Storage GET request failed', error);
  }
}

function* caseFetch() {
  try {
    const response = yield axios.get('/api/component/case');
    yield put({ type: 'SET_CASE_LIST', payload: response.data });
  } catch (error){
    console.log('Case GET request failed', error);
  }
}

function* componentSaga() {
  yield takeLatest('ADD_COMPONENT', addComponent);
  yield takeLatest('FETCH_COMPONENT_LIST', fetchComponentList);
  yield takeLatest('FETCH_GPU_LIST', gpuFetch);
  yield takeLatest('FETCH_CPU_LIST', cpuFetch);
  yield takeLatest('FETCH_COOLER_LIST', coolerFetch);
  yield takeLatest('FETCH_MOBO_LIST', moboFetch);
  yield takeLatest('FETCH_PSU_LIST', psuFetch);
  yield takeLatest('FETCH_MEMORY_LIST', memoryFetch);
  yield takeLatest('FETCH_STORAGE_LIST', storageFetch);
  yield takeLatest('FETCH_CASE_LIST', caseFetch);
  yield takeLatest('REMOVE_COMPONENT', removeComponent);
}

export default componentSaga;