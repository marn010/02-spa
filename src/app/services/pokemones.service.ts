
import { Injectable } from '@angular/core';

@Injectable()
export class PokemonesService {

  private pokemones:Pokemon[] =[
    {
      nombre: "Bulbasaur",
      bio: "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.",
      img: "assets/img/Bulbasaur.png",
      region: "kanto"
    },
    {
      nombre: "Ivysaur",
      bio: "Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras.",
      img: "assets/img/Ivysaur.png",
      region: "kanto"
    },
    {
      nombre: "Venusaur",
      bio: "La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.",
      img: "assets/img/Venusaur.png",
      region: "kanto"
    },
    {
      nombre: "Charmander",
      bio: "Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola",
      img: "assets/img/Charmander.png ",
      region: "kanto"
    },
    {
      nombre: "Charmeleon",
      bio: "Este Pokémon de naturaleza agresiva ataca en cmbate con su cola llameante y hace trizas al rival con sus afiladas garras. ",
      img: "assets/img/Charmeleon.png ",
      region: "kanto"
    },
    {
      nombre: "Charizard",
      bio: "Escupe un fuego tan caliente que funde las rocas. Causa incendios forestarles sin querer.",
      img: "assets/img/Charizard.png ",
      region: "kanto"
    },
    {
      nombre: "Squirtle",
      bio: "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increible.",
      img: "assets/img/Squirtle.png ",
      region: " "
    },
    {
      nombre: "Wartortle",
      bio: "Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón.",
      img: "assets/img/Wartortle.png ",
      region: " "
    },
    {
      nombre: "Blastoise",
      bio: "Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón. ",
      img: "assets/img/Blastoise.png ",
      region: " "
    },
    {
      nombre: "Caterpie",
      bio: "Para protegerse,despide un hedor horrible por las antenas con el que repele a sus enemigos. ",
      img: "assets/img/Caterpie.png ",
      region: " "
    },
    {
      nombre: "Metapod",
      bio: "Como en este estado solo puede edurecer su coraza, permanece inmóvil a la espera de evolucionar. ",
      img: "assets/img/Metapod.png",
      region: ""
    },
    {
      nombre: "Butterfree",
      bio: "Aletea a gran velocidad para lazar al aire sus escamas extremadamente tóxicas. ",
      img: "assets/img/Butterfree.png",
      region: ""
    },
    {
      nombre: "Weedle",
      bio: "El aguijón de la cabeza es muy puntiagudo. Se alimenta de hojas oculto en la espesura de bosques y praderas. ",
      img: "assets/img/Weedle.png",
      region: ""
    },
    {
      nombre: "Kakuna",
      bio: "Aunque es casi incapaz de moverse, en caso de sentirse amenazado puede envenenar a los enemigos con su aguijón. ",
      img: "assets/img/Kakuna.png",
      region: ""
    },
    {
      nombre: "Beedrill",
      bio: "Tiene tres aguijones venenosos, dos en las patas anteriores y uno en la parte baja del bdomen, con los que ataca a sus enemigos una y otra vez. ",
      img: "assets/img/Beedrill.png",
      region: ""
    },
    {
      nombre: "Pidgey",
      bio: "Su docilidad es tal que suelen defenderse levantando arena en lugar de contraatacar. ",
      img: "assets/img/Pidgey.png",
      region: ""
    },
    {
      nombre: "Pidgeotto",
      bio: "Su extraordinaria vitalidad y resistencia le permiten cubrir grandes distancias del territorio que habita en busca de presas. ",
      img: "assets/img/Pidgeotto.png",
      region: ""
    },
    {
      nombre: "Pidgeot",
      bio: "Este Pokémon vuela a auna velocidad de 2 mach en busca de presas. Sus grandes garras son armas muy peligrosas. ",
      img: "assets/img/Pidgeot.png",
      region: ""
    },
    {
      nombre: "Rattata",
      bio: "Es propenso a hincar los incisivos en cualquier cosa que se le ponga por delante. Si se ve alguno, seguramente haya cuarenta cerca. ",
      img: "assets/img/Rattata.png",
      region: " "
    },
    {
      nombre: "Raticate",
      bio: "Gracias a las pequeñas membranas de las patas traseras, puede nadar por los ríos para capturar presas. ",
      img: "assets/img/Raticate.png ",
      region: " "
    },
    {
      nombre: "Spearow",
      bio: "A la hora de proteger su territorio, compensa su incapacidad para volar a gran altura con una increíble velocidad. ",
      img: "assets/img/Spearow.png",
      region: " "
    },
    {
      nombre: "Fearow",
      bio: "Este Pokémon ha existido desde tiempos remotos. Al meno atisbo de peligro, alza el vuelo y huye. ",
      img: "assets/img/Fearow.png",
      region: " "
    },
    {
      nombre: "Ekans",
      bio: "La longitud de este Pokémon aumenta con el tiempo. Por la noche, se enrosca en las ramas de los árboles para descansar. ",
      img: "assets/img/Ekans.png",
      region: " "
    },
    {
      nombre: "Arbok",
      bio: "Se han llegado a identificar hasta seis variaciones distintas de los espeluznantes dibujos de su piel.",
      img: "assets/img/Arbok.png",
      region: " "
    },
    {
      nombre: " Pikachu ",
      bio: " Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas.",
      img: "assets/img/Pikachu.png",
      region: " Kanto "
    },
    {
      nombre: " Raichu",
      bio: " Su larga cola le sirve como toma de tierra para protegerse a sí mismo del alto voltaje que genera su cuerpo",
      img: "assets/img/Raichu.png",
      region: "Kanto"
    },
    {
      nombre: " Sandshrew",
      bio: " Le gusta revolcarse por la arena seca para eliminar todo rastro de suciedad y humedad en la piel.",
      img: "assets/img/Sandshrew.png",
      region: " Kanto "
    },
    {
      nombre: " Sandslash",
      bio: " Cuanto más seco es el terreno en el que habita, más duras y lisas se vuelven las púas que le recubren la espalda",
      img: "assets/img/Sandslash.png",
      region: " Kanto"
    },
    {
      nombre: " Nidoran♀",
      bio: " A este dócil Pokémon no le gusta luchar, pero conviene tener cuidado con su pequeño cuerno, ya que segrega veneno.",
      img: "assets/img/Nidoran-female.png",
      region: " Kanto"
    },
    {
      nombre: " Nidorina",
      bio: " Mientras se cobija en su madriguera, retrae las púas, señal inequívoca de que se siente a salvo.",
      img: "assets/img/Nidorina.png",
      region: " Kanto"
    },
    {
      nombre: " Nidoqueen",
      bio: " Su robusto cuerpo está recubierto de escamas purísimas qu se renuevan constantemente.",
      img: "assets/img/Nidoqueen.png",
      region: " Kanto"
    },
    {
      nombre: " Nidoran♂",
      bio: " Mantiene sus grandes orejas levantadas, siempre alerta. Si advierte peligro, ataca con las púas venenosas.",
      img: "assets/img/Nidoran-male.png",
      region: " Kanto"
    },
    {
      nombre: " Nidorino",
      bio: " El cuerno de su frente contiene toxinas que se liberan al punzar al rival.",
      img: "assets/img/Nidorino.png",
      region: " Kanto"
    },
    {
      nombre: " Nidoking",
      bio: " Su piel dura como el acero refuerza el impacto al cargar contra sus enemigos. Su cuerno puede atravesar hasta diamantes.",
      img: "assets/img/Nidoking.png",
      region: " Kanto"
    },
    {
      nombre: " Clefairy",
      bio: " Se dice que la felicidad llegará a quien vea un grupo de Clefairy bailando a la luz de la luna llena.",
      img: "assets/img/Clefairy.png",
      region: " Kanto"
    },
    {
      nombre: " Clefable",
      bio: " Este Pokémon de aspecto feérico, raramente visto por los humanos, corre a esconderse en cuanto detecta que hay alguien cerca.",
      img: "assets/img/Clefable.png",
      region: " Kanto"
    },
    {
      nombre: " Vulpix",
      bio: " De pequeño, tiene seis colas de gran belleza. A medida que crece, le van saliendo más.",
      img: "assets/img/Vulpix.png",
      region: " Kanto"
    },
    {
      nombre: " Ninetales",
      bio: " Cuentan que llega a vivir hasta mil años y que cada una de las colas posee poderes sobrenaturales.",
      img: "assets/img/Ninetales.png",
      region: " Kanto"
    },
    {
      nombre: " Jigglypuff",
      bio: " Su capacidad pulmonar es excepcional, incluso para un Pokémon. Es capaz de cantar nanas sin cesar hasta que su rival se duerma.",
      img: "assets/img/Jigglypuff.png",
      region: " Kanto"
    },
    {
      nombre: " Wigglytuff",
      bio: " Cuanto más aire inhala, más aumenta de tamaño. Si se enfada, hincha el cuerpo con el fin de intimidar a su oponente.",
      img: "assets/img/Wigglytuff.png",
      region: " Kanto"
    },
    {
      nombre: " Zubat",
      bio: " Emite ultrasonidos que utiliza como sonar para evitar obstáculos cuando vuela",
      img: "assets/img/Zubat.png",
      region: " Kanto"
    },
    {
      nombre: " Golbat",
      bio: " Tras aproximarse sigilosamente a su objetivo, utiliza sus afilados colmillos para chuparle la sangre.",
      img: "assets/img/Golbat.png",
      region: " Kanto"
    },
    {
      nombre: " Oddish",
      bio: " Se mueve al exponerse a la luz de la luna. Merodea por la noche para esparcir sus semillas.",
      img: "assets/img/Oddish.png",
      region: " Kanto"
    },
    {
      nombre: " Gloom",
      bio: " Libera un fétido olor por los pistilos. El fuerte hedor hace perder el conocimiento a cualquiera que se encuentre en un radio de 2 km",
      img: "assets/img/Gloom.png",
      region: " Kanto"
    },
    {
      nombre: "  Vileplume",
      bio: " Tiene los pétalos más grandes del mundo. Al caminar, de ellos se desprenden densas nubes de polen tóxico",
      img: "assets/img/Vileplume.png",
      region: " Kanto"
    },
    {
      nombre: " Paras",
      bio: " Escarba en el suelo para extraer nutrientes de las raíces de los árboles, que las setas del lomo absorben después casi por completo",
      img: " assets/img/Paras.png",
      region: " Kanto"
    },
    {
      nombre: " Parasect",
      bio: " Tras largo tiempo absorbiendo la energía del huésped, la seta parásita del lomo es la que parece controlar la voluntad de este Pokémon",
      img: "assets/img/Parasect.png",
      region: " Kanto"
    },
    {
      nombre: " Venonat",
      bio: " Sus grandes ojos actúan como radares. A plena luz se percibe que son, en realidad, grupos de ojos diminutos.",
      img: "assets/img/Venonat.png",
      region: " Kanto"
    },
    {
      nombre: " Venomoth",
      bio: " Las alas desprenden un polvillo de escamas impregnado de toxinas que se adhiere al contacto y resulta difícil de quitar.",
      img: "assets/img/Venomoth.png",
      region: " Kanto"
    },
    
    

  ];


  constructor() {
    console.log("Servicio listo para usar!!!");
   }


   getPokemones():Pokemon[]{
     return this.pokemones;
   }
   getPokemon( idx:string ){
     return this.pokemones[idx];
   }
   buscarPokemones( termino:string ){

    let pokemonesArr:Pokemon[] = [];
    termino = termino.toLowerCase();

    for( let pokemon of this.pokemones ){
      let nombre = pokemon.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0 ){
        pokemonesArr.push( pokemon )
      }
    }

    return pokemonesArr;

   }
}

export interface Pokemon{
  nombre: string;
  bio: string;
  img: string;
  region: string;
}