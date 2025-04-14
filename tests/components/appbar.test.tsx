import { MemoryRouter } from "react-router-dom";
import { describe, it } from "vitest";
import App from "../../src/App";
import React from "react";
import { render , screen} from "@testing-library/react";

describe("Appbar component" , () =>{

    it("Render all AppBar Items " , () =>{
     render(
        <MemoryRouter initialEntries={['/']}>
        <App />
    </MemoryRouter>
     )


     const appbaritemscount = screen.



    })
})