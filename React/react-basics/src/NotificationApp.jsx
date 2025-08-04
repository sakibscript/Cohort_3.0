//useeffect example

import { useEffect, useState } from "react";

export default function NotificationApp() {
  let [notificationCount, setNotificationCount] = useState(0);
  function increaseNotification() {
    setNotificationCount((currentCount) => currentCount + 1);
  }

  useEffect(() => {
    setInterval(increaseNotification, 5000);
  }, []);

  return (
    <div style={{ position: "relative", width: 24, height: 24 }}>
      <img
        onClick={() => setNotificationCount((notificationCount = 0))}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDkJtdkaFLuY-3Ys_ujXvcZzl2iSZ0ZRsHLg&s"
        style={{ width: 20, cursor: "pointer" }}
      />
      {notificationCount !== 0 && (
        <span
          style={{
            position: "absolute",
            top: -5,
            right: -5,
            backgroundColor: "red",
            color: "white",
            borderRadius: "50%",
            width: 16,
            height: 16,
            fontSize: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {notificationCount}
        </span>
      )}
    </div>
  );
}
