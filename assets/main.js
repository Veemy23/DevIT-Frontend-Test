
//========================================================================================================================================================
const openButtons = document.querySelectorAll('.open');
const modals = document.querySelectorAll('.modal-window');
const menu = document.querySelector('.menu')
const buttonBack = document.querySelectorAll('.btn-to-main')

openButtons.forEach(openButton => {
	openButton.addEventListener('click', (e) => {
		const targetModalId = openButton.getAttribute('data-target');
		const targetModal = document.querySelector(`.${targetModalId}`);

		if (targetModal) {
			targetModal.classList.add('showed');
			menu.classList.add('inactive');
		}
	});
});
modals.forEach(modal => {
	buttonBack.forEach(obj => {
		obj.addEventListener('click', (e) => {
			modal.classList.remove('showed');
			menu.classList.remove('inactive');
		})
	})
	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			modal.classList.remove('showed');
			menu.classList.remove('inactive');
		}
	});
});
//========================================================================================================================================================
const copyButton = document.querySelectorAll(".copy");
const textToCopy = document.querySelector(".to-copy");
copyButton.forEach(btn => {
	btn.addEventListener("click", function () {
		const copyButton = btn.getAttribute('data-copy');
		const copyText = document.querySelector(`.${copyButton}`);

		if (copyText) {
			let tempTextArea = document.createElement("textarea");
			tempTextArea.value = copyText.textContent;
			document.body.appendChild(tempTextArea);
			tempTextArea.select();
			document.execCommand("copy");
			document.body.removeChild(tempTextArea);
		}
		btn.classList.add('animated')
		setTimeout(() => {
			btn.classList.remove('animated')

		}, 200);
	});

})
//========================================================================================================================================================
// const obj1 = {
// 	name: 'Ram',
// 	age: 21
// };

// const obj2 = {
// 	name: 'Ram',
// 	age: 21
// };

// const haveSameData = function (obj1, obj2) {
// 	const obj1Length = Object.keys(obj1).length;
// 	const obj2Length = Object.keys(obj2).length;
// 	//Обчислюємо кількість ключей в обєкті

// 	if (obj1Length === obj2Length) {
// 		//далі задопомогою методу every перевіряємо чи підходить кожен елемент масива під умову
// 		return Object.keys(obj1).every(
// 			key => obj2.hasOwnProperty(key)
// 				&& obj2[key] === obj1[key]);
// 	}
// 	return false;
// }
// console.log(haveSameData(obj1, obj2));



// function* chunkArrayGenerator(array, size) {
// 	for (let i = 0; i < array.length; i += size) {
// 		yield array.slice(i, i + size);
// 	}
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const chunkGenerator = chunkArrayGenerator(arr, 3);
// console.log(chunkGenerator.next());
// console.log(chunkGenerator.next());
// console.log(chunkGenerator.next());
// console.log(chunkGenerator.next());


// function arrayToObject(array) {
// 	const obj = {};

// 	for (const [key, value] of Object.entries(array)) {
// 		if (key.length > 0) {
// 			if (Array.isArray(value)) {
// 				obj[key] = arrayToObject(value); // Рекурсія
// 			} else {
// 				obj[key] = value;
// 			}
// 		}
// 	}

// 	return obj;

// }
// let arro = [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]]
// console.log(arrayToObject(arro));



// function objectToArray(obj) {
// 	const arr = [];

// 	for (const [key, value] of Object.entries(obj)) {
// 		if (typeof value === 'object' && !Array.isArray(value)) {
// 			arr.push([key, objectToArray(value)]); // Рекурсія для вкладених об'єктів
// 		} else {
// 			arr.push([key, value]);
// 		}
// 	}

// 	return arr;
// }
// const object = {
// 	name: 'developer',
// 	age: 5,
// 	skills: {
// 		html: 4,
// 		css: 5,
// 		js: 5
// 	}
// }
// console.log(objectToArray(object));




// function separationObj(obj, parentKey = '') {
// 	const result = {};

