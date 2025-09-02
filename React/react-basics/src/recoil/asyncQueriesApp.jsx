import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

import axios from "axios";
import { atom, selector } from "recoil";

const notifications = atom({
  key: "notificationAtom",
  default: selector({
    key: "notificationAtomDefaultSelector",
    get: async () => {
      const res = await axios.get(
        "https://mocki.io/v1/2d80e2f9-2c6c-4eb1-b1ee-ad462abe8a87"
      );
      return res.data;
    },
  }),
});

const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.networks +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messages
    );
  },
});

export default function AsyncQueriesApp() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkCount = useRecoilValue(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>

      <button>
        My network (
        {networkCount.networks >= 100 ? "99+" : networkCount.networks})
      </button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messages})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  );
}
