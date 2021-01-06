const createTestCafe = require('testcafe');

(async () => {
  const testCafe = await createTestCafe('localhost', 1337, 1338);

  try {
    const runner = testCafe.createRunner();

    await runner
      .src('./test.js')
      .browsers('safari')
      .reporter([
        {
          name: 'json',
        },
      ])
      .screenshots({
        path: './data/screenshots',
        takeOnFails: true,
        pathPattern: '${DATE}-${TIME}-${RUN_ID}-${TEST_ID}.png', // Removing ${RUN_ID} fixes the issue.
      })
      .run({
        quarantineMode: true,
        skipJsErrors: true,
      });

  } finally {
    await testCafe.close();
  }
})();
