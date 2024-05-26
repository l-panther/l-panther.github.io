const mainSponsors = [
  "lambeth",
  "southwark",
  "playengland",
  "bbc",
  "lottery",
  "pwc",
  "usa",
  "deutsche",
  "santander",
  "sainsbury",
  "tesco",
  "waitrose",
];

const mainSponsors2 = [
  "qbe",
  "ricoh",
  "aviva",
  "headley",
  "max",
  "goldsmiths",
];

const extraSponsors = [
  "nevada",
  "fortune",
];

function getSponsorImg(sponsor =  "") {
  return (
    '../../images/sponsors/' +
    sponsor +
    '.jpg'
  )
}

mainSponsors.map((sponsor, index) => {
     
     return (
         <ion-col key={index} size="6" size-sm="4" size-md="2" class='ion-padding'>   
           <img src={getSponsorImg(sponsor)}/>
         </ion-col>
     );
   }),
   mainSponsors2.map((sponsor, index) => {
     return (
         <ion-col key={index} size="6" size-sm="4" size-md="2" class={/*location.pathname === "/welcome" ? 'ion-hide-md-down ion-padding' : 'ion-padding'*/}>   
           <img src={getSponsorImg(sponsor)}/>
         </ion-col>
     );
   }),
   extraSponsors.map((sponsor, index) => {
     return (
         <ion-col key={index} size="6" size-sm="4" size-md="2" class={/*location.pathname === "/about-us" ? 'ion-padding' : 'ion-hide'*/}>   
           <img src={getSponsorImg(sponsor)}/>
         </ion-col>
     );
   })

