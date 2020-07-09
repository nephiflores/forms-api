GET
  <PARAMETERS>:
  /PATH {':' denotes Params}: /user
  RESULT:[user}
  DESCRIPTION: Reads & returns all users and user info as an Array

POST
  <PARAMETERS>: 
	{
  	  “name”: “STRING”,
  	  “login”: “STRING”,
  	  “password”: “STRING”
	}
  /PATH {':' denotes Params}: /user
  RESULT: {Create user}
  DESCRIPTION: Creates a new registered user Returns the newly created user


PUT
  <PARAMETERS>: 
	{
  	  “name”: “STRING”,
  	  “login”: “STRING”,
  	  “password”: “STRING”
	}
  /PATH {':' denotes Params}:/user/{userID}
  RESULT: {Updated user}
  DESCRIPTION: Update a user via ID.  Returns a new registered user if it does not exist.

PATCH
  <PARAMETERS>: 
	{
  	  “name”: “STRING”,
  	  “login”: “STRING”,
  	  “password”: “STRING”
	}
  /PATH {':' denotes Params}:/user/{userID}
  RESULT: {Updated user}
  DESCRIPTION: Updates a specific value in a user via ID and returns that user. Reset forgoten password is done here.


DELETE
  <PARAMETERS>:
  /PATH {':' denotes Params}:/user/{userID}
  RESULT:{deleted user}
  DESCRIPTION: Deletes a user via ID and returns the user deleted.
