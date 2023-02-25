const personapi = ()=>{
  fetch('https://randomuser.me/api/?results=25&gender=female')
   .then(res => res.json())
   .then(data => personDisplay(data.results.slice(0, 9)))
}
const personDisplay = people=>{
  const peopleDetails = document.getElementById('details');
  peopleDetails.innerHTML = "";

  for(const user of people){
    //console.log(user.location)
  peopleDetails.classList.add("lg:px-20", "my-8");
    const box = document.createElement('div');
    box.innerHTML = `
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src="${user.picture.large}" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">${user.login.username}</h2>
            <h2 class="card-title">${user.email}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Person details</button>
            </div>
          </div>
        </div>
    ` ;
    peopleDetails.appendChild(box)
  } ;
 };
  const loadAllApus = () => {
   fetch("https://randomuser.me/api/?results=25&gender=female")
     .then((res) => res.json())
     .then((data) => personDisplay(data.results));
};
personapi()