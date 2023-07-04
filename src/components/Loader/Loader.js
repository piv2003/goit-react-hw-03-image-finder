import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Oval
      height={150}
      width={150}
      color="#4058df"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#1a2ca1"
      strokeWidth={4}
      strokeWidthSecondary={4}
    />
  );
};

export default Loader;
