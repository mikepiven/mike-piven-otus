export const maxItemAssociation = ( data ) => {
  if ( !data?.length ) {
    return []
  }
  const getUniqueArr = ( arr ) => Array.from( new Set( arr.flat() ) )
  const flattenData = data.flat()
  const itemList = getUniqueArr( flattenData ).sort( (a,b) => a > b ? 1 : -1 )
  let maxAssociationCount = 0
  let assosiations = itemList.map( item =>
    {
      const count = flattenData.filter( f => f === item).length
      if ( count > maxAssociationCount ) {
        maxAssociationCount = count
      }
      return {
        count,
        association: getUniqueArr( data.filter( d => d[0].indexOf( item ) !== -1 ).flat() )
      }
    }
  )
  return assosiations.filter( a => a.count === maxAssociationCount )[0]?.association ?? []
};
