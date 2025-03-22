const express = require("express");
const cors = require("cors");

const app = express();

const Todos = [
  {
    id: 1,
    title: "Complete JavaScript Tutorial",
    description:
      "Finish the remaining lessons in the JavaScript tutorial to learn more advanced concepts.",
  },
  {
    id: 2,
    title: "Buy Groceries",
    description:
      "Pick up milk, eggs, bread, and some fresh vegetables from the store.",
  },
  {
    id: 3,
    title: "Attend Team Meeting",
    description:
      "Join the team meeting at 10 AM to discuss the progress of the current project.",
  },
  {
    id: 4,
    title: "Exercise for 30 minutes",
    description: "Do a 30-minute workout to stay active and healthy.",
  },
  {
    id: 5,
    title: "Read a Book",
    description:
      "Read at least two chapters from the current book you're reading.",
  },
  {
    id: 6,
    title: "Respond to Emails",
    description: "Reply to the pending emails in your inbox.",
  },
  {
    id: 7,
    title: "Write Blog Post",
    description:
      "Draft and publish a blog post on the latest trends in web development.",
  },
  {
    id: 8,
    title: "Fix Bugs in Code",
    description:
      "Debug and fix the issues found in the latest version of the project.",
  },
  {
    id: 9,
    title: "Schedule Doctor Appointment",
    description:
      "Call the doctor’s office and schedule an appointment for a routine checkup.",
  },
  {
    id: 10,
    title: "Plan Weekend Trip",
    description:
      "Research destinations for the upcoming weekend trip and book accommodations.",
  },
];

app.get("/Todos", (req, res) => {
  res.json({
    Todos,
  });
});

app.get("/Todo", (req, res) => {
  let NewTodo = {};
  const num = Math.floor(Math.random() * 10);
  for (let i = 0; i < Todos.length; i++) {
    if (Todos[i].id == num) {
      NewTodo = Todos[i];
    }
  }
  res.json({
    NewTodo,
  });
});

app.listen(3000, () => {
  console.log("On");
});


