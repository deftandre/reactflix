"use strict";

import React from "react";
import styled from "styled-components";
import { footerHeight } from "utils/constants";

const MainFooter = () => <Footer>&copy; 2021</Footer>;

const Footer = styled.header`
    align-items: center;
    background: #333;
    color: #fff;
    display: flex;
    height: ${footerHeight};
    justify-content: center;
`;

export default MainFooter;
