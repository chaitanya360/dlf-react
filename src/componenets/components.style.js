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
  grid-template-rows: auto 1fr auto;
`;

export const MenuButtonStyle = styled.div`
  position: absolute;
  margin: 1rem;
  width: fit-content;
  font-size: 1.2rem;
  border-radius: 4px;
  padding: 0rem 0.5rem;
  background-color: var(--primary);
  cursor: pointer;
  transition: linear 200ms opacity;
  z-index: 1;
  color: white;
  margin: 5px;
  border: 1px solid var(--gold);
`;

export const ButtonsStyle = styled.div`
  display: flex;
  max-width: 300px;
  justify-content: space-evenly;
  width: 100%;
  margin: 1rem auto;

  button {
    color: var(--primary);
    border: 2px solid var(--primary);
    padding: 5px 1rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
  }

  .btn-selected {
    background-color: var(--primary);
    color: white;
  }
`;

export const ContentStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .master-img {
    border-radius: 8px;
    height: 85vh;
    width: auto;
  }
`;

export const HeaderStyle = styled.div`
  background-color: var(--primary);
  position: relative;
  .title {
    color: gold;
    opacity: 0.98;
    text-shadow: 1px 1px 2px black;
    /* color: rgba(255, 255, 255, 0.9); */
    font-size: 1.5rem;
    font-weight: 500;
    width: 100%;
    text-align: center;
    padding: 0.5rem 0;
  }
`;
