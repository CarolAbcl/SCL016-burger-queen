import  '../App.css'
import React from 'react'

function EnterButton(props) {
  const {title} = props;
  return (
    <>
      <button className="enterButton">{title}</button>
    </>
  )
  }

export default EnterButton;

// const CustomButton = ({ onPress }) => {
//   return (
//     <button type="button" onClick={onPress}>
//       Click on me
//     </button>
//   );
// };

// const App = () => {
//   const handleEvent = () => {
//     alert("I was clicked");
//   };
//   return <CustomButton onPress={handleEvent} />;
// };

// export default App;