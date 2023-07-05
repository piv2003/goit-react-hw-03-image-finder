import styled from '@emotion/styled';

export const Button = styled.button`
  display: inline-block;
  max-width: 150px;
  margin: 0 auto;
  padding: 8px 16px;
  border-radius: 2px;
  text-align: center;
  color: #fff;
  border: 0;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  text-decoration: none;
  background-color: #3c4eb4;
  cursor: pointer;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0d164e;
  }
`;
