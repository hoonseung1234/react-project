import {useState} from "react";


const NumberGame = () => {
    const generateRandom = () => Math.floor(Math.random()*100)+1;

    const [target, setTarget] = useState(generateRandom());
    const [num, setNum] = useState("");
    const [message, setMessage] = useState("숫자를 맞춰보세요");
    const [tries, setTries] = useState(0);

    //확인 버튼 클릭
    const checkNumber = () => {
        const guess = Number(num);
        setTries(tries + 1);

        if(guess > target) {
            setMessage("DOWN");
        }else if ( guess < target){
            setMessage("UP");
        } else {
            setMessage(`정답 시도횟수 : ${tries +1}`)
        }
    };
    //다시하기 버튼 클릭
const resetGame =() => {
    setTarget(generateRandom());
    setNum("");
    setMessage("숫자를 맞춰보세요");
    setTries(0);
};
return (
    <div style={{ textAlign:"center", marginTop: "50px"}}>
        <h1>숫자 맞추기 게임</h1>

        <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="1~100 사이 숫자"
        />

        <div style={{ marginTop: "10px"}}>
            <button onClick={checkNumber}>확인</button>
        </div>

        <h2>{message}</h2>
        <p>시도 횟수 : {tries}</p>
        <button onClick={resetGame}>
                다시시작
            </button>
    </div>
    
);
    


};
export default NumberGame;