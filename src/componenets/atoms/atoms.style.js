import styled from "styled-components";

export const PrevButtonStyle = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: var(--primary); */
  border-radius: 5px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  img {
    height: 100%;
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
  height: 80vh;
  .carousel-img {
    height: 100%;
    width: auto;
  }
`;
