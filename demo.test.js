// const firebase = require("@firebase/testing");
// const projectId = "example";
// const firebasePort = require("./firebase.json").emulators.firestore.port;
// const port = firebasePort ? firebasePort : 8080;
// const rules = fs.readFileSync("firestore.rules", "utf8");

// const firebase = require("@firebase/testing")
// db = firebase.initializeTestApp({ projectId: projectId }).firestore()
// firestore = firebase.firestore
const firebase = require("@firebase/testing");
const projectId = "example";
db = firebase.initializeTestApp({ projectId: projectId }).firestore();
firestore = firebase.firestore;

describe("DEMO TEST", () => {
  test("ADDD 1 + 1", async () => {
    const citiesRef = db.collection("cities");

    await citiesRef.doc("SF").set({
      name: "San Francisco",
      state: "CA",
      country: "USA",
      capital: false,
      population: 860000,
    });
    await citiesRef.doc("LA").set({
      name: "Los Angeles",
      state: "CA",
      country: "USA",
      capital: false,
      population: 3900000,
    });
    await citiesRef.doc("DC").set({
      name: "Washington, D.C.",
      state: null,
      country: "USA",
      capital: true,
      population: 680000,
    });
    await citiesRef.doc("TOK").set({
      name: "Tokyo",
      state: null,
      country: "Japan",
      capital: true,
      population: 9000000,
    });
    await citiesRef.doc("BJ").set({
      name: "Beijing",
      state: null,
      country: "China",
      capital: true,
      population: 21500000,
    });

    const cityRef = db.collection("cities").doc("SF");
    const doc = await cityRef.get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      console.log("Document data:", doc.data());
    }
    expect(doc.data().state).toBe('CA');
  });
});

describe("DEMO TEST", () => {
  test("ADDD 1 + 1", () => {
    expect(2).toBe(2);
  });
  test("ADDD 1 + 1", async () => {

    // await firebase.clearFirestoreData({ projectId });
    const docRef = db.collection("request_invite").doc("1");
    await docRef.set({
      created: firestore.Timestamp.now(),
      email: "email",
    });
    const doc = await docRef.get();
    if (doc.exists) { 
      console.log("doc exist", doc.data());
    }
    expect( doc.data().email).toBe('email');
  });
  test("ADDD 1 + 1", async () => {
    const citiesRef = db.collection("cities");

    await citiesRef.doc("SF").set({
      name: "San Francisco",
      state: "CA",
      country: "USA",
      capital: false,
      population: 860000,
    });
    
    const cityRef1 = db.collection("cities").doc("SF");
    const doc = await cityRef1.get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      console.log("Document data:", doc.data());
    }
    expect(doc.data().state).toBe('CA');
  });
});
