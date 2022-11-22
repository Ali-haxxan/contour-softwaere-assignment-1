
// Possible Solution one
const promisess = arg => {
  return new Promise((resolve, reject) => {
        try{
          if(arg != 2)
            return resolve({success: true, data: arg});
          else
            throw new Error(arg)
        }catch(e){
          return resolve({success: false, error: e, data: arg})
        }
  })
}

Promise.all([1,2,3,4,5].map(e => promisess(e))).then(d => console.log(d))

// Possible Solution two

function PromiseAllCatch(promises) {
    return Promise.all(promises.map(async m => {
      try {
        return await m;
      } catch(e) {
        if (e instanceof Error) return e;
        return new Error(e);
      }
    }));
  }
  
  
  async function promises() {
    const ret = await PromiseAllCatch([
      "this is fine",
      Error("oops"),
      "this is ok",
      Error("Still an error"),
      new Error("resolved Error"),
    ]);
    // console.log(ret);
    console.log(ret.map(r =>
      r instanceof Error ? "error" : "ok"
      ).join(" , ")); 
  }
  
  promises();