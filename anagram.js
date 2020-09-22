// Check if two strings are anagrams

///////////////////////////////////////////////////

     const checkforAnagram = (strOne, strTwo) => {
        if (strOne.length !== strTwo.length) {
          console.log("false");
          return false;
        }
        
        const createHashObject = (str) => {
          let obj = {};
          str.split("").map((element) => {
            let counter = 1;
            if (Object.keys(obj).includes(element)) {
              obj[element] = counter + 1;
            } else {
              obj[element] = counter;
            }
          });
          return obj;
        };

        let hashObj1 = createHashObject(strOne);
        let hashObj2 = createHashObject(strTwo);

        // console.log("HashObjectOne:", hashObj1, "HashObjectTwo:", hashObj2);

        for (let property in hashObj1) {
          if (hashObj1[property] !== hashObj2[property]) {
            console.log("false");
            return false;
          }
        }
        console.log("true");
        return true;
      };

      checkforAnagram("jelhhdlo", "ellhhdjo");
