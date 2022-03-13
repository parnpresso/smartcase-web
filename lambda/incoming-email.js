const AWS = require('aws-sdk');

AWS.config.update({ dynamodb: { region: 'ap-southeast-1' }});
const dynamoDB = new AWS.DynamoDB.DocumentClient();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const createIssue = async (emailAddress, title, content) => {
  let isRelated = false;
  let priority = '';

  if (content.includes('angry')) {
    isRelated = true;
    priority = 'Unrelated'
  }

let mediaIssues = [
"BBC",
"Sky News",
"Radio",
"Interview",
"Channel 4",
"Comment on",
"The Times",
"The Sunday Times",
"Financial Times",
"The Guardian",
"The Daily Telegraph",
"The Sunday Telegraph",
"The Independent",
"Daily Mail",
"Daily Express",
"The Sun",
"Daily Mirror",
"International Affairs",
"National Radio",
"National Tv",
"Studio",
"Al Jazeera"
]
let policyIssues = [
"bill",
"section",
"freedom",
"law",
"commercial law",
"legislation",
"freedom of speech",
"freedom from arrest on civil matters",
"freedom of access to the sovereign",
"the most favourable construction should be placed on all the Houses's proceedings",
"freedom",
"new bill",
"wa"
  ]
let taxIssues = [
"national Insurance",
"HMRC",
"tax",
"income Tax",
"corporation tax",
"benefits"

  ]
  let transportIssues = [
    "bus",
    "train",
    "tube",
    "tram",
    "car",
    "road",
    "oil",
    "gas",
    "petrol",
    "diesel"
      ]
    let socialCareIssues = [
    "care",
    "mental health",
    "wellbeing",
    "poverty",
    "financial support",
    "financial assistance",
    "adult social care",
    "safety",
    "benefits",
    "expenses",
    "help",
    "universal credit"

      ]
      let councilWorkIssues =[
        "rubbish collection",
        "recycling",
        "Council Tax collections",
        "housing",
        "planning applications",
        "education",
        "transport",
        "planning",
        "fire and public safety",
        "social care",
        "libraries",
        "waste management",
        "trading standards",
        "allotments",
        "public clocks",
        "bus shelters",
        "community centres",
        "play areas and play equipment",
        "grants to help local organisations",
        "consultation on neighbourhood planning",
        "litter",
        "graffiti",
        "fly posting",
        "dog offences"
        ]


  let businessIssues = [
    "Contract",
    "big Money",
    "retail",
    "startups",
    "project",
    "corporation",
    "cooperative",
    "franchises",
    "company",
    "agriculture",
    "accounting",
    "manufacturing",
    "finance",
    "capital",
    "trade",
    "franchise",
  ]

  const compareText = (contentList, keywords) => {
    let isKeywordFound = false;
    contentList.map(word => {
      keywords.map(keyword => {
        if (word === keyword) { isKeywordFound = true; }
      })
    });

    return isKeywordFound;
  }

  let keyword = '';
  const contentList = content.split(' ');
  if (compareText(contentList, businessIssues)) { keyword = 'Business' }
  else if (compareText(contentList, mediaIssues)) { keyword = 'Media' }
  else if (compareText(contentList, policyIssues)) { keyword = 'Policy' }
  else if (compareText(contentList, taxIssues)) { keyword = 'Tax' }
  else if (compareText(contentList, transportIssues)) { keyword = 'Transport' }
  else if (compareText(contentList, socialCareIssues)) { keyword = 'Social care' }
  else if (compareText(contentList, councilWorkIssues)) { keyword = 'Council work' }
  else { keyword = 'General' }
  let postCodeMP = ["SS0 0EH",
  "SS0 0ET",
  "SS0 0FZ",
  "SS0 0GG",
  "SS0 0GS",
  "SS0 0QU",
  "SS0 0RF",
  "SS0 0SQ",
  "SS0 0TH",
  "SS0 0TX",
  "SS0 0WA",
  "SS0 0WB",
  "SS0 0WG",
]
var postCode =  content.split(", ").map(s => s.trim().match(/([A-Za-z]{1,2}\d{1,2})(\s?(\d?\w{2}))?/)).filter(e => e)[0][0]

function comparePostCode(postCode, postCodeMP) {
    let postCodeFound =false;
    for(let i = 0; i < postCodeMP.length; i++)
    {
        if (postCode == postCodeMP[i]) {
            postCodeFound = true;
        }
    }

    return postCodeFound;
    }
  if (comparePostCode(postCode,postCodeMP)) {
    isRelated = true;
  }
  if (keyword == 'Tax' || keyword == 'Transport' || keyword == 'Social care' || keyword == 'Media')
  {
    priority = "High";
  }
  else { priority = "Low"}

  try {
    const params = {
      TableName: `smartcase-issues`,
      Item:{
        "id": getRandomInt(999999).toString(),
        "email": emailAddress,
        "title": title,
        "description": content,
        "isRelated": isRelated,
        "keyword": keyword,
        "priority": priority,
        'timestamp': new Date().toISOString(),
      }
    };
    await dynamoDB.put(params).promise();
    return keyword
  } catch (err) {
    console.log(err);
  }
}

exports.handler = async (event) => {
    const body = JSON.parse(event.body);
    const { emailAddress, subject, content } = body;

    // Save issue to database
    const keyword = await createIssue(emailAddress, subject, content);

    const response = {
        statusCode: 200,
        body: JSON.stringify({ keyword: keyword }),
    };
    return response;
};
