import React from "react";
import { shallow } from 'enzyme';
import MovieCard from '../../../../components/custom/MovieCard';

describe('Movie Card', () => {
    it('should render correctly', () => {
        const Card = shallow(<MovieCard url="" name="movie 1" />);
        const img = Card.find('.card__img')
        const text = Card.find('.card__text')
        expect(text.text()).toEqual('movie 1')
        expect(img.props().alt).toEqual(`card__movie 1`)
        expect(Card).toMatchSnapshot();
    });
});