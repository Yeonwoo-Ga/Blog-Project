import './App.css';

let post = '주안 김치찌개 맛집'



function App() {
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'red', fontSize : '20px'}}>블로그 입니다</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
