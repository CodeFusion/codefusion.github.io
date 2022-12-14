import React, { useState } from 'react';
import styled from 'styled-components';

import { WindowDropDowns, Google } from 'components';
import dropDownData from './dropDownData';
import search from 'assets/windowsIcons/299(32x32).png';
import back from 'assets/windowsIcons/ff-back.png';
import forward from 'assets/windowsIcons/ff-forward.png';
import home from 'assets/windowsIcons/ff-home.png';
import refresh from 'assets/windowsIcons/ff-refresh.png';
import stop from 'assets/windowsIcons/ff-stop-disabled.png';
import ffArrow from 'assets/windowsIcons/ff-arrow.gif';
import ffSearch from 'assets/windowsIcons/ff-search.png';
import ffGoogle from 'assets/windowsIcons/ff-google.png';

function Firefox({ onClose }) {
  const [state, setState] = useState({
    route: 'main',
    query: '',
  });
  function onSearch(str) {
    if (str.length) {
      setState({
        route: 'search',
        query: str,
      });
    }
  }
  function goMain() {
    setState({
      route: 'main',
      query: '',
    });
  }
  function onClickOptionItem(item) {
    switch (item) {
      case 'Close':
        onClose();
        break;
      case 'Home Page':
      case 'Back':
        goMain();
        break;
      default:
    }
  }
  return (
    <Div>
      <section className="ie__toolbar">
        <div className="ie__options">
          <WindowDropDowns
            items={dropDownData}
            onClickItem={onClickOptionItem}
            height={21}
          />
        </div>
      </section>
      <section className="ie__function_bar">
        <div className="ie__function_bar__nav">
          <div
            onClick={goMain}
            className={`nav ie__function_bar__button${
              state.route === 'main' ? '--disable' : ''
            }`}
          >
            <img className="ie__function_bar__icon back" src={back} alt="" />
          </div>
          <div className="nav ie__function_bar__button--disable">
            <img
              className="ie__function_bar__icon forward"
              src={forward}
              alt=""
            />
            <div className="ie__function_bar__arrow" />
          </div>
        </div>
        <div className="ie__function_bar__button">
          <img
            className="ie__function_bar__icon--margin-1 secondary"
            src={refresh}
            alt=""
          />
        </div>
        <div className="ie__function_bar__button">
          <img
            className="ie__function_bar__icon--margin-1 secondary"
            src={stop}
            alt=""
          />
        </div>
        <div className="ie__function_bar__button" onClick={goMain}>
          <img
            className="ie__function_bar__icon--margin-1 secondary"
            src={home}
            alt=""
          />
        </div>
        <div className="ie__address_bar__content">
          <div className="ie__address_bar__content__text">
            <input type="url" value="https://www.google.com" />
          </div>
          <img
            src={ffArrow}
            alt="dropdown"
            className="ie__address_bar__content__img"
          />
        </div>
        <div className="ie__address_bar__content">
          <div className="ie__search_bar__provider">
            <img
              src={ffGoogle}
              alt=""
              className="ie__search_bar__provider__icon"
            />
            <img
              src={ffArrow}
              alt="dropdown"
              className="ie__search_bar__provider__dropdown"
            />
          </div>
          <div className="ie__address_bar__content__text">
            <input type="search" placeholder="Google" />
          </div>
          <img
            src={ffSearch}
            alt="dropdown"
            className="ie__address_bar__content__img search"
          />
        </div>
      </section>
      <section className="ie__address_bar"></section>
      <div className="ie__content">
        <div className="ie__content__inner">
          <Google
            route={state.route}
            query={state.query}
            onSearch={onSearch}
            goMain={goMain}
          />
        </div>
      </div>
      <footer className="ie__footer">
        <div className="ie__footer__status">
          <span className="ie__footer__status__text">Done</span>
        </div>
        <div className="ie__footer__right">
          <div className="ie__footer__right__dots" />
        </div>
      </footer>
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);

  .ie__toolbar {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 100%;
    height: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    flex-shrink: 0;
  }
  .ie__options {
    height: 23px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    border-right: 1px solid rgba(0, 0, 0, 0.15);
    padding-left: 2px;
    flex: 1;
  }
  .ie__windows-logo {
    height: 100%;
    border-left: 1px solid white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ie__function_bar {
    height: 35px;
    display: flex;
    align-items: center;
    font-size: 11px;
    padding: 1px 3px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ie__function_bar__nav {
    display: flex;
    align-items: center;
    width: 78px;
    background-image: url('ff-nav-back.png');
    background-repeat: no-repeat;
    background-position: center center;
  }
  .ie__function_bar__button {
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 3px;
    user-select: none;
    -moz-user-select: none;
    &:not(.nav) {
      &:hover {
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1);
      }

      &:hover:active {
        border: 1px solid rgb(185, 185, 185);
        background-color: #dedede;
        box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.7);
        color: rgba(255, 255, 255, 0.7);

        & > * {
          transform: translate(1px, 1px);
        }
      }
    }
  }
  .ie__function_bar__button--disable {
    filter: grayscale(1);
    opacity: 0.7;
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
    pointer-events: none;
  }
  .ie__function_bar__text {
    margin-right: 4px;
  }
  .ie__function_bar__icon {
    height: 30px;
    width: 30px;
    &.back {
      height: 32px;
      width: 32px;
      margin-left: 3px;
      &:hover {
        filter: brightness(1.25);
      }
      &:hover:active {
        filter: brightness(0.75);
      }
    }
    &.forward {
      height: 22px;
      width: 26px;
      margin-left: -2px;
    }
    &--normalize {
      height: 22px;
      width: 22px;
      margin: 0 4px 0 1px;
    }
    &--margin12 {
      height: 22px;
      width: 22px;
      margin: 0 1px 0 2px;
    }
    &--margin-1 {
      margin: 0 -1px;
      height: 30px;
      width: 30px;

      &.secondary {
        height: auto;
        width: auto;
        margin: 0 10px;
      }
    }
  }
  .ie__function_bar__separate {
    height: 90%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 0 2px;
  }
  .ie__function_bar__arrow {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 4px;
    &:before {
      content: '';
      display: block;
      border-width: 3px 3px 0;
      border-color: #000 transparent;
      border-style: solid;
    }
  }
  .ie__function_bar__arrow--margin-11 {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 1px 0 -1px;
    &:before {
      content: '';
      display: block;
      border-width: 3px 3px 0;
      border-color: #000 transparent;
      border-style: solid;
    }
  }
  .ie__address_bar {
    border-top: 1px solid rgba(255, 255, 255, 0.7);
    height: 22px;
    font-size: 11px;
    display: flex;
    align-items: center;
    padding: 0 2px 2px;
    box-shadow: inset 0 -2px 3px -1px #2d2d2d;
  }
  .ie__address_bar__title {
    line-height: 100%;
    color: rgba(0, 0, 0, 0.5);
    padding: 5px;
  }
  .ie__search_bar__provider {
    height: 100%;
    background: rgb(239, 239, 239);
    background: linear-gradient(
      0deg,
      rgba(239, 239, 239, 1) 0%,
      rgba(236, 236, 236, 1) 49%,
      rgba(246, 246, 246, 1) 50%,
      rgba(255, 255, 255, 1) 100%
    );
    border-right: #a0a0a0 1px solid;
    display: flex;
    align-items: center;
    &__icon {
      margin-left: 2px;
    }
    &__dropdown {
      margin-top: 2px;
      margin-left: 1px;
      margin-right: 1px;
    }
  }
  .ie__address_bar__content {
    margin-left: 5px;
    border: rgba(122, 122, 255, 0.6) 1px solid;
    height: 22px;
    display: flex;
    flex: 1;
    align-items: center;
    background-color: white;
    position: relative;
    &__img {
      width: 7px;
      height: 4px;
      margin-right: 5px;
    }
    &__img:last-child {
      width: 7px;
      height: 4px;
      right: 1px;
      position: absolute;
      &.search {
        width: 13px;
        height: 13px;
        margin-right: 5px;
      }
    }
    &__img:last-child:hover {
      filter: brightness(1.25);
    }
    &__text {
      height: 100%;
      margin-left: 5px;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      margin-right: 20px;
      & input {
        border: none;
        width: 100%;
        height: 100%;
      }
    }
  }
  .ie__address_bar__go {
    display: flex;
    align-items: center;
    padding: 0 18px 0 5px;
    height: 100%;
    position: relative;
    &__img {
      height: 95%;
      border: 1px solid rgba(255, 255, 255, 0.2);
      margin-right: 3px;
    }
  }
  .ie__address_bar__links {
    display: flex;
    align-items: center;
    padding: 0 18px 0 5px;
    height: 100%;
    position: relative;
    &__img {
      position: absolute;
      right: 2px;
      top: 3px;
      height: 5px;
      width: 8px;
    }
    &__text {
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .ie__address_bar__separate {
    height: 100%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 1px 0 rgba(255, 255, 255, 0.7);
  }
  .ie__content {
    flex: 1;
    overflow: auto;
    padding-left: 1px;
    border-left: 1px solid #6f6f6f;
    background-color: #f1f1f1;
    position: relative;
  }
  .ie__content__inner {
    position: relative;
    min-height: 800px;
    min-width: 800px;
    width: 100%;
    height: 100%;
  }
  .ie__footer {
    height: 20px;
    border-top: 1px solid transparent;
    box-shadow: inset 0 1px 3px rgba(50, 50, 50, 0.8);
    background-color: rgb(236, 233, 216);
    display: flex;
    align-items: center;
    padding-top: 2px;
  }
  .ie__footer__status {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 2px;
    &__text {
      font-size: 11px;
    }
    &__img {
      height: 14px;
      width: 14px;
      margin-right: 3px;
    }
  }
  .ie__footer__block {
    height: 85%;
    width: 22px;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: inset 1px 0 rgba(255, 255, 255, 0.7);
  }
  .ie__footer__right {
    display: flex;
    align-items: center;
    width: 20px;
    height: 80%;
    border-left: 1px solid rgba(0, 0, 0, 0.11);
    box-shadow: inset 1px 0 rgba(255, 255, 255, 0.7);
    padding-left: 5px;
    position: relative;
    &__text {
      font-size: 11px;
    }
    &__img {
      height: 14px;
      width: 14px;
      margin-right: 3px;
    }
    &__dots {
      position: absolute;
      right: 11px;
      bottom: -1px;
      width: 2px;
      height: 2px;
      box-shadow: 2px 0px rgba(0, 0, 0, 0.25), 5.5px 0px rgba(0, 0, 0, 0.25),
        9px 0px rgba(0, 0, 0, 0.25), 5.5px -3.5px rgba(0, 0, 0, 0.25),
        9px -3.5px rgba(0, 0, 0, 0.25), 9px -7px rgba(0, 0, 0, 0.25),
        3px 1px rgba(255, 255, 255, 1), 6.5px 1px rgba(255, 255, 255, 1),
        10px 1px rgba(255, 255, 255, 1), 10px -2.5px rgba(255, 255, 255, 1),
        10px -6px rgba(255, 255, 255, 1);
    }
  }
`;

export default Firefox;
