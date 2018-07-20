const initialState = {
  figures: [],
  figure: {},
  figureSearch: [],
  status: false
}

const figureReducer = (state = initialState , action) => {
  if(action.type === 'load-data'){
    const newState = {figures: action.payload}
    return newState
  }
  if(action.type === 'load-detail'){
    const newStateDetail = { figures: state.figures, figure: action.payload}
    return newStateDetail
  }
  if(action.type === 'load-search'){
    const newStateDetail = { figures: state.figures, figure: state.figure, figureSearch: action.payload}
    return newStateDetail
  }
  return state
}

export default figureReducer
