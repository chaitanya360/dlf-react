import styled, { css } from "styled-components";

export const HomeStyle = styled.div``;

export const MenuStyle = styled.div`
  list-style: none;
  width: 100%;
  color: rgba(255, 255, 255, 0.9);
  padding-top: 1rem;

  .close-btn {
    color: var(--gold);
    position: absolute;
    right: 0;
    top: 0;
    font-weight: 500;
    font-size: 1.2rem;
    cursor: pointer;
    transform: scaleY(0.8);
    transition: linear 200ms transform;
    padding: 1rem;
  }

  .close-btn:hover {
    transform: rotate(180deg) scaleY(0.8);
  }

  li {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    overflow: hidden;
    margin: 10px 0;
    width: 100%;
    cursor: pointer;
    border: 2px solid transparent;
  }

  li:hover {
    background-color: var(--light-green) !important;
  }
`;

export const MainAreaStyle = styled.div`
  position: absolute;
  color: black;
  background: var(--gredient);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: grid;
  grid-template-rows: auto auto 1fr;

  @media screen and (max-width: 900px) {
    height: fit-content;
    min-height: 100vh;
  }
`;

export const ButtonsStyle = styled.div`
  display: grid;
  width: 100%;
  padding: 0.5rem 0;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  height: fit-content;
  /* margin: 1rem auto; */

  button {
    color: var(--primary);
    border: 2px solid var(--primary);
    opacity: 0.9;
    padding: 3px 1rem;
    font-size: 1rem;
    margin: 0.2rem;
    border-radius: 3px;
    cursor: pointer;

    :hover {
      background-color: aliceblue;
    }
  }

  .view-btn-container {
    display: flex;
    margin-left: 1rem;
    justify-content: flex-start;
    .btn-selected {
      background-color: var(--primary);
      color: white;
      opacity: 1;
    }
  }
  .disclaimer-icon {
    box-sizing: content-box;
    background-color: var(--primary);
    height: 27px;
    width: 27px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    font-weight: 500;
    font-size: 1.3rem;
    color: white;
    cursor: pointer;
    border: 2px solid transparent;

    :hover {
      border: 2px solid var(--secondary);
    }
  }
`;

export const MenuButtonStyle = styled.div`
  display: inline-block;
  margin: 1rem;
  height: fit-content;
  width: fit-content;
  font-size: 1.2rem;
  transform: translateX(5px);
  border-radius: 4px;
  padding: 0rem 0.5rem;
  background-color: var(--primary);
  cursor: pointer;
  transition: linear 200ms opacity;
  z-index: 1;
  color: gold;
  margin: 5px;
  border: 1px solid transparent;
  :hover {
    border: 1px solid var(--gold);
  }
`;

export const ContentStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .master-img {
    border-radius: 8px;
    width: 90vw;
    height: 75vh;
    object-fit: contain;
  }
  .iso-img {
    max-height: 85vh;
    width: auto;
  }

  @media screen and (max-width: 900px) {
    .master-img {
      border-radius: 8px;
      height: 85vh;
      object-fit: contain;
      width: 100vw;
    }
    .iso-img {
      width: 90vw;
      height: auto;
      object-fit: contain;
    }
  }
`;

export const HeaderStyle = styled.div`
  position: relative;
  .title {
    background-color: var(--primary);
    color: gold;
    opacity: 0.98;
    text-shadow: 1px 1px 2px black;
    font-size: 1.5rem;
    font-weight: 500;
    width: 100%;
    text-align: center;
    padding: 0.5rem 0;
  }

  @media screen and (max-width: 700px) {
    .title {
      font-size: 1.2rem;
      .sub-title {
        display: block;
      }
    }
  }
`;
