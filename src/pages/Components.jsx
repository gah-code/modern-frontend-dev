import Breadcrumbs from '../Components/Breadcrumbs';
import Crumb from '../Components/Crumb';

const Components = () => {
  return (
    <div>
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
    </div>
  );
};

export default Components;
