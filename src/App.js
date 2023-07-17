import './App.css';
import QrImage from "./image-qr-code.png"
function App() {
  return (
    <main className="App h-screen bg-Light-gray flex justify-center items-center">
      <div className="container flex flex-col items-center p-[16px] w-[320px] h-[497px] bg-white rounded-[20px] overflow-hidden">
        <div className='Qr-image-card w-full h-fit rounded-[10px] overflow-hidden' >
          <img src={QrImage} alt="qr is not listed" />
        </div>
        <h1>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </main>
  );
}

export default App;
