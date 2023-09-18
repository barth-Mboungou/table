
const data=[
    {  
        etape:1,
        cs:"Préparer le poste de travail",
        description_de_letape:"",
        lien_fichier:"",
        unite_de_temps:"Minute",
        total_temps:14,
        temps_ma:"",
        temps_mo:2,
        children :[]

    },

    {
        etape:2,
        cs:"Préparer le poste de travail",
        description_de_letape:"",
        lien_fichier:"",
        unite_de_temps:"Minute",
        total_temps: 2,
        temps_ma:"",
        temps_mo: 16,
        children :[]
        // actions:[{type: 'delete', icon: '/image/trash.svg'}, {type: 'delete', icon: '/image/edit.svg'}]

    },

    {
        etape:3,
        cs:"Préparer le poste de travail",
        description_de_letape:"",
        lien_fichier:"",
        unite_de_temps:"Seconde",
        total_temps:2,
        temps_ma:"",
        temps_mo:2,
        children :[]

    },

    {
        etape:4,
        cs:"Préparer le poste de travail",
        description_de_letape:"",
        lien_fichier:"",
        unite_de_temps:"Minute",
        total_temps:20,
        temps_ma:"",
        temps_mo:2,
        children :[
            {
                etape:1,
                cs:"Préparer le poste de travail",
                description_de_letape:"",
                lien_fichier:"",
                unite_de_temps:"Minute",
                total_temps:14,
                temps_ma:"",
                temps_mo:2,
            }
        ]
        

    },

    {
        etape:5,
        cs:"Préparer le poste de travail",
        description_de_letape:"",
        lien_fichier:"",
        unite_de_temps:"Minute",
        total_temps:2,
        temps_ma:"",
        temps_mo:2,
        children :[]

    }
    
 ];
 const cols= [
    {
        name:"deplacer",
        id:"deplacer",
        label:'Deplacer'
    }
    ,{
        name:"etape",
        id:"etape",
        label:"etape",
    },
    {
        name:"cs",
        id:"cs",
        label:"cs",
    },
    {
        name:"description_de_letape",
        id:"description_de_letape",
        label:"Description de l'etape",
    },
    {
        name:"lien_fichier",
        id:"lien_fichier",
        label:"Lien fichier",
    },
    {
        name:"unite_de_temps",
        id:"unite_de_temps",
        label:"Unite de temps",
    },
    {
        name:"total_temps",
        id:"total_temps",
        label:"Total temps",
    },
    {
        name:"temps_machine",
        id:"temps_ma",
        label:"temps machine",
    },
    {
        name:"temps_mo",
        id:"temps_mo",
        label:"temps mo",
    },
    {
        name:"actions",
        id:"actions",
        label:"actions",
    }
]

// const times = {
//     "total temps": (e)=> {
//         let sum = 0;
//         if (unit === 'seconde') {
//             return acc + value
//         } else if (unit === 'heure') {
//             return acc + value * 3600 // Convert hours to seconds
//         } else { // Assume unit is 'Minute'
//             return acc + value * 60 // Convert minutes to seconds
//         }
//         return sum
//     }
//     "temps machine":() => {

//     },
//     "temp mo":() => {

//     }
// }
export {
    data,
    cols
}

  
  
  
  