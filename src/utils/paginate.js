export function paginate(movies, pageSize, currentPage) {
  let retArr = [];
  for (
    let i = currentPage * pageSize - pageSize;
    i < currentPage * pageSize;
    i++
  ) {
    if (i < movies.length) {
      retArr.push(movies[i]);
    }
  }
  return retArr;
}
