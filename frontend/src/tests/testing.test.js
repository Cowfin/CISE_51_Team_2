/*import React from "react";
import { shallow, mount } from "enzyme";
import App from '../App';
import SubmitArticle from '../pages/Submit-Article';
import toJson from "enzyme-to-json";

  const data = 
  {
      ID: 56,
      Title: "test title",
      Authors: "Author 1",
      Source: "source website",
      Year: 2021,
      DOI: "https://doidoi",
      Claim: ' ',
      Evidence_Level: ' ',
      Practice: "Mob Programming"
  };

  describe("", () => {
      it("render button", () => {
          const wrapper = mount(<SubmitArticle />);
          expect(wrapper.props().data).toEqual(data);
      })
  });

  /*describe("", () => {
    it("accepts user account props", () => {
      const wrapper = mount(<Account user={user} />);
      expect(wrapper.props().user).toEqual(user);
    });
    it("contains users account email", () => {
      const wrapper = mount(<Account user={user} />);
      const value = wrapper.find("p").text();
      expect(value).toEqual("david@gmail.com");
    });
  });*/

/*import React from 'react';
import renderer from 'react-test-renderer';
import SubmitArticle from '../pages/Submit-Article';
import App from '../App';
import { mount } from 'enzyme';

describe('SubmitForm', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<SubmitArticle />);
    });
    

    test("render button", () => {
        expect(wrapper.find("#submitbutton").text).toBe("submit")
    });
    


    
    it('should call onSubmit on callback', () => 
    {
    const mockSubmit = jest.fn();

    const testComponentInstance = renderer.create(<submitform onSubmit={mockSubmit} />
        ).root;
    
    const submitButtonInstance = testComponentInstance.findByProps({type: 'submit',});
    expect(submitButtonInstance).toBeDefined();
    
    const eventMock = {preventDefault: jest.fn()};
    submitButtonInstance.props.onClick(eventMock);

    expect(onSubmit).toHaveBeenCalledTimes(1);

    })
})*/