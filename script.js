const display = document.getElementById("display");
const buttons = document.querySelectorAll("input[value]");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const value = button.value;

		if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
			
		} else if (value === "AC") {
            display.value = " ";
		} else if (value === 'DE') {
            display.value = display.value.slice(0, -1);
        } else {
			display.value += value;
		}
	});
});

// buttons.forEach(button => {
// 	button.addEventListener("click", () => {
// 		display.value += value;
// 		const value = buttons[value];
// 	});

// 	// if (value === "AC"){
// 	//    display.value;
// 	// }
// })

// buttons.addEventListener("click", buttonClickHandler);
// clear.addEventListener('click', () => {
//     display.value = ''
// });

// window.addEventListener("DOMContentLoaded", () => {
// 	const display = document.getElementById("display");
// 	const buttons = document.querySelectorAll('input[type="button"]');

// 	buttons.forEach((button) => {
// 		button.addEventListener("click", () => {
// 			const value = button.value;

// 			if (value === "=") {
// 				try {
// 					display.value = eval(display.value);
// 				} catch (error) {
// 					display.value = "Error";
// 				}
// 			} else if (value === "AC") {
// 				display.value = "";
// 			} else if (value === "DE") {
// 				display.value = display.value.slice(0, -1);
// 			} else {
// 				display.value += value;
// 			}
// 		});
// 	});
// });
