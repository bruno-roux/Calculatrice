//=====================================
//Création d'une div dans body
//=====================================
//recherche le lieu du premier élément body
let LieuBodyElem=document.querySelector('body');
// crée un élément div
let fondElem=document.createElement('div');
// place l'élément div en dernier enfant dans body
LieuBodyElem.appendChild(fondElem);
// je lui attribue une class
fondElem.classList.add('fond-page-contener');

//=====================================
// Ajout de style a la div
//=====================================
fondElem.style.backgroundColor='#FA8072';
fondElem.style.width='80%';
fondElem.style.margin='auto';
fondElem.style.paddingTop="5rem";
fondElem.style.height="100vh";



//===============================================================
// Création d'une div dans la div de class first-contener
//===============================================================
// je cherche mon lieu
// je récupère un tableau de tous mes élément de class 'first-contener'
let LieuMaDiv=document.getElementsByClassName('fond-page-contener');
// je crée une div
let ContenerCalculatrice=document.createElement('form');
// que je rattache au lieu
LieuMaDiv[0].appendChild(ContenerCalculatrice);
// je lui attribue une class
ContenerCalculatrice.classList.add('Calculatrice');


//=====================================
// Ajout de style a la div
//=====================================
ContenerCalculatrice.style.backgroundColor='#ADFF2F';
ContenerCalculatrice.style.width='20%';
ContenerCalculatrice.style.margin='auto auto';
ContenerCalculatrice.style.padding='2rem ';
ContenerCalculatrice.style.borderRadius='15px ';


//===============================================================
// Création d'un Affichheur
//===============================================================
// trouver le lieu
let LieuSecContener=document.getElementsByClassName('Calculatrice');
let AfficheurElem=document.createElement('INPUT');
LieuSecContener[0].appendChild(AfficheurElem);
AfficheurElem.classList.add('Afficheur')

AfficheurElem.style.backgroundColor="yellow";
AfficheurElem.innerText="ceci est mon texte";
AfficheurElem.style.color="black";

AfficheurElem.style.border = "2px solid black";
AfficheurElem.style.paddingTop=".5rem";

AfficheurElem.style.width ='100%';
AfficheurElem.style.marginBottom='2rem';

AfficheurElem.value='';
AfficheurElem.style.fontSize='2rem';
AfficheurElem.style.textAlign='right';
AfficheurElem.style.borderRadius='10px';

//Afficheur.innerText='bruno';

//===============================================================
//===============================================================
//===============================================================
// Création des boutons
//===============================================================
// fixe le lieu
let ElemInTab;
let ClassInTab;
let SymbolInTab;
let DonneTouch =[ElemInTab,'8']
let buttonElem=[['','ClassButton','7'],['','ClassButton','8'],['','ClassButton','9'],['','ClassButton','/'],
                ['','ClassButton','4'],['','ClassButton','5'],['','ClassButton','6'],['','ClassButton','*'],
                ['','ClassButton','1'],['','ClassButton','2'],['','ClassButton','3'],['','ClassButton','+'],
                ['','ClassButton','0'],['','ClassButton','.'],['','ClassButton','='],['','ClassButton','-']
               ]





    let ApresAfficheur=document.getElementsByClassName("Calculatrice");
    let i=0;
    for(i=0;i<16;i++){
        buttonElem[i][0]=document.createElement('BUTTON');
        buttonElem[i][0].innerText=buttonElem[i][2];
        buttonElem[i][0].classList.add(buttonElem[i][1]);
        buttonElem[i][0].style.margin='0.2rem';
        buttonElem[i][0].style.marginBottom='1rem';
        buttonElem[i][0].style.width='20%';
        buttonElem[i][0].style.fontSize='1.5rem';
        buttonElem[i][0].style.borderRadius='5px';
        ApresAfficheur[0].appendChild(buttonElem[i][0]);
    }



    let TabButton=new Array(16);
    let TabOperation=new Array;
    let beep = new Audio('bip.mp3');
    let BeepError = new Audio('BeepError.wav');
    let ValeurAffiche=""
    TabButton=document.getElementsByClassName('ClassButton');

    let ToucheAppuye="";
    let operande1="";
    let operande2="";
    let operateur="";



 for(i=0;i<16;i++){
    TabButton[i].addEventListener('click',handleClick);
    
 }

    function handleClick(event){
        event.preventDefault();
        ToucheAppuye=event.target.textContent;
        switch(ToucheAppuye){
            case '+': 
            case '-': 
            case '*': 
            case '/': 
                if(parseFloat(ValeurAffiche)==ValeurAffiche) 
                {
                    TabOperation.push(ValeurAffiche);
                    ValeurAffiche='';
                    AfficheurElem.value="";
                }
                if( (TabOperation[TabOperation.length-1]==='+') ||
                    (TabOperation[TabOperation.length-1]==='-') ||
                    (TabOperation[TabOperation.length-1]==='*') ||
                    (TabOperation[TabOperation.length-1]==='/') ||
                    (TabOperation[TabOperation.length-1]==='') ){
                    BeepError.play();
                }else{
                    TabOperation.push(ToucheAppuye);
                    beep.play();
                }
            break;
            case '=': 
                if(parseFloat(ValeurAffiche)==ValeurAffiche){
                    TabOperation.push(ValeurAffiche);
                    ValeurAffiche='';
                    AfficheurElem.value="";
                }
                if( (TabOperation[TabOperation.length-1]==='+') ||
                    (TabOperation[TabOperation.length-1]==='-') ||
                    (TabOperation[TabOperation.length-1]==='*') ||
                    (TabOperation[TabOperation.length-1]==='/')) {
                    BeepError.play();
                    }else{
                        TabOperation.push(ToucheAppuye);
                        beep.play();
                        AfficheurElem.value=Calcul(TabOperation);
                        TabOperation = [];
                        TabOperation.length=0;
                        ValeurAffiche="";
                    }
            break;
            default:
                beep.play();
                ValeurAffiche=ValeurAffiche+ToucheAppuye;
                AfficheurElem.value=ValeurAffiche;
        }
    }


function Calcul(OperationArray){
    let Total=parseFloat(OperationArray[0]);
    //console.log("Total(intermediaire) =" + Total);
    let NbTour=Math.floor((OperationArray.length-1)/2);
    //console.log("NbTour=" + NbTour);
    console.log('--->' + TabOperation);
    for(let j=1;j<=NbTour*2; j+=2){
    //    console.log('parseFloat(OperationArray[j+1 -> ' + parseFloat(OperationArray[j+1]));
    //    console.log('j -> ' + j);
         switch(OperationArray[j]){
            case "+" :  
                Total=Total+parseFloat(OperationArray[j+1]);   
            break;
            case "-" :  Total=Total-parseFloat(OperationArray[j+1]);   break;
            case "*" :  Total=Total*parseFloat(OperationArray[j+1]);   break;
            case "/" :  Total=Total/parseFloat(OperationArray[j+1]);   break;
         }
    //     console.log("Sous total ->" +  Total);
    }    
    
    return Total;
}
