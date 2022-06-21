// () => {
//     btn-rond-navig.querySelector("active"), navigation.querySelector("menu-visible")
//   }

function contactEnvoyer(){
    document.getElementById("reponseEnvoyer").innerHTML="Demande envoyer."
    let nomUser= document.getElementById("userLastName").value

    alert("Bonjour,Monsieur/Madame "+nomUser+ "\nVotre demande a été envoyer avec succés.")
}

// function horloge(){
//     let heurs = document.getElementById("heurs");
//         let minutes = document.getElementById("minutes");
//         let seconds = document.getElementById("seconds");
//         let amPm = document.getElementById("amPm");

//         let h = new Date().getHours();
//         let m = new Date().getMinutes();
//         let s = new Date().getSeconds();
//         let am = h >= 12 ? "PM" : "AM";
//         // conversion 24=>12
//         if(h>12){
//             h=h-12;
//         }
//         // ajouter le 0 au numb
//         h=(h<10) ? "0" + h : h ;
//         h=(m<10) ? "0" + m : m ;
//         h=(s<10) ? "0" + s : s ;
        
        
//         heurs.innerHTML=h;
//         minutes.innerHTML=m;
//         seconds.innerHTML=s;
//         amPm.innerHTML=am
// }
const tl = gsap.timeline();

tl.from(".letter",{duration:1,opacity:0,stagger:0.25,});

tl.to(".letter",{duration:0.5,y:"20%",opacity:0,stagger: {each:0.15,from:"end"}});

tl.to(".icons-the-arrow",{opacity:1,})

tl.to(".icons-the-arrow",{duration:.6,y:5,ease:"circ.in",repeat:-1,yoyo:true})
