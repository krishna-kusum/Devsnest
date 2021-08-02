const updateLocation = (location) => {
return ({
  type: "UPDATE_LOCATION",
  payload: location
})
}

const updateLocData = (location) => {
  return ((dispatch)=> {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=5ee3ed53b40248718f165656210208&q=${location}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch({
          type: "UPDATE_LOC_DATA",
          payload: data
        })

      });
  })
}

export {updateLocation, updateLocData};
