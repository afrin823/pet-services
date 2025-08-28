 
import Route from "./Route";

const SubHeader = () => {

  return (
    <nav className="bg-[#260965e0] hidden lg:block">
      <div className="container mx-auto flex justify-center items-center py-3">
        <ul className="flex space-x-6 text-secondary font-medium">
          <Route />
        </ul>
      </div>
    </nav>
  );
};

export default SubHeader;
