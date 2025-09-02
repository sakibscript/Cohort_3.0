// import { useRef, useState } from "react";
// import { Button } from "./Buttons";

// export const Otp = () => {
//   const ref1 = useRef();
//   const ref2 = useRef();
//   const ref3 = useRef();
//   const ref4 = useRef();
//   const ref5 = useRef();
//   const ref6 = useRef();

//   const [disabled, setDisabled] = useState(true);

//   return (
//     <div className="flex justify-center items-center">
//       <div className="flex justify-center">
//         <SubOtpBox
//           reference={ref1}
//           onDone={() => {
//             ref2.current.focus();
//           }}
//         />
//         <SubOtpBox
//           reference={ref2}
//           onDone={() => {
//             ref3.current.focus();
//           }}
//         />
//         <SubOtpBox
//           reference={ref3}
//           onDone={() => {
//             ref4.current.focus();
//           }}
//         />
//         <SubOtpBox
//           reference={ref4}
//           onDone={() => {
//             ref5.current.focus();
//           }}
//         />
//         <SubOtpBox
//           reference={ref5}
//           onDone={() => {
//             ref6.current.focus();
//           }}
//         />
//         <SubOtpBox
//           reference={ref6}
//           onDone={() => {
//             setDisabled(false);
//           }}
//         />
//       </div>
//       <div>
//         <Button disabled={disabled}>Sign up</Button>
//       </div>
//     </div>
//   );
// };

// function SubOtpBox({ reference, onDone }) {
//   return (
//     <div>
//       <input
//         ref={reference}
//         maxLength={1}
//         onChange={(e) => {
//           if (e.target.value.length === 1) {
//             onDone();
//           } else if (e.target.value.length === 0) {
//             setDisabled(true);
//           }
//         }}
//         type="text"
//         className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none text-center text-white"
//       />
//     </div>
//   );
// }

// import { useRef, useState } from "react";
// import { Button } from "./Buttons";

// export const Otp = (num) => {
//   const ref1 = useRef();
//   const ref2 = useRef();
//   const ref3 = useRef();
//   const ref4 = useRef();
//   const ref5 = useRef();
//   const ref6 = useRef();

//   const [disabled, setDisabled] = useState(true);

//   return (
//     <div className="flex justify-center items-end">
//       <div className="flex justify-center">
//         <SubOtpBox reference={ref1} nextRef={ref2} />
//         <SubOtpBox reference={ref2} nextRef={ref3} prevRef={ref1} />
//         <SubOtpBox reference={ref3} nextRef={ref4} prevRef={ref2} />
//         <SubOtpBox reference={ref4} nextRef={ref5} prevRef={ref3} />
//         <SubOtpBox reference={ref5} nextRef={ref6} prevRef={ref4} />
//         <SubOtpBox
//           reference={ref6}
//           prevRef={ref5}
//           onFilled={() => setDisabled(false)}
//         />
//       </div>
//       <div>
//         <Button disabled={disabled}>Sign up</Button>
//       </div>
//     </div>
//   );
// };

// function SubOtpBox({ reference, nextRef, prevRef, onFilled }) {
//   return (
//     <div>
//       <input
//         ref={reference}
//         maxLength={1}
//         onChange={(e) => {
//           if (e.target.value.length === 1) {
//             if (nextRef) {
//               nextRef.current.focus();
//             } else if (onFilled) {
//               onFilled();
//             }
//           }
//         }}
//         onKeyDown={(e) => {
//           if (e.key === "Backspace" && !e.target.value && prevRef) {
//             prevRef.current.focus();
//           }
//         }}
//         type="text"
//         className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none text-center text-white text-lg"
//       />
//     </div>
//   );
// }

import { useRef, useState } from "react";
import { Button } from "./Buttons";

export const Otp = ({ number = 6 }) => {
  const inputRefs = Array.from({ length: number }, () => useRef());
  const [values, setValues] = useState(Array(number).fill(""));

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return; // only allow digits

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    // Move focus to next box if filled
    if (value && index < number - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const isComplete = values.every((v) => v !== "");

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center">
        {inputRefs.map((ref, index) => (
          <SubOtpBox
            key={index}
            reference={ref}
            value={values[index]}
            onChange={(val) => handleChange(index, val)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </div>
      <div>
        <Button disabled={!isComplete}>Sign up</Button>
      </div>
    </div>
  );
};

function SubOtpBox({ reference, value, onChange, onKeyDown }) {
  return (
    <div>
      <input
        ref={reference}
        value={value}
        maxLength={1}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        type="text"
        className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none text-center text-white text-lg"
      />
    </div>
  );
}
