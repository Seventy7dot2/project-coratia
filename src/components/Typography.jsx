import styled from "styled-components";

export const Heading = styled.div`
  font-family: Poppins;
  font-size: 5.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(180deg, #007596 0%, rgba(0, 0, 0, 0) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 968px) {
    font-size: 4.5rem;
  }
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
  @media (max-width: 491px) {
    font-size: 2.6rem;
  }
`;
