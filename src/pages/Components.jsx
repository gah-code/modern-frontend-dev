import Breadcrumbs from '../Components/Breadcrumbs';
import Crumb from '../Components/Crumb';

const Components = () => {
  return (
    <div>
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