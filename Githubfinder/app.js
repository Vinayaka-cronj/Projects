// init github
const github=new Github;
// init UI
const ui=new UI;

// search input
const searchUser=document.getElementById('searchuser');

// search input event listner
searchUser.addEventListener('keyup', e =>{

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
            }
        })
    }
    else{
        // clear profile
        ui.clearprofile();
    }

});