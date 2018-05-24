// inint github

const github = new Github;
// init UI
const ui = new UI;

// Search input


const search = document.getElementById('searchUser');
// search input event listner

search.addEventListener('keyup',(e) =>{
// Get input text
const userText = e.target.value;

if(userText !==''){
// make HTTP call

github.getUser(userText)
.then(data =>{
  if(data.profile.message ==='Not Found'){
// show alert
  }
  else{
   // show profile

   ui.showProfile(data.profile); 
  }
})
}
else {
  // Clear profile
}
});
