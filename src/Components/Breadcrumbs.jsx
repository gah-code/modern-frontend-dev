import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const Breadcrumbs = ({ children }) => {
  return (
    <nav aria-label='Breadcrumb'>
      <h2>Breadcrumb component</h2>
      <BreadcrumbList>{children}</BreadcrumbList>
    </nav>
  );
};

const BreadcrumbList = styled.ol`
  padding: 0;
  margin: 0;
`;

export default Breadcrumbs;
