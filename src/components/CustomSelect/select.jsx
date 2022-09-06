import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import Icon from "../../elements/icon/icon";
import style from "../../elements/link/link.module.scss"


const DropDownContainer = styled("div")`
  min-width: 70px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content;
  justify-content: center;
`;

const DropDownHeader = styled("div")`
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 14px;
  color:  #909CB5;
  background: transparent;
  width: fit-content;
`;

const DropDownIcon = styled("div")`
  width: 6px;
  height: 6px;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  width: fit-content;
  padding: 0;
  margin-top: 15px;
  background: #1A1A25;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color:  white;
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  left: 0;
  text-align: center;
  min-width: 70px;
  z-index: 15;
  &:first-child {
    padding: 0.5em 0;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  padding: 0.5em;
`;



const Select = (props) => {
  
const position = (pos) => {
  if (pos === '1') {
    const options = ["Moscow", "Kiyv", "Poltava"];
    return options
  }
  else if (pos === '2') {
    const options = ["MCK", "LDN", "NY"];
    return options
  }
  else if (pos === '3') {
    const options = ["Кардиотренажеры", "Силовые тренажеры", "Уличные виды спорта", 'Свободные веса', 'Игровые столы', 'Массажное оборудование', 'Функциональный тренинг'];
    return options
  }
  else if (pos === '4') {
    const options = ["Кардиотренажеры", "Силовые тренажеры", "Функциональный тренинг", 'Свободные веса', 'Аэробика', 'Wellness, СПА, массаж', 'Реабилитация и спортивная медицина', 'Оборудование для бассейнов'];
    return options
  }
}

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(position(props.position)[0]);
 

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const onHover = (e) => {
    e.target.classList.toggle(style.basicHover)
  }

  const dropdownRef = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if ( dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isOpen])

  return (
    <>
      <DropDownContainer ref={dropdownRef}>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "City"}
        </DropDownHeader>
        <DropDownIcon>
          <Icon link='#icon-select-triangle'/>
        </DropDownIcon>
        {isOpen && (
              <DropDownListContainer>
            <DropDownList>
              {position(props.position).map(option => (
                <ListItem onClick={onOptionClicked(option)} onMouseOver={onHover} onMouseOut={onHover} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
        
    </>
  );
}

export default Select;