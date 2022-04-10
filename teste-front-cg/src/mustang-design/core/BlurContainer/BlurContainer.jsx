import styled from "styled-components";

export const BlurContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  width: 48.3rem;
  height: 33.9rem;
  right: 0px;
  top: 0px;
  padding: 2rem 8rem 1.5rem 0;

  background: linear-gradient(
    270deg,
    transparent,
    rgba(0, 0, 0, 0) 0%,
    rgba(29, 37, 39, 0.6) 24.79%,
    rgba(29, 37, 39, 0.534) 54.48%,
    rgba(29, 37, 39, 0.006) 78.67%,
    rgba(29, 37, 39, 0) 100%
  );
  backdrop-filter: blur(15px);
`;
