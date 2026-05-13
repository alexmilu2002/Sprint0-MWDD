const killianBtn = document.querySelector(".speaker-killian");
const killianDialog = document.getElementById("killianDialog");

const peterpaulBtn = document.querySelector(".speaker-peterpaul");
const peterpaulDialog = document.getElementById("peterpaulDialog");

const nilsBtn = document.querySelector(".speaker-nils");
const nilsDialog = document.getElementById("nilsDialog");

const robbertBtn = document.querySelector(".speaker-robbert");
const robbertDialog = document.getElementById("robbertDialog");

const rosaBtn = document.querySelector(".speaker-rosa");
const rosaDialog = document.getElementById("rosaDialog");

const johanBtn = document.querySelector(".speaker-johan");
const johanDialog = document.getElementById("johanDialog");

const sanneBtn = document.querySelector(".speaker-sanne");
const sanneDialog = document.getElementById("sanneDialog");

killianBtn.addEventListener("click", () => killianDialog.showModal());
peterpaulBtn.addEventListener("click", () => peterpaulDialog.showModal());
nilsBtn.addEventListener("click", () => nilsDialog.showModal());
robbertBtn.addEventListener("click", () => robbertDialog.showModal());
rosaBtn.addEventListener("click", () => rosaDialog.showModal());
johanBtn.addEventListener("click", () => johanDialog.showModal());
sanneBtn.addEventListener("click", () => sanneDialog.showModal());