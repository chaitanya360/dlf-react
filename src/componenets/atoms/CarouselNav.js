import { NextButtonStyle, PrevButtonStyle } from "./atoms.style";

export const PrevButton = ({ clickHandler, hasPrev }) =>
  hasPrev && (
    <PrevButtonStyle onClick={clickHandler}>
      <img
        height="100%"
        width="100%"
        src={`${process.env.PUBLIC_URL}/icons/arrow.svg`}
      />
    </PrevButtonStyle>
  );

export const NextButton = ({ clickHandler, hasNext }) =>
  hasNext && (
    <NextButtonStyle onClick={clickHandler}>
      <img
        height="100%"
        width="100%"
        src={`${process.env.PUBLIC_URL}/icons/arrow.svg`}
      />
    </NextButtonStyle>
  );
