const Button2 = () => {

  const handleClick = () => {
    alert("버튼 클릭!");
  }

  return (
    <button onClick={handleClick}>
      버튼2
    </button>
  );
}

export default Button2;