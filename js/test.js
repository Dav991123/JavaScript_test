console.log('խնդրում եմ եղիր ազնիվ և console-ից մի օգտվիր ');



let i = 0;
let txt = 'Թեստավորմանը մասնակցելու համար խնդրում ենք մուտքագրել գաղտնաբառը'

let typeWriter = () =>{
    if(i < txt.length){
      document.getElementById('warning').innerHTML +=txt.charAt(i);
      i++
    }
    setTimeout(setTimeout(typeWriter, 110))
}
setTimeout(typeWriter,500)

let task0 = 'Ի՞նչ կտպվի console-ում' + '<br><br>' + 'let x = 5;' +  '<br>'  +'console.log(x++);',
    task1 = 'Նշվածներից ո՞րոնք են ցիկլի օպերատոր՝',
	task2 = 'Ո՞ր պնդումն է ճիշտ։',
	task3 = 'Ի՞նչ կտպի console-ում։՝' + '<br><br>' + ' console.log("1" [0]) ',
	task4 = 'Ի՞նչ կտպի հետևյալ կոդը՝' + '<br><br>' + 'let y = 1' + '<br>' + 'let x = y = 2' + '<br>' + "x?";
	task5 = 'Ի՞նչ կտպի հետևյալ կոդը:' + '<br><br>' + 'true + false';
	task6 = 'հնարավոր է "foo()"  կանչել հայտարարելուց առաջ' + '<br><br>' + 'foo()' + '<br>' + 'function foo() {alert(hello world)}',
	task7 ='Ի՞նչ կտպվի console-ում' + '<br><br>' + 'console.log(null == undefined)',
	task8 = 'Ի՞նչ կտպվի console-ում' + '<br><br>' + 'console.log(typeof(this))',
	task9 = 'Ի՞նչ կտպի հետևյալ կոդը' + '<br><br>' +  'NaN === NaN',
	task10 = 'Ի՞նչ կտպի հետևյալ կոդը' + '<br><br>' +  '10 > 11 > -5 === true;',
	task11 = 'Ի՞նչ արժեք կստանա str փոփոխականը կոդի վերջում։' + '<br><br>' +  'let str=”abracadabra”.replace(/a/,”I”);',
	task12 = 'Ի՞նչ կտպվի console-ում' + '<br><br>' +  'console.log("1"[0])',
	task13 = 'Ի՞նչ կտպի հետևյալ կոդը' + '<br><br>' + 'Number("10") - 10===0;',
	task14 = 'Ի՞նչ կտպվի console-ում' + '<br><br>' +  'for(let i = 0; i < 10; i++)' + '{' + '<br>' + 'alert(i)' + '<br>' + '}'  + '<br>' + 'console.log(i)?'
    task15 = 'Ի՞նչ կտպի console-ում a-ն' + '<br><br>' + 'const a = null + undefined' + '<br>' + 'console.log(a)',
    task16 = 'Ի՞նչ կտպի հետևյալ կոդը' + '<br><br>' + 'const x' + '<br>' + 'x = 10',
    task17 = 'Ի՞նչ կտպի հետևյալ կոդը' + '<br><br>' + '10 > 11 < 9 === true > 10 > -1',
    task18 = 'Ի՞նչ կտպի հետևյալ կոդը' + '<br><br>' + 'let y,' + 'x = 10' + '<br>' + 'y = x' + '<br>' + 'y+y',
    task19 = 'Որ եղանակով է ճիշտ կանչել Author-ի "first Name" -ը' + '<br><br>' + 'const Author = ' + '{' + '<br>' + '"first Name"' + ':' + " 'Davit' " + ',' + '<br>' + "lastName: 'Sargsyan'" + ',' + '<br>' + 'age:19'+ '<br>' + '}',
    task20 = 'Ի՞նչ կտպի հետևյալ կոդը' + '<br><br>' + 'typeof(null)',
    task21 = 'Քանի ձեռք ունի JavaScript-ը',
    task22 = 'Ի՞նչ կտպվի console-ում' + '<br><br>' + 'let girlName = "Olivia, Isabella ,Lika, Ella, Eva"' + '<br>' + 'let name = girlName.split(",")' + '<br>' + 'console.log(typeof(name))',
    task23 = 'Ի՞նչ կտպի հետևյալ կոդը' + '<br><br>' + 'let x = 10' + '<br>' + 'let y = "alert(x)"' + '<br>' + 'eval(y)'
    task24 = 'Ի՞նչ կտպի հետևյալ կոդը' + '<br><br>' + 'NaN !=  NaN',
    task25 = 'ինչ հերթականությամբ կտպվի - console - ում' + '<br><br>' + 'const first = () =>{' + 'setTimeout( function(){' + '<br>' + 'console.log(1);' + '<br>' + '},500)}' + '<br>' + 'const second = () =>{console.log(2);}' + '<br><br>' + 'first()' + '<br>' + 'second()'

	
	let data_array = [
	  	[task0,"5","error","undefined","6",1],
	  	[task1,"for if", "switch while","for while","case for",3],
		  [task2,
			"JavaScript-ը դինամիկ տիպավորող լեզու է",
			"JavaScript-ում բոլոր տվյալի տեսակները օբյեկտներ են",
			"JavaScript-ը կամպիլացվող լեզու է",
			"JavaScript-ը աշխատում է միայն browser-ում",
			1],
		  [task3, "1","0", "'error'" ,"undefined",1],
		  
	  	[task4,"error","NaN","2","undefined",3],
	  	[task5,"NaN","1","error","undefined",2],
	  	[task6,'այո','ոչ','չգիտեմ','?',1],
	 	[task7,'NaN','false','true','error',3],
		[task8,'undefined','Brendan Eh','object','NaN',3],
		[task9, 'false','NaN','true','error',1],
		[task10,'true','false','?','NaN',1],
		[task11,'"lbrlcldlbr;"','lbracadabra;','abracadabra;','undefined',2],
		[task12,'1','undefined','0','error',1],
		[task13,'error','undefined','true','false',3],
		[task14,'1...9','10','undefined','error',4],
    	[task15,'null','undefined','NaN','error',3],
    	[task16,'undefined','10','error','NaN',3],
    	[task17,'false','NaN','error','true',4],
    	[task18,'20','error','10','NaN',1],
    	[task19,'Author.firstName','Author.first Name','Author.[first Name]','Author["first Name"]',4],
    	[task20,'undefined','null','object','NaN',3],
    	[task21,'12','չունի','2','1',4],
    	[task22,'String','object','null','error',2],
    	[task23,'undefined','10','alert(10)','error',3],
    	[task24,'error','true','undefined','error',2],
    	[task25,'1 1','1 2','2 1','error',3]
	];

	let plus = 0;
	let time = 0;
	let cur_answer = 0;
	let count_answer = data_array.length;

	let sec = () =>{
		time++;

    if(time == 7200 ){
        document.getElementById('time').style.color = 'red';
        document.getElementById('time').innerHTML = 'ձեր ժամանակը սպառվեց'
    }
	}

	function check(num){

		if(num == 0){

			document.getElementById('option1').style.display='block';
			document.getElementById('option2').style.display='block';
			document.getElementById('option3').style.display='block';
			document.getElementById('option4').style.display='block';
			document.getElementById('question').style.display='block';

			document.getElementById('option1').innerHTML=data_array[cur_answer][1];
			document.getElementById('option2').innerHTML=data_array[cur_answer][2];
			document.getElementById('option3').innerHTML=data_array[cur_answer][3];
			document.getElementById('option4').innerHTML=data_array[cur_answer][4];
			document.getElementById('question').innerHTML=data_array[cur_answer][0];

			document.getElementById('start').style.display='none';
      document.getElementById('carefully').style.display = 'none';

			var intervalID = setInterval(sec, 1000);

		}else{

			if( num ==  data_array[cur_answer][5]){
				plus++;
        let section = document.createElement('section')
        document.querySelector('#test').appendChild(section);
        section.innerHTML = '<br>' + data_array[cur_answer][0] + '<br>' + 'դուք ընտրել եք ճիշտ պատասխանը' + '<br><br>' + '1-միավոր' + '<hr>'

			}else{
        let section = document.createElement('section')
        document.querySelector('#test').appendChild(section);
        section.innerHTML = '<br>' + data_array[cur_answer][0] + '<br>' + 'դուք ընտրել էք սխալ պատասխան' + '<br><br>' + '0-միավոր'  +  '<hr>';
			}

			cur_answer++;
			if(cur_answer < count_answer){

				document.getElementById('option1').innerHTML=data_array[cur_answer][1];
				document.getElementById('option2').innerHTML=data_array[cur_answer][2];
				document.getElementById('option3').innerHTML=data_array[cur_answer][3];
				document.getElementById('option4').innerHTML=data_array[cur_answer][4];
				document.getElementById('question').innerHTML=data_array[cur_answer][0];

			}else{

				document.getElementById('time').id = 'stop';
				document.getElementById('option1').style.display='none';
				document.getElementById('option2').style.display='none';
				document.getElementById('option3').style.display='none';
				document.getElementById('option4').style.display='none';
				document.getElementById('question').style.display='none';

				var percent =  Math.round(plus/count_answer*100);
				var res = 'վատ!';
				if(percent>50) res = 'Լավ!';
				if(percent==100) res = 'Գերազանց!';

				document.getElementById('result').innerHTML='Ճիշտ պատասխաններ: ' +  count_answer + ' ից ' + plus  + /*' (' + percent + '%)<br>'*/  '<br>'+ res;
        document.querySelector('#test').style.display = 'block'
			}
		}
	}


  let startTest = () => {
      let password = document.getElementById('pass').value = 'JavaScript_test';
      if(password === 'JavaScript_test'){
          document.querySelector('section').style.display = 'block';
          document.getElementById('registration').style.display = 'none';

      }else if(password == ''){
          document.getElementById('error').innerHTML = 'խնդրում ենք լրացնել  Գաղտնաբառը'
      }else {
          document.getElementById('error').innerHTML = 'Գաղտնաբառը, որը Դուք մուտքագրել եք սխալ է։ Խնդրում ենք փորձել կրկին։'
      }

  }

