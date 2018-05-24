// inint github

const github = new Github;

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
  console.log(data);
})
}
});
