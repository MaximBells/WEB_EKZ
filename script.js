let button = document.getElementById('closeMENU');
let max = 0;
let restName1 = document.getElementById('restName1');
let restName2 = document.getElementById('restName2');
let restName3 = document.getElementById('restName3');
let restType1 = document.getElementById('restType1');
let restType2 = document.getElementById('restType2');
let restType3 = document.getElementById('restType3');
let restAddress1 = document.getElementById('restAddress1');
let restAddress2 = document.getElementById('restAddress2');
let restAddress3 = document.getElementById('restAddress3');
let id1 = 0;
let id2 = 0;
let id3 = 0;
let prev = document.getElementById('Prev');
let nex = document.getElementById('Nex');
let allMount = 0;
let newAllprice = 0;
let newAllpriceHOT = 0;
let mount1 = document.getElementById('inputName1');
let mountSet1 = mount1.value;
let modified = 0;
let mount2 = document.getElementById('inputName2');
let mountSet2 = mount2.value;

let mount3 = document.getElementById('inputName3');
let mountSet3 = mount3.value;

let mount4 = document.getElementById('inputName4');
let mountSet4 = mount4.value;

let mount5 = document.getElementById('inputName5');
let mountSet5 = mount5.value;

let mount6 = document.getElementById('inputName6');
let mountSet6 = mount6.value;

let mount7 = document.getElementById('inputName7');
let mountSet7 = mount7.value;

let mount8 = document.getElementById('inputName8');
let mountSet8 = mount8.value;

let mount9 = document.getElementById('inputName9');
let mountSet9 = mount9.value;

let mount10 = document.getElementById('inputName10');
let mountSet10 = mount10.value;

let admAreaArray = [];
let districtArray = [];
let typeObjectArray = [];
let socialPrivilegesArray = [];

let admAreaArraySort = [];
let districtArraySort = [];
let typeObjectArraySort = [];
let socialPrivilegesArraySort = [];

let selectedArray = [];

let currentName = restName1;
let idCurrent = 0;
let allPrice = 0;
function set1plus(){
  mountSet1++;
  mount1.value = mountSet1;

}



function set1minus(){
  if (mountSet1>0){
    mountSet1--;
    mount1.value = mountSet1;
  }
}

function set2plus(){
  mountSet2++;
  mount2.value = mountSet2;

}



function set2minus(){
  if (mountSet2>0){
    mountSet2--;
    mount2.value = mountSet2;
  }
}

function set3plus(){
  mountSet3++;
  mount3.value = mountSet3;

}



function set3minus(){
  if (mountSet3>0){
    mountSet3--;
    mount3.value = mountSet3;
  }
}

function set4plus(){
  mountSet4++;
  mount4.value = mountSet4;

}



function set4minus(){
  if (mountSet4>0){
    mountSet4--;
    mount4.value = mountSet4;
  }
}

function set5plus(){
  mountSet5++;
  mount5.value = mountSet5;

}



function set5minus(){
  if (mountSet5>0){
    mountSet5--;
    mount5.value = mountSet5;
  }
}

function set6plus(){
  mountSet6++;
  mount6.value = mountSet6;

}



function set6minus(){
  if (mountSet6>0){
    mountSet6--;
    mount6.value = mountSet6;
  }
}

function set7plus(){
  mountSet7++;
  mount7.value = mountSet7;

}



function set7minus(){
  if (mountSet7>0){
    mountSet7--;
    mount7.value = mountSet7;
  }
}

function set8plus(){
  mountSet8++;
  mount8.value = mountSet8;

}



function set8minus(){
  if (mountSet8>0){
    mountSet8--;
    mount8.value = mountSet8;
  }
}

function set9plus(){
  mountSet9++;
  mount9.value = mountSet9;

}



function set9minus(){
  if (mountSet9>0){
    mountSet9--;
    mount9.value = mountSet9;
  }
}

function set10plus(){
  mountSet10++;
  mount10.value = mountSet10;

}



function set10minus(){
  if (mountSet10>0){
    mountSet10--;
    mount10.value = mountSet10;
  }
}







