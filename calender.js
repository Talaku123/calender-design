
// })

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates")

const currdate = document.querySelector(".calendar-current-date")

const prenexIcons = document.querySelectorAll(".calendar-navigation span")



const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];


const manipulate = () => {


	let dayone = new Date(year, month, 1).getDay()


	let lastdate = new Date(year, month + 1, 0).getDate()


	let dayend = new Date(year, month, lastdate).getDay()


	let monthlastdate = new Date(year, month, 0).getDate()


	let calendar = "";


	for (let i = dayone; i > 0; i--) {
		calendar +=
			`<li class="inactive">${monthlastdate - i + 1}</li>`
	}


	for (let i = 1; i <= lastdate; i++) {


		let isToday = i === date.getDate()
			&& month === new Date().getMonth()
			&& year === new Date().getFullYear() ? "active"  : ""

		calendar += `<li class="${isToday}">${i}</li>`
	}


	for (let i = dayend; i < 6; i++) {

		calendar += `<li class="inactive">${i - dayend + 1}</li>`
	}


	currdate.innerText = `${months[month]} ${year}`


	day.innerHTML = calendar;

	// addEventListener("click", () => {
   
	// 	if(day === 0){
			
	// 			day.style.display = "block"
	// 		}
	// 		else{
	// 			day.style.display = "none"
	// 		}
	// })
	
}

manipulate();


prenexIcons.forEach(icon => {


	icon.addEventListener("click", () => {

	
		month = icon.id === "calendar-prev" ? month - 1 : month + 1;


		if (month < 0 || month > 11) {

		
			date = new Date(year, month, new Date().getDate());

			year = date.getFullYear();

			month = date.getMonth();
		}

		else {

	
			date = new Date();
		}
		
		manipulate();
	})

});

const downloadFile = () => {

	const link = document.createElement("a");

	const content = document.querySelector("textarea").value;

	const file = new Blob([content], { type: 'text/plain' });

	link.href = URL.createObjectURL(file);

	link.download = "txt";

	link.click();

	URL.revokeObjectURL(link.href);

};