const Button = ({ onSmash, text }) => {
  // console.log(props.text);
  return (
    <div>
      <button onClick={onSmash}>{text}</button>
    </div>
  );
};

export default Button;
