import styled from "styled-components";

export const PlanCardStyle = styled.div`
  /* background-color: var(--light-green); */
  background-color: rgba(33, 102, 102, 0.93);
  color: white;
  /* display: grid; */
  /* grid-template-columns: 5fr 3fr; */
  display: flex;
  width: fit-content;
  min-width: 60vw;
  /* padding: 1rem; */
  border-radius: 10px;
  overflow: hidden;
  margin: 1rem auto;

  .details {
    /* background-color: green; */
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
`;
