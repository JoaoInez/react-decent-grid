import styled from "styled-components";

const Col = styled.div`
  flex-basis: 100%;
  display: ${({ flex = false }) => (flex ? "flex" : "initial")};
  justify-content: ${({ justify = "initial" }) => justify};
  align-items: ${({ align = "initial" }) => align};

  @media (max-width: 480px) {
    flex: ${({ sm = 12 }) => sm / 12};
  }

  @media (min-width: 480px) and (max-width: 768px) {
    flex: ${({ md = 12 }) => md / 12};
  }

  @media (min-width: 768px) {
    flex: ${({ lg = 12 }) => lg / 12};
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 auto;
  max-width: ${({ maxWidth = "initial" }) => maxWidth};

  ${Col} {
    margin: ${({ gap = "0" }) => gap};
  }
`;

export { Col, Row };
