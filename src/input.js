class Input{
  constructor(type,name,id,value='da'){
    this.type = type;
    this.name = name;
    this.id  = id;
    this.value = value;
  }
  
  create(){
	console.log('input');
	this.element = document.createElement('input');
	this.element.setAttribute('type', this.type);
	this.element.setAttribute('name', this.name);
	this.element.setAttribute('id', this.id);

	if(this.type == 'submit'){
	  this.element.setAttribute('value', this.value);
	}
	else{
	  var placeholder = "enter your " + this.name;
	  this.element.setAttribute('placeholder', placeholder);
	}
	//console.log('element='+this.element);
  }
}

export default Input;

