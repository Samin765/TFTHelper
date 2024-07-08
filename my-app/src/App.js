import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { click } from '@testing-library/user-event/dist/click';

function App() {
  const [count, setCount] = useState(0);
  function handleClick(){
   // alert('You clicked me!' );
    setCount(count + 1);
  }
  let content;
  let isLoggedIn = true;
  if (isLoggedIn) {
    content = <Admin />;
  } else {
    content = <User />;
  }

  return (
   <div className='Test'>
    <h1>TFT Helper (TM)</h1>
    <MyButton onClick={handleClick} count = {count}/ >

    <ShowComponents></ShowComponents>
    <AboutPage className ='Test2'></AboutPage>

   </div>
  
  );
}

function MyButton({onClick, count}){
 
  return (
    <button className='ButtonFire' onClick={onClick}> Issa button you clicked {count} times</button>
  );
}

function AboutPage() {
  return (
    <div className='Test2'>
      <h1>About</h1>
      <p>Hello {userTest.name + ' ' + userTest.lastName} this issa about page</p>
      <img className='avatar' src={userTest.imageUrl}></img>
    </div>
  );
}

function ShowComponents() {

return (
  <div className="grid-container">
    {tftComponents.map(item => (
      <div key={item.id} className="grid-item">
        <img src={item.imageUrl} alt={item.title} />
      </div>
    ))}
  </div>
);
}

