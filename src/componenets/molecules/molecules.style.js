import styled from "styled-components";

export const PlanCardStyle = styled.div`
  background-color: rgba(33, 102, 102, 0.93);
  color: white;
  display: flex;
  width: fit-content;
  min-width: 60vw;
  border-radius: 10px;
  overflow: hidden;
  margin: 1rem auto;
  justify-content: flex-start;
  align-items: center;

  .details {
    align-self: flex-start;
    .title {
      font-size: 1.5rem;
      margin: 1rem;
      font-weight: 500;
      text-shadow: 1px 1.2px 1px black;
      margin-bottom: 1.5rem;
      text-align: center;
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

  @media screen and (max-width: 900px) {
    width: 100vw;
    border-radius: 5px;
    flex-direction: column;

    .details {
      height: 100%;
      width: 100%;
      max-width: 90vw;
      margin: auto;
      padding-bottom: 1rem;
      .title {
        font-size: 1.3rem;
        margin: 0.5rem;
      }

      .info {
        grid-template-columns: 3fr 7fr;
        font-size: 1.1rem;
        padding: 8px 4px;
        font-weight: 400;
      }
    }
  }
`;
