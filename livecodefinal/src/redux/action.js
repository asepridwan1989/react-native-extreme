export const saveDataFigure = (dataFigures) => {
  console.log('datafigure')
  return {
    type: 'load-data',
    payload: dataFigures
  }
}

export const getDataFigure = () => {

}

export const getDataFigureDetail = (hero) => {
  return {
    type: 'load-detail',
    payload: hero
  }
}

export const getDataQuery = (query) => {
  console.log('query dari action', query)
  let array = query.hero
  var reg = new RegExp('' + query.query + '')
  const result = array.filter(people => reg.test(people.name));
  console.log(result)
  return {
    type: 'load-search',
    payload: result
  }
}
