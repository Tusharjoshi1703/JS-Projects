var form= document.getElementById('addForm');
var itemlist= document.getElementById('items');
var filter=document.getElementById('filter');

//form submit event
form.addEventListener('submit',additem);
//delete event
itemlist.addEventListener('click',removeitem);
//filter event
filter.addEventListener('keyup',filterevent);

function additem(e){
    e.preventDefault();
    // console.log(1);

    //get input value
    var newitem= document.getElementById('item').value;
    var newcontent=document.getElementById('item').value=''
    

  //create new li element
  var li=document.createElement('li');
  li.className='list-group-item';
  //add textnode with input value
  li.appendChild(document.createTextNode(newitem));
  itemlist.appendChild(li);

  //create delete button element
  var deletebtn= document.createElement('button');
  deletebtn.className='btn btn-danger btn-sm float-right delete';

  //append text node
  deletebtn.appendChild(document.createTextNode('X'));
  li.appendChild(deletebtn);

   


}
//function remove item
function removeitem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li= e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}

//filter event
function filterevent(e){
   var text=e.target.value.toLowerCase();
//    console.log(text);
var items= itemlist.getElementsByTagName('li');
// console.log(items);
Array.from(items).forEach(function(item){
    var itemname=item.firstChild.textContent;
    // console.log(itemname);
    if(itemname.toLowerCase().indexOf(text)!=-1){
        item.style.display='block';
    }
    else{
        item.style.display='none'
    }
});
}