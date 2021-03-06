/*
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the MIT Licence.

  **NOTE**: This sample uses the preview of the next version (v7) of the @azure/service-bus package.
For samples using the current stable version (v1) of the package, please use the link below:
  https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/servicebus/service-bus/samples-v1

  This sample demonstrates how the receiveMessages() function can be used to receive Service Bus
  messages in a loop.

  Setup: Please run "sendMessages.ts" sample before running this to populate the queue/topic
*/
const { ServiceBusClient } = require("@azure/service-bus");
// Load the .env file if it exists
require("dotenv").config();
// Define connection string and related Service Bus entity names here
const connectionString = process.env.SERVICE_BUS_CONNECTION_STRING || "<connection string>";
const queueName = process.env.QUEUE_NAME || "<queue name>";

async function main() {
  const sbClient = new ServiceBusClient(connectionString);

  // If receiving from a subscription you can use the createReceiver(topicName, subscriptionName) overload
  // instead.
  const queueReceiver = sbClient.createReceiver(queueName);

  // To receive messages from sessions, use getSessionReceiver instead of getReceiver or look at
  // the sample in sessions.ts file
  try {
    for (let i = 0; i < 10; i++) {
      const messages = await queueReceiver.receiveMessages(1, {
        maxWaitTimeInMs: 5000
      });

      if (!messages.length) {
        console.log("No more messages to receive");
        break;
      }

      console.log(`Received message #${i}: ${messages[0].body}`);
      await queueReceiver.completeMessage(messages[0]);
    }
    await queueReceiver.close();
  } finally {
    await sbClient.close();
  }
}

main().catch((err) => {
  console.log("Error occurred: ", err);
  process.exit(1);
});
