import "./App.css";

const lista_uzyt = [
  { imie: "kinga" },
  { imie: "mateo" },
  { imie: "tom" },
  { imie: "moni" },
];

console.log(lista_uzyt);

function App() {
  return (
    <div className="App">
      {lista_uzyt.map((zolnierz) => {
        return <div>{zolnierz.imie}</div>;
      })}
      <p>pedaly</p>
    </div>
  );
}

export default App;
