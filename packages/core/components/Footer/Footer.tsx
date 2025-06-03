import styled from '@emotion/styled';
import { Link } from '@nextui-org/react';

import { githubUrl, defaultUrl } from '../../constants';

export function Footer() {
  const date = new Date();

  return (
    <StyledFooter>
      <span>
        Source code available at{' '}
        <Link href={githubUrl + "/hss317"} target="_blank" rel="noreferrer" color="primary">
          Github
        </Link>
      </span>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  padding: 0 1.3125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  font-size: 0.75rem;
`;
