function getArray(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}

function App() {
  const N = 9;

  const result = getArray(N)
    .filter((i) => i % 2 === 0)
    .map((i) => (
      <ul key={i}>
        {i}단
        {getArray(9)
          .filter((j) => j % 2 === 1)
          .map((j) => <li key={j}>{i} x {j} = {i * j}</li>)}
      </ul>
    ));

  return <div>{result}</div>;
}

export default App;
