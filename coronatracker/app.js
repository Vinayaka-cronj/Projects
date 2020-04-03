const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    currentState = state;
  }
};

// home state
const homeState = function(page) {
  // Get total results
  fetch('https://corona.lmao.ninja/all')
  .then(function(res){
    return res.json();
  })
  .then(function(data) {
    let totalCase=data.cases;
    let totaldeath=data.deaths;
    let totalrecover=data.recovered;
    let dpercent=((totaldeath*100)/totalCase).toFixed(2);
    let rpercent=((totalrecover*100)/totalCase).toFixed(2);
    // append data to cards
    document.getElementById('tConfirmed').innerHTML=`<h5>${totalCase}</h5>`;
    document.getElementById('tDeath').innerHTML=`<h5>${totaldeath}</h5>`;
    document.getElementById('tRecovered').innerHTML=`<h5>${totalrecover}</h5>`;
    document.getElementById('tDeathPercentage').innerHTML=`<h6>Death Percent: ${dpercent}%</h6>`;
    document.getElementById('tRecoverPercentage').innerHTML=`<h6>Recover Percent: ${rpercent}%</h6>`;
    
  })
  .catch(function(err){
    console.log(err);
  });
  // get country list
  fetch('https://corona.lmao.ninja/countries')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      // console.log(data);
      let output='';
      let countryname='';
      let confirmed='';
      let death='';
      let recovered='';
      data.forEach(function(country) {
        countryname=country.country;
        confirmed=country.cases;
        death=country.deaths;
        recovered=country.recovered;
        console.log(countryname, confirmed, death, recovered );
        output +=`
        <tr>
        <td>${countryname}</td>
        <td>${confirmed}</td>
        <td>${recovered}</td>
        <td>${death}</td>
      </tr>
        `;
      });
      document.getElementById('listCountry').innerHTML=output;
    })
    
    .catch(function(err){
      console.log(err);
    });
};

// India Display
const indiaDisplay = function(page){
  // Get total details
  fetch('https://corona.lmao.ninja/countries/india')
  .then(function(res){
    return res.json();
  })
  .then(function(data) {
    let totalCase=data.cases;
    let totaldeath=data.deaths;
    let totalrecover=data.recovered;
    let dpercent=((totaldeath*100)/totalCase).toFixed(2);
    let rpercent=((totalrecover*100)/totalCase).toFixed(2);
    // append data to cards
    document.getElementById('tConfirmed').innerHTML=`<h5>${totalCase}</h5>`;
    document.getElementById('tDeath').innerHTML=`<h5>${totaldeath}</h5>`;
    document.getElementById('tRecovered').innerHTML=`<h5>${totalrecover}</h5>`;
    document.getElementById('tDeathPercentage').innerHTML=`<h6>Death Percent: ${dpercent}%</h6>`;
    document.getElementById('tRecoverPercentage').innerHTML=`<h6>Recover Percent: ${rpercent}%</h6>`;
    
  })
  .catch(function(err){
    console.log(err);
  });

  // get states info
  fetch('https://api.covid19india.org/data.json')
  .then(function(res){
  return res.json();
  })
  .then(function(data) {
  console.log(data.statewise);
  let loop=data.statewise;
  let output='';
  let statename='';
  let confirmed='';
  let death='';
  let recovered='';
  loop.forEach(function(state) {
    statename=state.state;
    confirmed=state.confirmed;
    death=state.deaths;
    recovered=state.recovered;
    console.log(statename, confirmed, death, recovered );
    output +=`
    <tr>
    <td>${statename}</td>
    <td>${confirmed}</td>
    <td>${recovered}</td>
    <td>${death}</td>
  </tr>
    `;
  });
  document.getElementById('listCountry').innerHTML=output;
  })

  .catch(function(err){
  console.log(err);
  });
      
}

// display usa
const usaDisplay = function(page){
  // Get total results
  fetch('https://corona.lmao.ninja/countries/usa')
  .then(function(res){
    return res.json();
  })
  .then(function(data) {
    let totalCase=data.cases;
    let totaldeath=data.deaths;
    let totalrecover=data.recovered;
    let dpercent=((totaldeath*100)/totalCase).toFixed(2);
    let rpercent=((totalrecover*100)/totalCase).toFixed(2);
    // append data to cards
    document.getElementById('tConfirmed').innerHTML=`<h5>${totalCase}</h5>`;
    document.getElementById('tDeath').innerHTML=`<h5>${totaldeath}</h5>`;
    document.getElementById('tRecovered').innerHTML=`<h5>${totalrecover}</h5>`;
    document.getElementById('tDeathPercentage').innerHTML=`<h6>Death Percent: ${dpercent}%</h6>`;
    document.getElementById('tRecoverPercentage').innerHTML=`<h6>Recover Percent: ${rpercent}%</h6>`;
    
  })
  .catch(function(err){
    console.log(err);
  });

  // clear table
  document.getElementById('listCountry').innerHTML='';
  // get states list

  fetch('https://corona.lmao.ninja/states')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      // console.log(data);
      let output='';
      let statename='';
      let confirmed='';
      let death='';
      let recovered='';
      data.forEach(function(state) {
        statename=state.state;
        confirmed=state.cases;
        death=state.deaths;
        recovered=state.recovered;
        console.log(statename, confirmed, death, recovered );
        output +=`
        <tr>
        <td>${statename}</td>
        <td>${confirmed}</td>
        <td>N/A</td>
        <td>${death}</td>
      </tr>
        `;
      });
      document.getElementById('listCountry').innerHTML=output;
    })
    
    .catch(function(err){
      console.log(err);
    });
}

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI Vars

const home = document.getElementById('all'),
      india = document.getElementById('india'),
      usa = document.getElementById('usa');


// Home
home.addEventListener('click', (e) => {
  page.change(new homeState);

  e.preventDefault();
});

// India
india.addEventListener('click', (e) => {
  page.change(new indiaDisplay);

  e.preventDefault();
});

// USA
usa.addEventListener('click', (e) => {
  page.change(new usaDisplay);

  e.preventDefault();
});

// debounce
const debounce = (fn, time) => {
  let timeout;

  return function() {
    const functionCall = () => fn.apply(this, arguments);
    
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  }
}

// event listners
document.getElementById('searchcountry').addEventListener('keyup', debounce(filterCountry),1000);

// filter
function filterCountry(e) {
  const input = e.target.value.toLowerCase();
  table = document.getElementById("listCountry");
  tr = table.getElementsByTagName("tr");
  var  filter, table, tr, td, i, txtValue;
  filter = input;
  for (i = 0; i < tr.length; i++){
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toLocaleLowerCase().indexOf(filter) > -1) {
       tr[i].style.display = "";
      } else {
      tr[i].style.display = "none";
     }
    }
  }
}


