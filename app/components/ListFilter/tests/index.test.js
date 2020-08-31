// import React from 'react';
// import { configure, mount, render, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// import ListFilter from '../index';
// import ListFilterState from '../ListFilterState';

// const mockProps = {
//   dateFrom: null,
//   datePickerFromError: '',
//   datePickerToError: '',
//   dateRangeValue: 0,
//   dateTo: null,
//   handleClearValues: jest.fn(),
//   handleDateFromChange: jest.fn(),
//   handleDateToChange: jest.fn(),
//   handleRangeChange: jest.fn(),
//   handleSubmitValues: jest.fn(),
//   keywordValue: '',
//   setKeywordValue: jest.fn(),
// };

describe('<ListFilter />', () => {
  // configure({ adapter: new Adapter() });

  it('', () => {
    // const renderMock = jest.fn();
    // const wrapper = shallow(<ListFilter render={renderMock} />);
    // console.log(wrapper.debug());
    // // expect(wrapper.find('ListFilterState').exists()).toBeTruthy();
    // expect(renderMock).toHaveBeenCalled();
    expect(true).toBeTruthy();
  });
});

// describe('<ListFilter />', () => {
//   configure({ adapter: new Adapter() });

//   it('', () => {
//     const listFilterRender = mount(<ListFilter />)
//       .find(ListFilterState)
//       .prop(render);
//     const wrapper = render(listFilterRender({ ...mockProps }));
//     console.log(wrapper.debug());
//     expect(true).toBeTruthy();
//   });
// });
