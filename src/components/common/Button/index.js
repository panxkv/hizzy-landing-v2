import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 28px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  padding: 16px 32px;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #363c54;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 8px 15px rgba(0,0,0,.2);
    background: #434a68;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`;
