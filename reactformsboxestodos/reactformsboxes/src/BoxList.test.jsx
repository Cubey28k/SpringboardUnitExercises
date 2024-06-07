import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { it, expect } from "vitest";
import BoxList from "./BoxList";

function addBox(boxList, height = "2", width = "2", color = "peachpuff") {
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");
    const backgroundInput = boxList.getByLabelText("Background Color");
    fireEvent.change(backgroundInput, { target: { value: color } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    const button = boxList.getByText("Click to add a new box.");
    fireEvent.click(button);
  }
  
  it("renders without crashing", function() {
    render(<BoxList />);
  });
  
  it("matches snapshot", function() {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it("can add a new box", function() {
    const boxList = render(<BoxList />);
  
    // no boxes yet
    expect(boxList.queryByText("Remove this box")).not.toBeInTheDocument();
  
    addBox(boxList);
  
    // expect to see a box
    const removeButton = boxList.getByText("Remove this box");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
    width: 2em;
    height: 2em;
    background-color: rgb(255, 218, 185);
  `);
  
    // expect form to be empty
    expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
  
    // expect(asFragment()).toMatchSnapshot();
  });
  
  it("can remove a box", function() {
    const boxList = render(<BoxList />);
    addBox(boxList);
  
    const removeButton = boxList.getByText("Remove this box");
  
    // click the remove button and the box should be gone
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
  });
  