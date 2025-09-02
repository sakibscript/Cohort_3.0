import { Button } from "./components/Buttons";
import { Input } from "./components/Input";
import { Otp } from "./components/Otp";

export default function App() {
  return (
    <div className="h-screen bg-blue-700">
      <Input type="text" placeholder="Enter text here" />
      <Button disabled={true} onClick={() => alert("Clicked")}>
        Click Me
      </Button>
      <br />
      <br />
      <br />
      <br />
      <Otp
        length={6}
        onComplete={(otp) => {
          console.log("Entered OTP:", otp);
        }}
      />{" "}
    </div>
  );
}
