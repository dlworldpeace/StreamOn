async function connectionManager(event, context) {

  if (event.requestContext.eventType === "CONNECT") {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Connected!',
          input: event,
        },
        null,
        2
      ),
    };
  } else if (event.requestContext.eventType === "DISCONNECT") {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Disconnected!',
          input: event,
        },
        null,
        2
      ),
    };
  }
}

module.exports = {
  connectionManager
};
