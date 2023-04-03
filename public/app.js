import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD8gOvUkJgPNJEjGESV8oYyg6ExBBoMzp0",
    authDomain: "portfolio-3f874.firebaseapp.com",
    databaseURL: "https://portfolio-3f874-default-rtdb.firebaseio.com",
    projectId: "portfolio-3f874",
    storageBucket: "portfolio-3f874.appspot.com",
    messagingSenderId: "1065321251435",
    appId: "1:1065321251435:web:cb7f74c6fc8afa02fa272e",
    measurementId: "G-3H8C3K9N1B"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const analytics = getAnalytics(app);

          $("#b").click(function ()
                { 
                var name=$("#n").val();
                var email=$("#e").val();
                var text=$("#t").val();
                var id=email.value || Date.now();
                var root=firebase.database().ref().child("/clients");
                var client=root.child(id);
                if(name!="" && email!="" && text!="" )
                {
                  
                    userData=
                    {
                    "Name": name,
                    "Email": email,
                    "Text": text,
                    "créerà": firebase.database.ServerValue.TIMESTAMP
                    };
                    client.set(userData,function(error) 
                {
                    if(error){ 
                    var errorCode=error.code;
                    var errorMessage=error.message;
                    console.log("errorCode");
                    console.log("errorMessage");
                    window.alert("Message:"+errorMessage);
                            }
                    else{
                        window.alert("message sent");
                        }

                });
                }
                else{
                window.alert("veuillez complétez les champs à fin d'enregistrer les informations.");
                }
                });
              
                    
