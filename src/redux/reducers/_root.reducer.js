import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import pcList from './pcList.reducer'
import pcItem from './pcItem.reducer';
import componentList from './componentList.reducer';
import pcColor from './color.reducer';
import componentCount from './pcComponentCount.reducer';
import gpuList from './gpuList.reducer';
import cpuList from './cpuList.reducer';
import storageList from './storageList.reducer';
import memoryList from './memoryList.reducer';
import caseList from './caseList.reducer';
import moboList from './moboList.reducer';
import psuList from './psuList.reducer';
import coolerList from './coolerList.reducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  pcList,
  pcItem,
  componentList,
  pcColor,
  componentCount,
  gpuList,
  cpuList,
  coolerList,
  moboList,
  memoryList,
  storageList,
  psuList,
  caseList,
});

export default rootReducer;
