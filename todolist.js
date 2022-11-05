
 let increI = 0;

 tableTag = document.getElementById('table');

tableTag.addEventListener('dblclick',deleted);
aa = document.getElementById('AA');

    function deleted(event){
        
        var selectelt = event.target;
            const  recupere = selectelt.parentElement;
            console.log(recupere);
          let text ='Voulez-vous vraiment supprimer?';

          if (recupere != aa) {
            if (confirm(text) == true) {
                recupere.remove();
              } else {
               
              }   
        }
     
}
    const btnAdd = document.getElementById('submit');

    btnAdd.addEventListener('click',function(event) {
        event.preventDefault();
            /********************* start crate board**********/
        
                function addUser(){
                event.preventDefault();
                 tableTag = document.getElementById('table');
           let      trTag1 = document.createElement('tr');
                
                trTag1.id = increI;
         
            const nom = document.getElementById('name');
            let nomvalue = nom.value;
            
            const prenom = document.getElementById('email');
            let prenomvalue =  prenom.value;
        
            const adresse = document.getElementById('number');
            let adressevalue = adresse.value;

            const date = document.getElementById('date');
            let datevalue = date.value;
            
            const departement = document.getElementById('dropdown');
            let departementvalue = departement.value;
            let sexevalue;
            if (document.getElementById('choix1').checked) {
                sexevalue = 'M';
            }else  if (document.getElementById('choix2').checked) {
                sexevalue = 'F';
            }
            let iconok;

            if(document.getElementById('camera').checked){
                iconok = document.createElement('i');
                iconok.classList.add('material-icons');
                iconok.classList.add('iconok');
                iconok.innerHTML = 'done';
                
            } else {
                iconok = document.createElement('i');
                iconok.classList.add('material-icons');
                iconok.classList.add('iconno');
                iconok.innerHTML = 'clear';
            }
            let iconok2;
            if(document.getElementById('video').checked){
                iconok2 = document.createElement('i');
                iconok2.classList.add('material-icons');
                iconok2.classList.add('iconok');
                iconok2.innerHTML = 'done';
                
            } else{
                iconok2 = document.createElement('i');
                iconok2.classList.add('material-icons');
                iconok2.classList.add('iconno');
                iconok2.innerHTML = 'clear';  
            }
          
            const video = document.getElementById('video');
            let videovalue = video.value;
            
            const prix = document.getElementById('name2');
            let prixvalue = prix.value;
            
            const couleur = document.getElementById('email2');
            let couleurvalue = couleur.value;

        /************* insertion dans le tableau *************** */
        
            const tdTag = document.createElement('td');
        
            const tdTag1 = document.createElement('td');
            tdTag1.innerHTML = nomvalue;

            const tdTag2 = document.createElement('td');
            tdTag2.innerHTML = prenomvalue;

            const tdTag3 = document.createElement('td');
            tdTag3.innerHTML = adressevalue;

            const tdTag4 = document.createElement('td');
            tdTag4.innerHTML = departementvalue;

            const tdTag5 = document.createElement('td');
            tdTag5.innerHTML = datevalue;

            const tdTag6 = document.createElement('td');
            tdTag6.innerHTML = sexevalue;

            const tdTag7 = document.createElement('td');
            tdTag7.appendChild(iconok);

            const tdTag8 = document.createElement('td');
            tdTag8.appendChild(iconok2);

            const tdTag9 = document.createElement('td');
            tdTag9.innerHTML = prixvalue  +'$';

            const tdTag10 = document.createElement('td');
            tdTag10.innerHTML = couleurvalue;

            /*********Insertion des tD dans tr********/
        if (nomvalue != '' 
           &&
           prenomvalue != '' &&
             adressevalue != '' &&
              departementvalue != '' &&
            datevalue != '' &&
              sexevalue != '' &&
              prixvalue != '' &&
           couleurvalue != ''

        ){

                increI++;
            console.log(increI);
            
            increI = Math.floor(Math.random() * 10.005 * increI);
            
            tdTag.innerHTML = 'AK'+increI; 

            trTag1.classList.add('maclasse');

           // trTag1.appendChild(tdTag);
            trTag1.appendChild(tdTag);
            trTag1.appendChild(tdTag1);
            trTag1.appendChild(tdTag2);
            trTag1.appendChild(tdTag3);
            trTag1.appendChild(tdTag4);

            trTag1.appendChild(tdTag5);

            trTag1.appendChild(tdTag6);
            trTag1.appendChild(tdTag7);
            trTag1.appendChild(tdTag8);
            trTag1.appendChild(tdTag9);
            trTag1.appendChild(tdTag10);
            
            tableTag.appendChild(trTag1);
   
             
            nom.value = '';
            prenom.value = '';
            adresse.value = '';
            date.value = '';
            departement.value = '';
            document.getElementById('choix1').value = '';
            document.getElementById('choix2').value = '';
            document.getElementById('camera').value = '';
            document.getElementById('video').value = '';
            prix.value = '';
            couleur.value = '';

            return tableTag ;
            }
            else{
    alert('Veillez remplir tous les champs !');
            }
            tableTag.appendChild(trTag1);
        }  
    
let resul = addUser();
   
});