function showHide1(element_id) {
  let oftp = new XMLHttpRequest();
  oftp.open('GET', `http://exam-2020-1-api.std-400.ist.mospolytech.ru/api/data1`);
  oftp.send();
  oftp.onreadystatechange = function(){
      if(oftp.readyState != 4) return;
      if(oftp.status != 200){
        alert('Сервер недоступен ' + oftp.status + ' ' + oftp.statusText);
        return;
      }

      const sets = JSON.parse(oftp.response).map(alname=>({id:alname.id, name:alname.name ,set1:alname.set_1, set2:alname.set_2, set3:alname.set_3, set4:alname.set_4, set5:alname.set_5, set6:alname.set_6, set7:alname.set_7, set8:alname.set_8, set9:alname.set_9, set10:alname.set_10 }));
      console.log(sets);


             //Если элемент с id-шником element_id существует
               if (document.getElementById(element_id)) {
                   //Записываем ссылку на элемент в переменную obj
                   var obj = document.getElementById(element_id);
                   //Если css-свойство display не block, то:

                       obj.style.display = "block";




                       sets.forEach((element,i) => {
                         if(sets[i].id == id1){
                            $('#set1').html(sets[i].set1);
                            $('#set2').html(sets[i].set2);
                            $('#set3').html(sets[i].set3);
                            $('#set4').html(sets[i].set4);
                            $('#set5').html(sets[i].set5);
                            $('#set6').html(sets[i].set6);
                            $('#set7').html(sets[i].set7);
                            $('#set8').html(sets[i].set8);
                            $('#set9').html(sets[i].set9);
                            $('#set10').html(sets[i].set10);
                            idCurrent = id1;
                         }
                       });


}

}
}

function showHide2(element_id) {
  let oftp = new XMLHttpRequest();
  oftp.open('GET', `http://exam-2020-1-api.std-400.ist.mospolytech.ru/api/data1`);
  oftp.send();
  oftp.onreadystatechange = function(){
      if(oftp.readyState != 4) return;
      if(oftp.status != 200){
        alert('Сервер недоступен ' + oftp.status + ' ' + oftp.statusText);
        return;
      }

      const sets = JSON.parse(oftp.response).map(alname=>({id:alname.id, name:alname.name ,set1:alname.set_1, set2:alname.set_2, set3:alname.set_3, set4:alname.set_4, set5:alname.set_5, set6:alname.set_6, set7:alname.set_7, set8:alname.set_8, set9:alname.set_9, set10:alname.set_10 }));
      console.log(sets);
      console.log(id1);
      console.log(id2);



             //Если элемент с id-шником element_id существует
               if (document.getElementById(element_id)) {
                   //Записываем ссылку на элемент в переменную obj
                   var obj = document.getElementById(element_id);
                   //Если css-свойство display не block, то:

                       obj.style.display = "block";




                       sets.forEach((element,i) => {
                         if(sets[i].id == id2){
                            $('#set1').html(sets[i].set1);
                            $('#set2').html(sets[i].set2);
                            $('#set3').html(sets[i].set3);
                            $('#set4').html(sets[i].set4);
                            $('#set5').html(sets[i].set5);
                            $('#set6').html(sets[i].set6);
                            $('#set7').html(sets[i].set7);
                            $('#set8').html(sets[i].set8);
                            $('#set9').html(sets[i].set9);
                            $('#set10').html(sets[i].set10);
                            idCurrent = id2;
                         }
                       });


}

}
}
function showHide3(element_id) {
  let oftp = new XMLHttpRequest();
  oftp.open('GET', `http://exam-2020-1-api.std-400.ist.mospolytech.ru/api/data1`);
  oftp.send();
  oftp.onreadystatechange = function(){
      if(oftp.readyState != 4) return;
      if(oftp.status != 200){
        alert('Сервер недоступен ' + oftp.status + ' ' + oftp.statusText);
        return;
      }

      const sets = JSON.parse(oftp.response).map(alname=>({id:alname.id, name:alname.name ,set1:alname.set_1, set2:alname.set_2, set3:alname.set_3, set4:alname.set_4, set5:alname.set_5, set6:alname.set_6, set7:alname.set_7, set8:alname.set_8, set9:alname.set_9, set10:alname.set_10 }));
      console.log(sets);



             //Если элемент с id-шником element_id существует
               if (document.getElementById(element_id)) {
                   //Записываем ссылку на элемент в переменную obj
                   var obj = document.getElementById(element_id);
                   //Если css-свойство display не block, то:

                       obj.style.display = "block";




                       sets.forEach((element,i) => {
                         if(sets[i].id == id3){
                            $('#set1').html(sets[i].set1);
                            $('#set2').html(sets[i].set2);
                            $('#set3').html(sets[i].set3);
                            $('#set4').html(sets[i].set4);
                            $('#set5').html(sets[i].set5);
                            $('#set6').html(sets[i].set6);
                            $('#set7').html(sets[i].set7);
                            $('#set8').html(sets[i].set8);
                            $('#set9').html(sets[i].set9);
                            $('#set10').html(sets[i].set10);
                            idCurrent = id3;
                         }
                       });


}

}
}
                       //Показываем элемент
















