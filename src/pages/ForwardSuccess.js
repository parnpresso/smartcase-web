import { useNavigate } from "react-router-dom";

const ForwardSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen h-full bg-gray-100">
      <div className="bg-white flex justify-between px-20 p-6">
        <h1 className="font-semibold text-xl cursor-pointer" onClick={() => navigate('/issues')}>SmartCase 🚀</h1>
        <h1 className="font-semibold">Welcome back, Parn!</h1>
      </div>

      <div className="container py-20 flex w-full flex justify-center">
        <div className="w-full bg-white rounded-xl p-8 w-80">
          <div className="mt-8 flex justify-center flex-col items-center">
            <div className="bg-gray-100 text-2xl w-16 h-16 rounded-full flex justify-center items-center mb-4">✅</div>
            <h2 className="mb-8 font-semibold text-lg">The issue has been forward!</h2>
            <button className="bg-cyan-300 px-4 py-2 rounded-lg font-semibold" onClick={() => navigate('/issues')}>Back to home</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForwardSuccessPage;
