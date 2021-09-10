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
