// function App() {
//   const N = 10;
//   const result = [];

//   for (let i = 1; i <= N; i++) {
//     result.push(<li key={i}>숫자 : {i}</li>);
//   }

//   return (
//     <ul>
//       {result}
//     </ul>
//   );
// }

// function App() {
//   const N = 10;
//   const result = Array.from({ length: N }, (_, i) => i + 1)
//     .map((i) => <li key={i}>숫자 : {i}</li>);

//   return <ul>{result}</ul>;
// }


function App() {
  const N = 10;

  const result = Array.from({ length: N }, (_, i) => i + 1)
    .map((i) => <li key={i}>숫자 : {i}</li>);

  return <ul>{result}</ul>;
}

export default App;
