import axios from 'axios';

export function get(url) {
  //data tanne
  return axios({
    method: 'GET',
    url: url
  });
}

export function post(url, data) {
  // naya data create garne
  return axios({
    method: 'POST',
    url: url,
    data: data
  });
}

export function update(url, data) {
  return axios({
	method: 'PUT',
	url: url,
	data: data  
  })
}

export function remove(url) {
  return axios({
	  method: 'DELETE',
	  url:url
	  });
}
