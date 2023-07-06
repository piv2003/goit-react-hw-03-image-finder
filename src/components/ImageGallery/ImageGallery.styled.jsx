import styled from '@emotion/styled';

export const ImageGalleryBox = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 15px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;
