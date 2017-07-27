class Form{
  create(){
	  console.log('form');
	  
    this.element = document.createElement('form');
    this.element.setAttribute('action', '');
    this.element.setAttribute('method', 'POST');

    
  }	
  
  append(child){
	console.log(child);
    this.element.appendChild(child);
 
  }
}

export default Form;
