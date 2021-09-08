import styled, { css } from "styled-components";

export const HomeStyle = styled.div``;

export const MenuStyle = styled.div`
  list-style: none;
  width: 100%;
  color: rgba(255, 255, 255, 0.9);

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
    background-color: rgba(102, 51, 153, 0.6) !important;
  }
`;

export const MainAreaStyle = styled.div`
  position: absolute;
  color: black;
  background-color: #2f2f3f;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export const SelectPlanButtonStyle = styled.div`
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
`;

export const ButtonsStyle = styled.div`
  display: flex;
  max-width: 400px;
  justify-content: space-evenly;
  width: 100%;
  margin: 1rem auto;

  button {
    color: var(--secondary);
    border: 2px solid var(--secondary);
    padding: 5px 1rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
  }

  .btn-selected {
    background-color: var(--secondary);
    color: white;
  }
`;

export const ContentStyle = styled.div`
  color: black;
`;

export const HeaderStyle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: var(--secondary);

  .title {
    /* color: var(--secondary); */
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.5rem;
    font-weight: 500;
    width: 100%;
    text-align: center;
  }
`;
