async function makeGetRequest(path) {
  return axios.get(path).then(
    (response) => {
      var result = response.data;
	  return result.data;
      //console.log({ result });
    },
    (error) => {
      console.log({ error });
    }
  );
}