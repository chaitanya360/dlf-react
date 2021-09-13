import styled from "styled-components";

export const PrevButtonStyle = styled.div`
  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  position: absolute;
  width: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: linear 100ms background-color;
  background-color: rgba(0, 0, 0, 0.05);
  left: 0;
  top: 0;
  /* transform: translateY(-50%); */
  z-index: 2;
  cursor: pointer;
  img {
    height: 30px;
    width: auto;
    transform: rotate(-90deg);
  }
`;

export const NextButtonStyle = styled(PrevButtonStyle)`
  right: 0;
  left: auto;
  img {
    transform: rotate(90deg);
  }
`;

export const ImageCarouselStyle = styled.div`
  width: 35vw;
  .carousel-img-wrapper {
  }

  @media screen and (max-width: 900px) {
    width: 100vw;
  }
`;

export const DisclaimerStyle = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  .close-btn-container {
    background-color: #2f362f;
    width: 100%;
    height: fit-content;
    transform: translateY(5px) scaleY(0.8);
    display: flex;
    justify-content: flex-end;

    .close-btn {
      background-color: rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 3px 7px;
      margin: 2px;
      border-radius: 50%;
      font-size: 1.4rem;
      font-weight: 500;
      color: #d37f57;
      cursor: pointer;
      margin-right: 0.5rem;
    }
  }

  .body {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 90vw;
    max-width: 550px;
    height: auto;
    object-fit: contain;
  }

  @media screen and (max-width: 900px) {
    img {
      width: 95vw;
    }
  }
`;

export const VirtualTourStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
