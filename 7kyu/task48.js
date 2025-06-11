const whosOnline = (friends) => {
  if (friends.length <= 0) return {};

  let obj = {};

  for (const friend of friends) {
    if ((friend.status === "online") & (friend.lastActivity <= 10)) {
      if (!obj.online) {
        obj.online = [];
      }
      obj.online.push(friend.username);
    } else if (friend.status === "offline") {
      if (!obj.offline) {
        obj.offline = [];
      }
      obj.offline.push(friend.username);
    } else {
      if (!obj.away) {
        obj.away = [];
      }
      obj.away.push(friend.username);
    }
  }

  return obj;
};

console.log(
  whosOnline([
    {
      username: "David",
      status: "online",
      lastActivity: 10,
    },
    {
      username: "Lucy",
      status: "offline",
      lastActivity: 22,
    },
    {
      username: "Bob",
      status: "online",
      lastActivity: 104,
    },
  ])
);
