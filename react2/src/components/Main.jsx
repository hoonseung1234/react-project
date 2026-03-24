
const Main = () => {
  let name = 'kim';
  let arr = ['apple', 'banana','grape']
  return(
  <main><h1> main {name}</h1>
  {arr.map((fruit, index)=>{
    return <div key={index}>{fruit}</div>
  })}
  <div>{arr}</div>
  </main>


  );
}
 
export default Main;
 