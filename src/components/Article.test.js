import React from "react";
import "@testing-library/jest-dom";
import MutationObserver from "mutationobserver-shim";

import Article from "./Article";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const { nanoid } = require("nanoid");
const moment = require("moment");

const testArticles = [
  {
    id: nanoid(5),
    headline:
      "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
    createdOn: moment()
      .subtract(Math.random() * 10, "days")
      .format(),
    author: "",
    image: 134,
    summary:
      "Triple-digit temperatures led to a spike in demand across the region.",
    body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home.",
  },
  {
    id: nanoid(5),
    headline:
      "Community College of Philadelphia to require vaccines, the first public college in the region to do so.",
    createdOn: moment()
      .subtract(Math.random() * 10, "days")
      .format(),
    author: "Susan Snyder",
    image: 175,
    summary:
      "The requirement, which will allow exemptions for medical and religious reasons, won’t be in place for the start of the semester.",
    body: "The Pennsylvania State System of Higher Education has said its 14 public universities, including West Chester and Cheyney, don’t have the authority to require a vaccine and would need legislation. Neither Pennsylvania State University nor Temple University, which are state-related, have required the vaccines either.",
  },
];
test("renders component without errors", () => {
  render(
    <Article
      article={testArticles}
      handleDelete={null}
      handleEditSelect={null}
    />
  );
});

// test('renders headline, author from the article when passed in through props', ()=> {
// });

// test('renders "Associated Press" when no author is given', ()=> {
// });

// test('executes handleDelete when the delete button is pressed', ()=> {
// });

//Task List:
//1. Complete all above tests. Create test article data when needed.
