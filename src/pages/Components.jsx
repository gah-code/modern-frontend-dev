import Breadcrumbs from '../Components/Breadcrumbs';
import Crumb from '../Components/Crumb';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 5rem;
`;

const Components = () => {
  return (
    <Wrapper>
      <h2>Component Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        laboriosam impedit doloribus eos quo ullam nulla totam itaque est
        facilis.
      </p>
      <Breadcrumbs>
        <Crumb href='/'>Home</Crumb>
        <Crumb href='/living'>Living Room</Crumb>
        <Crumb href='/living/couch'>Couches</Crumb>
        <Crumb href='/living/couch/sectional' isCurrentPage={true}>
          Sectionals
        </Crumb>
      </Breadcrumbs>
    </Wrapper>
  );
};

export default Components;
