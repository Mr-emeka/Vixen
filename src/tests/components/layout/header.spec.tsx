import React from "react";
import { shallow } from 'enzyme';
import Header from '../../../components/layout/header';

describe('Header Card', () => {
    it('should render correctly', () => {
        const HeaderContainer = shallow(<Header show={false} handleSearch={() => console.log('search')} />);
        const BrandContainer = HeaderContainer.find('.header__brand')
        expect(HeaderContainer).toMatchSnapshot();
    });
});