// Random Api Data

// https://random-data-api.com/api/v2/users
// catagorys
/*
    users
    address
    banks
    appliances
    beers
    blod_types
    credit_cards
*/

// get btn

const btn = document.querySelector('.fancy');
const url = `https://random-data-api.com/api/v2/users`
const card = document.querySelector('.card')


const getdata = ()=>{

    fetch(url)
    .then((res)=> res.json())
    .then(data=>{
        const {avatar,first_name,last_name,address,employment,credit_card,date_of_birth,phone_number,email} = data
        const fullName = `${first_name} ${last_name}`
        // console.log(data);
        card.innerHTML = `
        <div class="img">
                <img src="${avatar}" alt="${fullName}">
            </div>
            <div class="card_body">
                <!-- left container -->
                <div class="left">
                    <h3 class="name">
                        <ion-icon name="person-outline"></ion-icon>
                       ${fullName}
                    </h3>
                    <p class="employment">
                        <ion-icon name="accessibility-outline"></ion-icon>
                        ${employment.title}</p>
                    <p class="address">
                        <ion-icon name="location-outline"></ion-icon>
                        ${address.city}, ${address.state}, ${address.street_address}, ${address.street_name}, ${address.country}, ${address.zip_code}</p>
                </div>

                <!-- right Container -->
                <div class="right">
                    <div class="credit_card">
                        <ion-icon name="card-outline"></ion-icon> 
                        ${credit_card.cc_number}
                    </div>
                    <div class="date_of_birtt">
                        <ion-icon name="egg-outline"></ion-icon>
                        ${date_of_birth}
                    </div>
                    <div class="phone_number">
                        <ion-icon name="call-outline"></ion-icon>
                       ${phone_number}
                    </div>
                    <div class="email">
                        <ion-icon name="mail-outline"></ion-icon>
                       ${email}
                    </div>
                </div>
            </div> 
            <hr>
    `
    })

}









addEventListener('load',getdata)
btn.addEventListener('click',getdata)

