window.addEventListener('DOMContentLoaded', function(){
	//класс для персонажа
	let character = {
		name : "",
		surname : "",
		patronymic : "",
		age : "",
		sex : "",
		ideology : "",
		biography : "",
		skin : "",
		hairstyle : "",
		clothes : ""
};
	//создаю динамический блок песрнажа для главного окна
	let
		blockMainCards = document.getElementsByClassName("main-cards")[0],
		blockBio = document.createElement('div'),
		blockViews = document.createElement('div'),
		blockSex= document.createElement('div'),
		blockAge= document.createElement('div'),
		blockName = document.createElement('div'),
		
		blockProgressBar= document.createElement('div'),
		blockProgress = document.createElement('div'),
		blockResultCount = document.createElement('div'),
		blockResult = document.createElement('div'),
		blockPhoto = document.createElement('div'),
		blockCandidateBlock = document.createElement('div'),
		blockMainCardsItem = document.createElement('div'),
		
		
		blockPersonSkin = document.createElement('div'),
		blockPersonClothes = document.createElement('div'),
		blockPersonHair = document.createElement('div'),
		blockPersonShoes = document.createElement('div');
		
	blockPersonSkin.className = "person-skin";
	blockPersonClothes.className = "person-clothes";
	blockPersonHair.className = "person-hair";
	blockPersonShoes.className = "person-shoes";


	blockBio.className = "bio";
	blockViews.className = "views";
	blockSex.className = "sex";
	blockAge.className = "age";
	blockName.className = "name";
	blockProgressBar.className = "progress-bar";
	blockProgress.className = "progress";
	blockResultCount.className = "result-count";
	blockResult.className = "result";
	blockPhoto.className = "photo";
	blockMainCardsItem.className = "main-cards-item";
	blockCandidateBlock.className = "candidate-block";
	
	
	
	/*<div id="person-skin" class="person-skin"></div>
	<div id="person-clothes" class="person-clothes"></div>
	<div id="person-hair" class="person-hair"></div>
	<div class="person-shoes"></div>*/
	
	blockProgress.appendChild(blockProgressBar);
	 
	
	blockResult.appendChild(blockResultCount);
	blockResult.appendChild(blockProgress);
	blockResultCount.innerHTML = "100%";
	
	blockCandidateBlock.appendChild(blockPhoto);
	blockCandidateBlock.appendChild(blockResult);

	blockMainCardsItem.appendChild(blockCandidateBlock);
	blockName.innerHTML = "загагулин степан викторович";
	blockMainCardsItem.appendChild(blockName);
	
	blockMainCardsItem.appendChild(blockAge);
	blockAge.innerHTML = "test35лет";
	
	blockMainCardsItem.appendChild(blockSex);
	blockSex.insertAdjacentHTML("beforeBegin", "Пол");
	blockSex.innerHTML = "testМужской";
	
	blockMainCardsItem.appendChild(blockViews);
	blockViews.insertAdjacentHTML("beforeBegin", "Полит. взгляды:");
	blockViews.innerHTML = "строго по центру";
		
	blockMainCardsItem.appendChild(blockBio);
	blockBio.innerHTML = "test";
	blockBio.insertAdjacentHTML("beforeBegin", "Биография");
	 
	blockPhoto.appendChild(blockPersonSkin);
	blockPhoto.appendChild(blockPersonClothes);
	blockPhoto.appendChild(blockPersonHair);
	blockPhoto.appendChild(blockPersonShoes);
	blockMainCards.insertBefore(blockMainCardsItem, blockMainCards.children[1]);
	
	
	
	//глобальные переменные
	let 
		closeModalWindow = document.getElementById("popup-btn"),
		modalWindow = document.getElementsByClassName("overlay")[0],
		mainWindow = document.getElementsByClassName("main")[0],
		customWindow = document.getElementsByClassName("custom")[0],
		customWindowInfo = document.getElementsByClassName("custom-info")[0],
		customWindowChar = document.getElementsByClassName("custom-char")[0],
		customWindowStyle = document.getElementsByClassName("custom-style")[0],
		maleRadio = document.getElementById("male"), 
		femaleRadio = document.getElementById("female"),
		mainCards = document.getElementsByClassName("mainCards"),

		readyButton = document.getElementById("ready");
	
	let//масивы с процентами голосов
		percentsResult = document.getElementsByClassName("result-count"),
		percentsBar = document.getElementsByClassName("progress-bar");
	
		//кнопки
	let	
		voting = document.getElementById("voting"),
		crime = document.getElementById("crime"),
		reset = document.getElementById("reset");
	let
				personSkin = document.getElementById("person-skin"),
				personClothes = document.getElementById("person-clothes"),
				personHair = document.getElementById("person-hair");
		
	//функуия генерирующая проценты   (количество случайных чисел, сумма чисел)
	function randomPercents(count, summ){
				let 
					presArr = [],
					arr = [],
					retArr = [],
					startSumm = 0;
				for (let i = 0; i < count; i++){
					arr[i] = Math.floor(Math.random() * (summ - 1) + 1);
					startSumm +=arr[i]; 
				}
				for (let i = 0; i<count; i++){			
					presArr[i] = (arr[i] * 100) / (startSumm);
				}
				for (let i = 0; i < count; i++){
					retArr[i] = summ / 100 *presArr[i];
				}
				return retArr;
			}
	
	
	
	(function(){
		/*закрываю модальнре окно, открываю конструктор персонажа */
		
		modalWindow.addEventListener('click',function(){
			modalWindow.style.display = "none";
			mainWindow.style.display = "none";
			customWindow.style.display = "flex";
			customWindowInfo.style.display = "block";
			customWindowChar.style.display = "block";
			customWindowStyle.style.display = "block";
		});
		character.clothes = 1;
		character.hairstyle = 1;
		character.skin = 1;
		/*******/
		
	}());
			
	(function(){
		let 
			name = document.getElementById("name"),
			age = document.getElementById("age"),
			ideologySelect = document.getElementById("select"),
			biography = document.getElementById("bio");
		
		
		
		customWindowInfo.addEventListener('click',function(){
			//-имя
		/*	function nameParser(){
				let arr = [],
					bol = false;
				fuName = fuName.trim();
				
				while (bol == false) {
  					if (fuName.indexOf("  ") != -1){
						fuName = fuName.replace("  "," ");
						}else{
						bol = true;
						};
				};
				
				name.value = fuName;
				arr = fuName.split(' ');
				if (arr.length === 3){
					character.name = arr[0];
					character.surname = arr[1];
					character.patronymic = arr[2];
					//name.style.borderColor = "";

				}else{
					return false;
					//name.style.borderColor = "red";
				}
			}
			let fuName = name.value;
				
			nameParser(fuName);	*/
			//--end имя
			
			
			
			function ageCheck(fuAge){
				if(typeof(+fuAge) == "number" && +fuAge > 34 && +fuAge < 60 ){
					character.age = fuAge;
				}else{
					character.age = 35;
					age.value = 35;
				}
			}
			ageCheck(age.value);
			
			
			if (maleRadio.checked){
				character.sex = "m";
			}else{
				character.sex = "f";
			};
			
			
			
		});
		
	}());
	 
	
	///***********************CЛАЙДЕРЫ
	(function(){
		
		let
			//масив "цветов кожи"
			choiceSkinColor = document.getElementsByClassName("skin-color"),
			skinBlock = document.getElementsByClassName("skin")[0],
			//масив "причесок"
			choiceHairStyle = document.getElementsByClassName("hair-style"),
			hairStyleBlock = document.getElementsByClassName("hair")[0],
			//масив "одежды"
			choiceClothesStyle = document.getElementsByClassName("clothes-style"),
			ClothesBlock = document.getElementsByClassName("clothes")[0],

			slideIndexSkinColor = 0,
			slideIndexHairStyle = 0,
			slideIndexClothesStyle = 0,
			
			prevButton = document.getElementsByClassName("prev"),
			nextButton = document.getElementsByClassName("next");
			
		
		//показать слайд с индексом
		function showSlides(n , SliderArr) {
			if (typeof (n) !== "number" ) {
				 return console.log("error, the expected number");
			}
			let  
				lenghtArr  = SliderArr.length;
			for ( let i = 0; i < lenghtArr; i++) {
				SliderArr[i].style.display = 'none';
			};
			SliderArr[n].style.display= 'block';
		}
		
		
		


//---------------------------	
		skinBlock.addEventListener('click', function(event) {
			let target = event.target; 
			if (target.className.indexOf("next") !== -1 || target.className.indexOf("right") !== -1 ){
				slideIndexSkinColor++;
				(slideIndexSkinColor == choiceSkinColor.length) ? slideIndexSkinColor = 0 : slideIndexSkinColor ;
				showSlides(slideIndexSkinColor, choiceSkinColor);
			}
			if (target.className.indexOf("prev") !== -1 || target.className.indexOf("left") !== -1){
				slideIndexSkinColor--;
				(slideIndexSkinColor < 0) ? slideIndexSkinColor = choiceSkinColor.length - 1 : slideIndexSkinColor ;
				showSlides(slideIndexSkinColor, choiceSkinColor);
			}
			person(slideIndexSkinColor,slideIndexHairStyle,slideIndexClothesStyle);
			
		});		
//--------------------
		
		

	
		
		hairStyleBlock.addEventListener('click', function(event) {
		let target = event.target,		
			n,
			m;
			
			if (maleRadio.checked){
				n = 3;
				m = 0;
				console.log(n);
				console.log(m);
			}
			if (femaleRadio.checked){
				n = 0;
				m = 3;
				console.log(n);
				console.log(m);
 			}	
			
			if (target.className.indexOf("next") !== -1 || target.className.indexOf("right") !== -1 ){
				slideIndexHairStyle++;
				(slideIndexHairStyle == choiceHairStyle.length - n) ? slideIndexHairStyle = 0 + m : slideIndexHairStyle ; 
				showSlides(slideIndexHairStyle, choiceHairStyle);

			}
			if (target.className.indexOf("prev") !== -1 || target.className.indexOf("left") !== -1){
				slideIndexHairStyle--; 
				(slideIndexHairStyle < 0 + m) ? slideIndexHairStyle = choiceHairStyle.length -1 - n : slideIndexHairStyle ;
				showSlides(slideIndexHairStyle, choiceHairStyle);
			}
			person(slideIndexSkinColor,slideIndexHairStyle,slideIndexClothesStyle);
		
		});	 
		
		
		ClothesBlock.addEventListener('click', function(event) {
		let target = event.target,
			n,
			m;
			
			if (maleRadio.checked){
				n = 3;
				m = 0;
				console.log(n);
				console.log(m);
			}
			if (femaleRadio.checked){
				n = 0;
				m = 3;
				console.log(n);
				console.log(m);
 			}	
			if (target.className.indexOf("next") !== -1 || target.className.indexOf("right") !== -1 ){
				slideIndexClothesStyle++;
				(slideIndexClothesStyle == choiceClothesStyle.length - n) ? slideIndexClothesStyle = 0 + m : slideIndexClothesStyle ;
				showSlides(slideIndexClothesStyle, choiceClothesStyle);
			}
			if (target.className.indexOf("prev") !== -1 || target.className.indexOf("left") !== -1){
				slideIndexClothesStyle--;
				(slideIndexClothesStyle < 0 + m) ? slideIndexClothesStyle = choiceClothesStyle.length - 1 - n : slideIndexClothesStyle ;
				showSlides(slideIndexClothesStyle, choiceClothesStyle);
			};
			person(slideIndexSkinColor,slideIndexHairStyle,slideIndexClothesStyle);
			

		
		});	
		femaleRadio.addEventListener('click', function(event){
			let target = event.target; 
			slideIndexHairStyle = 3;
			slideIndexClothesStyle = 3;
			showSlides(slideIndexHairStyle, choiceHairStyle);		
			showSlides(slideIndexClothesStyle, choiceClothesStyle);
			person(slideIndexSkinColor,slideIndexHairStyle,slideIndexClothesStyle);
		}) 
		maleRadio.addEventListener('click', function(event){
			let target = event.target; 
			slideIndexHairStyle = 0;
			slideIndexClothesStyle = 0;
			showSlides(slideIndexHairStyle, choiceHairStyle);		
			showSlides(slideIndexClothesStyle, choiceClothesStyle);
			person(slideIndexSkinColor,slideIndexHairStyle,slideIndexClothesStyle);
			
		})
		 
		
		function person(skin,hair,clothes){
			
			skin++;
			if (femaleRadio.checked){
				skin = skin + 3;
			}
			hair++;
			clothes++;
			personSkin.style.background = "none";
			personClothes.style.background = "none";
			personHair.style.background = "none";
			
			personSkin.style.background = "url(img/skin/skin-" + skin + ".png)center no-repeat";
			personSkin.style.backgroundSize = "cover";
			console.log(personSkin.style.background);

			
			personHair.style.background = "url(img/hair/construct/hair-" + hair + ".png)center no-repeat";
			personHair.style.backgroundSize = "cover";
			
			personClothes.style.background = "url(img/clothes/construct/clothes-" + clothes + ".png)center no-repeat";
			personClothes.style.backgroundSize = "cover";
			character.skin = skin;
			character.hairstyle = hair;
			character.clothes = clothes;
		};
		
		
		
	
		 
		
	}());

	//Кнопка "Готово"
	
	(function(){
		readyButton.addEventListener('click',function(){
			let 
				name = document.getElementById("name"),
				age = document.getElementById("age"),
				ideologySelect = document.getElementById("select"),
				biography = document.getElementById("bio"),
				fuName = name.value;
				
			function nameParser(){//разбивает имя на три строки
				let arr = [],
					bol = false;
				fuName = fuName.trim();//удаляю пробелы в начале и коцк строки
				while (bol == false) {//*удаляю двойные пробелы
  					if (fuName.indexOf("  ") != -1){
						fuName = fuName.replace("  "," ");
						}else{
						bol = true;
					};
				};
					
			name.value = fuName;
				
			arr = fuName.split(' ');
			if (arr.length === 3){
				
				character.surname = arr[0];
				character.name = arr[1];
				character.patronymic = arr[2];
				}else{
					character.surname = "";
					character.name = "";
					character.patronymic = "";
					return false;
				}
			}
			nameParser();
			//***проверяю пол
			if (maleRadio.checked){
				character.sex = "Мужской";
			}else{
				character.sex = "Женский";
			};
			
			
			function ageCheck(fuAge){

				if(typeof(+fuAge) == "number" && +fuAge > 34 && +fuAge < 61 ){
					character.age = fuAge;
				}else{
					character.age = "";
					age.value = 35;
				}
			}
			ageCheck(age.value);
			
			function bio(str){
				str = str.trim();
				if (str.length > 5 ){
					character.biography = str;
				}else{
					character.biography = '';
					return false;
				}
			}
			bio(biography.value);
			character.ideology = ideologySelect.value;
			
			console.log(character);
			if (character.name !== ""){ // мне было лень писать красивую функцию
				if (character.patronymic !== ""){
					if (character.surname !== ""){
						if(character.age !== ""){
							if(character.biographyi !== ""){
								customWindow.style.display = "none";
								mainWindow.style.display = "block";
			
								blockBio.innerHTML = character.biography;
								blockViews.innerHTML = character.ideology;
								blockSex.innerHTML = character.sex;
								blockAge.innerHTML = character.age;
								blockName.innerHTML = character.surname + " " + character.name + " " + character.patronymic; 
	

							
								for (let i = 0; i < percentsResult.length; i++){ 
									percentsResult[i].innerHTML = "0 %";
									percentsBar[i].style.height = "0%";
								}
								
								blockPersonSkin.style.background = "url(img/skin/skin-" + character.skin + ".png) center center / cover no-repeat";
								blockPersonClothes.style.background = "url(img/clothes/construct/clothes-" + character.clothes + ".png)center center / cover no-repeat";
								blockPersonHair.style.background = "url(img/hair/construct/hair-" + character.hairstyle + ".png)center center / cover no-repeat";
								console.log(character.clothes)
								
							}
						}
					}
				}
			} 
		})	   
	}());
	//честное голосование
	(function(){

		voting.addEventListener('click', function(event) {
			
			let arr = randomPercents(3,100);
			percentsBar[0].style.height = arr[0] + "%";
			percentsBar[1].style.height = arr[1] + "%";
			percentsBar[2].style.height = arr[2] + "%";
			
			percentsResult[0].innerHTML = (Math.round(arr[0] * 100) / 100)  + " %";
			percentsResult[1].innerHTML = (Math.round(arr[1] * 100) / 100)  + " %";
			percentsResult[2].innerHTML = (Math.round(arr[2] * 100) / 100)  + " %";
			
			//console.log(percents[2]);
			
	
		});
		
	}());
	
	//не честное голосование
	(function(){
		crime.addEventListener('click', function(event) {
			let arr = randomPercents(3,75);
			console.log("Честный масив");
			console.log(arr);
			arr[1] += 25;
			
			console.log("Читерский масив");
			console.log(arr);
			
			
			percentsBar[0].style.height = arr[0] + "%";
			percentsBar[1].style.height = arr[1] + "%";
			percentsBar[2].style.height = arr[2] + "%";
			
			percentsResult[0].innerHTML = (Math.round(arr[0] * 100) / 100)  + " %";
			percentsResult[1].innerHTML = (Math.round(arr[1] * 100) / 100)  + " %";
			percentsResult[2].innerHTML = (Math.round(arr[2] * 100) / 100)  + " %";
 			
		});
	}());
	
	//сброс
	(function(){
		reset.addEventListener('click', function(target){
		mainWindow.style.display = "none";
		customWindow.style.display = "flex";
		customWindowInfo.style.display = "block";
		customWindowChar.style.display = "block";
		customWindowStyle.style.display = "block";
		character.name = "";
		character.surname = "";
		character.patronymic = "";
		character.ideology = "";
			
		
	})	
	}())

});
