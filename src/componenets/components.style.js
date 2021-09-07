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
    border: 2px solid purple;
  }
`;

export const MainAreaStyle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: lightgray;

  h3 {
    width: 100%;
    text-align: center;
  }

  .select-plan-btn {
    width: fit-content;
    font-size: 1.2rem;
    border-radius: 4px;
    padding: 0.3rem 1rem;
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: var(--primary);
    cursor: pointer;
    transition: linear 200ms opacity;
    color: white;
    z-index: 1;
  }
`;
