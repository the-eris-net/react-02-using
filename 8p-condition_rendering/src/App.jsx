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

function App() {
  const a = 95;
  let result = '';

  if (a > 80) {
    result = <b>합격</b>;
  } else {
    result = <b>불합격</b>;
  }

  return <div>결과 : {result}!</div>;
}

export default App;
