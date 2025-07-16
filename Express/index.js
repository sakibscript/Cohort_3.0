const express = require("express");
const app = express();

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const noOfKidneys = johnKidneys.length;
  let noOfHealthyKidneys = 0;
  for (let i = 0; i < noOfKidneys; i++) {
    if (johnKidneys[i].healthy) {
      noOfHealthyKidneys = noOfHealthyKidneys + 1;
    }
  }
  const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;
  res.json({
    noOfKidneys,
    noOfHealthyKidneys,
    noOfUnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    message: "Successfully added!",
  });
});

app.put("/", function (req, res) {
  if (!areAllKidneysHealthy()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true;
    }
    res.json({
      message: "Successfully updated",
    });
  } else {
    res.status(409).json({
      message: "You already have all healthy kidneys",
    });
  }
});

function areAllKidneysHealthy() {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      return false;
    }
  }
  return true;
}

//Removing all unhealthy kidneys
app.delete("/", function (req, res) {
  if (isThereAtLeastOneUnhealthyKidney) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({
      message: "Unhealthy kidney deleted",
    });
  } else {
    res.status(411).json({
      message: "You have no kidneys",
    });
  }
});

function isThereAtLeastOneUnhealthyKidney() {
  let atLeastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys.healthy) {
      atLeastOneUnhealthyKidney = true;
    }
    return atLeastOneUnhealthyKidney;
  }
}

app.listen(3000);
