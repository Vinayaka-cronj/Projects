// init github
const github=new Github;
// init UI
const ui=new UI;

// debounce function
const debounce = (fn, time) => {
    let timeout;
  
    return function() {
      const functionCall = () => fn.apply(this, arguments);
      
      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    }
  }

// search input
const searchUser=document.getElementById('searchuser');

// search input event listner
searchUser.addEventListener('keyup',debounce( e =>{

    // get user text
    const userText=e.target.value;
    if(userText!== ''){
        // make http call
        github.getUser(userText)
        .then(data =>{
            if(data.profile.message === 'Not Found'){
                // show alert
                ui.showalert('User not found','alert alert-danger');
            }
            else{
                // show profile
                ui.showprofile(data.profile);
                ui.showrepos(data.repos);
                console.log(data.profile);
            }
        })
    }
    else{
        // clear profile
        ui.clearprofile();
    }

},1000));