function closeHide(block){
  //Если элемент с id-шником element_id существует
  if (document.getElementById(block)) {

      //Записываем ссылку на элемент в переменную obj
      var obj = document.getElementById(block);

      if (obj.style.display == "block") {
          obj.style.display = "none";
      }

  }
  //Если элемент с id-шником element_id не найден, то выводим сообщение
  else alert("Элемент с id: " + block + " не найден!");


}

function paginationNavNex(){
  let oftp = new XMLHttpRequest();
  oftp.open('GET', `http://exam-2020-1-api.std-400.ist.mospolytech.ru/api/data1`);
  oftp.send();
  oftp.onreadystatechange = function(){
      if(oftp.readyState != 4) return;
      if(oftp.status != 200){
        alert('Сервер недоступен ' + oftp.status + ' ' + oftp.statusText);
        return;
      }

      const namesArray = JSON.parse(oftp.response).map(alname=>({id:alname.id,name:alname.name, typeObject:alname.typeObject, admArea:alname.admArea, district:alname.district, address:alname.address, socialPrivileges:alname.socialPrivileges }));
      console.log(namesArray);

    if (max<0){
      max=0;
    }




       $('#restName1').html(namesArray[max].name);
        $('#restType1').html(namesArray[max].typeObject);
         $('#restAddress1').html(namesArray[max].address);
         id1 = namesArray[max].id;

       $('#restName2').html(namesArray[max+1].name);
        $('#restType2').html(namesArray[max+1].typeObject);
         $('#restAddress2').html(namesArray[max+1].address);
         id2 = namesArray[max+1].id;


          $('#restName3').html(namesArray[max+2].name);
           $('#restType3').html(namesArray[max+2].typeObject);
            $('#restAddress3').html(namesArray[max+2].address);
            id3 = namesArray[max+2].id;
max = max +3;








}
}
function paginationNavPrev(){
  let oftp = new XMLHttpRequest();
  oftp.open('GET', `http://exam-2020-1-api.std-400.ist.mospolytech.ru/api/data1`);
  oftp.send();
  oftp.onreadystatechange = function(){
      if(oftp.readyState != 4) return;
      if(oftp.status != 200){
        alert('Сервер недоступен ' + oftp.status + ' ' + oftp.statusText);
        return;
      }

      const namesArray = JSON.parse(oftp.response).map(alname=>({id:alname.id, name:alname.name, typeObject:alname.typeObject, address:alname.address }));
      console.log(namesArray);
  max = max - 1;
  if(max>0){
        $('#restName1').html(namesArray[max].name);
         $('#restType1').html(namesArray[max].typeObject);
          $('#restAddress1').html(namesArray[max].address);
          id1 = namesArray[max].id;

        }
          max = max - 1;
          if(max>0){
          $('#restName2').html(namesArray[max].name);
           $('#restType2').html(namesArray[max].typeObject);
            $('#restAddress2').html(namesArray[max].address);
            id2 = namesArray[max].id;

          }
            max = max - 1;
            if(max>0){
            $('#restName3').html(namesArray[max].name);
             $('#restType3').html(namesArray[max].typeObject);
              $('#restAddress3').html(namesArray[max].address);
              id3 = namesArray[max].id;

            }
          }
      }

