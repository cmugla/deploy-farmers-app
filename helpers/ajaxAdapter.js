export default class AjaxAdapter{

  constructor(fetch){
    if(!fetch) throw "We need the Fetch library to make this work, bru.";
  }

  getMrktsByZip(zip){
    return fetch(`https://farmer-ios.herokuapp.com/mkts?zip=${zip}`)
      .then(r => r.json())
      .then(r=>r)
  }

  getMrktById(market_id){
    return fetch(`https://farmer-ios.herokuapp.com/savemkts/${market_id}`)
      .then(r=>r.json())
      .then(r=>r)
  }

  getMDataByFId(farmer_id){
    return fetch(`https://farmer-ios.herokuapp.com/savemkts/farmer/${farmer_id}`)
      .then(r=>r.json())
      .then(r=>r)
  }

  getPostsByFId(farmer_id){
    return fetch(`https://farmer-ios.herokuapp.com/savemkts/farmer/posts/${farmer_id}`)
      .then(r=>r.json())
      .then(r=>r)
  }

  removeMarket(market_id, farmer_id){
    return fetch(`https://farmer-ios.herokuapp.com/savemkts/farmer/removeMarket`, {
      method: 'put',
      headers: {
        "Content-Type" : "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        'market_id': market_id,
        'farmer_id': farmer_id
      })
    })
    .then(r=>r.json())
    .then(r=>r)
  }

  getMrktsLonLat(long, lat) {
    return fetch(`https://farmer-ios.herokuapp.com/mkts?longitude=${long}&latitude=${lat}`)
      .then(r=>r.json())
      .then(r=>r)
  }

  getZip(long, lat) {
    return fetch(`https://farmer-ios.herokuapp.com/mkts/location?longitude=${long}&latitude=${lat}`)
      .then(r=>r.json())
      .then(r=>r)
  }

  signUpFarmer(farmer_info) {
    return fetch(`https://farmer-ios.herokuapp.com/userapi/users`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(farmer_info)
      })
      .then((r) => r.json())
  }

  loginFarmer(login_info) {
    return fetch("https://farmer-ios.herokuapp.com/userapi/authenticate", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(login_info)
      })
      .then((r) => r.json())
  }

  addPost(postContent) {
    return fetch(`https://farmer-ios.herokuapp.com/userapi/posts`, {
        method:'post',
        headers: {
          "Content-type" : "application/json; charset=UTF-8"
        },
        body: JSON.stringify(postContent)
      })
      .then(r=>r.json())
      .then(r=>r)
  }

  getPostsByMName(market_name) {
    return fetch(`https://farmer-ios.herokuapp.com/userapi/posts?market_name=${market_name}`)
      .then(r=>r.json())
      .then(r=>r)
  }

  addMarket(market_info){
    return fetch(`https://farmer-ios.herokuapp.com/savemkts`, {
      method: 'post',
      headers: {
        "Content-type" : "application/json; charset=UTF-8"
      },
      body: JSON.stringify(market_info)
    })
    .then(r=>r.json())
    .then(r=>r)
  }

  updateFarmer(data){
    return fetch(`https://farmer-ios.herokuapp.com/userapi/users`, {
      method: 'put',
      headers: {
        "Content-type" : "application/json; charset=UTF-8"
      },
      body: JSON.stringify(data)
    })
    .then(r=>r.json())
    .then(r=>r)
  }

}
