import React from "react";
import { shallow } from 'enzyme';
import Layout from '../../../components/layout/';

describe('Header Card', () => {
    it('should render correctly', () => {
        const LayoutContainer = shallow(<Layout show={false} handleSearch={() => console.log('search')} children={<div></div>} />);

        expect(LayoutContainer).toMatchSnapshot();
    });
});