function countMount(){
  let oftp = new XMLHttpRequest();
  oftp.open('GET', `http://exam-2020-1-api.std-400.ist.mospolytech.ru/api/data1`);
  oftp.send();
  oftp.onreadystatechange = function(){
      if(oftp.readyState != 4) return;
      if(oftp.status != 200){
        alert('Сервер недоступен ' + oftp.status + ' ' + oftp.statusText);
        return;
      }

      const sets = JSON.parse(oftp.response).map(alname=>({id:alname.id, name:alname.name ,set1:alname.set_1, set2:alname.set_2, set3:alname.set_3, set4:alname.set_4, set5:alname.set_5, set6:alname.set_6, set7:alname.set_7, set8:alname.set_8, set9:alname.set_9, set10:alname.set_10 }));
      console.log(sets);

      sets.forEach((element,i) => {
        if(sets[i].id == idCurrent){
          currentName = sets[i].name;
          allPrice = (sets[i].set1 * mountSet1) + (sets[i].set2 * mountSet2) + (sets[i].set3 * mountSet3) + (sets[i].set4 * mountSet4) + (sets[i].set5 * mountSet5) + (sets[i].set6 * mountSet6) + (sets[i].set7 * mountSet7) + (sets[i].set8 * mountSet8) + (sets[i].set9 * mountSet9) + (sets[i].set10 * mountSet10);
          allPrice = allPrice + 250;
}
});
console.log(allPrice);
var values = [];
$('input[type="checkbox"]:checked').each(function() {
  values.push($(this).val());
});

if(values[0]=='on'){
  allPrice = allPrice * 1.2;
}
$('#modalAmount').html(allPrice);
$('#resName').html(currentName);
newAllprice = allPrice * 1.2;



}
}

function check_boxesFAST(){
  var values = [];
  $('input[type="checkbox"]:checked').each(function() {
    values.push($(this).val());
  });

  if(values[0]=='on' && newAllprice!=allPrice*2){
    $('#modalAmount').html(newAllprice);
    modified = 1;
  } else if(values[0]!='on'){
    $('#modalAmount').html(allPrice);
    modified = 0;
  }
}

function check_boxesHOT(){
  var values = [];
  $('input[type="checkbox"]:checked').each(function() {
    values.push($(this).val());
  });

if(modified==0){
  newAllpriceHOT = allPrice * 0.7;
} else if(modified==1){
  newAllpriceHOT = newAllprice * 0.7;
}


if(values[1]=='on' && modified==1){
  let block = document.getElementById('hideen');
  block.style.display = 'block';
  $('#changedPRICE').html(newAllpriceHOT);
} else if(values[0]=='on' && modified==0){
  let block = document.getElementById('hideen');
  block.style.display = 'block';
  $('#changedPRICE').html(newAllpriceHOT);
} else {
  let block = document.getElementById('hideen');
  block.style.display = 'none';
}
}

