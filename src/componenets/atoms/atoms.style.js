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

export const CarouselBodyStyle = styled.div`
  /* background-color: var(--light-green); */
  background-color: rgba(33, 102, 102, 0.93);
  color: white;
  display: grid;
  grid-template-columns: 5fr 3fr;
  max-width: 1000px;
  /* padding: 1rem; */
  border-radius: 10px;
  overflow: hidden;
  margin: 1rem auto;
  .carousel-img-wrapper {
    max-height: 80vh;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      /* below is to diplay full size image */
      /* max-height: 70vh; */
      object-fit: contain;
    }
  }

  .details {
    /* background-color: green; */
    .title {
      font-size: 1.5rem;
      margin: 1rem;
      font-weight: 500;
      text-shadow: 1px 1.2px 1px black;
      margin-bottom: 1.5rem;
    }
    .info {
      text-align: left;
      font-size: 1.2rem;
      margin: 0.5rem 1rem;
      border: 1.5px solid rgb(74, 165, 186);
      border-radius: 5px;
      padding: 8px;
      display: grid;
      grid-template-columns: 1fr 3fr;

      .value {
        margin-left: 1rem;
        padding-left: 1rem;
        border-left: 3px solid var(--light-gold);
      }
    }
  }
`;
