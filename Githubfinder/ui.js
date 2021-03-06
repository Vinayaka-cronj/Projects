class UI{
  constructor(){    
    this.profile=document.getElementById('profile');
  }
  // display profile
  showprofile(user){
    let user_company='';
    let user_website='';
    let user_location='';
    if(user.company === null){
      user_company = "No company linked";
    }
    else{
      user_company=user.company;
    }
    if(user.website === undefined){
      user_website = "No Websites linked";
    }
    else{
      user_website=user.website;
    }
    if(user.location === null){
      user_location = "Location Not Updated by user";
    }
    else{
      user_location=user.location;
    }
    this.profile.innerHTML=`
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href=${user.html_url} target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public gists: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
          <br><br>
          <ul class="list-items">
            <li class="list-group-item">Company: ${user_company}</li>
            <li class="list-group-item">Website: ${user_website}</li>
            <li class="list-group-item">Location: ${user_location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class=" page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  // show repos
  showrepos(repos){
    let output='';
    repos.forEach(function(repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // output repos
    document.getElementById('repos').innerHTML=output;
  }


  // show alert
  showalert(message,className){
    // clear remaining alerts
    this.clearAlert();
    // create div
    const div=document.createElement('div');
    // class name
    div.className=className;
    // create textnode
    div.appendChild(document.createTextNode(message));
    // get parent
    const container=document.querySelector('.searchContainer');
    // get search box
    const search=document.querySelector('.search');
    // show alert
    container.insertBefore(div,search);
    // timeout
    setTimeout(()=>{
      this.clearAlert();
    },3000)

  }

  // clear alert
  clearAlert(){
    const currentAlert=document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }
  }

  // clear profile
  clearprofile(){
    this.profile.innerHTML='';
  }

}