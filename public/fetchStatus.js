var firebaseConfig = {
    apiKey: "AIzaSyAhpmoWHY24_GXbEEshnOwChfoABzu2DtE",
    authDomain: "smartodishahackathon-ac6b3.firebaseapp.com",
    databaseURL: "https://smartodishahackathon-ac6b3-default-rtdb.firebaseio.com",
    projectId: "smartodishahackathon-ac6b3",
    storageBucket: "smartodishahackathon-ac6b3.appspot.com",
    messagingSenderId: "74474433499",
    appId: "1:74474433499:web:90be9ceca5b5dba00c55fe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var clientNo = 0;
  
  function fetchStatus(){
      firebase.database().ref('users').once('value', function(snapshot){
          snapshot.forEach(
              function(ChildSnapshot){
                let name = ChildSnapshot.val().full_name;
                  let status = ChildSnapshot.val().status;
                  if (status == 0 && (document.querySelector('.name').textContent == name)){
                    document.querySelector('.progress-bar').style.width = '10%';
                  }
              }
          );
      });
  }
  
  window.onload(fetchStatus());