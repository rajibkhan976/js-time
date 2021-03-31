/**$( document ).ready(function() {
  function getSalatTime (responseData) {
		let salatTime = responseData;
		let sehriArr = [];
		var dateNow = moment().format('DD-MM-YYYY');
		console.log(dateNow);
		console.log(salatTime);
		salatTime.forEach((element) => {
			if (dateNow === element.date.gregorian.date) {
				console.log(element.timings.Imsak);
				console.log(element.timings.Imsak.slice(0,2));
				console.log(element.timings.Imsak.slice(3,5));
				sehriArr.push(element.timings.Imsak.slice(0,2));
				sehriArr.push(element.timings.Imsak.slice(3,5));
				sehriArr.push("00");
			}
		});
		console.log(sehriArr);
	}
	async function setSalatTime () {
		getSalatTime(await makeGetRequest(
			"http://api.aladhan.com/v1/calendarByCity?city=Dhaka&country=Bangladesh&method=1&month=09&year=2020&tune=1"
		));
	}
	setSalatTime();
});**/

