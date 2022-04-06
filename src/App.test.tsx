import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { faker } from "@faker-js/faker";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from './App';

const renderTextarea = () => {
  render(<App />);
  const sentence1 = faker.lorem.sentence();
  const sentence2 = faker.lorem.sentence();

  const textarea = screen.getByPlaceholderText('my textarea');

  return { textarea, sentence1, sentence2 }
}

test("new line by holding shift + pressing enter", async () => {
  const { textarea, sentence1, sentence2 } = renderTextarea();

  await userEvent.type(
      textarea,
      `${sentence1}{Shift>}{Enter}{/Shift}${sentence2}`
  );

  expect(textarea).toHaveValue(`${sentence1}\n${sentence2}`);
});

test("new line by holding alt + pressing enter", async () => {
  const { textarea, sentence1, sentence2 } = renderTextarea();

  await userEvent.type(
      textarea,
      `${sentence1}{Alt>}{Enter}{/Alt}${sentence2}`
  );

  expect(textarea).toHaveValue(`${sentence1}\n${sentence2}`);
});