// 	for (const key in obj) {
// 		if (obj.hasOwnProperty(key)) {
// 			const currentKey = parentKey ? `${parentKey}/${key}` : key;

// 			if (typeof obj[key] === 'object' && obj[key] !== null) {
// 				Object.assign(result, separationObj(obj[key], currentKey));
// 			} else {
// 			result[currentKey] = obj[key];
// 		}
// 	}
// }

// return result;
// }
// const obj = {
//   a: {
// 	 b: {
// 		c: 12,
// 		d: 'Hello World'
// 	 },
// 	 e: [1,2,3]
//   }
// };

//  console.log(separationObj(obj));


// function combos(num) {
// 	const results = [];

// 	function generate(targetSum, currentCombo, startNum) {
// 		if (targetSum === 0) {
// 			results.push([...currentCombo]);
// 			return;
// 		}

// 		for (let i = startNum; i <= num; i++) {
// 			if (targetSum - i >= 0) {
// 				currentCombo.push(i);
// 				generate(targetSum - i, currentCombo, i);
// 				currentCombo.pop();
// 			} else {
// 				break;
// 			}
// 		}
// 	}

// 	generate(num, [], 1);

// 	return results;
// }

// console.log(combos(10));


// function add(x) {
// 	const sum = (y) => add(x + y);
// 	sum.valueOf = () => x;
// 	return sum;
// }

// Number.prototype.add = function (x) {
// 	return add(this + x);
// };

// console.log(Number(add(1)(2)(5)(-3)));



// function separationObj(obj, parentKey = '') {
// 	let result = {};

// 	for (const key in obj) {
// 		if (obj.hasOwnProperty(key)) {
// 			const currentKey = parentKey ? `${parentKey}/${key}` : key;

// 			if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
// 				Object.assign(result, separationObj(obj[key], currentKey));
// 			} else {
// 				result[currentKey] = obj[key];
// 			}
// 		}
// 	}
// 	return result;

// }
// const obj = {
// 	a: {
// 		b: {
// 			c: 12,
// 			d: 'Hello World'
// 		},
// 		e: [1, 2, 3]
// 	}
// };

// console.log(separationObj(obj));


// function combos(num) {
// 	const results = [];

// 	function generate(targetSum, currentCombo, startNum) {
// 	  if (targetSum === 0) {
// 		 results.push([...currentCombo]);
// 		 return;
// 	  }

// 	  for (let i = startNum; i <= num; i++) {
// 		 if (targetSum - i >= 0) {
// 			currentCombo.push(i);
// 			generate(targetSum - i, currentCombo, i);
// 			currentCombo.pop();
// 		 } else {
// 			break;
// 		 }
// 	  }
// 	}

// 	generate(num, [], 1);
// 	return results;
//  }

//  console.log(combos(10));

// function bulkRun(data) {
// 	let cbs = data.map(([f, arguments]) => {
// 	  return new Promise((resolve) => {
// 		f(...arguments, (result) => {
// 			resolve(result);
// 		 });
// 	  });
// 	});

// 	return Promise.all(cbs);
//  }

//  const f1 = (cb) => {
// 	cb(1);
//  };

//  const f2 = (a, cb) => {
// 	cb(a);
//  };

//  const f3 = (a, b, cb) => {
// 	setTimeout(() => cb([a, b]), 1000);
//  };

//  bulkRun([
// 	[f1, []],
// 	[f2, [2]],
// 	[f3, [3, 4]],
//  ]).then(console.log);

function NotificationException() { }
function ErrorException() { }
function primitiveMultiply(a, b) {
	const rand = Math.random();
	if (rand < 0.5) {
		return a * b;
	} else if (rand > 0.85) {
		throw new ErrorException()
	} else {
		throw new NotificationException()
	}
}

function reliableMultiply(a, b) {
	try {
		return primitiveMultiply(a, b)
	}
	catch (e) {
		if (e instanceof NotificationException) {
			return reliableMultiply(a, b)
		} else if (e instanceof ErrorException) {
			return
		}
	}
}

console.log(reliableMultiply(8, 8));