function sort(){
  let oftp = new XMLHttpRequest();
  oftp.open('GET', `http://exam-2020-1-api.std-400.ist.mospolytech.ru/api/data1`);
  oftp.send();
  oftp.onreadystatechange = function(){
      if(oftp.readyState != 4) return;
      if(oftp.status != 200){
        alert('Сервер недоступен ' + oftp.status + ' ' + oftp.statusText);
        return;
      }

      const sets = JSON.parse(oftp.response).map(alname=>({admArea:alname.admArea, district:alname.district, typeObject:alname.typeObject, socialPrivileges:alname.socialPrivileges }));
      console.log(sets);

let last = 0;

      sets.forEach((element,i) => {
        admAreaArray[i] = sets[i].admArea;
        last = i;
});

  sets.forEach((element,i) => {
    districtArray[i] = sets[i].district;
});

sets.forEach((element,i) => {
  typeObjectArray[i] = sets[i].typeObject;
});


sets.forEach((element,i) => {
  socialPrivilegesArray[i] = sets[i].socialPrivileges;
});


const values = new Set();
const len = admAreaArray.length;
let offset = 0;
for(let i = 0; i < len; i++) {
  let val = admAreaArray[i];
  if(values.has(val)) {
    offset++;
  } else {
    values.add(val);
    admAreaArray[i - offset] = val;
  }
}
admAreaArray.length = len - offset;




const values2 = new Set();
const len2 = districtArray.length;
let offset2 = 0;
for(let i = 0; i < len2; i++) {
  let val2 = districtArray[i];
  if(values2.has(val2)) {
    offset2++;
  } else {
    values2.add(val2);
    districtArray[i - offset2] = val2;
  }
}
districtArray.length = len2 - offset2;

const values3 = new Set();
const len3 = typeObjectArray.length;
let offset3 = 0;
for(let i = 0; i < len3; i++) {
  let val3 = typeObjectArray[i];
  if(values3.has(val3)) {
    offset3++;
  } else {
    values3.add(val3);
    typeObjectArray[i - offset3] = val3;
  }
}
typeObjectArray.length = len3 - offset3;


const values4 = new Set();
const len4 = socialPrivilegesArray.length;
let offset4 = 0;
for(let i = 0; i < len4; i++) {
  let val4 = socialPrivilegesArray[i];
  if(values4.has(val4)) {
    offset4++;
  } else {
    values4.add(val4);
    socialPrivilegesArray[i - offset4] = val4;
  }
}
socialPrivilegesArray.length = len4 - offset4;

let i = 0;
while (i < admAreaArray.length){
let option = document.createElement('option');
let admSelector = document.getElementById('admAreaSelector');
option.innerHTML = `<option>${admAreaArray[i]}</option> `;
option.value = admAreaArray[i];
admSelector.append(option);
i = i + 1;
}
i = 0;
while (i < districtArray.length){
let option = document.createElement('option');
let disSelector = document.getElementById('districtSelector');
option.innerHTML = `<option>${districtArray[i]}</option> `;
option.value = districtArray[i];
disSelector.append(option);
i = i + 1;
}
i = 0;
while (i < typeObjectArray.length){
let option = document.createElement('option');
let typSelector = document.getElementById('typeObjectSelector');
option.innerHTML = `<option>${typeObjectArray[i]}</option> `;
option.value = typeObjectArray[i];
typSelector.append(option);
i = i + 1;
}













}
}




paginationNavNex();
sort();

let admAreaChoice;
let districtChoice;
let typeObjectChoice;
let socialPrivilegeChoice;

document.addEventListener('DOMContentLoaded', () => {
   admAreaChoice = document.getElementById('admAreaSelector').value;
  console.log(admAreaChoice);
});
document.addEventListener('DOMContentLoaded', () => {
   districtChoice = document.getElementById('districtSelector').value;
  console.log(districtChoice);
});
document.addEventListener('DOMContentLoaded', () => {
   typeObjectChoice = document.getElementById('typeObjectSelector').value;
  console.log(typeObjectChoice);
});
document.addEventListener('DOMContentLoaded', () => {
   socialPrivilegeChoice = document.getElementById('socialPrivilegesSelector').value;
  console.log(socialPrivilegeChoice);
});


document.getElementById('admAreaSelector').addEventListener('change', function() {
   admAreaChoice = this.value;
  console.log(admAreaChoice);
});
document.getElementById('districtSelector').addEventListener('change', function() {
   districtChoice = this.value;
  console.log(districtChoice);
});
document.getElementById('typeObjectSelector').addEventListener('change', function() {
   typeObjectChoice = this.value;
  console.log(typeObjectChoice);
});
document.getElementById('socialPrivilegesSelector').addEventListener('change', function() {
   socialPrivilegeChoice = this.value;
  console.log(socialPrivilegeChoice);
});
