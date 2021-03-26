import React from 'react';
import Header from './header'

export type IProps = {
    show?: boolean,
    children: React.ReactNode,
    handleSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void

}

const Layout: React.FC<IProps> = ({ children, show, handleSearch }) => {
    return <div>
        <Header show={show} handleSearch={handleSearch} />
        <main>{children}</main>

    </div>
}
export default Layout;