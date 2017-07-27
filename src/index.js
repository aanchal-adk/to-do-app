import axios from 'axios';
import * as httpUtil from './httpUtil';

// callback hell
// request('something', (response) => {
//   request(responst.data, (response) => {
//     request(responst.data, (response) => {
//       request(responst.data, (response) => {
//         request(responst.data, (response) => {
//           request(responst.data, (response) => {
//             request(responst.data, (response) => {
//               request(responst.data, (response) => {
//                 request(responst.data, (response) => {

//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// })

// // Promise = Things to study
// request('something').then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).catch(err => {

// })

 


import Form from './form.js'
import Input from './input.js'

class Todo{
  constructor(id){
    
    this.id = id;
    var that = this;
  }
  init(){
	const BASE_URL = 'https://todo-simple-api.herokuapp.com';
    const TODO_URL = `${BASE_URL}/todos?page=1&page_size=2000`;
	var that = this;
    this.element =  document.getElementById(this.id);
    console.log(this.id);
    var form = new Form();
    form.create();
    
    var todoField = new Input('text','to-do','id1');
    todoField.create();
    
    var submit = new Input('submit','submit','id2','submit');
    submit.create();
    
    form.append(todoField.element);
    form.append(submit.element);
    this.element.appendChild(form.element);
    
    form.element.addEventListener('submit',(e) =>{
	  e.preventDefault();
	  let data = {
	    "title" : todoField.element.value,
	    "description" : "aanchal"
	  }	
	  that.postToDo(TODO_URL,data);
		})
  }
  
  postToDo(URL,data){
    httpUtil.post(URL,data).then(response => {
	  	var div = document.createElement('div');
	  	div.setAttribute('id','div-'+response.data.data.id);
	  	let smallDiv = document.createElement('div');
        smallDiv.setAttribute('id','small-div-'+response.data.data.id);
        smallDiv.innerHTML = response.data.data.title;
        div.appendChild(smallDiv);
	  	let x = document.getElementsByTagName('body')[0];
	  	x.appendChild(div);
	  	var button = document.createElement('button');
	  	button.setAttribute('id','button-'+response.data.data.id);
	    button.innerHTML = "remove";	
	    button.addEventListener('click',(e) =>{
		  remove('https://todo-simple-api.herokuapp.com/todos/',response.data.data.id);  
	    })
	    div.appendChild(button);
	    var updateButton = document.createElement('button');
	    updateButton.setAttribute('id','update-'+response.data.data.id);
	    updateButton.innerHTML = "edit";	
	    updateButton.addEventListener('click',(e) =>{
		  update('https://todo-simple-api.herokuapp.com/todos/',response.data.data.id);  
	    })
	    div.appendChild(updateButton);
	}); 	  
	
  }
  
}
var todo = new Todo('container-id');
todo.init();



const BASE_URL = 'https://todo-simple-api.herokuapp.com';
const TODO_URL = `${BASE_URL}/todos?page=1&page_size=2000`;

httpUtil.get(TODO_URL).then(response => {

  response.data.data.forEach((todo) => {
    if(todo.description == "aanchal"){
	  let div = document.createElement('div');
      div.setAttribute('id','div-'+todo.id);
      let smallDiv = document.createElement('div');
      smallDiv.setAttribute('id','small-div-'+todo.id);
      smallDiv.innerHTML = todo.title;
      div.appendChild(smallDiv);
	  let x = document.getElementsByTagName('body')[0];
	  x.appendChild(div);
	  var button = document.createElement('button');
	  button.setAttribute('id','remove-'+todo.id);
	  button.innerHTML = "remove";	
	  button.addEventListener('click',(e) =>{
		remove('https://todo-simple-api.herokuapp.com/todos/',todo.id);  
	  })
	  div.appendChild(button);
	  var updateButton = document.createElement('button');
	  updateButton.setAttribute('id','update-'+todo.id);
	  updateButton.innerHTML = "edit";	
	  updateButton.addEventListener('click',(e) =>{
		update('https://todo-simple-api.herokuapp.com/todos/',todo.id);  
	  })
	  div.appendChild(updateButton);
	  
	}
    
  })
  
  
})

function remove(url,id){
  console.log('ddddd');
  httpUtil.remove(url+id);
  document.getElementsByTagName('body')[0].removeChild(document.getElementById('div-'+id));
}

function update(url,id){
  let editArea = document.createElement('textarea');
  editArea.setAttribute('id','edit-area-'+todo.id);
  editArea.setAttribute('cols',30);
  editArea.setAttribute('rows',1);
  document.getElementById('div-'+id).appendChild(editArea);
  
  document.getElementById('update-'+id).style.display = "none";
  
  var doneButton = document.createElement('button');
  doneButton.setAttribute('id','done-'+todo.id);
  doneButton.innerHTML = "done";	
  document.getElementById('div-'+id).appendChild(doneButton);
  doneButton.addEventListener('click',(e) =>{
	let data = {"title":editArea.value};
    httpUtil.update('https://todo-simple-api.herokuapp.com/todos/'+id, data).then(response =>{
	  if(response.data.success == true){
	    document.getElementById('small-div-'+id).innerHTML = response.data.data.title;
        document.getElementById('update-'+id).style.display = "initial";
        doneButton.style.display = "none";
        editArea.style.display = "none"; 
      } 	
	});
    
  })
  
  
  //httpUtil.update(url+id,{"title":"icecream"});
   
}