function ShowItems() {

  return (
    <div className="grid-container">
      {champions.map(item => (
        <div key={item.id} className="grid-item">
          <img src={item.imageUrl} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

const userTest = {
  name: 'User',
  lastName: 'Chowdhury',
  imageUrl: 'https://i.imgur.com/H3vo6s7.png',

};

const AdminTest = {
  name: 'Admin',
  lastName: 'Chowdhury',
  imageUrl: 'https://i.imgur.com/qYr3vp8.png',

};

function Admin(){
  return (
    <div>
      <img src = {AdminTest.imageUrl}></img>
    </div>
  );
}


function User(){
  return (
    <div>
      <img src = {userTest.imageUrl}></img>
    </div>
  );
}


const tftComponents = [
  {title: 'B.F Sword' , id: 1, imageUrl: 'https://rerollcdn.com/items/BFSword.png'},
  {title: 'Chain Vest' , id: 2, imageUrl: 'https://rerollcdn.com/items/ChainVest.png'},
  {title: 'Giants Belt' , id: 3, imageUrl: 'https://rerollcdn.com/items/GiantsBelt.png'},
  {title: 'Needlessly Large Rod' , id: 4, imageUrl: 'https://rerollcdn.com/items/NeedlesslyLargeRod.png'},
  {title: 'Negatron Cloak' , id: 5, imageUrl: 'https://rerollcdn.com/items/NegatronCloak.png'},
  {title: 'Recurve Bow' , id: 6, imageUrl: 'https://rerollcdn.com/items/RecurveBow.png'},
  {title: 'Sparring Gloves' , id: 7, imageUrl: 'https://rerollcdn.com/items/SparringGloves.png'},
  {title: 'Spatula' , id: 8, imageUrl: 'https://rerollcdn.com/items/Spatula.png'},
  {title: 'Tear of the Goddess' , id: 9, imageUrl: 'https://rerollcdn.com/items/TearoftheGoddess.png'},
];


const tftCompletedItems = [
  {title: 'Archangel\'s Staff' , id: 1, imageUrl: 'https://rerollcdn.com/items/ArchangelsStaff.png', components: [4, 9]},
  {title: 'Bloodthirster' , id: 1, imageUrl: 'https://rerollcdn.com/items/Bloodthirster.png', components: [1, 5]},
  {title: 'Blue Buff' , id: 2, imageUrl: 'https://rerollcdn.com/items/BlueBuff.png', components: [9, 9]},
  {title: 'Bramble Vest' , id: 3, imageUrl: 'https://rerollcdn.com/items/BrambleVest.png', components: [2, 2]},
  {title: 'Crownguard' , id: 4, imageUrl: 'https://rerollcdn.com/items/Crownguard.png', components: [2, 4]},
  {title: 'Deathblade' , id: 5, imageUrl: 'https://rerollcdn.com/items/Deathblade.png', components: [1, 1]},
  {title: 'Dragon\'s Claw' , id: 6, imageUrl: 'https://rerollcdn.com/items/DragonsClaw.png', components: [5, 5]},
  {title: 'Edge of Night' , id: 7, imageUrl: 'https://rerollcdn.com/items/EdgeofNight.png', components: [1, 2]},
  {title: 'Evenshroud' , id: 8, imageUrl: 'https://rerollcdn.com/items/Evenshroud.png', components: [3, 5]},
  {title: 'Gargoyle Stoneplate' , id: 9, imageUrl: 'https://rerollcdn.com/items/GargoyleStoneplate.png'},
  {title: 'Giant Slayer' , id: 10, imageUrl: 'https://rerollcdn.com/items/GiantSlayer.png', components: [2, 5]},
  {title: 'Guardbreaker' , id: 11, imageUrl: 'https://rerollcdn.com/items/Guardbreaker.png',  components: [3, 7]},
  {title: 'Guinsoo\'s Rageblade' , id: 12, imageUrl: 'https://rerollcdn.com/items/GuinsoosRageblade.png', components: [6, 4]},
  {title: 'Hand of Justice' , id: 13, imageUrl: 'https://rerollcdn.com/items/HandofJustice.png', components: [9, 7]},
  {title: 'Hextech Gunblade' , id: 14, imageUrl: 'https://rerollcdn.com/items/HextechGunblade.png', components: [1, 4]},
  {title: 'Infinity Edge' , id: 15, imageUrl: 'https://rerollcdn.com/items/InfinityEdge.png', components: [1, 7]},
  {title: 'Ionic Spark' , id: 16, imageUrl: 'https://rerollcdn.com/items/IonicSpark.png', components: [4, 5]},
  {title: 'Jeweled Gauntlet' , id: 17, imageUrl: 'https://rerollcdn.com/items/JeweledGauntlet.png', components: [4, 7]},
  {title: 'Last Whisper' , id: 18, imageUrl: 'https://rerollcdn.com/items/LastWhisper.png', components: [6, 7]},
  {title: 'Morellonomicon' , id: 19, imageUrl: 'https://rerollcdn.com/items/Morellonomicon.png', components: [4, 3]},
  {title: 'Nashoor\'s Tooth' , id: 20, imageUrl: 'https://rerollcdn.com/items/NashorsTooth.png', components: [3, 6]},
  {title: 'Protector\'s Vow' , id: 21, imageUrl: 'https://rerollcdn.com/items/ProtectorsVow.png', components: [2, 9]},
  {title: 'Quicksilver' , id: 22, imageUrl: 'https://rerollcdn.com/items/Quicksilver.png', components: [5, 7]},
  {title: 'Rabadon\'s Deathcap' , id: 23, imageUrl: 'https://rerollcdn.com/items/RabadonsDeathcap.png', components: [4, 4]},
  {title: 'Red Buff' , id: 24, imageUrl: 'https://rerollcdn.com/items/RedBuff.png', components: [6, 6]},
  {title: 'Redemption' , id: 25, imageUrl: 'https://rerollcdn.com/items/Redemption.png', components: [3, 9]},
  {title: 'Runaan\'s Hurricane' , id: 26, imageUrl: 'https://rerollcdn.com/items/RunaansHurricane.png', components: [5, 6]},
  {title: 'Spear of Shojin' , id: 27, imageUrl: 'https://rerollcdn.com/items/SpearofShojin.png', components: [1, 9]},
  {title: 'Statikk Shiv' , id: 28, imageUrl: 'https://rerollcdn.com/items/StatikkShiv.png', components: [6, 9]},
  {title: 'Steadfast Heart' , id: 29, imageUrl: 'https://rerollcdn.com/items/SteadfastHeart.png', components: [2, 7]},
  {title: 'Sterak\'s Gage' , id: 30, imageUrl: 'https://rerollcdn.com/items/SteraksGage.png', components: [1, 3]},
  {title: 'Sunfire Cape' , id: 31, imageUrl: 'https://rerollcdn.com/items/SunfireCape.png', components: [2, 3]},
  {title: 'Tactician\'s Crown' , id: 32, imageUrl: 'https://rerollcdn.com/items/TacticiansCrown.png', components: [8, 8]},
  {title: 'Thief\'s Gloves' , id: 33, imageUrl: 'https://rerollcdn.com/items/ThiefsGloves.png', components: [7, 7]},
  {title: 'Titan\'s Resolve' , id: 34, imageUrl: 'https://rerollcdn.com/items/TitansResolve.png', components: [2, 6]},
  {title: 'Warmog\'s Armor' , id: 35, imageUrl: 'https://rerollcdn.com/items/WarmogsArmor.png', components: [3, 3]},
];

const champions = [
  {title: 'Aatrox' , id: 1, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Aatrox.png'},
  {title: 'Ahri' , id: 2, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Ahri.png'},
  {title: 'Akali' , id: 3, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/akali.png'},
  {title: 'Akshan' , id: 4, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/akshan.png'},
  {title: 'Alistar' , id: 5, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/alistar.png'},
  {title: 'Amumu' , id: 6, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/amumu.png'},
  {title: 'Anivia' , id: 7, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/anivia.png'},
  {title: 'Annie' , id: 8, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Annie.png'},
  {title: 'Aphelios' , id: 9, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Aphelios.png'},
  {title: 'Ashe' , id: 10, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Ashe.png'},
  {title: 'Aurelion Sol' , id: 11, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/aurelionsol.png'},
  {title: 'Azir' , id: 12, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Azir.png'},
  {title: 'Bard' , id: 13, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Bard.png'},
  {title: 'Bel\'veth' , id: 14, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/belveth.png'},
  {title: 'Blitzcrank' , id: 15, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/blitzcrank.png'},
  {title: 'Brand' , id: 16, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/brand.png'},
  {title: 'Braum' , id: 17, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/braum.png'},
  {title: 'Briar' , id: 18, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/briar.png'},
  {title: 'Caitlyn' , id: 19, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Caitlyn.png'},
  {title: 'Camille' , id: 20, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/camille.png'},
  {title: 'Cassiopeia' , id: 21, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/cassiopeia.png'},
  {title: 'Cho\'gath' , id: 22, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Chogath.png'},
  {title: 'Corki' , id: 23, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/corki.png'},
  {title: 'Darius' , id: 24, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Darius.png'},
  {title: 'Diana' , id: 25, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Diana.png'},
  {title: 'Dr. Mundo' , id: 26, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/drmundo.png'},
  {title: 'Draven' , id: 27, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/draven.png'},
  {title: 'Ekko' , id: 28, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/ekko.png'},
  {title: 'Elise' , id: 29, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/elise.png'},
  {title: 'Evelynn' , id: 30, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/evelynn.png'},
  {title: 'Ezreal' , id: 31, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/ezreal.png'},
  {title: 'Fiddlesticks' , id: 32, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/fiddlesticks.png'},
  {title: 'Fiora' , id: 33, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/fiora.png'},
  {title: 'Fizz' , id: 34, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/fizz.png'},
  {title: 'Galio' , id: 35, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Galio.png'},
  {title: 'Gangplank' , id: 36, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/gangplank.png'},
  {title: 'Garen' , id: 37, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Garen.png'},
  {title: 'Gnar' , id: 38, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Gnar.png'},
  {title: 'Gragas' , id: 39, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/gragas.png'},
  {title: 'Graves' , id: 40, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/graves.png'},
  {title: 'Gwen' , id: 41, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/gwen.png'},
  {title: 'Hecarim' , id: 42, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/hecarim.png'},
  {title: 'Heimerdinger' , id: 43, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/heimerdinger.png'},
  {title: 'Hwei' , id: 44, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Hwei.png'},
  {title: 'Illaoi' , id: 45, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Illaoi.png'},
  {title: 'Irelia' , id: 46, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Irelia.png'},
  {title: 'Ivern' , id: 47, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/ivern.png'},
  {title: 'Janna' , id: 48, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Janna.png'},
  {title: 'Jarvan IV' , id: 49, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/jarvaniv.png'},
  {title: 'Jax' , id: 50, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Jax.png'},
  {title: 'Jayce' , id: 51, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/jayce.png'},
  {title: 'Jhin' , id: 52, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/jhin.png'},
  {title: 'Jinx' , id: 53, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/jinx.png'},
  {title: 'K\'sante' , id: 54, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/ksante.png'},
  {title: 'Kai\'sa' , id: 55, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Kaisa.png'},
  {title: 'Kalista' , id: 56, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/kalista.png'},
  {title: 'Karma' , id: 57, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/karma.png'},
  {title: 'Karthus' , id: 58, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/karthus.png'},
  {title: 'Kassadin' , id: 59, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/kassadin.png'},
  {title: 'Katarina' , id: 60, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/katarina.png'},
  {title: 'Kayle' , id: 61, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Kayle.png'},
  {title: 'Kennen' , id: 62, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/kennen.png'},
  {title: 'Kha\'zix' , id: 63, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Khazix.png'},
  {title: 'Kindred' , id: 64, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Kindred.png'},
  {title: 'Kled' , id: 65, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/kled.png'},
  {title: 'Kog\'Maw' , id: 66, imageUrl: 'https://rerollcdn.com/characters/Skin/11/KogMaw.png'},
  {title: 'Leblanc' , id: 67, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/leblanc.png'},
  {title: 'Lee Sin' , id: 68, imageUrl: 'https://rerollcdn.com/characters/Skin/11/LeeSin.png'},
  {title: 'Leona' , id: 69, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/leona.png'},
  {title: 'Lillia' , id: 70, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Lillia.png'},
  {title: 'Lissandra' , id: 71, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Lissandra.png'},
  {title: 'Lucian' , id: 72, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/lucian.png'},
  {title: 'Lulu' , id: 73, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/lulu.png'},
  {title: 'Lux' , id: 74, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Lux.png'},
  {title: 'Malphite' , id: 75, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Malphite.png'},
  {title: 'Malzahar' , id: 76, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/malzahar.png'},
  {title: 'Maokai' , id: 77, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/maokai.png'},
  {title: 'Master YI' , id: 78, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/masteryi.png'},
  {title: 'Milio' , id: 79, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/milio.png'},
  {title: 'Miss Fortune' , id: 80, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/missfortune.png'},
  {title: 'Mordekaiser' , id: 81, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/mordekaiser.png'},
  {title: 'Morgana' , id: 82, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Morgana.png'},
  {title: 'Naafiri' , id: 83, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/naafiri.png'},
  {title: 'Nami' , id: 84, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/nami.png'},
  {title: 'Nasus' , id: 85, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/nasus.png'},
  {title: 'Nautilus' , id: 86, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/nautilus.png'},
  {title: 'Neeko' , id: 87, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Neeko.png'},
  {title: 'Nidalee' , id: 88, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/nidalee.png'},
  {title: 'Nilah' , id: 89, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/nilah.png'},
  {title: 'Nocturne' , id: 90, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/nocturne.png'},
  {title: 'Nunu & Willump' , id: 91, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/nunu.png?V3'},
  {title: 'Olaf' , id: 92, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/olaf.png'},
  {title: 'Orianna' , id: 93, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/orianna.png'},
  {title: 'Ornn' , id: 94, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Ornn.png'},
  {title: 'Pantheon' , id: 95, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/pantheon.png'},
  {title: 'Poppy' , id: 96, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/poppy.png'},
  {title: 'Pyke' , id: 97, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/pyke.png'},
  {title: 'Qiyana' , id: 98, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Qiyana.png'},
  {title: 'Quinn' , id: 99, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/quinn.png'},
  {title: 'Rakan' , id: 100, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Rakan.png'},
  {title: 'Rammus' , id: 101, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/rammus.png'},
  {title: 'Rek\'sai' , id: 102, imageUrl: 'https://rerollcdn.com/characters/Skin/11/RekSai.png'},
  {title: 'Rell' , id: 103, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/rell.png'},
  {title: 'Renata Glasc' , id: 104, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/renataglasc.png'},
  {title: 'Renekton' , id: 105, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/renekton.png'},
  {title: 'Rengar' , id: 106, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/rengar.png'},
  {title: 'Riven' , id: 107, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Riven.png'},
  {title: 'Rumble' , id: 108, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/rumble.png'},
  {title: 'Ryze' , id: 109, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/ryze.png'},
  {title: 'Samira' , id: 110, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/samira.png'},
  {title: 'Sejuani' , id: 111, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/sejuani.png'},
  {title: 'Senna' , id: 112, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Senna.png'},
  {title: 'Seraphine' , id: 113, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/seraphine.png'},
  {title: 'Sett' , id: 114, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Sett.png'},
  {title: 'Shaco' , id: 115, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/shaco.png'},
  {title: 'Shen' , id: 116, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Shen.png'},
  {title: 'Shyvana' , id: 117, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/shyvana.png'},
  {title: 'Singed' , id: 118, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/singed.png'},
  {title: 'Sion' , id: 119, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/sion.png'},
  {title: 'Sivir' , id: 120, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Sivir.png'},
  {title: 'Skarner' , id: 121, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/skarner.png'},
  {title: 'Smolder' , id: 122, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/smolder.png'},
  {title: 'Sona' , id: 123, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/sona.png'},
  {title: 'Soraka' , id: 124, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Soraka.png'},
  {title: 'Swain' , id: 125, imageUrl: 'https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/swain.png'},
  {title: 'Sylas' , id: 126, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Sylas.png'},
  {title: 'Syndra' , id: 127, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Syndra.png'},
  {title: 'Tahm Kench' , id: 128, imageUrl: 'https://rerollcdn.com/characters/Skin/11/TahmKench.png'},
  {title: 'Taliyah' , id: 129, imageUrl: 'https://rerollcdn.com/items/RedBuff.png'},
  {title: 'Talon' , id: 130, imageUrl: 'https://rerollcdn.com/items/Redemption.png'},
  {title: 'Taric' , id: 131, imageUrl: 'https://rerollcdn.com/items/RunaansHurricane.png'},
  {title: 'Teemo' , id: 132, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Teemo.png'},
  {title: 'Thresh' , id: 133, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Thresh.png'},
  {title: 'Tristana' , id: 134, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Tristana.png'},
  {title: 'Trundle' , id: 135, imageUrl: 'https://rerollcdn.com/items/SteraksGage.png'},
  {title: 'Tryndamere' , id: 136, imageUrl: 'https://rerollcdn.com/items/SunfireCape.png'},
  {title: 'Twisted Fate' , id: 137, imageUrl: 'https://rerollcdn.com/items/TacticiansCrown.png'},
  {title: 'Twitch' , id: 138, imageUrl: 'https://rerollcdn.com/items/ThiefsGloves.png'},
  {title: 'Udyr' , id: 139, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Udyr.png'},
  {title: 'Urgot' , id: 140, imageUrl: 'https://rerollcdn.com/items/WarmogsArmor.png'},
  {title: 'Varuys' , id: 141, imageUrl: 'https://rerollcdn.com/items/SparringGloves.png'},
  {title: 'Vayne' , id: 142, imageUrl: 'https://rerollcdn.com/items/Spatula.png'},
  {title: 'Veigar' , id: 143, imageUrl: 'https://rerollcdn.com/items/TearoftheGoddess.png'},
  {title: 'Vel\'koz' , id: 144, imageUrl: 'https://rerollcdn.com/items/Morellonomicon.png'},
  {title: 'Vex' , id: 145, imageUrl: 'https://rerollcdn.com/items/NashorsTooth.png'},
  {title: 'Vi' , id: 146, imageUrl: 'https://rerollcdn.com/items/ProtectorsVow.png'},
  {title: 'Viego' , id: 147, imageUrl: 'https://rerollcdn.com/items/Quicksilver.png'},
  {title: 'Viktor' , id: 148, imageUrl: 'https://rerollcdn.com/items/RabadonsDeathcap.png'},
  {title: 'Vladimir' , id: 149, imageUrl: 'https://rerollcdn.com/items/RedBuff.png'},
  {title: 'Volibear' , id: 150, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Volibear.png'},
  {title: 'Warwick' , id: 151, imageUrl: 'https://rerollcdn.com/items/RunaansHurricane.png'},
  {title: 'Wukong' , id: 152, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Wukong.png'},
  {title: 'Xayah' , id: 153, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Xayah.png'},
  {title: 'Xerath' , id: 154, imageUrl: 'https://rerollcdn.com/items/SteadfastHeart.png'},
  {title: 'Xin Zhao' , id: 155, imageUrl: 'https://rerollcdn.com/items/SteraksGage.png'},
  {title: 'Yasuo' , id: 156, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Yasuo.png'},
  {title: 'Yone' , id: 157, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Yone.png'},
  {title: 'Yorick' , id: 158, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Yorick.png'},
  {title: 'Yuumi' , id: 159, imageUrl: 'https://rerollcdn.com/items/TitansResolve.png'},
  {title: 'Zac' , id: 160, imageUrl: 'https://rerollcdn.com/items/WarmogsArmor.png'},
  {title: 'Zed' , id: 161, imageUrl: 'https://rerollcdn.com/items/RunaansHurricane.png'},
  {title: 'Zeri' , id: 162, imageUrl: 'https://rerollcdn.com/items/SpearofShojin.png'},
  {title: 'Ziggs' , id: 163, imageUrl: 'https://rerollcdn.com/items/StatikkShiv.png'},
  {title: 'Zileans' , id: 164, imageUrl: 'https://rerollcdn.com/items/SteadfastHeart.png'},
  {title: 'Zoe' , id: 165, imageUrl: 'https://rerollcdn.com/items/SteraksGage.png'},
  {title: 'Zyra' , id: 166, imageUrl: 'https://rerollcdn.com/characters/Skin/11/Zyra.png'},
];



export default App;
