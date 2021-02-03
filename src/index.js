import React from "react";
import ReactDom from "react-dom";

import App from "./components/app/App";
import {OfferCards} from "./mock-data";

ReactDom.render(
    <App offersCards={OfferCards}/>,
    document.getElementById(`root`),
);
