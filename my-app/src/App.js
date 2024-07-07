import logo from './logo.svg';
import './App.css';

function App() {
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
    <MyButton/>
    <AboutPage className ='Test2'></AboutPage>
    <ShowItems></ShowItems>
    {content}
   </div>
  
  );
}

function MyButton(){
  return (
    <button className='ButtonFire'> Issa button</button>
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
    ><img src = {item.imageUrl}></img></li>
  ));
  return (
    <ul>{itemList}</ul>
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
  {title: 'B.F Sword' , id: 1, imageUrl: 'https://sm.ign.com/t/ign_nordic/screenshot/default/bfsword_ku5w.600.jpg'},
  {title: 'Chain Vest' , id: 2, imageUrl: 'https://sm.ign.com/t/ign_nordic/screenshot/default/chainvest_jav8.600.jpg'},
];


export default App;
