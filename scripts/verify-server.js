import http from "http";

function get(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve({ status: res.statusCode, data }));
      })
      .on("error", reject);
  });
}

async function test() {
  const home = await get("http://127.0.0.1:4321/");
  console.log("Homepage status:", home.status);
  console.log("Homepage contains 光速云:", home.data.includes("光速云"));
  console.log("Homepage contains AMM:", home.data.includes("AMM"));
  console.log("Homepage contains 147:", home.data.includes("147"));
  console.log(
    "Homepage contains FreeVPN/freevpn:",
    home.data.includes("FreeVPN") || home.data.includes("freevpn"),
  );

  const guangsu = await get("http://127.0.0.1:4321/artworks/guangsu-cloud");
  console.log("Guangsu page status:", guangsu.status);
  console.log(
    "Guangsu page contains affiliate link:",
    guangsu.data.includes("https://sahude.gsyvipaff.com/#/?code=keqgvT5Y"),
  );
  console.log(
    "Guangsu page contains nofollow sponsored:",
    guangsu.data.includes('rel="nofollow sponsored noopener"'),
  );
  console.log("Guangsu page contains AMM code:", guangsu.data.includes("AMM"));
  console.log("Guangsu page contains 斯诺克:", guangsu.data.includes("斯诺克"));

  const enHome = await get("http://127.0.0.1:4321/en/");
  console.log("EN Homepage status:", enHome.status);
  console.log(
    "EN Homepage contains Guangsu Cloud:",
    enHome.data.includes("Guangsu Cloud"),
  );
}

test().catch(console.error);
