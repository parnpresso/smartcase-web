import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const IssuePage= () => {
  const navigate = useNavigate();
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState();

  useEffect(() => {
    axios.get(
      'https://rzz6c6c504.execute-api.ap-southeast-1.amazonaws.com/default/issues'
    )
    .then(response => {
      // const orderedIssues = response.data.sort((x, y) => (x.timestamp - y.timestamp) );
      const orderedIssues = response.data;
      setIssues(orderedIssues)
    });
  }, []);

  const onClickIssue = (issue) => {
    setSelectedIssue(issue);
  }

  return (
    <div className="min-h-screen h-full bg-gray-100">
      <div className="bg-white flex justify-between px-20 p-6">
        <h1 className="font-semibold text-xl cursor-pointer" onClick={() => navigate('/issues')}>SmartCase 🚀</h1>
        <h1 className="font-semibold">Welcome back, Parn!</h1>
      </div>

      <div className="container px-20 py-8 flex">
        <div className="w-3/6 pl-8">
          <h1 className="font-semibold text-lg mb-4">Issues</h1>

          {issues.filter(issue => issue.isRelated).map((issue, index) => (
            <div
              className="w-full bg-white rounded-xl p-4 flex justify-start items-center mb-2"
              key={`card-${index}`}
              onClick={() => onClickIssue(issue)}
            >
              <div className={`${issue.priority === 'Low' ? 'bg-amber-200' : 'bg-red-200'} p-4 rounded-lg w-24 flex flex-col items-center`}>
                <div className="text-2xl">🚨</div>
                <div className="text-gray-600 font-semibold text-sm">{issue.priority || 'Low'}</div>
              </div>
              <div className="ml-4 flex flex-col">
                <div className="flex">
                  <h2 className="font-semibold text-lg mr-2">{issue.title}</h2>
                  <div className="bg-green-300 p-1 px-2 text-gray-600 text-sm rounded-lg">{issue.keyword}</div>
                </div>
                <p className="text-gray-600 text-sm">2 hours ago</p>
              </div>
            </div>
          ))}

          <h1 className="font-semibold text-lg mb-4 mt-12">Unrelated issues</h1>

          {issues.filter(issue => !issue.isRelated).map((issue, index) => (
            <div
              className="w-full bg-white rounded-xl p-4 flex justify-start items-center mb-2"
              key={`unrelated-card-${index}`}
              onClick={() => onClickIssue(issue)}
            >
              <div className="bg-gray-100 p-4 rounded-lg w-24 flex flex-col items-center">
                <div className="text-2xl">🗑</div>
                <div className="text-gray-600 font-semibold text-sm">Unrelated</div>
              </div>
              <div className="ml-4 flex flex-col">
                <div className="flex">
                  <h2 className="font-semibold text-lg mr-2">{issue.title}</h2>
                  <div className="bg-green-300 p-1 px-2 text-gray-600 text-sm rounded-lg">{issue.keyword}</div>
                </div>
                <p className="text-gray-600 text-sm">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-3/6 pl-8">
          {selectedIssue && (
            <>
              <h1 className="font-semibold text-lg mb-4">Detail</h1>
              <div className="w-full bg-white rounded-xl p-8">
                <div className="flex">
                  {/* <div className="bg-gray-100 p-4 rounded-lg w-24 flex flex-col items-center">
                    <div className="text-2xl">🚨</div>
                    <div className={`text-gray-600 font-semibold text-sm`}>{selectedIssue.priority || 'Low'}</div>
                  </div> */}
                  <div className="ml-4 flex flex-col pt-2">
                    <h2 className="font-semibold text-2xl">{selectedIssue.title}</h2>
                    <p className="text-gray-600 font-semibold text-sm">From: {selectedIssue.email}</p>
                  </div>
                </div>

                <div className="mt-8 mb-8">
                  <h3 className="font-semibold text-gray-600 mb-2">Message:</h3>
                  <div className="bg-gray-100 p-6 rounded-lg text-sm">{selectedIssue.description}</div>
                </div>

                <div className="mb-20">
                  <div className='flex flex-row justify-between mb-2'>
                    <h3 className="font-semibold text-gray-600 mb-2">Forward to department:</h3>
                    <div className="bg-green-300 p-1 px-2 text-gray-600 text-sm rounded-lg">{selectedIssue.keyword}</div>
                  </div>

                  <select class="w-full border bg-white rounded px-3 py-2 outline-none">
                    <option class="py-1" selected={selectedIssue.keyword === 'General' ? true : false}>-------------</option>
                    <option class="py-1" selected={selectedIssue.keyword === 'Business' ? true : false}>Business (mp.business@gov.uk)</option>
                    <option class="py-1" selected={selectedIssue.keyword === 'Media' ? true : false}>Media (mp.media@gov.uk)</option>
                    <option class="py-1" selected={selectedIssue.keyword === 'Policy' ? true : false}>Policy (mp.policy@gov.uk)</option>
                    <option class="py-1" selected={selectedIssue.keyword === 'Tax issue' ? true : false}>Tax issue (mp.tax-issue@gov.uk)</option>
                    <option class="py-1" selected={selectedIssue.keyword === 'Transport' ? true : false}>Transport (mp.transport@gov.uk)</option>
                    <option class="py-1" selected={selectedIssue.keyword === 'Social care' ? true : false}>Social care (mp.social-care@gov.uk)</option>
                    <option class="py-1" selected={selectedIssue.keyword === 'Council work' ? true : false}>Council work (mp.council-work@gov.uk)</option>
                  </select>
                </div>

                <div className="mt-8 flex justify-center">
                  <button className="bg-gray-200 px-4 py-2 rounded-lg font-semibold text-gray-600 mr-2" onClick={() => navigate('/issues/reject')}>Reject</button>
                  <button className="bg-cyan-300 px-4 py-2 rounded-lg font-semibold" onClick={() => navigate('/issues/forward/success')}>Forward</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default IssuePage;
