const express = require("express");
const app = express();
app.use(express.json());
const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
];
// want to know details
app.get("/", function (req, res) {
  const kidneys = users[0].kidneys;
  const noofkidneys = kidneys.length;
  const noOfHealthyKidneys = kidneys.filter(function (kidneys) {
    return kidneys.healthy == true;
  }).length;
  const noOfUnhealthyKidneys = noofkidneys - noOfHealthyKidneys;
  res.json({ noofkidneys, noOfHealthyKidneys, noOfUnhealthyKidneys });
});

app.post("/", function (req, res) {
  const value = req.body.ishealthy;
  users[0].kidneys.push({ healthy: value });
  res.send("Done!!");
});

// replace unhealthy kidneys with healthy ones
app.put("/", function (req, res) {
  const noOfKidneys = users[0].kidneys.length;
  for (let i = 0; i < noOfKidneys; i++) {
    if (users[0].kidneys[i].healthy == false) {
      users[0].kidneys[i].healthy = true;
    }
  }
  res.send("Done!!!");
});

// remove all the unhealthy kidneys
app.delete("/", function (req, res) {
  const noOfKidneys = users[0].kidneys.length;
  const kidneys = users[0].kidneys;
  const unhealthyKidneys = kidneys.filter(function (kidneys) {
    return kidneys.healthy == false;
  }).length;
  if (unhealthyKidneys == 0)
    res.status(411).send("You have no unhealthy kidneys");
  const new_arr = kidneys.filter(function (kidneys) {
    return kidneys.healthy == true;
  });
  users[0].kidneys = new_arr;
  console.log(kidneys);
  console.log(users[0].kidneys);
  res.send("Done!!");
});

app.listen(3000);
