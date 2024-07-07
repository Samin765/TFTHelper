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
    <h1>TFT Helper</h1>
    <MyButton onClick={handleClick} count = {count}/ >
    <MyButton onClick={handleClick} count = {count}/>

    <AboutPage className ='Test2'></AboutPage>
    <ShowItems2></ShowItems2>
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

function ShowItems(){
  const itemList = tftItems.map(item =>
  (<li
    key = {item.id}
    ><img src = {item.imageUrl}></img>
    <p>{item.title}</p>
    </li>
  ));
  return (
    <ul>{itemList}</ul>
  );
}

function ShowItems2() {

  return (
    <div className="grid-container">
      {tftItems.map(item => (
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


const tftItems = [
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
  {title: 'Bloodthirster' , id: 1, imageUrl: 'https://rerollcdn.com/items/BFSword.png'},
  {title: 'Blue Buff' , id: 2, imageUrl: 'https://rerollcdn.com/items/ChainVest.png'},
  {title: 'Bramble Vest' , id: 3, imageUrl: 'https://rerollcdn.com/items/GiantsBelt.png'},
  {title: 'Crownguard' , id: 4, imageUrl: 'https://rerollcdn.com/items/NeedlesslyLargeRod.png'},
  {title: 'Deathblade' , id: 5, imageUrl: 'https://rerollcdn.com/items/NegatronCloak.png'},
  {title: 'Dragon\'s Claw' , id: 6, imageUrl: 'https://rerollcdn.com/items/RecurveBow.png'},
  {title: 'Edge of Night' , id: 7, imageUrl: 'https://rerollcdn.com/items/SparringGloves.png'},
  {title: 'Evenshroud' , id: 8, imageUrl: 'https://rerollcdn.com/items/Spatula.png'},
  {title: 'Gargoyle Stoneplate' , id: 9, imageUrl: 'https://rerollcdn.com/items/TearoftheGoddess.png'},
  {title: 'Giant Slayer' , id: 10, imageUrl: 'https://rerollcdn.com/items/BFSword.png'},
  {title: 'Guardbreaker' , id: 11, imageUrl: 'https://rerollcdn.com/items/ChainVest.png'},
  {title: 'Guinsoo\'s Rageblade' , id: 12, imageUrl: 'https://rerollcdn.com/items/GiantsBelt.png'},
  {title: 'Hand of Justice' , id: 13, imageUrl: 'https://rerollcdn.com/items/NeedlesslyLargeRod.png'},
  {title: 'Hextech Gunblade' , id: 14, imageUrl: 'https://rerollcdn.com/items/NegatronCloak.png'},
  {title: 'Infinity Edge' , id: 15, imageUrl: 'https://rerollcdn.com/items/RecurveBow.png'},
  {title: 'Ionic Spark' , id: 16, imageUrl: 'https://rerollcdn.com/items/SparringGloves.png'},
  {title: 'Jeweled Gauntlet' , id: 17, imageUrl: 'https://rerollcdn.com/items/Spatula.png'},
  {title: 'Last Whisper' , id: 18, imageUrl: 'https://rerollcdn.com/items/TearoftheGoddess.png'},
  {title: 'Morellonomicon' , id: 19, imageUrl: 'https://rerollcdn.com/items/BFSword.png'},
  {title: 'Nashoor\'s Tooth' , id: 20, imageUrl: 'https://rerollcdn.com/items/ChainVest.png'},
  {title: 'Protector\'s Vow' , id: 21, imageUrl: 'https://rerollcdn.com/items/GiantsBelt.png'},
  {title: 'Quicksilver' , id: 22, imageUrl: 'https://rerollcdn.com/items/NeedlesslyLargeRod.png'},
  {title: 'Rabadon\'s Deathcap' , id: 23, imageUrl: 'https://rerollcdn.com/items/NegatronCloak.png'},
  {title: 'Red Buff' , id: 24, imageUrl: 'https://rerollcdn.com/items/RecurveBow.png'},
  {title: 'Redemption' , id: 25, imageUrl: 'https://rerollcdn.com/items/SparringGloves.png'},
  {title: 'Runaan\'s Hurricane' , id: 26, imageUrl: 'https://rerollcdn.com/items/Spatula.png'},
  {title: 'Spear of Shojin' , id: 27, imageUrl: 'https://rerollcdn.com/items/TearoftheGoddess.png'},
  {title: 'Statikk Shiv' , id: 28, imageUrl: 'https://rerollcdn.com/items/BFSword.png'},
  {title: 'Steadfast Heart' , id: 29, imageUrl: 'https://rerollcdn.com/items/ChainVest.png'},
  {title: 'Sterak\'s Gage' , id: 30, imageUrl: 'https://rerollcdn.com/items/GiantsBelt.png'},
  {title: 'Sunfire Cape' , id: 31, imageUrl: 'https://rerollcdn.com/items/NeedlesslyLargeRod.png'},
  {title: 'Tactican\'s Crown' , id: 32, imageUrl: 'https://rerollcdn.com/items/NegatronCloak.png'},
  {title: 'Thief\'s Gloves' , id: 33, imageUrl: 'https://rerollcdn.com/items/RecurveBow.png'},
  {title: 'Titan\'s Resolve' , id: 34, imageUrl: 'https://rerollcdn.com/items/SparringGloves.png'},
  {title: 'Warmog\'s Armor' , id: 35, imageUrl: 'https://rerollcdn.com/items/Spatula.png'},
];


export default App;
