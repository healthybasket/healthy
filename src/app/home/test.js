function simulate(entries) {
    // Write your code here
    for(i=0;i<entries.length;i++){
        const element = entries[i];
        const greaterThanLeft = true;
        const greaterThanRight = true;
        const TLeft = entries[i-2];
        if(entries[i-2]){
            greaterThanLeft = element > entries[i-2];

        }

        if(entries[i+3]){
            greaterThanRight = element > entries[i+3];
            
        }

        if(!greaterThanLeft || !greaterThanRight){
            entries[i] = 0;
        }

        
    }
    
    console(entries)
    return [];
  }
  
  const records = [19, 2, 0, 87, 1, 40, 80, 77, 77, 77, 77];
  console.log(simulate(records));
  // Expected output
  // [19, 0, 0, 87, 0, 0, 0, 77, 77, 0, 0]