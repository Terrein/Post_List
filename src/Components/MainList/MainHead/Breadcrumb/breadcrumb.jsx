import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { LocalStorageContext } from "../../../../App";

export default function BasicBreadcrumbs() {
    const { token } = useContext(LocalStorageContext)
    return (
        <div>
            {token &&
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to={'/'}>Все посты</Link>
                    <Link to={'/mypostlist'}>Мои посты</Link>
                </Breadcrumbs>
            }
        </div>
    );
}