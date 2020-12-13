var managers = [
  "Abdullah Avcı",
  "Aykut Kocaman",
  "Ünal Karaman",
  "Ersun Yanal",
  "Tayfun Korkut",
  "Rıza Çalımbay",
  "Erol Bulut",
  "Okan Buruk",
  "Sergen Yalçın",
  "Ertuğrul Sağlam",
  "Tamer Tuna",
  "Kemal Özdeş",
  "Hamza Hamzaoğlu",
  "Hikmet Karaman",
  "Samet Aybaba",
  "Mustafa Reşit Akçay",
  "İsmail Kartal",
  "Mustafa Denizli",
  "Bülent Korkmaz",
  "Mehmet Özdilek",
  "Hüseyin Eroğlu",
  "Fuat Çapa",
  "Yalçın Koşukavak",
  "Yücel İldiz",
  "Ümit Özat",
  "Mehmet Altıparmak",
  "Bülent Uygun",
  "İlhan Palut",
  "Mesut Bakkal",
  "İrfan Buz",
  "Tolunay Kafkas",
  "Adnan Gülek",
  "Orhan Çıkırıkçı",
  "İbrahim Üzülmez",
  "Muhsin Ertuğral",
  "Erkan Utanır",
  "Mustafa Kaplan",
  "Yılmaz Vural",
  "Uğur Tütüneker",
  "Osman Özköylü",
  "Metin Diyadin",
  "Kemalettin Şentürk",
  "Erkan Sözeri",
  "Engin İpekoğlu",
  "Levent Eriş",
  "Ziya Doğan",
  "Robert Prosinecki",
  "Stjepan Thomas",
  "Marius Șumudică",
  "Cristoph Daum",
  "Ahmet Suat Özyazıcı",
  "Cihat Arslan",
  "Şota Arveladze",
  "Mircea Lucescu"
];
var clubs = [
  "Galatasaray",
  "Fenerbahçe",
  "Beşiktaş",
  "İstanbul Başakşehir",
  "Trabzonspor",
  "Sivasspor",
  "Yeni Malatyaspor",
  "Fatih Karagümrük",
  "Alanyaspor",
  "Antalyaspor",
  "Denizlispor",
  "Çaykur Rizespor",
  "Gazişehir Gaziantep",
  "Konyaspor",
  "Kayserispor",
  "Göztepe",
  "Gençlerbirliği",
  "Kasımpaşa",
  "Ankaragücü",
  "Hatayspor",
  "B.B. Erzurumspor",
];

managers.sort();
clubs.sort();

function getRandomItem(array){
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}

var selectedManager = "Rastgele";
var selectedClub = "Rastgele";

var htmlManagers = document.querySelector("#managers");
var m = htmlManagers.addEventListener("click", function (e) {
  selectedManager = e.target.innerText;
  
  if (selectedManager == "Rastgele") {
    document.getElementById("manager").style.color = "white"; 
    document.getElementById("manager").innerHTML = "~";
  }
  else{
    document.getElementById("manager").style.color = "#f95858"; 
    document.getElementById("manager").innerHTML = selectedManager;
  }
});

var htmlClubs = document.querySelector("#clubs");
var c= htmlClubs.addEventListener("click", function (e) {
  selectedClub = e.target.innerText;
  
  if (selectedClub == "Rastgele") {
    document.getElementById("club").style.color = "white";
    document.getElementById("club").innerHTML = "~";
  }
  else{
    document.getElementById("club").style.color ="#f95858"; 
    document.getElementById("club").innerHTML = selectedClub;
  }
  
});


async function generate() {
  for (let i = 0; i < 20; i++) {
    if (selectedManager == "Rastgele") {
      document.getElementById("manager").innerHTML = getRandomItem(managers);
    }
  
    if (selectedClub == "Rastgele") {
      document.getElementById("club").innerHTML = getRandomItem(clubs);
    }
    let delayres = await delay(40);
  }
  
}

function delay(delayInms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}


function setListFromArray(array, listId) {
  for (let i = 0; i < array.length; i++) {
    document.getElementById(listId).innerHTML =
      document.getElementById(listId).innerHTML +
      '<li><a class="dropdown-item" style="color: #b8b8b8;" href="#">' +
      array[i] +
      "</a></li>";
  }
}
setListFromArray(clubs,"clubs");
setListFromArray(managers,"managers");
