const RejectPage = () => {
  return (
    <div className="h-screen bg-gray-100">
      <div className="bg-white flex justify-center p-6">
        <h1 className="font-semibold text-xl">SmartCase 🚀</h1>
      </div>

      <div className="container px-20 py-8 flex">
        <div className="w-3/6">
          <h1 className="font-semibold text-lg mb-4">Reject Issue</h1>
          <div className="w-full bg-white rounded-xl p-8">
            <div>
              <div className="bg-gray-100 p-4 rounded-lg w-20 flex flex-col items-center">
                <div>🗑</div>
                <div>Unrelated</div>
              </div>
              <div>
                <h2 className="font-semibold text-lg">My Lloyds app is slowing down</h2>
                <p>To: parn@parn.co</p>
              </div>
            </div>
            <div>Content</div>
            <div>BUtton</div>
          </div>
        </div>

        <div className="w-2/6">
          template
        </div>
      </div>
    </div>
  );
}
export default RejectPage;
