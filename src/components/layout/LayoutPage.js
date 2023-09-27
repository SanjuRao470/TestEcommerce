import React from 'react'
import FooterFlie from "../footer/FooterFile"
import HeaderFlie from "../header/HeaderFile";
import { Outlet } from 'react-router-dom';

function LayoutPage() {
    return (
        <div>
            <HeaderFlie />
            <Outlet />
            <FooterFlie />
        </div>
    )
}
export default LayoutPage;
