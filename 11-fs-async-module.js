const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return null;
  } else {
    const first = result;
    readFile("./content/second.txt", "utf8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        const second = result;
        writeFile(
          "./content/result-async.txt",
          `here is the result : ${first}, ${second}`,
          {flag: "a"},
          (err, result)=>{
            if(err){
                console.log(err)
                return
            }else{
                console.log(result)
            }
          }
        )
      }
    });
  }
});
