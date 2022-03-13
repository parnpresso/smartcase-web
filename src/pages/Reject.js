import { useNavigate } from "react-router-dom";

const RejectPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen h-full bg-gray-100">
      <div className="bg-white flex justify-between px-20 p-6">
        <h1 className="font-semibold text-xl">SmartCase 🚀</h1>
        <h1 className="font-semibold">Welcome back, Parn!</h1>
      </div>

      <div className="container px-20 py-8 flex">
        <div className="w-3/6">
          <h1 className="font-semibold text-lg mb-4">Reject Issue</h1>
          <div className="w-full bg-white rounded-xl p-8">
            <div className="flex">
              <div className="bg-gray-100 p-4 rounded-lg w-24 flex flex-col items-center">
                <div className="text-2xl">🗑</div>
                <div className="text-gray-600 font-semibold text-sm">Unrelated</div>
              </div>
              <div className="ml-4 flex flex-col pt-2">
                <h2 className="font-semibold text-2xl">My Lloyds app is slowing down</h2>
                <p className="text-gray-600 font-semibold text-sm">To: parn@parn.co</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-semibold text-gray-600 mb-2">Response message:</h3>
              <div className="bg-gray-100 p-6 rounded-lg text-sm">
                Hello Parn, <br /><br />

                Thank you for contacting us. <br /><br />

                We cannot help you with your inquiry - My Lloyds app is slowing down. We don’t have authority to handle your issue. We do recommend you to contact Lloyds bank directly. <br /><br />

                We’re apologize for the inconvenience. <br /><br />

                Yours sincerely,<br />
                Johnny Deep<br />
                Best MP ever
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button className="bg-gray-200 px-4 py-2 rounded-lg font-semibold text-gray-600 mr-2" onClick={() => navigate('/')}>Cancel</button>
              <button className="bg-cyan-300 px-4 py-2 rounded-lg font-semibold" onClick={() => navigate('/reject-success')}>Reject</button>
            </div>
          </div>
        </div>

        <div className="w-3/6 pl-8">
          <h1 className="font-semibold text-lg mb-4">Message templates</h1>
          <div className="w-full bg-white rounded-xl p-4 flex justify-between items-center mb-2">
            <div className="ml-4 flex flex-col">
              <div className="flex">
                <h2 className="font-semibold text-lg mr-2">We cannot help you</h2>
                <div className="bg-green-300 p-1 px-2 text-gray-600 text-sm rounded-lg">Recommended</div>
              </div>
              <p className="text-gray-600 text-sm">52 replies</p>
            </div>
            <div>
              <button className="bg-cyan-300 px-4 py-2 rounded-lg font-semibold">Use this template</button>
            </div>
          </div>

          <div className="w-full bg-white rounded-xl p-4 flex justify-between items-center mb-2">
            <div className="ml-4 flex flex-col">
              <div className="flex">
                <h2 className="font-semibold text-lg mr-2">Our partner can help you</h2>
              </div>
              <p className="text-gray-600 text-sm">3 replies</p>
            </div>
            <div>
              <button className="bg-cyan-300 px-4 py-2 rounded-lg font-semibold">Use this template</button>
            </div>
          </div>

          <div className="w-full bg-white rounded-xl p-4 flex justify-between items-center">
            <div className="ml-4 flex flex-col">
              <div className="flex">
                <h2 className="font-semibold text-lg mr-2">....</h2>
              </div>
              <p className="text-gray-600 text-sm">1 replies</p>
            </div>
            <div>
              <button className="bg-cyan-300 px-4 py-2 rounded-lg font-semibold">Use this template</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RejectPage;
