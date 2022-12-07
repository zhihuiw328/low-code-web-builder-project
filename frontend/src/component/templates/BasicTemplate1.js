import React, { useState } from 'react';

function BasicTemplate1() {
  const greeting = 'Hello Function Component!';

  return (
    
    <>
        <View style={{
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column"
            }}>
    <div>
        <h1>HELLO WORLD</h1>
        <p>My first paragraph</p>
        <h2>Subeading 1</h2>
        <p>My first paragraph</p>
        <h2>Subeading 1</h2>
        <p>My first paragraph</p>
    </div>
    </View>
    
    </>
  );
}

export default BasicTemplate1;