import { useNavigate } from "react-router-dom";

const IssuePage= () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen h-full bg-gray-100">
      <div className="bg-white flex justify-between px-20 p-6">
        <h1 className="font-semibold text-xl cursor-pointer" onClick={() => navigate('/')}>SmartCase 🚀</h1>
        <h1 className="font-semibold">Welcome back, Parn!</h1>
      </div>


    </div>
  );
}
export default IssuePage;
