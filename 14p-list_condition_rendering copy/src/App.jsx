// function App() {
//   const a = 95;
//   let result = '';

//   if (a > 80) {
//     result = '합격';
//   } else {
//     result = '불합격';
//   }

//   return <div>결과 : {result}!</div>;
// }

// function App() {
//   const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   const itemList = items.map((item, index) => {
//     return <li key={index}>{item}</li>;
//   });

//   return <ul> {itemList} </ul>;
// }

// function App() {
//   const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   const itemList = items.map((item, index) => {
//     return item % 2 === 0 && <li key={index}>{item}</li>;
//   });

//   return <ul> {itemList} </ul>;
// }

// function App() {
//   const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   const itemList = items.map((item, index) => {
//     return item % 2 === 0
//       ? <li key={index}><b>{item}</b></li>
//       : <li key={index}>{item}</li>;
//   });

//   return <ul> {itemList} </ul>;
// }

function App() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const itemList = items
    .filter(item => item % 2 === 0)
    .map((item, index) => <li key={index}>{item}</li>);

  return <ul> {itemList} </ul>;
}

export default App;
